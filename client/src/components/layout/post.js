import React from 'react';

function Post(props) {
    return (
        <article>
            <p>{props.post.genre} by {props.post.author}</p>
            <p>{props.post.credibility}</p>
            <h3>{props.post.title}</h3>
            <p>{props.post.description}</p>
        </article>
    )
}

export default Post;