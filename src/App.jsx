import { Route, Routes } from "react-router-dom";
import "./App.css";
import HeaderClient from "./component/headers/HeaderClient";
import Home from "./pages/client/Home";

function App() {
  return (
    <>
      <HeaderClient></HeaderClient>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
    </>
  );
}

export default App;
