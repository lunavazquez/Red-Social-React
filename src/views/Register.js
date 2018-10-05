import React, { Component } from 'react'
// import { Redirect, Link } from 'react-router-dom'
import { Button, Input } from 'react-materialize'
import './register.css'

// import './index.css'
// import 'materialize-css/dist/css/materialize.min.css'

class Register extends Component {

  onHandleRegister = event => {
    event.preventDefault();
    event.stopPropagation();
    // TODO: enviar datos al API para registro
    console.log('registrar');
    return true;
  }

  render() {
    return (
      <div className="register body-background">
        <div className="register-container">
          <form onSubmit={event => this.onHandleRegister(event)}>
            <h1 className="title">Red Social</h1>
            <Input type="text" label="Nombre" required={true} />
            <Input type="text" s={6} label="Apellido" required={true} />
            <Input type="email" label="Email" s={10} ref="login-email" required={true} />
            <Input type="password" label="password" required={true} />
            <Button waves="light" large={true} onClick={this.onHandleLogin}>
              Crear cuenta
            </Button>
          </form>
        </div>
      </div>
    );
  }
}



export default Register;
