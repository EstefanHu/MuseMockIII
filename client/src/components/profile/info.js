import React from 'react';

const Info = props => {
  return (
    <section className="left" >
      <p>{props.user.firstName} {props.user.lastName}</p>
    </section>
  )
}

export default Info;