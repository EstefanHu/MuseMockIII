import React from 'react';

const Link = props => {
  return (
    <>
      {props.links.map(link => (
        <span><a href={ link }>{ link }</a></span>
      ))}
    </>
  )
}

export default Link;