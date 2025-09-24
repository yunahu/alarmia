import { Href, useRouter } from 'expo-router';
import * as React from 'react';
import { MenuItemProps, Menu as PaperMenu } from 'react-native-paper';

import MoreButton from '@/components/MoreButton';

export interface MenuItem extends MenuItemProps {
  key: string;
  href?: Href;
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
      {items.map(({ key, href, onPress, ...rest }) => (
        <PaperMenu.Item
          key={key}
          onPress={href ? () => router.navigate(href) : onPress}
          {...rest}
        />
      ))}
    </PaperMenu>
  );
};

export default Menu;
