import storage from '@react-native-async-storage/async-storage';

import { Alarm } from '@/components/AlarmMenu';

export const setStoredAlarms = async (alarms: Alarm[]) =>
  storage.setItem('alarms', JSON.stringify(alarms));

export const getStoredAlarms = async (): Promise<Alarm[]> => {
  const alarms = await storage.getItem('alarms');
  return alarms ? JSON.parse(alarms) : [];
};

export default storage;
