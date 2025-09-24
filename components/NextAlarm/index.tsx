import { StyleSheet, View, ViewProps } from 'react-native';
import { Text } from 'react-native-paper';

const NextAlarm = (props: ViewProps) => {
  return (
    <View style={styles.container} {...props}>
      <Text style={styles.message}>Alarm in 2 hr. 3 minutes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30,
    marginHorizontal: 20,
  },
  message: {
    fontSize: 24,
  },
});

export default NextAlarm;
