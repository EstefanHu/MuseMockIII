import React from 'react';

function Post(props) {
    return (
        <article>
            <span>
                <p>
                    <a href="javascript:filterGenre()">{props.post.genre}</a> by {props.post.author}
                </p>
                <p>Cred: {props.post.credibility}</p>
            </span>
            <h2>{props.post.title}</h2>
            <p>{props.post.description}</p>
        </article>
    )
}

export default Post;