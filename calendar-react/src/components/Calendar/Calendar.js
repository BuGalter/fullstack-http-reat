import React from 'react';
import '../../styles/calendar.css';
import { getDataFromApi } from '../../services/get-data-from-api';
import Month from './Month';

const Calendar = () => {
  const { year, daysWeek, monthsInfo } = getDataFromApi();

  return (
    <div className='calendar'>
      {monthsInfo.map((el, index) => {
        return (
          <Month
            year={year}
            daysWeek={daysWeek}
            monthInfo={el}
            indexKey={index}
            key={el.id}
          />
        );
      })}
    </div>
  );
};

export default Calendar;
