import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';

export default function RootLayout() {
  return (
    <PaperProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </PaperProvider>
  );
}
