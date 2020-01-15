import React from 'react';

const Genre = props => {
  return (
    <a href="/" style={ genre }>{ props.genre }</a>
  )
}

const genre = {
  color: 'grey',
  fontWeight: 'bold',
  textDecoration: 'none',
}

export default Genre;