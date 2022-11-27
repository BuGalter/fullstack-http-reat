import { IWeekDaysRepository, } from '../repositories/week-days.repositry';
import { WeekDaysService, } from '../services/week-days.service';

export interface IWeekDaysController {
  weekDayService: WeekDaysService;
  getAll(): Promise<IWeekDaysRepository[]>;
}

export class WeekDaysController implements IWeekDaysController {
  weekDayService: WeekDaysService;

  constructor(weekDaysService: WeekDaysService) {
    this.weekDayService = weekDaysService;
  }

  async getAll(): Promise<IWeekDaysRepository[]> {
    return await this.weekDayService.getAll();
  }
}
