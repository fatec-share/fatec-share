import React from 'react'
import { EstiloBotao, EstiloLink } from './styles';


export const Botao = ({ primario, href, texto }) => {
  return (
    href
      ? <EstiloLink primario={primario} href={href}>{texto}</EstiloLink>
      : <EstiloBotao primario={primario}>{texto}</EstiloBotao>
  );
}
