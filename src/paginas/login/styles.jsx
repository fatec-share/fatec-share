import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MargemNomeApp = styled.div`
  margin-top: 200px;
  display: flex;
  flex-direction: row;
`;

export const NomeAppPrincipal = styled.div`
  color: #4a555c;
  font-size: 80px;
  font-weight: bold;
  margin-left: 200px;
`;

export const NomeAppSecundario = styled.div`
  color: #b01218;
  font-size: 80px;
  font-weight: bold;
  margin-right: 150px;
`;

export const RetanguloLogin = styled.div`
  border-radius: 10px;
  border: solid 0.5px #b5b5b5;
  margin-top: 80px;
  height: 450px;
  width: 400px;
`;

export const TextoRetangulo = styled.div`
  color: #b5b5b5;
  margin-left: 30px;
  margin-top: 30px;
`;

export const CampoInput = styled.input`
  height: 30px;
  width: 325px;
  margin-top: 30px;
  margin-left: 30px;
  border: solid 0.5px #b5b5b5;
  border-radius: 10px;
`;

export const BotaoEntrar = styled.input`
  height: 30px;
  width: 325px;
  margin-top: 60px;
  border: none;
  margin-left: 30px;
  border-radius: 10px;
  color: #7d7d7d;
  font-size: 20px;
`;

export const BotaoAbrirConta = styled(Link)`
  padding: 10px;
  width: 200px;
  margin-top: 60px;
  margin-left: 100px;
  display: inline-block;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #00c462;
  font-size: 20px;
  text-align: center;
  text-decoration: none;
`;
