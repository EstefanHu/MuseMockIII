import React, { Component } from 'react';

import Counter from './counter';

class Test extends Component {
    render() {
        return (
            <div>
                <h1>Hello From Test</h1>
                <Counter />
            </div>
        )
    }
}

export default Test;