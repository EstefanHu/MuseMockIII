import React, { Component } from 'react';

import Post from './post';

class Feed extends Component {
    render() {
        return (
            <>
                <h1>hello feed</h1>
                this.props.posts.map(post => (
                    <Post post={post} />
                ));
            </>
        )
    }
}

export default Feed;