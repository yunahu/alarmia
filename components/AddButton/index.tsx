import AntDesign from '@expo/vector-icons/AntDesign';
import { Pressable, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

interface AddButtonProps {
  onPress: () => void;
}

const AddButton = (props: AddButtonProps) => {
  return (
    <Pressable style={styles.container} {...props}>
      <Text>
        <AntDesign name="plus" style={styles.icon} />
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: 100,
    right: 30,
    borderRadius: 50,
    backgroundColor: '#222',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: 'black',
    borderColor: '#202020',
    borderWidth: 0.5,
  },
  icon: {
    fontSize: 24,
    borderColor: 'blue',
    borderWidth: 1,
  },
});

export default AddButton;
