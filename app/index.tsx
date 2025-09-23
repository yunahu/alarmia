import { Layout } from '@ui-kitten/components';
import { ScrollView, StyleSheet, View } from 'react-native';

import AlarmCard from '@/components/Alarm';
import OverflowMenu from '@/components/HomeOverflowMenu';
import MoreButton from '@/components/MoreButton';
import NextAlarm from '@/components/NextAlarm';
import alarms from '@/data/alarms';

const HomeScreen = () => {
  return (
    <Layout style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <NextAlarm />
        <View style={styles.moreIconContainer}>
          <MoreButton onPress={() => {}}></MoreButton>
        </View>
        <OverflowMenu />
        <View style={styles.alarmContainer}>
          {alarms.map((x) => (
            <AlarmCard key={x.id} alarm={x} />
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  moreIconContainer: {
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
