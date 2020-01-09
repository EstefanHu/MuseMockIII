import React from 'react';

const Notification = props => {
  return (
    <aside>
      {props.content.map(item => (
        <span>{item}</span>
      ))}
    </aside>
  )
}

export default Notification;