import React, { Component } from 'react';

import Info from './info';
import Publication from './publication';

class Read extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return (
      <>
        <Info />
        <Publication />
      </> 
    )
  }
}

export default Read;