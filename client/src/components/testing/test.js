import React, { Component } from 'react';

import Counter from './counter';
import FunctionClick from './functionClick';
import ClassClick from './classClick';

class Test extends Component {
    render() {
        return (
            <div>
                <h1>Hello From Test</h1>
                <Counter />
                <FunctionClick />
                <ClassClick />
            </div>
        )
    }
}

export default Test;