import React from 'react';

const Notification = props => {
  return (
    <aside>
      {props.map(item => (
        <span>{item.content}</span>
      ))}
    </aside>
  )
}

export default Notification;