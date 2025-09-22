import { useRouter } from 'expo-router';
import { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

import { createGlobalStyles } from '@/theme/globalStyles';
import { Theme, useTheme } from '@/theme/theme';

const HomeDropdown = () => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const globalStyles = useMemo(() => createGlobalStyles(theme), [theme]);
  const router = useRouter();

  const items = [
    { title: 'Settings', onPress: () => router.navigate('/settings') },
  ];

  return (
    <View />
    //   {items.map((item) => (
    //     <MenuItem
    //       key={item.title}
    //       textValue={item.title}
    //       onPress={item.onPress}
    //     >
    //     </MenuItem>
    //   ))}
    // </Menu>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    iconContainer: {
      width: 30,
      height: 30,
      borderColor: 'red',
      borderWidth: 1,
      margin: 10,
    },
    moreIcon: {
      color: theme.colors.white,
      fontSize: 24,
      height: 24,
    },
  });

export default HomeDropdown;
