import { StyleSheet, View } from 'react-native';

import HomeMenu from '@/components/HomeMenu';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HomeMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
