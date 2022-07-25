import React from 'react';

import styles from './Button.module.scss';

export default function Button(props) {
  return (
    <div className={styles.buttonContainer}>
      <div className={styles.button}>{props.children}</div>
    </div>
  );
}
