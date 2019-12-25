import React, {Component} from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const TOP_STORIES_QUERY = gql`
  query TopQuery {
    dummypost {
      title
      description
    }
  }
`;

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Query query={TOP_STORIES_QUERY}>
          {
            ({loading, error, data}) => {
              if(loading) return <h4>Loading...</h4>
              if(error) console.log(error);
              console.log(data)
              return <h4>Test</h4>
            }
          }
        </Query>
      </div>
    )
  }
}

export default Dashboard