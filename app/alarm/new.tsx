import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';

import RepeatDaysPicker, {
  DEFAULT_DAYS,
  RepeatDays,
} from '@/components/RepeatDaysPicker';

interface Time24 {
  hours: number;
  minutes: number;
}

const getNow = (): Time24 => {
  const now = new Date();
  return { hours: now.getHours(), minutes: now.getMinutes() };
};

const NewAlarmScreen = () => {
  const [visible, setVisible] = useState(true);
  const [repeatDays, setRepeatDays] = useState<RepeatDays>(DEFAULT_DAYS);
  const [time, setTime] = useState<Time24>(getNow());
  const [description, setDescription] = useState<string | undefined>();
  const router = useRouter();
  const onConfirm = (time24: Time24) => {
    setTime(time24);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Pressable onPress={() => setVisible(true)}>
          <Text style={styles.time}>
            {time.hours.toString().padStart(2, '0')}:
            {time.minutes.toString().padStart(2, '0')}
          </Text>
        </Pressable>
        <Pressable onPress={() => setVisible(true)}>
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
          <Button style={styles.buttons}>SAVE</Button>
        </View>
      </ScrollView>
      <TimePickerModal
        visible={visible}
        onDismiss={() => setVisible(false)}
        onConfirm={onConfirm}
        hours={time.hours}
        minutes={time.minutes}
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
