import React from 'react';
import {Link} from 'react-router-dom';

import './ButtonAction.scss';

export default function ButtonAction (props) {
  return (
    <div>
      <Link
        to={props.href || '/'}
        style={{width: props.width}}
        type="button"
        className="btn"
      >
        {props.text}
      </Link>
    </div>
  );
}
