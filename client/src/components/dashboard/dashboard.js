import React, { Component } from 'react';

import Register from './register';

class Dashboard extends Component {
    render() {
        return (
            <main>
                <h1>Hello from Dashboard</h1>
                <Register />
            </main>
        )
    }
}

export default Dashboard;