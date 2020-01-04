import React, { Component } from 'react';

import Register from './register';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <>
                <h1>Hello from Dashboard</h1>
                <Register />
            </>
        )
    }
}

export default Dashboard;