import React from 'react';
import '../../styles/month.css';

const MonthHeader = ({ year, monthName }) => {
  return (
    <div className='month-header'>
      <h4>{monthName}</h4>
      <h5>{year}</h5>
    </div>
  );
};

export default MonthHeader;
