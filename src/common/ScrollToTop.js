import { useEffect } from 'react';

function ScrollToTop() {
    const { pathname } = window.location;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;