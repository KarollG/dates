import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({date, deleteDate}) => (
    <div className= "cita">
        <p>Mascota: <span>{date.mascota}</span></p>
        <p>Dueño: <span>{date.propietario}</span></p>
        <p>Fecha: <span>{date.fecha}</span></p>
        <p>Hora: <span>{date.hora}</span></p>
        <p>Sintomas: <span>{date.sintomas}</span></p>   

        <button
            className = " button eliminar u-full-width"
            onClick = {() => deleteDate(date.id)}
        >Eliminar &times;</button>
    </div>
);
 
Cita.prototype = {
    date: PropTypes.object.isRequired, 
    deleteDate: PropTypes.func.isRequired
}

export default Cita;