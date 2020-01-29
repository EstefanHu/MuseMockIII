import React, { Component } from 'react';

import Feed from '../layout/feed';
import Notifications from '../layout/notifications';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            feedPosts: [],
            notifications: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/home/')
            .then(res => res.json())
            .then(
                res => {
                    this.setState({
                        isLoaded: true,
                        feedPosts: res.posts,
                        notifications: res.notifications
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
        const { error, isLoaded, feedPosts, notifications } = this.state;
        if (error) {
            return <>Error: {error.message}</>;
        } else if (!isLoaded) {
            return <>Loading...</>;
        } else {
            return (
                <>
                    <Feed posts={feedPosts} />
                    <Notifications content={notifications} />
                </>
            );
        }
    }
}

export default Home;