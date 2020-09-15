import { get } from 'svelte/store';
import { loadedPosts } from '../store.js';
import { gqlQuery } from './gql-query.js';


export const getPostByUri = async (uri) => {
  const data = get(loadedPosts).get(uri);

  if (data) {
    return ({ data });
  }

  const query = `
    query GET_POST($uri: ID!) {
      post(id: $uri, idType: URI) {
        id
        uri
        title
        author
        date
        content
      }
    }
  `;

  const response = await gqlQuery(query, { uri });

  if (response.data) {
    loadedPosts.update((mp) => mp.set(uri, response.data));
  }

  return response;
};
