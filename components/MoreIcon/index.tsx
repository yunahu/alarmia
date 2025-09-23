import Feather from '@expo/vector-icons/Feather';
import { Text } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';

const MoreIcon = () => {
  return (
    <View style={styles.container}>
      <Text>
        <Feather name="more-horizontal" style={styles.icon} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 24,
  },
});

export default MoreIcon;
