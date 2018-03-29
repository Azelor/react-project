import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28},
      { name: 'Kaarel', age: 27},
      { name: 'Jaanus', age: 24}
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    // DONT DO THIS: this.state.persons[0].name = 'Maximillian';
    this.setState({persons: 
      [
        { name: newName, age: 28},
        { name: 'Kaarel', age: 27},
        { name: 'Jaanus', age: 24}
      ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: 
      [
        { name: 'Max', age: 28},
        { name: event.target.value, age: 27},
        { name: 'Jaanus', age: 24}
      ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximillian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangedHandler}>My hobbies: Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    // above code compiles as this here:
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "does this work now?"));
  }
}

export default App;
