import "./App.css";
import NavBar from "./componenets/Navbar";
import SearchBar from "./componenets/Searchbar";
import Footer from "./componenets/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <div
        className="w-100 p-0 m-0"
        style={{ "min-height": "50vh", border: "1px solid grey" }}
      >
        Remove Me! I am in App.js
      </div>
      <Footer />
    </div>
  );
}

export default App;
