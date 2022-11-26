import React from 'react';
import '../../styles/month.css';
import Day from './Day';

const Days = ({ days, dayStart }) => {
  const daysArr = Array.from(days);

  return (
    <div className='days'>
      {daysArr.map((el, index) => {
        return (
          <Day
            numberDay={++index}
            dayStart={dayStart}
            dayStatus={+el}
            key={index * 10}
          />
        );
      })}
    </div>
  );
};

export default Days;
