import './App.css';
import React from 'react';
import axios from 'axios';
import Actor from './data-models/Actor';
import Actors from './components/ActorsView';
import MoviesPage from './components/MoviesPage';
import { Nav, Navbar } from 'react-bootstrap';
import { HashRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actorsData: []
    }
  }

  render() {
    return (
    <HashRouter >

      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/#/home">Dana's Movie App</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/#/actors">Actors</Nav.Link>
              <Nav.Link href="/#/movies">Movies</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

    
        <Switch>
          <Route path="/actors">
            <Actors actors={this.state.actorsData} /> 
          </Route>

          <Route path="/movies">
            <MoviesPage />    
         </Route>

          <Route path="/home">
            <LandingPage/>
          </Route>
        </Switch>


      </div>
        </HashRouter >

    );
  }

  componentDidMount() {
    axios.get('/Actors.json').then((result) =>{

      const newActors = result.data.map(actor=> new Actor(actor.fname, actor.lname, actor.birthday, actor.img, actor.imdb))

      this.setState({ actorsData: newActors});
   } );
  }
}


export default App;



