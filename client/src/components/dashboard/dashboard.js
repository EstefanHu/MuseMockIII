import React, { Component } from 'react';

import Register from './register';

class Dashboard extends Component {
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