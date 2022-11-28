import {
  weekDaysRepository,
  IWeekDaysRepository,
} from '../repositories/week-days.repositry';

export interface IWeekDaysService {
  weekDayRepository: IWeekDaysRepository[];
  getAll(): Promise<IWeekDaysRepository[]>;
}

export class WeekDaysService implements IWeekDaysService {
  weekDayRepository: IWeekDaysRepository[];

  constructor() {
    this.weekDayRepository = weekDaysRepository;
  }

  async getAll(): Promise<IWeekDaysRepository[]> {
    return await this.weekDayRepository;
  }
}
