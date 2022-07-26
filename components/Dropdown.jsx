import React from 'react';

import styles from './Dropdown.module.scss';

export default function Dropdown({ label, value, options, onChange }) {
  return (
    <main className={styles.container}>
      <label className={styles.label}>
        {label}
        <select value={value} onChange={onChange} className={styles.select}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
    </main>
  );
}
