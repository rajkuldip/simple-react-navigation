import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Company from './components/Company';
import Team from './components/Team';

describe("Layout Rendering Test", () => {
  it('Dashboard renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard />, div);
  });
  it('Projects renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Projects />, div);
  });
  it('Company renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Company />, div);
  });
  it('Team renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Team />, div);
  });
})
