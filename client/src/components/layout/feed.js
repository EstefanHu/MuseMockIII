import React, { Component } from 'react';

import Post from './post';

class Feed extends Component {
    render() {
        return (
            <section>
                {this.props.posts.map(item => (
                    <Post post={item} key={item.id} />
                ))}
            </section>
        )
    }
}

export default Feed;