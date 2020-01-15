import React from 'react';

const Title = props => {
  const onEnter = e => {
    e.target.style.color="grey"
  }

  const onLeave = e => {
    e.target.style.color="rgb(61, 61, 61)"
  }

  return (
    <h2
      onMouseEnter={ onEnter }
      onMouseLeave={ onLeave }
    >{ props.title }</h2>
  )
}

export default Title;