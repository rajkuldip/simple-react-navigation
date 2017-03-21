import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import './index.css';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Company from './components/Company';
import Team from './components/Team';

const Navcontainer = styled.div`
  width: 100%;
  margin: 0;
  background: #f3f3f3;
  padding: 0;
  text-transform: uppercase;
  h2 {
    padding: 29px 30px;
    margin: 0;
    font-size: 1em;
    font-weight: 400;
    color: #4a4a4a;
  }
  @media screen and (min-width:768px) {
    width: 95%;
    height: 76px;
    box-shadow: 0 0 4px 0 rgba(0,0,0,.25);
    margin: 2.5%;
    h2 {
      float: left;
    }
  }
`;
const Maincontainer = styled.div`
  margin: 2.5%;
`;

ReactDOM.render(
  <Router history={browserHistory}>
    <div>
      <Navcontainer>
        <h2>company name</h2>
        <Navigation />
      </Navcontainer>
      <Maincontainer>
        <Redirect from='/' to='/dashboard' />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/projects" component={Projects} />
        <Route path="/team" component={Team} />
        <Route path="/company" component={Company} />
      </Maincontainer>
    </div>
  </Router>,
  document.getElementById('root')
);
