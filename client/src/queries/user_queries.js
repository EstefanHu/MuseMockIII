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

const createUserQuery = gql`
  mutation($firstName: String!, $lastName: String!, $email: String, $password: password) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      id
      firstName
      lastName
    }
  }
`;

export { getUserQuery, createUserQuery };