import { IWeekDaysRepository, } from '../repositories/week-days.repositry';
import { WeekDaysService, } from '../services/week-days.service';

export interface IWeekDaysController {
  getAll?(): Promise<IWeekDaysRepository[]>;
}

export class WeekDaysController implements IWeekDaysController {
  static async getAll(): Promise<IWeekDaysRepository[]> {
    const weekDayService = new WeekDaysService();
    return await weekDayService.getAll();
  }
}
