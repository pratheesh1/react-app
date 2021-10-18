import "./App.css";
import NavBar from "./componenets/Navbar";
import SearchBar from "./componenets/Searchbar";
import Form from "./componenets/Form";
import Footer from "./componenets/Footer";
import BrowseTrails from "./componenets/Browse-Trails";
import { useGlobalStore } from "./store";
import React from "react";
import Details from "./componenets/Details";

function App() {
  const currentPage = useGlobalStore((state) => state.currentPage);
  const getPage = () => {
    switch (currentPage) {
      case "landingPage":
        return <React.Fragment></React.Fragment>;
      case "browseTrails":
        return <BrowseTrails />;
      case "form":
        return <Form />;
      case "details":
        return <Details />;
      default:
        return;
    }
  };
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      {getPage()}
      <Footer />
    </div>
  );
}

export default App;
