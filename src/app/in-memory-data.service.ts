import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const flights = [
      { num: 1, time: '12:00', destination: 'Dubai', terminal: 'D', status: 'Baggage claim', type: 'arr', delay: false },
      { num: 2, time: '12:30', destination: 'London', terminal: 'F', status: 'Boarding', type: 'dep', delay: false },
      { num: 3, time: '13:00', destination: 'Moscow', terminal: 'B', status: 'Boarding', type: 'dep', delay: false },
      { num: 4, time: '13:30', destination: 'New-York', terminal: 'F', status: 'In Air', type: 'arr', delay: false },
      { num: 5, time: '14:00', destination: 'Paris', terminal: 'D', status: 'Check-In', type: 'dep', delay: true },
      { num: 6, time: '14:30', destination: 'Warsaw', terminal: 'D', status: 'In Air', type: 'arr', delay: false },
      { num: 7, time: '15:00', destination: 'Copenhagen', terminal: 'D', status: 'In Air', type: 'arr', delay: false },
      { num: 8, time: '15:30', destination: 'Saint-Petersburg', terminal: 'A', status: 'Check-In', type: 'dep', delay: false },
      { num: 9, time: '16:00', destination: 'Las Vegas', terminal: 'F', status: 'In Air', type: 'arr', delay: false },
      { num: 10, time: '16:30', destination: 'Berlin', terminal: 'D', status: 'In Air', type: 'arr', delay: false },
    ];
    return {flights};
  }
}
