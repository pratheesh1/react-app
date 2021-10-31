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
import Help from "./componenets/Help";

function App() {
  const currentPage = useGlobalStore((state) => state.currentPage);
  const getPage = () => {
    switch (currentPage) {
      case "main":
        return <Main />;
      case "browseTrails":
        return <BrowseTrails />;
      case "form":
        return <Form />;
      case "details":
        return <Details />;
      case "help":
        return <Help />;
      default:
        return <Main />;
    }
  };
  return (
    <div className="App">
      <NavBar />
      {currentPage !== "main" ? <SearchBar /> : ""}
      {getPage()}
      <Footer />
    </div>
  );
}

export default App;
