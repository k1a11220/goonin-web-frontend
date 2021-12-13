import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const cache = new InMemoryCache();
const link = new createHttpLink({
  uri: "https://goonin-api.herokuapp.com/",
});

const client = new ApolloClient({
  cache: cache,
  link: link,
});

export default client;
