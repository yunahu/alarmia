import Menu, { MenuItem } from '@/components/Menu';

const items: MenuItem[] = [
  {
    key: 'settings',
    title: 'Settings',
    onPress: () => {},
  },
];

const HomeMenu = () => {
  return <Menu items={items} />;
};

export default HomeMenu;
