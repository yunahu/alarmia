import { Layout, LayoutProps, Text } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

const NextAlarm = (props: LayoutProps) => {
  return (
    <Layout style={styles.container} {...props}>
      <Text style={styles.message}>Alarm in 2 hr. 3 minutes</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 10,
  },
  message: {
    fontSize: 24,
  },
});

export default NextAlarm;
