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

export { getPostsQuery, getPostQuery };