import { getYearNow } from './get-year';
import { months } from './month-name';
import { daysWeek } from './week-days-name';

export const getDataFromApi = () => {
  const year = getYearNow().toString();
  //const url = `https://isdayoff.ru/api/getdata?year=${year}`;

  const result ={
    year,
    daysWeek: daysWeek,
    monthsInfo: months,
  };

  return result;
};
