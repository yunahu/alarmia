import { Alarm } from '@/components/Alarm';

const alarms: Alarm[] = [
  {
    id: 1,
    description: 'Alarm 1',
    time24: '13:12',
    activeDays: 'S M T W T F S',
  },
  {
    id: 2,
    description: 'Alarm 2',
    time24: '20:00',
    activeDays: 'S M T W T F S',
  },
  {
    id: 3,
    description: 'Alarm 3',
    time24: '22:00',
    activeDays: 'S M T W T F S',
  },
  {
    id: 4,
    time24: '23:00',
    activeDays: 'S M T W T F S',
  },
  {
    id: 5,
    description: 'Really long alarm name is here to show you how it looks like',
    time24: '23:30',
    activeDays: 'S M T W T F S',
  },
  {
    id: 6,
    time24: '23:30',
    activeDays: 'S M T W T F S',
  },
  {
    id: 7,
    time24: '23:30',
    activeDays: 'S M T W T F S',
  },
  {
    id: 8,
    time24: '23:30',
    activeDays: 'S M T W T F S',
  },
];

export default alarms;
