import React from 'react';
import {Link} from 'react-router-dom';

import './ButtonAction.scss';

export default function ButtonAction (props) {
  function onClickHandler () {
    props.onClick && props.onClick ();
  }

  return (
    <div>
      {!props.isGetRandomJoke
        ? <Link
            to={props.href || '/'}
            style={{width: props.width}}
            type="button"
            className="btn"
          >
            {props.text}
          </Link>
        : <button
            onClick={onClickHandler}
            style={{width: props.width}}
            type="button"
            className="btn"
          >
            {props.text}
          </button>}
    </div>
  );
}
