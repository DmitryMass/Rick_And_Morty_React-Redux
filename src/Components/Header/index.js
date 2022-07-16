import React from 'react';

import logo from '../../Assets/Icons/Rick_and_Morty.svg';
import Button from '../Button';
import styles from './index.m.css';
import PropTypes from 'prop-types';

const Header = ({ handleClick }) => {
  return (
    <header className={styles.header}>
      <div className="header__container">
        <Button onBtnClick={handleClick} styles={styles}>
          Show Characters List
        </Button>
        <div className={styles.header__logo}>
          <object data={logo} type=""></object>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  handleClick: PropTypes.func,
};

export default Header;
