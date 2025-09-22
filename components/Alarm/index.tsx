import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Theme, useTheme } from '@/theme/theme';

const Alarm = () => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Testingu</Text>
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      margin: 50,
      padding: 10,
      borderRadius: 10,
      backgroundColor: theme.colors.darkGrey,
    },
    text: {
      color: 'white',
    },
  });

export default Alarm;
