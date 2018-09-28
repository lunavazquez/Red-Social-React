import React, { Component } from 'react'
// import { Redirect, Link } from 'react-router-dom'
import { Input, Button } from 'react-materialize'

import './index.css'
import 'materialize-css/dist/css/materialize.min.css'

class Register extends Component {
  render() {

    return (
      <div className="registro">
        <Input type="text" placeholder="Nombre" />
        <Input type="text" s={6} placeholder="Apellido" />
        {/* <Input s={12} label="disabled" defaultValue="I am not editable" disabled /> */}
        <Input type="email" label="Email" />
        <Input type="password" label="password" />
        <Button waves='light' node='a' href='../views/Home.js'> Enviar </Button>
      </div>
    );
  }
}



export default Register;
