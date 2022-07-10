import React from 'react';
import styles from './Button.module.css';

function Button({ onClick, children }) {
  const btnClick = () => onClick && onClick();
  return (
    <button type="button" className={styles.button} onClick={btnClick}>
      {children}
    </button>
  );
}

export default Button;
