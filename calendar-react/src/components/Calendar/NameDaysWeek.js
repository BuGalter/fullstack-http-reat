import React from 'react';
import '../../styles/month.css';
import DayOffWeek from './DayOffWeek';

const NameDaysWeek = ({ daysWeek }) => {
  return (
    <div className='name-days-week'>
      {daysWeek.map((el) => {
        return <DayOffWeek day={el.day} key={el.id} />;
      })}
    </div>
  );
};

export default NameDaysWeek;
