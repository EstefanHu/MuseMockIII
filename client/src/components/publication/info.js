import React from 'react';

function Info(props) {
  return (
    <section>
      <img />
      <p>{props.author.name}</p>
      <p>{props.author.email}</p>
      {props.author.links.map(link => (
        <p>link.url</p>
      ))}
    </section>
  )
}

export default Info;