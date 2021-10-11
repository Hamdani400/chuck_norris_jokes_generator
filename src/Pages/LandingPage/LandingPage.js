import React from 'react';
import Header from '../../Parts/Header/Header.js';
import Body from '../../Parts/Body/Body.js';

export default function LandingPage () {
  useEffect (() => {
    document.title = 'Chuck Norris Jokes | Home';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}
