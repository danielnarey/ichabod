import { gqlQuery } from './gql-query.js';


export const getPostsPaginated = async ({
  size = 5,
  cursor = null,
} = {}) => {
  const query = `
    query GET_POSTS($first: Int, $after: String) {
      posts(first: $first, after: $after) {
        pageInfo {
          hasNextPage
          endCursor
        }
        edges {
          cursor
          node {
            id
            uri
            title
            date
          }
        }
      }
    }
  `;

  const response = await gqlQuery(query, { first: size, after: cursor });
  
  return response;
};
