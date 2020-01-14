import React from 'react';

const Link = props => {
  return (
    <>
      {props.links.map(link => (
        <button style={ props.style } >{ link }</button>
      ))}
    </>
  )
}

export default Link;