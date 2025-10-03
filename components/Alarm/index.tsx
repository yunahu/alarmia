import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Divider, Switch, Text } from 'react-native-paper';

import { firstLetterCapitalized } from '@/helpers/helpers';
import useAlarms from '@/hooks/useAlarms';
import { DAYS_OF_WEEK, RepeatDays } from '../RepeatDaysPicker';
import AlarmMenu from './components/AlarmMenu';

export interface Alarm {
  id: string;
  description?: string;
  time24: string;
  repeatDays: RepeatDays;
  isOn: boolean;
}

interface AlarmCardProps extends ViewProps {
  alarm: Alarm;
}

const AlarmCard = ({ alarm, ...rest }: AlarmCardProps) => {
  const [on, setOn] = useState<boolean>(alarm.isOn);
  const { updateAlarm } = useAlarms();

  return (
    <Link
      href={{
        pathname: '/alarm/[id]',
        params: { id: alarm.id },
      }}
    >
      <View style={styles.wrapper}>
        <View style={styles.container} {...rest}>
          <View style={styles.leftContainer}>
            {alarm.description && (
              <Text style={styles.description}>{alarm.description}</Text>
            )}
            <Text style={styles.time}>{alarm.time24}</Text>
            <Text style={styles.repeatedDays}>
              {DAYS_OF_WEEK.map((day) => (
                <Text
                  key={day}
                  style={[
                    styles.days,
                    alarm.repeatDays[day] ? styles.repeatedDays : {},
                  ]}
                >
                  {firstLetterCapitalized(day)}
                </Text>
              ))}
            </Text>
          </View>
          <View style={styles.rightContainer}>
            <Switch
              value={on}
              onValueChange={(x) => {
                setOn(x);
                updateAlarm(alarm.id, { isOn: x });
              }}
            />
            <AlarmMenu alarm={alarm} />
          </View>
        </View>
        <Divider style={styles.divider} />
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  leftContainer: {
    flex: 1,
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  days: {
    fontSize: 14,
    letterSpacing: 8,
  },
  repeatedDays: {
    color: 'violet',
  },
  time: {
    fontSize: 30,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  rightContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 20,
  },
  divider: {
    marginHorizontal: 20,
  },
});

export default AlarmCard;
