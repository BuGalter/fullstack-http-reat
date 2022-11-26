import React from 'react';
import CalendarButton from '../UI/CalendarButton';
import '../../styles/month.css';

const Day = ({ numberDay, dayStart, dayStatus }) => {
  let style = {};
  if (numberDay === 1) {
    style.gridColumn = dayStart;
  }

  if (dayStatus === 1) {
    style.backgroundColor = 'crimson';
  }

  //console.log(startDay);
  return (
    <div className='day' style={style}>
      <div>{numberDay}</div>
      <CalendarButton text={'+'} />
    </div>
  );
};

export default Day;
