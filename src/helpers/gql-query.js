import graphqlRequest from 'graphql-request';

const { GraphQLClient } = graphqlRequest;

const graphQLClient = new GraphQLClient(
  'https://wp.metamodern.design/graphql',
  { headers: {} },
);

export const gqlQuery = (query, variables) => {
  let response;

  try {
    response = graphQLClient.request(query, variables);
  } catch (error) {
    response = { error };
  };
  
  return response;
};
