import * as React from 'react';
import '../../styles/calendar.css';
import '../../styles/dropdown.css';
import CalendarButton from './CalendarButton';

const Dropdown = ({ dropdownText, users }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <button onClick={handleOpen} className='calendar-button'>
        {dropdownText}
      </button>
      {open ? (
        <ul className='menu'>
          {users.map((el) => {
            return (
              <li className='menu-item'>
                <CalendarButton text={el.name} key={el.id} />
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
