import React from 'react';
import styles from './button.module.css';

function Button({ onClick, children }) {
  const btnClick = () => onClick && onClick();
  return (
    <button type="submit" className={styles.button} onClick={btnClick}>
      {children}
    </button>
  );
}

export default Button;
