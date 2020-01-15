import React from 'react';

const Email = props => {
  return (
    <p style={ email } >{ props.email }</p>
  )
}

const email = {
  textAlign: 'center',
  fontSize: '.8rem',
}

export default Email;