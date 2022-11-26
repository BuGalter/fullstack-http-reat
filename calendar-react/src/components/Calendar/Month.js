import React from 'react';
import Days from './Days';
import MonthHeader from './MonthHeader';
import NameDaysWeek from './NameDaysWeek';

const Month = ({ year, daysWeek, monthInfo, indexKey, users }) => {
  return (
    <div className='month'>
      <MonthHeader
        year={year}
        monthName={monthInfo.name}
        key={monthInfo.id}
      />
      <NameDaysWeek daysWeek={daysWeek} key={daysWeek.id} />
      <Days
        days={monthInfo.days}
        dayStart={monthInfo.dayStart}
        key={indexKey * 15}
      />
    </div>
  );
};

export default Month;
