import React from "react";
import NavBar from "./components/Nav";
import SignIn from "./components/user/Login";
import SignUp from "./components/user/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/products/:cat" element={<ItemListContainer />} />
          <Route path="/products/:id" element={<ItemDetailContainer />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
