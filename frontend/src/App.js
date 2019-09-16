import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import "./styles/styles.css";

class App extends Component {
  render() {
  return (
      <div>
        <Navbar className="App-Navbar" bg="primary" variant="dark">
          <Navbar.Brand href="/"><span role="img" aria-label="Books">📚</span></Navbar.Brand>
        </Navbar>
    </div>
  );
}
}

export default App;
