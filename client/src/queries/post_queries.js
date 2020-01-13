import { gql } from 'apollo-boost';

const getPostsQuery = gql`
    {
        Posts {
            id
            title
            genre
            description
            credibility
        }
    }
`;

const getPostQuery = gql`
    query($id: ID) {
        Post(id: $id) {
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

const createPostMutation = gql`
    mutation($title: String!, $genre: String!, $description: String!, $content: String!, $authorId: ID!) {
        addPost(title: $title, genre: $genre, description: $description, content: $content, authorId: $authorId) {
            id
            title
        }
    }
`;

export { getPostsQuery, getPostQuery, createPostMutation };