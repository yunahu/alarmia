import { useMemo } from 'react';
import { Text, TextProps } from 'react-native';

import { createGlobalStyles } from '@/theme/globalStyles';
import { useTheme } from '@/theme/theme';

const ThemedText = (props: TextProps) => {
  const { theme } = useTheme();
  const globalStyles = useMemo(() => createGlobalStyles(theme), [theme]);

  return <Text style={[globalStyles.text]} {...props} />;
};

export default ThemedText;
