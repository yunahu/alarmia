import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const AddButton = () => (
  <FAB icon="plus" style={styles.fab} onPress={() => alert('Pressed')} />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 100,
    right: 20,
  },
});

export default AddButton;
