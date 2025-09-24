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
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="alarm/new" />
        <Stack.Screen name="alarm/[id]" />
        <Stack.Screen
          name="settings"
          options={{ headerShown: true, title: 'Settings' }}
        />
      </Stack>
    </PaperProvider>
  );
}
