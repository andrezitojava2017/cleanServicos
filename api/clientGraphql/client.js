import {ApolloClient, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://webservices.jumpingcrab.com/graphql',
  cache: new InMemoryCache(),
});
export default client;
