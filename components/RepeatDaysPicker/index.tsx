import { Dispatch, SetStateAction } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import DayToggleButton from './DayToggleButton';

export const DEFAULT_DAYS_ALL_ACTIVE = {
  sun: true,
  mon: true,
  tue: true,
  wed: true,
  thu: true,
  fri: true,
  sat: true,
};

export type RepeatDays = typeof DEFAULT_DAYS_ALL_ACTIVE;

export type DayOfWeek = keyof RepeatDays;

export interface RepeatDaysPickerProps extends ViewProps {
  repeatDays: RepeatDays;
  setRepeatDays: Dispatch<SetStateAction<RepeatDays>>;
  setIsChanged: Dispatch<SetStateAction<boolean>>;
}

export const DAYS_OF_WEEK: DayOfWeek[] = [
  'sun',
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sat',
];

const RepeatDaysPicker = ({
  repeatDays,
  setRepeatDays,
  setIsChanged,
  style,
}: RepeatDaysPickerProps) => {
  return (
    <View style={[styles.container, style]}>
      {DAYS_OF_WEEK.map((day) => (
        <DayToggleButton
          key={day}
          day={day}
          repeatDays={repeatDays}
          setRepeatDays={setRepeatDays}
          setIsChanged={setIsChanged}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
});

export default RepeatDaysPicker;
