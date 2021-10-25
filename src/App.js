import "./App.css";
import NavBar from "./componenets/Navbar";
import SearchBar from "./componenets/Searchbar";
import Form from "./componenets/Form";
import Footer from "./componenets/Footer";
import BrowseTrails from "./componenets/Browse-Trails";
import React from "react";
import Details from "./componenets/Details";
import Main from "./componenets/Main";
import { useGlobalStore } from "./store";

function App() {
  const currentPage = useGlobalStore((state) => state.currentPage);
  const getPage = () => {
    switch (currentPage) {
      case "landingPage":
        return <Main />;
      case "browseTrails":
        return (
          <React.Fragment>
            <SearchBar />
            <BrowseTrails />
          </React.Fragment>
        );
      case "form":
        return (
          <React.Fragment>
            <SearchBar />
            <Form />{" "}
          </React.Fragment>
        );
      case "details":
        return (
          <React.Fragment>
            <SearchBar />
            <Details />
          </React.Fragment>
        );
      default:
        return <Main />;
    }
  };
  return (
    <div className="App">
      <NavBar />
      {getPage()}
      <Footer />
    </div>
  );
}

export default App;
