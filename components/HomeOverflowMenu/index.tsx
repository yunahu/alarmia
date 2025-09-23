import {
  Button,
  IndexPath,
  OverflowMenu as KittenMenu,
  Layout,
  MenuItem,
} from '@ui-kitten/components';
import React from 'react';

const OverflowMenu = () => {
  const [visible, setVisible] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState<
    IndexPath | undefined
  >();

  const onItemSelect = (index: IndexPath | undefined): void => {
    setSelectedIndex(index);
    setVisible(false);
  };

  const renderToggleButton = (): React.ReactElement => (
    <Button onPress={() => setVisible(true)}>TOGGLE MENU</Button>
  );

  return (
    <Layout level="1">
      <KittenMenu
        anchor={renderToggleButton}
        visible={visible}
        selectedIndex={selectedIndex as any}
        onSelect={onItemSelect}
        onBackdropPress={() => setVisible(false)}
      >
        <MenuItem title="Users" />
        <MenuItem title="Orders" disabled={true} />
        <MenuItem title="Transactions" />
      </KittenMenu>
    </Layout>
  );
};

export default OverflowMenu;
