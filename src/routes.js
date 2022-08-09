import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";

import "./assets/css/bootstrap-edit.css";
import "./assets/css/styles.css";
import Envio from "./pages/Envio";
import Configuracao from "./pages/Configuracao";

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/envio" element={<Envio />}></Route>
        <Route path="/configuracao" element={<Configuracao />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
