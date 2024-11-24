import { useContext } from "react";
import "./App.css";
import DisplayMovi from "./components/DisplayMovi/DisplayMovi";
import Header from "./components/Header/Header";
import MoviSearch from "./components/MoviSearch/MoviSearch";
import { MoviContext } from "./components/Store/ReducerMovi";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Footer from "./components/Footer/Footer";

function App() {
  const { loading } = useContext(MoviContext);
  console.log(loading, "THIS IS LOADING");
  return (
    <>
      <div className="container">
        <Header></Header>
        <MoviSearch></MoviSearch>
        {loading ? <ErrorMessage></ErrorMessage> : <DisplayMovi></DisplayMovi>}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
