import { Month, } from '../models/Month';
import { months, } from '../storage/months';

const createMonthsRepository = () => {
  const monthsRepository = months.map((el, index) => {
    const { name, days, dayStart, } = el;
    const monthId = index + 1;
    const month = new Month(monthId, name, days, dayStart);
    return month;
  });

  return monthsRepository;
};

export const monthsRepository = createMonthsRepository();
