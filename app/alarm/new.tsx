import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
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
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState<Time24>(getNow());
  const onConfirm = (time24: Time24) => {
    setTime(time24);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text>
        {time.hours}:{time.minutes}
      </Text>
      <Button onPress={() => setVisible(true)} uppercase={false}>
        Edit time
      </Button>
      <TimePickerModal
        visible={visible}
        onDismiss={() => setVisible(false)}
        onConfirm={onConfirm}
        hours={time.hours}
        minutes={time.minutes}
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
});

export default NewAlarmScreen;
