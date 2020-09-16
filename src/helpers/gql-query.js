import graphqlRequest from 'graphql-request';

const { GraphQLClient } = graphqlRequest;

const graphQLClient = new GraphQLClient(
  'https://wp.metamodern.design/graphql',
  { headers: {} },
);

export const gqlQuery = async (query, variables) => {
  let response;

  try {
    response = await graphQLClient.request(query, variables);
  } catch (error) {
    response = { error };
  }

  return response;
};
