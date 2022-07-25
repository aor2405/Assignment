import React from 'react';

import styles from './Error.module.scss';

export default function Error() {
  return (
    <>
      <h1 className={styles.heading}>500 Server Error</h1>
      <p className={styles.paragraph}>
        Unfortunately the server has crashed, please try again later
      </p>
    </>
  );
}
