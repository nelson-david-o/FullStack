import React, { Fragment, useState } from 'react';
import './Diapositivas.css';

function Diapositivas(props) {

  const [index, setIndex] = useState(0);

  return (
    <Fragment>
      <h1>Slideshow App</h1>
      <div className="buttons">
        <button onClick={() => setIndex(0)} disabled={index === 0}>Restart</button>
        <button onClick={() => index >= 1 && setIndex(index - 1)} disabled={index === 0}>Prev</button>
        <button onClick={() => index <= 3 && setIndex(index + 1)} disabled={index === 5}>Next</button>
      </div>
      <div className="diapositiva">
        <h2>{ props.data[index].title }</h2>
        <p>{ props.data[index].text }</p>
      </div>
    </Fragment>
  )
};


export default Diapositivas;