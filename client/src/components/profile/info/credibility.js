import React from 'react';

const Credibility = props => {
  return (
    <p style={ cred }>Credibility: { props.credibility }</p>
  )
}

const cred = {
  marginTop: '10px',
  marginBottom: '5px',
  fontSize: '.9rem'
}

export default Credibility;