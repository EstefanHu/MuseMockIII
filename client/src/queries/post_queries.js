import { gql } from 'apollo-boost';

const getSummaryPostsQuery = gql`
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

const getPostsQuery = gql`
    {
        Posts {
            id
            title
            genre
            content
            credibility
        }
    }
`;

export { getSummaryPostsQuery, getPostsQuery };