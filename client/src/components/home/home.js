import React, { Component } from 'react';

import Navigation from './navigation';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            feedPosts: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/home')
            .then(res => res.json())
            .then(
                res => {
                    this.setState({
                        isLoaded: true,
                        feedPosts: res.posts
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
        const { error, isLoaded, feedPosts } = this.state;
        if (error) {
            return <>Error: {error.message}</>;
        } else if (!isLoaded) {
            return <>Loading...</>;
        } else {
            return (
                <>
                    <Navigation sectors={feedPosts} />
                    <section>
                        <h1>Hello Feed</h1>
                    </section>
                </>
            );
        }
    }
}

export default Home;