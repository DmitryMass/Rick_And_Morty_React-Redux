import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import HeroItem from '../Pages/HeroesItem';
import { fetchHeroes } from '../Storage/Action';
import { useScrollRef } from './RefScrollHook';

const App = () => {
  const { ref, handleClick } = useScrollRef();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      console.log('fetching');
      dispatch(fetchHeroes(currentPage));
      setCurrentPage((prev) => prev + 1);
      setFetching(false);
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      100
    ) {
      setFetching(true);
    }
  };

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route
            path="/*"
            element={<Home scrolls={ref} handleClick={handleClick} />}
          />
          <Route path="/:id" element={<HeroItem />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
