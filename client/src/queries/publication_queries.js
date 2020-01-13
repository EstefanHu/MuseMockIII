import { gql } from 'apollo-boost';

const getPublicationsQuery = gql`
    {
        Publications {
            id
            title
            genre
            description
            credibility
        }
    }
`;

const getPublicationQuery = gql`
    query($id: ID) {
        Publication(id: $id) {
            id
            title
            genre
            content
            credibility
            user {
                id
                firstName
                lastName
            }
        }
    }
`;

const createPublicationQuery = gql`
    mutation($title: String!, $genre: String!, $description: String!, $content: String!, $authorId: ID!) {
        addPublication(title: $title, genre: $genre, description: $description, content: $content, authorId: $authorId) {
            id
            title
        }
    }
`;

export { getPublicationsQuery, getPublicationQuery, createPublicationQuery };