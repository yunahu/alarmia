import { Stack } from 'expo-router';

import { ThemeProvider, useTheme } from '@/theme/theme';

const RootLayout = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.black,
          },
          headerTintColor: theme.colors.white,
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="settings" />
      </Stack>
    </ThemeProvider>
  );
};

export default RootLayout;
