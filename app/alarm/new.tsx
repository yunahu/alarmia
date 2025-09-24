import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';

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
  const [time, setTime] = useState<Time24>(getNow());
  const onConfirm = (time24: Time24) => {
    setTime(time24);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => setVisible(true)}>
        <Text style={styles.time}>
          {time.hours.toString().padStart(2, '0')}:
          {time.minutes.toString().padStart(2, '0')}
        </Text>
      </Pressable>
      <Button onPress={() => setVisible(true)} uppercase={false}>
        Edit time
      </Button>
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
    backgroundColor: 'black',
    paddingTop: 30,
    paddingBottom: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 80,
  },
});

export default NewAlarmScreen;
