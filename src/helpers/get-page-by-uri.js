import { get } from 'svelte/store';
import { loadedPages } from '../store.js';
import { gqlQuery } from './gql-query.js';


export const getPostByUri = async (uri) => {
  const data = get(loadedPages).get(uri);

  if (data) {
    return ({ data });
  }

  const query = `
    query GET_PAGE($uri: ID!) {
      page(id: $uri, idType: URI) {
        id
        uri
        title
        date
        content
      }
    }
  `;

  const response = await gqlQuery(query, { uri });
  
  if (response.data) {
    loadedPages.update((mp) => mp.set(uri, response.data));
  }
  
  return response;
};
