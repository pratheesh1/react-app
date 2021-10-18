import "./App.css";
import NavBar from "./componenets/Navbar";
import SearchBar from "./componenets/Searchbar";
import Form from "./componenets/Form";
import Footer from "./componenets/Footer";
import BrowseTrails from "./componenets/Browse-Trails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
