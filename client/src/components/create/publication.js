import React from 'react';

function Publication(props) {
  return (
    <section>
      <h1>{props.publication.title}</h1>
      <p>{props.publication.content}</p>
    </section>
  )
}

export default Publication;