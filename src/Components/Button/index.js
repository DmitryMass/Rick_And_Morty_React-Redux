import React from 'react';

const Button = ({ children, onBtnClick, styles }) => {
  return (
    <button onClick={onBtnClick} className={styles.header__btn}>
      {children}
    </button>
  );
};

export default Button;
