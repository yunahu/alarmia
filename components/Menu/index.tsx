import * as React from 'react';
import { MenuItemProps, Menu as PaperMenu } from 'react-native-paper';

import MoreButton from '@/components/MoreButton';

export interface MenuItem extends MenuItemProps {
  key: string;
}

interface MenuProps {
  items: MenuItem[];
}

const Menu = ({ items }: MenuProps) => {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <PaperMenu
      visible={visible}
      onDismiss={closeMenu}
      anchor={<MoreButton onPress={openMenu} />}
    >
      {items.map(({ key, ...rest }) => (
        <PaperMenu.Item key={key} {...rest} />
      ))}
    </PaperMenu>
  );
};

export default Menu;
