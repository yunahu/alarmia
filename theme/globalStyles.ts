import { StyleSheet } from 'react-native';

import { Theme } from './theme';

export const createGlobalStyles = (theme: Theme) =>
  StyleSheet.create({
    background: {
      backgroundColor: theme.colors.black,
    },
  });
