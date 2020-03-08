import React, { Component } from 'react';

import PetList from './PetList';
import AddPet from './AddPet';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: [],
    };

    this.fetchPets = this.fetchPets.bind(this);
    this.createPet = this.createPet.bind(this);
  }

  componentDidMount() {
    this.fetchPets();
  }

  fetchPets() {
    fetch('/pets')
      .then(res => res.json())
      .then(pets => this.setState({ pets }));
  }

  createPet(pet) {
    fetch('/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pet)
    })
      .then(this.fetchPets)
      .catch(console.log);
  }

  render() {
    const { pets } = this.state;
    return (
      <div>
        <h1>Rate My Pet</h1>
        <AddPet createPet={this.createPet} />
        <PetList pets={pets} />
      </div>
    );
  }
}

export default App;