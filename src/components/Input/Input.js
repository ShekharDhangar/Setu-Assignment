import React from 'react';
import styles from './input.module.css';
import { validator } from '../../utils/validator';

function Input({ validateMessage = 'Invalid Input', label, inputUpdate, ...props }) {
  const [error, setError] = React.useState(false);

  const handleBlur = (value) => {
    if (['text', 'date', 'radio'].includes(props.type)) return;
    setError(() => validator[props?.type](value, props.minLength && props.minLength));
  };

  return (
    <div className={styles.inputContainer}>
      {label && (
        <label htmlFor="input" className={styles.inputLabel}>
          {label}
        </label>
      )}
      <input className={styles.input} onBlur={(e) => handleBlur(e.target.value)} {...props} onChange={inputUpdate} />
      {error && <span className={styles.errorMessage}>{validateMessage}</span>}
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
};

export default Input;
