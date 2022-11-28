import { Month, } from '../models/Month';
import { MonthService, } from '../services/months.service';

export interface IMonthController {
  getAll?(): Promise<Month[]>;
}

export class MonthController implements IMonthController {
  static async getAll(): Promise<Month[]> {
    const monthService = new MonthService();
    return await monthService.getAll();
  }
}
