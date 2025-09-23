import Feather from '@expo/vector-icons/Feather';
import { Pressable, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

interface MoreIconProps {
  onPress: () => void;
}

const MoreButton = (props: MoreIconProps) => {
  return (
    <Pressable style={styles.container} {...props}>
      <Text>
        <Feather name="more-horizontal" style={styles.icon} />
      </Text>
    </Pressable>
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

export default MoreButton;
