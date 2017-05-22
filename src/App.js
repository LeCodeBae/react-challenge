import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      joke: ""
    }
  }
  createJoke(e){
    e.preventDefault()
    let that = this
    axios.get('https://api.icndb.com/jokes/random')
    .then((response)=>{
      that.setState(
        {joke: response.data.value.joke}
      )
      console.log(response.data)
    }).catch((err)=>{
      console.log(err);
    })
    
  }
  render() {
    return (
      <div className="App">
      <h1>Chuck Norris Joke Generator</h1>
      <form onSubmit={(e)=>{this.createJoke(e)}}>
      <button type="submit">Generate</button>
      <h3>{this.state.joke}</h3>
      </form>
      </div>
    );
  }
}

export default App;
