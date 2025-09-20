import { useRouter } from 'expo-router';
import { useMemo } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import { createGlobalStyles } from '@/theme/globalStyles';
import { Theme, useTheme } from '@/theme/theme';

const Index = () => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const globalStyles = useMemo(() => createGlobalStyles(theme), [theme]);
  const router = useRouter();

  return (
    <ScrollView style={globalStyles.background}>
      <View style={styles.container}>
        <Text style={styles.nextAlarmText}>All alarms are off</Text>
      </View>
      <Button
        title="Go to Settings"
        onPress={() => router.navigate('/settings')}
      ></Button>
    </ScrollView>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    nextAlarmText: {
      margin: 10,
      fontSize: 25,
      color: theme.colors.primary,
    },
  });

export default Index;
