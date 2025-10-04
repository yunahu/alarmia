import { Pressable, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

import { firstLetterCapitalized } from '@/helpers/helpers';
import { DayOfWeek, RepeatDaysPickerProps } from '..';

interface DayToggleButtonProps extends RepeatDaysPickerProps {
  day: DayOfWeek;
}

const DayToggleButton = ({
  day,
  repeatDays,
  setRepeatDays,
  setIsChanged,
}: DayToggleButtonProps) => {
  const toggle = () => {
    setIsChanged(true);
    setRepeatDays((prev) => ({
      ...prev,
      [day]: !prev[day],
    }));
  };

  return (
    <Pressable
      style={[styles.container, repeatDays[day] ? styles.active : {}]}
      onPress={toggle}
    >
      <Text>{firstLetterCapitalized(day)}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  active: {
    backgroundColor: '#3b113f',
  },
});

export default DayToggleButton;
