import { Layout, LayoutProps, Text, Toggle } from '@ui-kitten/components';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import MoreButton from '@/components/MoreButton';

export interface Alarm {
	id: number;
  description?: string;
  time24: string;
  activeDays: string;
}

interface AlarmCardProps extends LayoutProps {
  alarm: Alarm;
}

const AlarmCard = ({ alarm, ...rest }: AlarmCardProps) => {
  const [checked, setChecked] = useState(false);

  const onCheckedChange = (isChecked: boolean): void => {
    setChecked(isChecked);
  };

  return (
    <Layout style={styles.container} {...rest}>
      <View style={styles.leftContainer}>
        {alarm.description && <Text style={styles.description}>{alarm.description}</Text>}
        <Text style={styles.time}>{alarm.time24}</Text>
        <Text style={styles.activeDays}>{alarm.activeDays}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Toggle checked={checked} onChange={onCheckedChange} />
        <MoreButton onPress={()=>{}} />
      </View>
    </Layout>
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
