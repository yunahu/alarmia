import { Alarm } from '@/components/Alarm';
import Menu, { MenuItem } from '@/components/Menu';

interface AlarmMenuProps {
  alarm: Alarm;
}

const AlarmMenu = ({ alarm }: AlarmMenuProps) => {
  const items: MenuItem[] = [
    {
      key: 'delete',
      title: `Delete alarm ${alarm.id}`,
      onPress: () => {},
    },
  ];

  return <Menu items={items} />;
};

export default AlarmMenu;
