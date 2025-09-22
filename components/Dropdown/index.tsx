import { useMemo } from 'react';
import { Pressable, StyleSheet, View, ViewProps } from 'react-native';

import { Theme, useTheme } from '@/theme/theme';
import ThemedText from '../ThemedText';

interface DropdownItem {
  title: string;
  onPress: () => void;
}

interface DropdownProps extends ViewProps {
  items: DropdownItem[];
}

const Dropdown = ({ items }: DropdownProps) => {
  const { theme } = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <View style={styles.dropdownMenu}>
        {items.map((item) => (
          <Pressable key={item.title} onPress={item.onPress}>
            <ThemedText>{item.title}</ThemedText>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      borderColor: 'red',
      borderWidth: 1,
    },
    dropdownMenu: {
      borderColor: 'blue',
      borderWidth: 1,
    },
  });

export default Dropdown;
