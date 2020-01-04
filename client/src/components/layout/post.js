import React, { Component } from 'react';

function Post(props) {
    return (
        <article>
            <h3>{props.post.title}</h3>
            <p>{props.post.description}</p>
        </article>
    )
}

export default Post;