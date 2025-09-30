import * as Crypto from 'expo-crypto';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';

import RepeatDaysPicker, {
  DEFAULT_DAYS_ALL_ACTIVE,
  RepeatDays,
} from '@/components/RepeatDaysPicker';
import { toTwoDigits } from '@/helpers/helpers';
import useAlarms from '@/hooks/useAlarms';

interface Time24 {
  hours: number; // 0-23
  minutes: number;
}

const getNow = (): Time24 => {
  const now = new Date();
  return { hours: now.getHours(), minutes: now.getMinutes() };
};

const NewAlarmScreen = () => {
  const [description, setDescription] = useState<string | undefined>();
  const [isPickerVisible, setIsPickerVisible] = useState(true);
  const [repeatDays, setRepeatDays] = useState<RepeatDays>(
    DEFAULT_DAYS_ALL_ACTIVE
  );
  const [time24, setTime24] = useState<Time24>(getNow());
  const { createAlarm } = useAlarms();
  const router = useRouter();

  const saveAndClose = (time24: Time24) => {
    setTime24(time24);
    setIsPickerVisible(false);
  };

  const saveAndGoBack = async () => {
    try {
      await createAlarm({
        id: Crypto.randomUUID(),
        description,
        time24: `${toTwoDigits(time24.hours)}:${toTwoDigits(time24.minutes)}`,
        repeatDays,
      });
    } catch (err) {
      console.error(err);
    } finally {
      router.back();
    }
  };

  return (
    <View style={styles.container}>
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
        />
        <TextInput
          style={styles.description}
          value={description}
          onChangeText={(newDescription) => setDescription(newDescription)}
        />
        <View style={styles.cancelAndSave}>
          <Button style={styles.buttons} onPress={router.back}>
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
        onConfirm={saveAndClose}
        hours={time24.hours}
        minutes={time24.minutes}
        use24HourClock
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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

export default NewAlarmScreen;
