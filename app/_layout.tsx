import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { en, registerTranslation } from 'react-native-paper-dates';

import { AlarmProvider } from '@/hooks/useAlarms';

registerTranslation('en', en);

const RootLayout = () => {
  return (
    <PaperProvider>
      <AlarmProvider>
        <Stack screenOptions={globalOptions}>
          <Stack.Screen name="index" />
          <Stack.Screen name="alarm/[id]" />
          <Stack.Screen name="settings" options={settingsOptions} />
        </Stack>
      </AlarmProvider>
    </PaperProvider>
  );
};

const globalOptions = {
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTintColor: 'white',
  headerShown: false,
};

const settingsOptions = {
  title: 'Settings',
  headerShown: true,
};

export default RootLayout;
