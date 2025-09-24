import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const EditAlarmScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>alarm {id} is here</Text>
    </View>
  );
};

export default EditAlarmScreen;
