import Home from "./components/Home"
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const App = () => {

  const client = new ApolloClient({
  link: new HttpLink({ uri: import.meta.env.VITE_GRAPHQL_URL}),
  cache: new InMemoryCache(),
});


  return (
  <ApolloProvider client={client}>
  <Home/>
  </ApolloProvider>
  )
}

export default App