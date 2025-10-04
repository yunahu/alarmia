import * as Crypto from 'expo-crypto';
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Alarm } from '@/components/AlarmMenu';
import { getStoredAlarms, setStoredAlarms } from '@/services/storage';

type CreateAlarm = (properties: Omit<Alarm, 'id'>) => Promise<Alarm | void>;

type UpdateAlarm = (
  id: string,
  updates: Omit<Partial<Alarm>, 'id'>
) => Promise<Alarm | void>;

interface AlarmContextType {
  alarms: Alarm[];
  areLoading: boolean;
  createAlarm: CreateAlarm;
  getAlarm: (id: string) => Alarm | undefined;
  updateAlarm: UpdateAlarm;
  deleteAlarm: (id: string) => Promise<void>;
}

const AlarmContext = createContext<AlarmContextType>({
  alarms: [],
  areLoading: true,
  createAlarm: async () => {},
  getAlarm: () => undefined,
  updateAlarm: async () => {},
  deleteAlarm: async () => {},
});

export const AlarmProvider = ({ children }: PropsWithChildren) => {
  const [alarms, setAlarms] = useState<Alarm[]>([]);
  const [areLoading, setAreLoading] = useState<boolean>(true);

  useEffect(() => {
    const run = async () => {
      try {
        const stored = await getStoredAlarms();
        setAlarms(stored);
      } catch (err) {
        console.error(err);
      } finally {
        setAreLoading(false);
      }
    };

    run();
  }, []);

  const createAlarm: CreateAlarm = async (properties) => {
    if (areLoading) throw new Error(`Loading`);
    setAreLoading(true);
    const storedAlarms = await getStoredAlarms();
    const newAlarm = {
      id: Crypto.randomUUID(),
      ...properties,
    };
    const combined = [...storedAlarms, newAlarm];
    await setStoredAlarms(combined);
    setAlarms(combined);
    setAreLoading(false);
  };

  const getAlarm = (id: string) => alarms.find((x) => x.id === id);

  const updateAlarm: UpdateAlarm = async (id, updates) => {
    if (areLoading) throw new Error(`Loading`);
    setAreLoading(true);

    const targetIndex = alarms.findIndex((x) => x.id === id);
    if (targetIndex === -1) throw new Error(`Alarm not found`);

    const alarmsCopy = structuredClone(alarms);
    alarmsCopy[targetIndex] = {
      ...alarmsCopy[targetIndex],
      ...updates,
    };
    await setStoredAlarms(alarmsCopy);
    setAlarms(alarmsCopy);
    setAreLoading(false);
  };

  const deleteAlarm = async (id: string) => {
    if (areLoading) throw new Error(`Loading`);
    setAreLoading(true);

    const targetIndex = alarms.findIndex((x) => x.id === id);
    if (targetIndex === -1) throw new Error(`Alarm not found`);

    const removed = alarms.toSpliced(targetIndex, 1);
    await setStoredAlarms(removed);
    setAlarms(removed);
    setAreLoading(false);
  };

  return (
    <AlarmContext
      value={{
        alarms,
        areLoading,
        createAlarm,
        getAlarm,
        updateAlarm,
        deleteAlarm,
      }}
    >
      {children}
    </AlarmContext>
  );
};

const useAlarms = () => useContext(AlarmContext);

export default useAlarms;
