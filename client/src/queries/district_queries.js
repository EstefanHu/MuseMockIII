import { gql } from 'apollo-boost';

const getDistrictQuery = gql`
  {
    District {
      id
      name
    }
  }
`;

const createDistrictQuery = gql`
  mutation($name: String!) {
    addDistrict(name: $name) {
      id
      name
    }
  }
`;

export { getDistrictQuery, createDistrictQuery };