import React from 'react';


function App() {
    var [primerNumero, setPrimerNumero] = React.useState(Number)
    var [segundoNumero, setSegundoNumero] = React.useState(Number)
    var resultado = 0;

    const guardarDatos1 = (e) => {
      
      console.log(primerNumero)
    }
    const guardarDatos2 = (e) => {

      console.log(segundoNumero)
    }
    const sumarDatos = () => {
      resultado = parseInt(primerNumero) + parseInt(segundoNumero)
      alert('El resultado es: ' + resultado)
    }
    const restarDatos = () => {
      resultado = parseInt(primerNumero) - parseInt(segundoNumero)
      alert('El resultado es: ' + resultado)
    }
    const multiplicarDatos = () => {
      resultado = parseInt(primerNumero) * parseInt(segundoNumero)
      alert('El resultado es: ' + resultado)
    }
    const dividirDatos = () => {
      resultado = parseInt(primerNumero) / parseInt(segundoNumero)
      alert('El resultado es: ' + resultado)
    }

    
  return (
    <div className="container mt-5">

      <h1 className="text-center">Calculadora simple</h1>
        <hr/>
        <div className="row">
          <div className="col-8">
            <form onSubmit = { guardarDatos1 }>
            <div className="form-inline"> 
              <input 
                  className = "form-control mb-2 mx-2"
                  type = "number"
                  placeholder = "Ingrese numero"
                  onChange = {(e) => setPrimerNumero(e.target.value)}
                />
              <button type = "button" className = "btn btn-primary mb-2" onClick = {() => guardarDatos1()}>Aceptar</button>
              
            </div>
            </form>
            <form onSubmit = {guardarDatos2}>
            
              <div className="form-inline">
                <input 
                  className = "form-control mb-2 mx-2"
                  type = "number"
                  placeholder = "Ingrese numero"
                  onChange = {(e) => setSegundoNumero(e.target.value)}
              />
                <button type = "button" className = "btn btn-primary mb-2" onClick = {() => guardarDatos2()}>Aceptar</button>
              </div>
            </form>
            </div>
          </div>

        

        <hr/>
        <form onSubmit = {sumarDatos}>
          <div className = "form-inline">
          <img src= "/imagen/Suma.png" alt="imagen"/>
            <button type = "button" className = "btn btn-warning float-right mx-5" onClick = {() => sumarDatos()}>Sumar</button>
          </div>
        </form>

        <hr/>
        <form onSubmit = {restarDatos}>
          <div className = "form-inline">
          <img src= "/imagen/Resta.png" alt="imagen"/>
            <button type = "button" className = "btn btn-warning float-right mx-5" onClick = {() => restarDatos()}>Restar</button>
          </div>
        </form>

        <hr/>
        <form onSubmit = {multiplicarDatos}>
          <div className = "form-inline">
          <img src= "/imagen/Multiplicacion.png" alt="imagen"/>
            <button type = "button" className = "btn btn-warning float-right mx-5" onClick = {() => multiplicarDatos()}>Multiplicar</button>
          </div>
        </form>

        <hr/>
        <form onSubmit = {dividirDatos}>
          <div className = "form-inline">
          <img src= "/imagen/Divicion.png" alt="imagen"/>
            <button type = "button" className = "btn btn-warning float-right mx-5" onClick = {() => dividirDatos()}>Dividir</button>
          </div>
        </form>

    </div>
    
  );
}

export default App;
