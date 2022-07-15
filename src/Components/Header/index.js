import React from 'react';

import logo from '../../Assets/Icons/Rick_and_Morty.svg';
import Button from '../Button';
import styles from './index.m.css';

const Header = ({ setPerson, handleClick }) => {
  const onBtnClick = (e) => {
    e.preventDefault();
    setPerson((prev) => !prev);
    setTimeout(handleClick, 500);
  };

  return (
    <header className={styles.header}>
      <div className="header__container">
        <Button onBtnClick={onBtnClick} styles={styles}>
          Show Сharacters List
        </Button>
        <div className={styles.header__logo}>
          <object data={logo} type=""></object>
        </div>
      </div>
    </header>
  );
};

export default Header;
