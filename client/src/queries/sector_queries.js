import { gql } from 'apollo-boost';

const getSectorQuery = gql`
  {
    Sector {
      id
      name
    }
  }
`;

const createSectorQuery = gql`
  mutation($name: String!) {
    addSector(name: $name) {
      id
      name
    }
  }
`;

export { getSectorQuery, createSectorQuery };