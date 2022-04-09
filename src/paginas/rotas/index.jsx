import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../cadastro";
import { Home } from "../home";
import { Login } from "../login";


const PaginaRotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default PaginaRotas;
