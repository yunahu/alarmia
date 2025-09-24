import { useState } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Switch, Text } from 'react-native-paper';

import AlarmMenu from './components/AlarmMenu';

export interface Alarm {
  id: number;
  description?: string;
  time24: string;
  activeDays: string;
}

interface AlarmCardProps extends ViewProps {
  alarm: Alarm;
}

const AlarmCard = ({ alarm, ...rest }: AlarmCardProps) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <View style={styles.container} {...rest}>
      <View style={styles.leftContainer}>
        {alarm.description && (
          <Text style={styles.description}>{alarm.description}</Text>
        )}
        <Text style={styles.time}>{alarm.time24}</Text>
        <Text style={styles.activeDays}>{alarm.activeDays}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Switch value={isOn} onValueChange={() => setIsOn((x) => !x)} />
        <AlarmMenu alarm={alarm} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 20,
    backgroundColor: 'grey',
    borderRadius: 10,
    flexDirection: 'row',
    gap: 20,
  },
  leftContainer: {
    flex: 1,
  },
  activeDays: {
    fontSize: 14,
  },
  time: {
    fontSize: 25,
  },
  description: {
    fontSize: 16,
  },
  rightContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
});

export default AlarmCard;
