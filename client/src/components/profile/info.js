import React from 'react';

const Info = props => {
  return (
    <section className="left" style={primary} >
      <p>{props.user.firstName} {props.user.lastName}</p>
    </section>
  )
}

const primary = {
  backgroundColor: 'white',
  boxShadow: '12px 12px 12px 0 rgba(0, 0, 0, 0.05)'
}

export default Info;