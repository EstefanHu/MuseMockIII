import React from 'react';

import Genre from './post/genre';
import Author from './post/author'
import Credibility from './post/credibility';
import Title from './post/credibility';
import Description from './post/description';

const Feed = props => {
    const { description } = props;
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
                    <Description description={ item.description } />
                </article>
            ))}
        </section>
    )
}

export default Feed;