import React, { useEffect, useState } from 'react';
import '../../styles/calendar.css';
import {
  getDataFromApi,
} from '../../services/get-data-from-api';
import Month from './Month';

const Calendar = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [monthsInfo, setMonthsInfo] = useState([]);
  const [year, setYear] = useState('');
  const [daysWeek, setDaysWeek] = useState([]);

  useEffect(() => {
    const url = 'year';
    getDataFromApi(url).then(
      (result) => {
        setIsLoaded(true);
        setYear(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  useEffect(() => {
    const url = 'weekdays';
    getDataFromApi(url).then(
      (result) => {
        setIsLoaded(true);
        setDaysWeek(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);

  useEffect(() => {
    const url = 'months';
    getDataFromApi(url).then(
      (result) => {
        setIsLoaded(true);
        setMonthsInfo(result);
      },
      (error) => {
        setIsLoaded(true);
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
      <div className='calendar'>
        {monthsInfo.map((el, index) => {
          return (
            <Month
              year={year}
              daysWeek={daysWeek}
              monthInfo={el}
              indexKey={index}
              key={el.id}
            />
          );
        })}
      </div>
    );
  }
};

export default Calendar;
