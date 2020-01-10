import React, { Component } from 'react';

import Write from './write';
import Breakdown from './breakdown';

class Create extends Component {
    render() {
        return (
            <>
                <Breakdown />
                <Write />
                <aside></aside>
            </>
        )
    }
}

export default Create;