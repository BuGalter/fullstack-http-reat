import { WeekDaysController, } from '../controllers/week-days.controller';
import { weekDaysRepository, } from '../repositories/week-days.repositry';
import { WeekDaysService, } from '../services/week-days.service';

export const weekDaysHandler = async () => {
  const weekDayService = new WeekDaysService(weekDaysRepository);
  const weekDaysController = new WeekDaysController(weekDayService);
  const weekDays = await weekDaysController.getAll();
  return weekDays;
};
