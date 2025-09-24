import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const AddButton = () => {
  const router = useRouter();

  return (
    <FAB
      icon="plus"
      style={styles.fab}
      onPress={() => router.navigate('/alarm/new')}
    />
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 100,
    right: 20,
  },
});

export default AddButton;
