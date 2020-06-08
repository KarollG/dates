import React, {Fragment, useState} from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';


const Formulario = ({createDate}) => {

    //Crear state de Citas
    const [date, updateDate]= useState({
        mascota: '',
        propietario:'',
        fecha: '',
        hora:'',
        sintomas:''
    });

    const [error, updateError]= useState(false)

    //Funcion que se ejecuta cada que el usuario escribe un input
    const updateState = e =>{
        //console.log(e.target.value);
        updateDate({
            ...date,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores
    const{mascota, propietario, fecha, hora, sintomas} = date; //destrutioning

    //Cuando el usuario presiona enviar formulario o agregar cita
    const submitDate = e => {
        e.preventDefault();

        //Validar
        if(mascota.trim() ==='' || propietario.trim() ==='' || fecha.trim() ==='' || hora.trim() ==='' || sintomas.trim() ==='' ){
            // console.log('Hay un error');
            updateError(true);  
            return;
        }
        //Eliminar el mensaje previo
        updateError(false);  

        //Asignar un Id
        date.id = uuid();

        //Crear la cita
        createDate(date);

        // Reiniciar el Form
        updateDate({
            mascota: '',
            propietario:'',
            fecha: '',
            hora:'',
            sintomas:''
        })
    }

    return ( 
        <Fragment>
            <h2> Crear Cita  </h2>

            
            {error? <p className="alerta-error">Todos los campos son obligatorios</p>  :null}

            <form
                onSubmit= {submitDate}
            >
                <label>Nombre mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={updateState}
                    value={mascota}
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                    onChange={updateState}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={updateState}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={updateState}
                    value={hora}
                />
                <label>Sintomas</label>
                <textarea 
                    className="u-full-width"                    
                    name="sintomas"
                    onChange={updateState}
                    value={sintomas}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                    onChange={updateState}
                >Agregar Cita</button>
            </form>

        </Fragment>
     );
}

Formulario.propTypes = {
    createDate: PropTypes.func.isRequired
}
 
export default Formulario;