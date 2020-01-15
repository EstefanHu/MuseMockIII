import React from 'react';

const Link = props => {
  return (
    <>
      {props.links.map(link => (
        <button style={ item } key={ link } >{ link }</button>
      ))}
    </>
  )
}

const item = {
  border: '1px solid lightgrey',
  borderRadius: '5px',
  marginTop: '5px',
  height: '30px',
  fontSize: '1rem',
  width: '100%',
  backgroundColor: 'lightgrey'
}

export default Link;