import React from "react";
import NavBarTop from "./components/NavBarTop/NavBarTop";
import NavBarBottom from "./components/NavBarBottom/NavBarBottom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div>
        <NavBarTop />
        <NavBarBottom />
        <Header />
        <Main />
        <Footer />
      </div>
    </ApolloProvider>
  );
};

export default App;
