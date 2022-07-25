import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

import Error from './Error';
import styles from './WorkStation.module.scss';

export default function WorkStation() {
  const [workstationData, setWorkstationData] = useState();
  const [error, setError] = useState(false);

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
          <h1 data-testid="desk-number">Desk Number: {data.deskNumber}</h1>
          <h2 data-testid="workstation-id">Workstation ID: {data.id}</h2>
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

          <div className={styles.buttonContainer}>
            <Link href="/schedule">
              <button className={styles.button} data-testid="button">
                View Schedule
              </button>
            </Link>
          </div>
        </div>
      ))}
    </main>
  );
}
