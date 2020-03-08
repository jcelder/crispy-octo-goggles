import React, { Component } from 'react';

class AddPet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      breed: '',
      rating: 0,
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onInputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  onSubmitHandler(event) {
    const { createPet } = this.props;
    event.preventDefault();

    createPet(this.state);
    this.setState({
      name: '',
      breed: '',
      rating: 0,
    });
  }

  render() {
    const { name, breed, rating } = this.state;

    const generateOptions = (maxRatimng) => {
      const options = [];
      for (let i = 0; i <= 10; i++) {
        options.push(<option key={'asdf' + i} value={i}>{i}</option>);
      }
      return options;
    };

    return (
      <div>
        <h2>Add Your Pet</h2>
        <form onSubmit={this.onSubmitHandler}>
          <label>Pet Name:</label>
          <input 
            type="text" 
            name="name" 
            value={name}
            onChange={this.onInputChange}
            ></input>
          <label>Pet Breed:</label>
          <input 
            type="text" 
            name="breed" 
            value={breed}
            onChange={this.onInputChange}
            ></input>
          <label>Rate Your Pet's Cuteness:</label>
          <select name="rating" value={rating} onChange={this.onInputChange}>
            {generateOptions()}
          </select>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}


export default AddPet