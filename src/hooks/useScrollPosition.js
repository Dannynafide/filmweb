import {useEffect, useState} from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => setScrollPosition(window.pageYOffset);

    // clean up code
    window.removeEventListener('scroll', updatePosition);
    window.addEventListener('scroll', updatePosition, {passive: true});
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
