import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Eric', age: 30 },
      { name: 'Corie', age: 30 },
      { name: 'Pixel', age: 35 },
    ],
    otherState: 'some other value',
  };

  switchNameHandler = newName => {
    // console.log('Was clicked');
    // this.state.persons[0].name = 'Eric EricFace';
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Corie', age: 30 },
        { name: 'Pixel', age: 12 },
      ],
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Eric', age: 30 },
        { name: event.target.value, age: 30 },
        { name: 'Pixel', age: 12 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={() => this.switchNameHandler('Eric!!')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My Hobbies: Cars, Computers, Keyboards
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Cor!')}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
