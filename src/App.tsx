import * as React from 'react';
import * as Raven from 'raven-js';
import './App.css';
const logo = require('./logo.svg');
function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React-app</h1>
    </header>
  );
}

class App extends React.Component {
  handleClick() {
    Raven.captureException('333');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro" onClick={this.handleClick}>
          To get started, edidddt <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
