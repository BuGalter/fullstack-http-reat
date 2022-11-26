import React from 'react';

const HeaderCalendar = ({month}) => {
  return (
    <div className='header-calendar'>
      <h3>{month}</h3>
    </div>
  );
}
 
export default HeaderCalendar;