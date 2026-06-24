import Home from "./components/Home"
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const App = () => {

  const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:3000/graphql" }),
  cache: new InMemoryCache(),
});


  return (
  <ApolloProvider client={client}>
  <Home/>
  </ApolloProvider>
  )
}

export default App