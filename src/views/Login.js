import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import { Redirect, Link } from 'react-router-dom'
import { Button, Input } from 'react-materialize'

import './index.css'
import 'materialize-css/dist/css/materialize.min.css'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLogged: false,
      social: ''
    }

    this.responseFacebook = this.responseFacebook.bind(this);
    this.responseGoogle = this.responseGoogle.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  responseFacebook(response) {
    // console.log(response)
    localStorage.setItem("fbData", JSON.stringify({
      token: response.token,
      email: response.email,
      name: response.name,
      picture: response.picture.data.url,
      social: 'fb'
    }));

    this.setState({ isLogged: true });
  }

  responseGoogle(response) {
    localStorage.setItem("googleData", JSON.stringify({
      token: response.token,
      email: response.profileObj.email,
      name: response.profileObj.name,
      picture: response.profileObj.imageUrl,
      social: 'google'
    }));
    this.setState({ isLogged: true });
    console.log(response)
  }

  onFailure(error) {
    console.log(error)
  }

  onHandleLogin = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const email = this.refs['login-email'].state.value;
    const password = this.refs['login-password'].state.value;

    console.log(email.length > 0 && password.length > 0)

    if (email.length > 0 && password.length > 0) {
      this.setState({ isLogged: true });
    } else {
      return alert('Email o contraseña invalidos');
    }
  }

  render() {

    if (this.state.isLogged) {
      return (<Redirect to="/home/" />);
    }

    return (
      <div className="Login">
        <div className="Login-box">
          {/* <div className="card"> */}
          {/* <CardPanel s={10} className="card teal lighten-5 black-text"> */}
          <form onSubmit={this.onHandleLogin}>
            <Input type="email" label="Email" s={10} ref="login-email" />
            <Input type="password" label="password" s={10} ref="login-password" />
            <Button className=" register btn-large" > Login </Button>
            <Link className="register btn-large" to={'/Register'}> Registro</Link>
          </form>
          <br></br>
          <FacebookLogin
            appId="334348797311987"
            autoload={false}
            fields="name, email, picture.width(120)"
            callback={this.responseFacebook}
            onFailure={this.onFailure}
            textButton="   Login With Facebook"
            cssClass="waves-effect weves-light btn blue darken-1 btn-large"
            icon="fab fa-facebook-square" />
          {/* <button className="waves-effect weves-light btn blue darken-1 btn-large" id="facebook">
                <i class="fab fa-facebook-square"></i>
                acebook */}
          {/* <i className="fab fa-facebook-f"></i> */}
          {/* <i className="fa fa-facebook" aria hidden="true"></i> */}
          {/* </button> */}
          <br></br>

          <GoogleLogin
            clientId="958939502997-ooe2tdhlcimkhkobf6ge76ttirhvsjkp.apps.googleusercontent.com"
            autoLoad={false}
            onSuccess={this.responseGoogle}
            onFailure={this.onFailure}
            className="waves-effect weves-light btn red darken-2 btn-large">
            <i className="fab fa-google"></i>
            <span>Iniciar Sesion</span>
          </GoogleLogin>



        </div>
      </div >
    );
  }
}
export default Login;
