import React from 'react';

import './Results.scss';

export default function Result (props) {
  //   eslint-disable-next-line array-callback-return
  const listResult = props.text.map ((text, index) => {
    return <ul key={`list-${index}`}>"{text}"</ul>;
  });

  return (
    <div className={`container ${props.className.join (' ')}`}>
      <div className="result">{listResult}</div>
    </div>
  );
}
