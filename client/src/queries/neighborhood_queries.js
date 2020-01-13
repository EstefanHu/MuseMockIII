import { gql } from 'apollo-boost';

const getNeighborhoodQuery = gql`
  {
    Neighborhood {
      id
      name
    }
  }
`;

const createNeighborhoodQuery = gql`
  mutation($name: String!) {
    addNeighborhood(name: $name) {
      id
      name
    }
  }
`;

export { getNeighborhoodQuery, createNeighborhoodQuery };