import { Href, useRouter } from 'expo-router';
import * as React from 'react';
import { GestureResponderEvent } from 'react-native';
import { MenuItemProps, Menu as PaperMenu } from 'react-native-paper';

import MoreButton from '@/components/MoreButton';

export interface MenuItem extends MenuItemProps {
  key: string;
  href?: Href;
  onPress: (e: GestureResponderEvent) => void;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu = ({ items }: MenuProps) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const router = useRouter();

  return (
    <PaperMenu
      visible={visible}
      onDismiss={closeMenu}
      anchor={<MoreButton onPress={openMenu} />}
    >
      {items.map(({ key, href, onPress, ...rest }) => {
        return (
          <PaperMenu.Item
            key={key}
            onPress={(e: GestureResponderEvent) => {
              if (href) router.navigate(href);
              else onPress(e);
              setVisible(false);
            }}
            {...rest}
          />
        );
      })}
    </PaperMenu>
  );
};

export default Menu;
