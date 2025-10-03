import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Alarm } from '@/components/AlarmMenu';
import { getStoredAlarms, setStoredAlarms } from '@/services/storage';

type UpdateAlarm = (
  id: string,
  updates: Omit<Partial<Alarm>, 'id'>
) => Promise<Alarm | void>;

interface AlarmContextType {
  alarms: Alarm[];
  isLoading: boolean;
  createAlarm: (newAlarm: Alarm) => Promise<void>;
  updateAlarm: UpdateAlarm;
  deleteAlarm: (id: string) => Promise<void>;
}

const AlarmContext = createContext<AlarmContextType>({
  alarms: [],
  isLoading: false,
  createAlarm: async () => {},
  updateAlarm: async () => {},
  deleteAlarm: async () => {},
});

export const AlarmProvider = ({ children }: PropsWithChildren) => {
  const [alarms, setAlarms] = useState<Alarm[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
    setIsLoading(true);
    const storedAlarms = await getStoredAlarms();
    const combined = [...storedAlarms, newAlarm];
    await setStoredAlarms(combined);
    setAlarms(combined);
    setIsLoading(false);
  };

  const updateAlarm: UpdateAlarm = async (id, updates) => {
    setIsLoading(true);
    const storedAlarms = await getStoredAlarms();
    const targetIndex = storedAlarms.findIndex((x) => x.id === id);
    if (targetIndex === -1) throw new Error(`Alarm not found`);

    const updated = {
      ...storedAlarms[targetIndex],
      ...updates,
    };
    storedAlarms[targetIndex] = updated;

    await setStoredAlarms(storedAlarms);
    setAlarms(storedAlarms);
    setIsLoading(false);
  };

  const deleteAlarm = async (id: string) => {
    setIsLoading(true);
    const storedAlarms = await getStoredAlarms();
    const index = storedAlarms.findIndex((x) => x.id === id);

    if (index === -1) throw new Error(`Alarm not found`);

    const removed = storedAlarms.toSpliced(index, 1);
    await setStoredAlarms(removed);
    setAlarms(removed);
    setIsLoading(false);
  };

  return (
    <AlarmContext
      value={{ alarms, isLoading, createAlarm, updateAlarm, deleteAlarm }}
    >
      {children}
    </AlarmContext>
  );
};

const useAlarms = () => useContext(AlarmContext);

export default useAlarms;
