import { gql } from 'apollo-boost';

const getCityQuery = gql`
  {
    City {
      id
      name
    }
  }
`;

const createCityQuery = gql`
  mutation($name: String!) {
    addCity(name: $name) {
      id
      name
    }
  }
`;

export { getCityQuery, createCityQuery };