import React from 'react';

const Genre = props => {
  const onEnter = e => {
    e.target.style.color="rgb(173, 173, 173)";
    e.target.style.textDecoration="underline";
  }

  const onLeave = e => {
    e.target.style.color="grey";
    e.target.style.textDecoration="none";
  }

  return (
    <a href="/"
    style={ genre }
    onMouseEnter={ onEnter }
    onMouseLeave={ onLeave }
    >{ props.genre }</a>
  )
}

const genre = {
  color: 'grey',
  fontWeight: 'bold',
  textDecoration: 'none',
}

export default Genre;