import React, { Component } from 'react';

import Feed from '../layout/feed';
import Info from './info';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            userPosts: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/profile')
        .then(res => res.json())
        .then(
            res => {
                this.setState({
                    isLoaded: true,
                    userPosts: res.posts,
                    user: res.user
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
        const { error, isLoaded, userPosts, user } = this.state;
        if (error) {
            return <>Error: {error.message}</>;
        } else if (!isLoaded) {
            return <>Loading...</>;
        } else {
            return (
                <>
                    <Info user={user} />
                    <Feed posts={userPosts} />
                    <aside></aside>
                </>
            );
        }
    }
}

export default Profile;