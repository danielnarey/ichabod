import graphqlRequest from 'graphql-request';

const { GraphQLClient } = graphqlRequest;

const graphQLClient = new GraphQLClient(
  'https://wp.metamodern.design/graphql',
  { headers: {} },
);

export const gqlQuery = async (query, variables) => {
  let data;
  let error;

  try {
    data = await graphQLClient.request(query, variables);
  } catch (rejected) {
    error = rejected;
  }

  return { data, error };
};
