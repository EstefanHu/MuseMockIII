import React from 'react';

import Post from './post';

const Feed = props => {
    return (
        <>
            {props.posts.map(item => (
                <Post post={item} key={item.id} />
            ))}
        </>
    )
}

export default Feed;