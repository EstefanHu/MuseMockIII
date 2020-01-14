import React from 'react';

const Link = props => {
  return (
    <>
      {props.links.map(link => (
        <button style={ props.style } key={ link } >{ link }</button>
      ))}
    </>
  )
}

export default Link;