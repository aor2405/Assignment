import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Error from './Error';
import styles from './WorkStation.module.scss';
import Button from './Button';
import Dropdown from './Dropdown';

export default function WorkStation() {
  const [workstationData, setWorkstationData] = useState();
  const [error, setError] = useState(false);
  const [dateValue, setDateValue] = useState();
  const [timeValue, setTimeValue] = useState();

  const dateOptions = [
    { label: 'Select a date:', value: 'Select a date:' },
    { label: 'Monday', value: 'Monday' },
    { label: 'Tuesday', value: 'Tuesday' },
    { label: 'Wednesday', value: 'Wednesday' },
    { label: 'Thursday', value: 'Wednesday' },
    { label: 'Friday', value: 'Friday' },
  ];

  const TimeOptions = [
    { label: 'Select a time:', value: 'Select a time:' },
    { label: '09:00 - 09:30', value: '09:00 - 09:30' },
    { label: '09:30 - 10:00', value: '09:30 - 10:00' },
    { label: '10:00 - 10:30', value: '10:00 - 10:30' },
    { label: '10:30 - 11:30', value: '10:30 - 11:30' },
  ];

  const dateHandleChange = (event) => {
    setDateValue(event.target.value);
  };
  const timeHandleChange = (event) => {
    setTimeValue(event.target.value);
  };

  const fetchData = async () => {
    try {
      const { data, status } = await axios.get('/api/workStationData');

      if (status !== 200) {
        throw new Error(`Error! status: ${response.status}`);
      }
      setWorkstationData(data);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error === true) {
    return <Error />;
  } else if (workstationData === undefined) {
    return <div data-testid="loading">Still Loading...</div>;
  }

  return (
    <main className={styles.layoutContainer}>
      {workstationData.map((data) => (
        <div key={data.id} className={styles.card}>
          <h1 data-testid="workstation-id">Workstation ID: {data.id}</h1>
          <h2 data-testid="desk-number">Desk Number: {data.deskNumber}</h2>

          {data.reseveredStatus ? (
            <div className={styles.statusContainer} data-testid="status">
              <p className={styles.statusAvailable}>Currently available</p>
              <span className={styles.dotAvailable}></span>
            </div>
          ) : (
            <div className={styles.statusContainer}>
              <p className={styles.statusUnavailable}>Currently unavailable</p>
              <span className={styles.dotUnavailable}></span>
            </div>
          )}

          <div className={styles.dropdownContainer}>
            <Dropdown
              options={dateOptions}
              value={dateValue}
              onChange={dateHandleChange}
            />
            <Dropdown
              options={TimeOptions}
              value={timeValue}
              onChange={timeHandleChange}
            />
          </div>
          <div>
            <Button>Confirm booking</Button>
          </div>
        </div>
      ))}
    </main>
  );
}
