import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Project } from "./pages/Project";
import { Details } from "./pages/Details";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Project/>} ></Route>
          <Route path={"/details/:id"}  element={<Details/>} ></Route>
            
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
