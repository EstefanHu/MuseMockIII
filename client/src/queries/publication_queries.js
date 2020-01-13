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

export { getPublicationsQuery, getPublicationQuery };