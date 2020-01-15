import React from 'react';

const Name = props => {
  return (
    <p style={ name } >{props.name}</p>
  )
}

const name = {
  textAlign: 'center',
  fontSize: '1.5rem',
  fontWeight: 'bold'
}

const email = {
  textAlign: 'center',
  fontSize: '1.2rem',
  fontWeight: 'bold'
}

export default Name;