import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';

import {ReactComponent as Back} from 'assets/Icon.svg';

export default function Header (props) {
  return (
    <header className={props.className}>
      {props.isResultPage &&
        <Link to="/"><Back className="arrow-back" /></Link>}
      <div className="header-page">
        <h2>CHUCK NORRIS</h2>
      </div>
    </header>
  );
}
