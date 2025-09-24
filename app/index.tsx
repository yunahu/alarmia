import { ScrollView, StyleSheet, View } from 'react-native';

import AlarmCard from '@/components/Alarm';
import HomeMenu from '@/components/HomeMenu';
import NextAlarm from '@/components/NextAlarm';
import alarms from '@/data/alarms';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <NextAlarm />
        <View style={styles.homeMenuContainer}>
          <HomeMenu />
        </View>
        <View style={styles.alarmContainer}>
          {alarms.map((x) => (
            <AlarmCard key={x.id} alarm={x} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  homeMenuContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    paddingBottom: 20,
  },
  alarmContainer: {
    gap: 30,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
});

export default HomeScreen;
