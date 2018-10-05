import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Navbar, NavItem, Card, Input, Button } from 'react-materialize'
import './home.css'

const defaultComments = [{

  name: 'Ana García',
  comment: 'Hola, espero que esten muy bien!'
}, {
  name: 'Jesús Cardenas',
  comment: 'Estoy conectado!!'
}, {
  name: 'Adriana Luna',
  comment: 'Hello World'
}, {
  name: 'Uriel Rodriguez',
  comment: 'Todo bien :)'
}];

class Home extends Component {
  constructor() {
    super()
    this.state = {
      profileImage: '',
      fullName: '',
      isLogout: 'false',
      feed: []
    }

    // this.onLogout = this.onLogout.bind(this);
    return true;

  }


  componentWillMount() {
    const fbData = JSON.parse(localStorage.getItem('fbData'));
    const googleData = JSON.parse(localStorage.getItem('googleData'));

    const feed = defaultComments;

    if (fbData) {
      console.log(fbData)
      return this.setState({ profileImage: fbData.picture, fullname: fbData.name, feed })
    } else if (googleData) {
      console.log(googleData)
      return this.setState({ profileImage: googleData.picture, fullname: googleData.name, feed })
    }
  }


  renderFeed = () => {
    return this.state.feed.map((feed, index) => {
      return (
        // key a cada tarjeta, un identificador
        <Card title={feed.name} key={index}>
          <p>{feed.comment}</p>
        </Card>
      )
    })
  }

  // onLogout(e) {
  //   localStorage.clear();
  //   this.setState({ isLogout: true });
  // }

  render() {
    if (this.state.isLogout) {
      return (<Redirect to="/" />);
    }
    return (
      <div className="home body-background">
        <Navbar brand="Red Social" className="title" right>
          <NavItem>
            <img className="circle foto-usuario" src={this.state.profileImage} alt={this.state.fullname} />
          </NavItem>
          <NavItem>{this.state.fullname}</NavItem>
          <NavItem >
            Cerrar sesión
          </NavItem>
        </Navbar>

        <div className="text-area">
          <Input></Input>
          <Button className="btn-publicar">Publicar</Button>
        </div>

        <section>
          {this.state.feed.length ? this.renderFeed() : ''}
        </section>
      </div>
    )
  }
}

export default Home

