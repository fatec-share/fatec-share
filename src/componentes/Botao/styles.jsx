import styled from "styled-components";

export const EstiloBotao = styled.button`
  width: 100%;
  padding: 16px 0px;
  margin-top: 25px;
  border: none;
  border-radius: 8px;
  outline: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  color: ${props => props.primario ? '#2b134b' : '#00ff88'};
  background: ${props => props.primario ? '#00ff88' : '#2b134b'};
  cursor: pointer;
  box-shadow: 0px 10px 40px -12px #00ff8052;


  :hover {
    opacity: 0.6;
    transition: 0.3s;
  }

  @media only screen and(max-width: 950px) {
    width: 85%
  }
`;

export const EstiloLink = styled.a`
  width: 100%;
  padding: 16px 0px;
  margin-top: 25px;
  border: none;
  border-radius: 8px;
  outline: none;
  text-transform: uppercase;
  font-size:12px;
  font-weight: 800;
  letter-spacing: 2px;
  color: ${props => props.primario ? '#2b134b' : '#00ff88'};
  background: ${props => props.primario ? '#00ff88' : '#2b134b'};
  cursor: pointer;
  box-shadow: 0px 10px 40px -12px #00ff8052;
  text-decoration: none;
  text-align: center;

  :hover {
    opacity: 0.6;
    transition: 0.3s;
  }

  @media only screen and(max-width: 950px) {
    width: 85%
  }
`;
