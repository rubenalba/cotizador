import React from "react";
import styled from '@emotion/styled';
import PropTypes from "prop-types";
import {primerMayuscula} from '../Helper';

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;
const Resumen = ({ datos }) => {
  //Extraer de datos

  const { modelo, year, plan } = datos;
  if (modelo === '' || year === '' || plan === '') return null;

  return (
    <ContenedorResumen>
      <h2>Resumen cotización</h2>
      <ul>
        <li>Modelo: {primerMayuscula(modelo)}</li>
        <li>Año del vehículo: {year}</li>
        <li>Plan: {plan}</li>
      </ul>
    </ContenedorResumen>
  );
}
Resumen.propTypes = {
  datos: PropTypes.object.isRequired
}
export default Resumen;
