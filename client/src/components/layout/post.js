import React from 'react';

function Post(props) {
    return (
        <article>
            <span>
                <p>
                    <a href="javascript:filterGenre()" className="genre">{props.post.genre}</a> by {props.post.author}
                </p>
                <p>Cred: {props.post.credibility}</p>
            </span>
            <h2><a href="/post/{props.post.id}">{props.post.title}</a></h2>
            <p className="description">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.post.description}</p>
        </article>
    )
}

export default Post;