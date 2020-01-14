import React from 'react';

const Feed = props => {
    return (
        <section id="feed">
            {props.posts.map(item => (
                <article key={ item.id } >
                    <span>
                        <p>
                            <a href="/" className="genre">{item.genre}</a> by {item.author}
                        </p>
                        <p>Cred: {item.credibility}</p>
                    </span>
                    <h2><a href="/post/{item.id}">{item.title}</a></h2>
                    <p className="description">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.description}</p>
                </article>
            ))}
        </section>
    )
}

export default Feed;