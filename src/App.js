import './App.css';
import React from 'react';
import axios from 'axios';
import Actor from './data-models/Actor';
import Actors from './components/ActorsView';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actorsData: []
    }
  }

  render() {
    return (
      <div>
        <Actors actors={this.state.actorsData} />

      </div>
    );
  }

  componentDidMount() {
    axios.get('/Actors.json').then((result) =>{

      const newActors = result.data.map(actor=> new actor(actor.fname, actor.lname, actor.birthday, actor.img, actor.imdb))

      this.setState({ actorsData: newActors});
    } );
  }
}


export default App;


