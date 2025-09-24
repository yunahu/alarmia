import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { Button, View } from 'react-native';
import { Text } from 'react-native-paper';

const NewAlarmScreen = () => {
  const [date, setDate] = useState<Date>(new Date(1598051730000));

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) setDate(selectedDate);
  };

  const showMode = (currentMode: 'date' | 'time') => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <Text>new alarm screen</Text>
      <Button onPress={showDatepicker} title="Show date picker!" />
      <Button onPress={showTimepicker} title="Show time picker!" />
      <Text>selected: {date.toLocaleString()}</Text>
    </View>
  );
};

export default NewAlarmScreen;
