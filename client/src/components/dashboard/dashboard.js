import React, { Component } from 'react';

import Feed from '../layout/feed';
import Register from './register';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            headerPosts: []
        }
    }

    processPosts(response) {
        let responsePosts = [];
        for (let i = 0; i < response.length; i++) {
            responsePosts.push(response[i]);
        }
        this.setState({
            headerPosts: responsePosts
        });
    }

    componentDidMount() {
        fetch('http://localhost:4000/headerStories')
        .then(res => res.json())
        .then(
            res => {
            this.setState({
                isLoaded: true,
                headerPosts: res.posts
            });
            },
            error => {
            this.setState({
                isLoaded: true,
                error
            });
            }
        )
    }

    render() {
        const { error, isLoaded, headerPosts } = this.state;
        if (error) {
            return <>Error: {error.message}</>;
        } else if (!isLoaded) {
            return <>Loading...</>;
        } else {
            return (
                <>
                    <Feed posts={this.state.headerPosts} />
                </>
            );
        }
    }
}

export default Dashboard;