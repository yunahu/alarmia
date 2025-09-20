import { useMemo } from 'react';
import { Button, ScrollView } from 'react-native';

import { createGlobalStyles } from '@/theme/globalStyles';
import { useTheme } from '@/theme/theme';

const Settings = () => {
  const { theme, updateTheme } = useTheme();
  const globalStyles = useMemo(() => createGlobalStyles(theme), [theme]);

  return (
    <ScrollView style={[globalStyles.background]}>
      <Button
        title="blue theme"
        onPress={() => updateTheme({ colorType: 'blue' })}
        color={theme.colors.blue}
      />
      <Button
        title="green theme"
        onPress={() => updateTheme({ colorType: 'green' })}
        color={theme.colors.green}
      />
      <Button
        title="violet theme"
        onPress={() => updateTheme({ colorType: 'violet' })}
        color={theme.colors.violet}
      />
    </ScrollView>
  );
};

export default Settings;
