import React from 'react';

const Credibility = props => {
  return (
    <p style={ cred }>{ props.credibility }</p>
  )
}

const cred = {
  textAlign: 'center'
}

export default Credibility;