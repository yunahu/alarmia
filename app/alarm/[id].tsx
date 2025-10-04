import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, Text, TextInput } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';

import RepeatDaysPicker, {
  DEFAULT_DAYS_ALL_ACTIVE,
  RepeatDays,
} from '@/components/RepeatDaysPicker';
import { timeStrToObj, toTwoDigits } from '@/helpers/helpers';
import useAlarms from '@/hooks/useAlarms';

export interface Time24 {
  hours: number; // 0-23
  minutes: number;
}

const getNow = () => {
  const now = new Date();
  return { hours: now.getHours(), minutes: now.getMinutes() };
};

const AlarmDetailScreen = () => {
  const { id } = useLocalSearchParams();
  const { areLoading, createAlarm, getAlarm, updateAlarm } = useAlarms();
  const [description, setDescription] = useState<string | undefined>();
  const [isPickerVisible, setIsPickerVisible] = useState<boolean>(id === 'new');
  const [repeatDays, setRepeatDays] = useState<RepeatDays>(
    DEFAULT_DAYS_ALL_ACTIVE
  );
  const [time24, setTime24] = useState<Time24>(getNow());
  const [isLoading, setIsLoading] = useState<boolean>(id !== 'new');
  const [isChanged, setIsChanged] = useState<boolean>(false);
  const router = useRouter();

  const saveAndClosePicker = (time24: Time24) => {
    setIsChanged(true);
    setTime24(time24);
    setIsPickerVisible(false);
  };

  const handleCancel = () => {
    if (isChanged) console.log('unsaved'); // TODO:
    router.back();
  };

  useEffect(() => {
    const run = async () => {
      if (typeof id !== 'string') throw new Error();
      if (areLoading) return;
      if (id === 'new') return;

      const target = getAlarm(id);
      if (!target) throw new Error('Alarm not found');
      if (target.description) setDescription(target.description);
      setRepeatDays(target.repeatDays);
      setTime24(timeStrToObj(target.time24));

      setIsLoading(false);
    };

    run();
  }, [id, areLoading, getAlarm]);

  const saveAndGoBack = async () => {
    try {
      if (id === 'new') {
        await createAlarm({
          description,
          time24: `${toTwoDigits(time24.hours)}:${toTwoDigits(time24.minutes)}`,
          repeatDays,
          isOn: true,
        });
      } else {
        if (typeof id === 'string') {
          if (!isChanged) return;
          const properties = {
            description,
            time24: `${toTwoDigits(time24.hours)}:${toTwoDigits(
              time24.minutes
            )}`,
            repeatDays,
            isOn: true,
          };
          await updateAlarm(id, properties);
        }
      }

      router.back();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator animating={true} size="large" />
      ) : (
        <View style={styles.innerContainer}>
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            showsVerticalScrollIndicator={false}
          >
            <Pressable onPress={() => setIsPickerVisible(true)}>
              <Text style={styles.time}>
                {toTwoDigits(time24.hours)}:{toTwoDigits(time24.minutes)}
              </Text>
            </Pressable>
            <Pressable onPress={() => setIsPickerVisible(true)}>
              <Text>EDIT TIME</Text>
            </Pressable>
            <RepeatDaysPicker
              style={styles.daysPicker}
              repeatDays={repeatDays}
              setRepeatDays={setRepeatDays}
              setIsChanged={setIsChanged}
            />
            <TextInput
              style={styles.description}
              value={description}
              onChangeText={(newDescription) => {
                setIsChanged(true);
                setDescription(newDescription);
              }}
            />
            <View style={styles.cancelAndSave}>
              <Button style={styles.buttons} onPress={handleCancel}>
                CANCEL
              </Button>
              <Button style={styles.buttons} onPress={saveAndGoBack}>
                SAVE
              </Button>
            </View>
          </ScrollView>
          <TimePickerModal
            visible={isPickerVisible}
            onDismiss={() => setIsPickerVisible(false)}
            onConfirm={saveAndClosePicker}
            hours={time24.hours}
            minutes={time24.minutes}
            use24HourClock
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 50,
  },
  contentContainer: {
    flexGrow: 1,
    paddingTop: 50,
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  time: {
    fontSize: 80,
  },
  daysPicker: {
    marginTop: 25,
  },
  description: {
    width: '100%',
    height: 30,
    marginTop: 30,
    backgroundColor: 'transparent',
  },
  cancelAndSave: {
    marginVertical: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttons: {
    width: '50%',
  },
});

export default AlarmDetailScreen;
