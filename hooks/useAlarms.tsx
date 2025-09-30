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
}

const AlarmContext = createContext<AlarmContextType>({
  alarms: [],
  areAlarmsLoading: false,
  createAlarm: async () => {},
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

  return (
    <AlarmContext value={{ alarms, areAlarmsLoading, createAlarm }}>
      {children}
    </AlarmContext>
  );
};

const useAlarms = () => useContext(AlarmContext);

export default useAlarms;
