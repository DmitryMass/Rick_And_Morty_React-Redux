import { useRef } from 'react';

export const useScrollRef = () => {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    ref,
    handleClick,
  };
};
