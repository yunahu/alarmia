import { Alarm } from '@/components/AlarmMenu';
import Menu, { MenuItem } from '@/components/Menu';
import useAlarms from '@/hooks/useAlarms';

interface AlarmMenuProps {
  alarm: Alarm;
}

const AlarmMenu = ({ alarm }: AlarmMenuProps) => {
  const { deleteAlarm } = useAlarms();

  const handleDelete = async () => {
    try {
      await deleteAlarm(alarm.id);
    } catch (err) {
      console.error(err);
    }
  };

  const items: MenuItem[] = [
    {
      key: 'delete',
      title: 'Delete',
      onPress: handleDelete,
    },
  ];

  return <Menu items={items} />;
};

export default AlarmMenu;
