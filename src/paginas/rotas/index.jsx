import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../cadastro";
import { Login } from "../login";


const PaginaRotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
};
export default PaginaRotas;
