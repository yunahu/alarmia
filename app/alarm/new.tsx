import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
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
  },
  time: {
    fontSize: 80,
  },
  daysPicker: {
    marginTop: 25,
  },
});

export default NewAlarmScreen;
