import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Fornulario'; 
import Cita from './components/Cita'; 


function App() {

  //citas en localstorage
  let datesInitials = JSON.parse(localStorage.getItem('dates'));
  if(!datesInitials){
    datesInitials = [];
  }

  //Arreglo de citas
  // const [dates, saveDates] = useState(datesInitials);
  // Arreglo de citas
  const [dates, saveDates] = useState(datesInitials ? datesInitials : []);

  //useEffect para relaizar ciertas operaciones cuando el  state cambia
  useEffect(() => {
      let datesInitials = JSON.parse(localStorage.getItem('dates'));

    // console.log('Documento listo o algo paso con las citas ');
      if(datesInitials){
        localStorage.setItem('dates', JSON.stringify(dates) )
      } else {
        localStorage.setItem('dates', JSON.stringify([]));
      }
  }, [dates] );

  //Funnciòn citas actuales y agregar la nueva
  const createDate = date => {
    // console.log(date);
    saveDates([
      ...dates,
      date
    ]);
  }

  //Funciòn que elimina una cita por su id 
  const deleteDate = id => {
    // console.log(id);
    const newDates = dates.filter(date => date.id !== id);
    saveDates(newDates);
  }

  //Mensaje condicional
  // console.log(dates.length); //Un ternario en vez de esto
  const titulo = dates.length === 0 ? 'No hay citas' :'Administra tus citas';

  return (
    <Fragment>
        <h1>Administrador de Pacientes</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario
                createDate = {createDate}
              />
            </div>
            <div className="one-half column">
              <h2>{titulo}</h2>
              {dates.map( date => (
                <Cita
                  key= {date.id}
                  date = {date}
                  deleteDate = {deleteDate}
                />
              ))}
            </div>
          </div>
        </div>

    </Fragment>
  );
}

export default App;
