import React from 'react';

import styles from './index.module.scss';
import WorkStation from '../components/WorkStation';

export default function Index() {
  return (
    <>
      <h1 className={styles.heading}>Invicara Assesment</h1>
      <WorkStation />
    </>
  );
}
