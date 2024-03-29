import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND_URL,
  cache: new InMemoryCache(),
});

export default client;
