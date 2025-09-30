import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Alarm } from '@/components/Alarm';
import { getStoredAlarms, setStoredAlarms } from '@/services/storage';

interface AlarmContextType {
  alarms: Alarm[];
  areAlarmsLoading: boolean;
  createAlarm: (newAlarm: Alarm) => Promise<void>;
  deleteAlarm: (id: string) => Promise<void>;
}

const AlarmContext = createContext<AlarmContextType>({
  alarms: [],
  areAlarmsLoading: false,
  createAlarm: async () => {},
  deleteAlarm: async () => {},
});

export const AlarmProvider = ({ children }: PropsWithChildren) => {
  const [alarms, setAlarms] = useState<Alarm[]>([]);
  const [areAlarmsLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const run = async () => {
      try {
        const response = await getStoredAlarms();
        setAlarms(response);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    run();
  }, []);

  const createAlarm = async (newAlarm: Alarm) => {
    const storedAlarms = await getStoredAlarms();
    const combined = [...storedAlarms, newAlarm];
    await setStoredAlarms(combined);
    setAlarms(combined);
  };

  const deleteAlarm = async (id: string) => {
    const storedAlarms = await getStoredAlarms();
    const index = storedAlarms.findIndex((x) => x.id === id);

    if (index === -1) throw new Error(`Alarm not found`);

    const removed = storedAlarms.toSpliced(index, 1);
    await setStoredAlarms(removed);
    setAlarms(removed);
  };

  return (
    <AlarmContext
      value={{ alarms, areAlarmsLoading, createAlarm, deleteAlarm }}
    >
      {children}
    </AlarmContext>
  );
};

const useAlarms = () => useContext(AlarmContext);

export default useAlarms;
