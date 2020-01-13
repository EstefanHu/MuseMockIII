import { gql } from 'apollo-boost';

const getUserQuery = gql`
  {
    User {
      id
      firstName
      lastName
      email
    }
  }
`;

export { getUserQuery };