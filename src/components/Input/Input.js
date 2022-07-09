import React from 'react';
import styles from './input.module.css';
import { validator } from '../../utils/validator';

function Input({ validateMessage = 'Invalid Input', label, onChange, ...props }) {
  const [error, setError] = React.useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };

  const handleBlur = (value) => !(props.type === 'text') && setError(() => validator[props?.type](value));
  return (
    <div className={styles.inputContainer}>
      {label && <label htmlFor="input">{label}</label>}

      <input className={styles.input} onBlur={(e) => handleBlur(e.target.value)} {...props} onChange={handleChange} />
      {error && <span className={styles.errorControl}>{validateMessage}</span>}
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
};

export default Input;
