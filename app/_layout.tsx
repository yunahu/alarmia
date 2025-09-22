import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Stack } from 'expo-router';

const RootLayout = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.dark}>
      <Stack />
    </ApplicationProvider>
  );
};

export default RootLayout;
