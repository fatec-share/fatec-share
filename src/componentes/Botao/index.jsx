import React from 'react';
import { EstiloBotao, EstiloLink } from './styles';

export const Botao = ({ primario, href, texto, onClick }) => {
  return href ? (
    <EstiloLink primario={primario} href={href} onClick={onClick}>
      {texto}
    </EstiloLink>
  ) : (
    <EstiloBotao primario={primario} onClick={onClick}>
      {texto}
    </EstiloBotao>
  );
};
