import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: "",
    }
  }
  componentWillMount() {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=FhONhKAslwRSmati7TeGTo3gAD90TwBP8UTen4MM")
    // function (response)
    .then((response) => {
      console.log(response);
      this.setState({results: response.data  })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={this.state.results.hdurl} className="App-logo" alt="logo" />
          <h2>{this.state.results.title}</h2>
        </div>
        <p className="App-intro">
          {this.state.results.explanation}
        </p>
      </div>
    );
  }
}

export default App;
