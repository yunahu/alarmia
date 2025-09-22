import { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import HomeDropdown from '@/components/HomeDropdown';
import { createGlobalStyles } from '@/theme/globalStyles';
import { Theme, useTheme } from '@/theme/theme';

const Index = () => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const globalStyles = useMemo(() => createGlobalStyles(theme), [theme]);

  return (
    <ScrollView style={globalStyles.background}>
      <View style={styles.container}>
        <Text style={styles.nextAlarmText}>All alarms are off</Text>
        <HomeDropdown />
      </View>
    </ScrollView>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
    },
    nextAlarmText: {
      margin: 10,
      fontSize: 25,
      color: theme.colors.primary,
      borderColor: 'red',
      borderWidth: 1,
    },
  });

export default Index;
