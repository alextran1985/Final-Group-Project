import React, { useState, useRef, useEffect } from "react";
import NavBarTop from "./components/NavBarTop/NavBarTop";
import NavBarBottom from "./components/NavBarBottom/NavBarBottom";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import RecipesComponent from "./pages/RecipesComponent";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";

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
  const [topPadding, setTopPadding] = useState(0);
  const fullNavbarRef = useRef(null);

  useEffect(function () {
    const fullNavbarHeight = fullNavbarRef.current.scrollHeight;
    setTopPadding(fullNavbarHeight);
  }, []);

  return (
    <ApolloProvider client={client}>
      <div className="full-navbar" ref={fullNavbarRef}>
        <NavBarTop />
        <NavBarBottom />
      </div>
      <div style={{ paddingTop: `${topPadding}px` }}>
        <Outlet />
      </div>
      <Footer />
    </ApolloProvider>
  );
};

export default App;
