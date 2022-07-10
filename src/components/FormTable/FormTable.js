import React from 'react';
import { inputLabels } from '../../utils/inputLabel';
import styles from './formTable.module.css';

function FormTable({ formState }) {
  const submittedFormState = Object.entries(formState).map((item) => item);
  return (
    <div className={styles.tableContainer}>
      <h2>Submitted Form Values</h2>
      <table className={styles.formTable}>
        <thead>
          <tr className={styles.gridTable}>
            <th>Label</th>
            <th>Input</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {submittedFormState.map((item) => (
            <tr className={styles.gridTable}>
              <td>{inputLabels[item[0]]}</td>
              <td>{item[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default FormTable;
