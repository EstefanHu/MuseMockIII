import React, { Component } from 'react';

import Post from './post';

class Feed extends Component {
    render() {
        return (
            <>
                {this.props.posts.map(item => (
                    <Post post={item} key={item.id} />
                ))}
            </>
        )
    }
}

export default Feed;