import React from 'react';

const Name = props => {
  return (
    <p style={ name } >{props.name}</p>
  )
}

const name = {
  fontSize: '1.5rem',
  fontWeight: 'bold'
}

export default Name;