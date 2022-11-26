import React from 'react';
import '../../styles/body-calendar.css';
import Day from './Day';

const DaysContainer = ({ days }) => {
  return (
    <div className='calendar-container'>
      {days.map((el) => {
        return <Day el={el.day} key={el.id} dayStatus={el.dayStatus} />;
      })}
    </div>
  );
};

export default DaysContainer;
