import React from 'react';
import '../styles/app-header.css';
import Dropdown from './UI/Dropdown';
import { users } from '../services/users';

const AppHeader = () => {
  const appHeaderProps = {
    text: 'Calendar with To-Do list',
    dropdownText: 'Выберете пользователя',
  };

  const activeUser = users.map((el) => {
    if (el.isActive) {
      return el.name;
    }
    return null;
  });

  return (
    <div className='app-header'>
      <h1 className='header'>{appHeaderProps.text}</h1>
      {activeUser ? (
        <h3>Пользователь: {activeUser}</h3>
      ) : (
        <h3>Пользователь: Неизвестный</h3>
      )}
      <Dropdown dropdownText={appHeaderProps.dropdownText} users={users} />
    </div>
  );
};

export default AppHeader;
