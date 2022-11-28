import React, { useState, useEffect } from 'react';
import '../styles/app-header.css';
import Dropdown from './UI/Dropdown';
import { getDataFromApi } from '../services/get-data-from-api';

const AppHeader = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [users, setUsers] = useState([]);

  const appHeaderProps = {
    text: 'Calendar with To-Do list',
    dropdownText: 'Выберете пользователя',
  };

  useEffect(() => {
    const url = 'users';
    getDataFromApi(url).then(
      (result) => {
        setIsLoaded(true);
        setUsers(result);
      },
      (error) => {
        setIsLoaded(false);
        setError(error);
      }
    );
  }, []);

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>...Load</div>;
  } else {
    return (
      <div className='app-header'>
        <h1 className='header'>{appHeaderProps.text}</h1>
        <Dropdown dropdownText={appHeaderProps.dropdownText} users={users}/>
      </div>
    );
  }
};

export default AppHeader;
