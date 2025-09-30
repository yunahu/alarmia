import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-paper';

import AddButton from '@/components/AddButton';
import AlarmCard from '@/components/Alarm';
import HomeMenu from '@/components/HomeMenu';
import NextAlarm from '@/components/NextAlarm';
import useAlarms from '@/hooks/useAlarms';

const HomeScreen = () => {
  const { alarms } = useAlarms();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
      >
        <NextAlarm />
        <View style={styles.homeMenuContainer}>
          <HomeMenu />
        </View>
        <Divider style={styles.divider} />
        {alarms.map((x) => (
          <AlarmCard key={x.id} alarm={x} />
        ))}
      </ScrollView>
      <AddButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 30,
    paddingBottom: 50,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 110,
  },
  homeMenuContainer: {
    display: 'flex',
    alignItems: 'flex-end',
    backgroundColor: 'black',
    paddingRight: 20,
  },
  divider: {
    marginHorizontal: 20,
    marginTop: 10,
  },
});

export default HomeScreen;
