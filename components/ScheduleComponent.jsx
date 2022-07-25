import React from 'react';
import styles from './ScheduleComponent.module.scss';

export default function ScheduleComponent() {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/dd2duttda/image/upload/v1658401615/Screenshot_2022-07-21_at_12.06.12_lgo2fk.png"
        alt="Sample image of 5 day calender"
        className={styles.image}
        data-testid="calendar"
      />
    </div>
  );
}
