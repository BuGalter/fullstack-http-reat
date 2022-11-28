import { Month, } from '../models/Month';
import { monthsRepository, } from '../repositories/months.repository';

export interface IMonthService {
  monthsRepository: Month[];
  getAll(): Promise<Month[]>
}

export class MonthService implements IMonthService {
  monthsRepository: Month[];

  constructor() {
    this.monthsRepository = monthsRepository;
  }

  async getAll(): Promise<Month[]> {
    return await this.monthsRepository;
  }
}
