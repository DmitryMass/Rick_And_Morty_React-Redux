import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchOneHero } from '../../Storage/Action';

import itemStyles from './index.m.css';
import styles from '../Home/index.m.css';

const HeroItem = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchOneHero(id));
  }, [id]);

  const hero = useSelector((state) => state.oneCharacter);
  const heroLocation = useSelector((state) => state.location);
  const heroOrigin = useSelector((state) => state.origin);

  return (
    <div className={itemStyles.hero__wrapper}>
      <div className={`${itemStyles.container__wrapper} container`}>
        <Link className={itemStyles.home__link} to="/">
          <span>Home</span>
        </Link>
        <div className={itemStyles.character__box}>
          <div className={itemStyles.character__img}>
            <img src={hero.image} alt="" />
          </div>
          <div className={itemStyles.character__info}>
            <h5 className={styles.character__name}>Name: {hero.name}</h5>
            <p className={styles.character__data}>Species: {hero.species}</p>
            <p className={styles.character__data}>Status: {hero.status}</p>
            <p className={styles.character__data}>Gender: {hero.gender}</p>
            <p className={styles.character__data}>
              Location: {heroLocation.name}
            </p>
            <p className={styles.character__data}>Origin: {heroOrigin.name}</p>
          </div>
        </div>
        <a
          className={itemStyles.netflix__link}
          href="https://www.netflix.com/ua-ru/title/80014749?source=35"
        >
          <span>Start watching now</span>
        </a>
      </div>
    </div>
  );
};

export default HeroItem;
