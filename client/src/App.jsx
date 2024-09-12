import React from "react";
import NavBarTop from "./components/NavBarTop/NavBarTop";
import NavBarBottom from "./components/NavBarBottom/NavBarBottom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import { Outlet } from "react-router-dom";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <NavBarTop />
        <NavBarBottom />
        {/* <Outlet /> */}
        <Header />
        <Main />
        <Footer />
      </div>
    </ApolloProvider>
  );
};

export default App;
