import React, { Component } from 'react';

import Feed from '../layout/feed';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            headerPosts: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/dashboard')
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
                    <section className="left" ></section>
                    <Feed posts={headerPosts} />
                    <aside></aside>
                </>
            );
        }
    }
}

export default Dashboard;