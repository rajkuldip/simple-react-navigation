import React, { Component } from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';

const Appcontainer = styled.div`
  width: 95%;
  height: 76px;
  background: #f3f3f3;
  padding: 0;
  box-shadow: 0 0 4px 0 rgba(0,0,0,.25);
  margin: 2.5%;
  text-transform: uppercase;
  h2 {
    padding: 29px 30px;
    margin: 0;
    font-size: 1em;
    font-weight: 400;
    float: left;
    color: #4a4a4a;
  }
`;

class App extends Component {
  render() {
    return (
      <Appcontainer>
        <h2>company name</h2>
        <Navigation />
      </Appcontainer>
    );
  }
}

export default App;
