import React, { Component } from 'react';

import Navigation from './navigation';
import Feed from '../layout/feed';
import Notifications from '../layout/notifications';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            feedPosts: [],
            sectors: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/home')
            .then(res => res.json())
            .then(
                res => {
                    this.setState({
                        isLoaded: true,
                        feedPosts: res.posts,
                        sectors: res.sectors
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
        const { error, isLoaded, sectors } = this.state;
        if (error) {
            return <>Error: {error.message}</>;
        } else if (!isLoaded) {
            return <>Loading...</>;
        } else {
            return (
                <>
                    <Navigation sectors={sectors} />
                    <Feed posts={this.state.feedPosts} />
                    <Notifications />
                </>
            );
        }
    }
}

export default Home;