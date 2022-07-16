import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import styles from './index.m.css';
import { Link } from 'react-router-dom';
import Header from '../../Components/Header';

const Home = ({ scrolls, handleClick }) => {
  const heroes = useSelector((state) => state.rickAndMorty);

  return (
    <>
      <Header handleClick={handleClick} />

      <main className={styles.main} ref={scrolls}>
        <span className={styles.main__title}>Characters from all series</span>
        {heroes.map((item) => {
          return (
            <Link
              to={`${item.id}`}
              className={styles.character__box}
              key={nanoid()}
            >
              <div className={styles.character__img}>
                <img src={item.image} alt="" />
              </div>
              <div className={styles.character__info}>
                <h5 className={styles.character__name}>Name: {item.name}</h5>
              </div>
            </Link>
          );
        })}
      </main>
    </>
  );
};

export default Home;
