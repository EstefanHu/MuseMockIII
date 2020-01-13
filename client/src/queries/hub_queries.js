import { gql } from 'apollo-boost';

const getHubQuery = gql`
  {
    Hub {
      id
      name
    }
  }
`;

const createHubQuery = gql`
  mutation($name: String!) {
    addHub(name: $name) {
      id
      name
    }
  }
`;

export { getHubQuery, createHubQuery };