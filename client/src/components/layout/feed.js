import React from 'react';

import Genre from './post/genre';
import Credibility from './post/credibility';
import Title from './post/title';
import Description from './post/description';

const Feed = props => {
    return (
        <section style={ feed } >
            {props.posts.map(item => (
                <article key={ item.id } style={ article } >
                    <span style={ header } >
                        <p>
                            <Genre genre={ item.genre } /> by { item.author }
                        </p>
                        <Credibility credibility={ item.credibility } />
                    </span>
                    <a href="/post/{item.id}" style={ title } >
                        <Title title={ item.title } />
                    </a>
                    <Description description={ item.description } />
                </article>
            ))}
        </section>
    )
}

const feed = {
    width: '600px',
}

const article = {
    borderRadius: '5px',
    width: '600px',
    margin: '0px auto 35px auto',
    padding: '20px 25px',
    boxShadow: '12px 12px 12px 0 rgba(0, 0, 0, 0.05)',
    fontSize: '1rem',
    color: 'rgb(61, 61, 61)',
    backgroundColor: 'rgb(255, 255, 255)'
}

const header = {
    display: 'flex',
    justifyContent: 'space-between'
}

const title = {
    color: 'rgb(61, 61, 61)',
    textDecoration: 'none'
}

export default Feed;