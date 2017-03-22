import React, { Component } from 'react';
import logo from '../../public/images/icon.svg';
import styled, { ThemeProvider } from 'styled-components';
import { NavLink } from 'react-router-dom';
import Subnav from './Subnav';

const Lists = styled.ul`
  background: ${props => props.theme.background};
  list-style: none;
  margin: 0;
  padding: 0;
  @media screen and (min-width: 768px) {
      float: right;
      background: transparent;
  }
`;

const ListItem = styled.li`
  border-bottom: 1px solid ${props => props.theme.LightGrey};
  padding: 0;
  a {
    color: ${props => props.theme.color};
    text-decoration: none;
    transition: color .3s ease;
    display: inline-block;
    max-height: 50px;
    &:hover, &.active {
      color: ${props => props.theme.active};
    }
  }
  > a {
    width: 100%;
    padding: 20px;
  }
  &.settings {
    margin-right: 0;
    padding: 0;
    border-left: 1px solid ${props => props.theme.LightGrey};
    position: relative;
    .subnav-container {
      padding-top: 0;
      display: none;
    }
    &:hover {
      transition: all .3s ease;
      background: ${props => props.theme.LightGrey};
      .subnav-container {
        transition: display .3s ease;
        display: block;
      }
    }
    img {
      display: inline-block;
      padding: 5px 20px;
      height: 43px;
    }
    &:after {
      content: '>';
      position: absolute;
      right: 30px;
      top: 12px;
      font-size: 2em;
      color: #d1d1d1;
    }
  }
  @media screen and (min-width: 768px) {
      float: left;
      margin-right: 46px;
      padding: 29px 0;
      border-bottom: none;
      > a {
        padding: 0;
        width: auto;
      }
      &.settings {
        padding: 13px 25px;
        height: 50px;
        .subnav-container {
          position: absolute;
          right: 10px;
          top: 75px;
          padding-top: 10px;
        }
        img {
          padding: 0;
          height: auto;
        }
        &:after {
          content: none;
        }
      }
  }
`;

const colors = {
  background: '#FFFFFF',
  LightGrey: '#E4E4E4',
  color: '#4A4A4A',
  active:'#F26620'
}
class Navigation extends Component {
  render() {
    return (
      <ThemeProvider theme={colors}>
        <Lists>
          <ListItem><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></ListItem>
          <ListItem><NavLink to="/projects" activeClassName="active">Projects</NavLink></ListItem>
          <ListItem><NavLink to="/team" activeClassName="active">Team</NavLink></ListItem>
          <ListItem><NavLink to="/company" activeClassName="active">Company</NavLink></ListItem>
          <ListItem className="settings">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="subnav-container">
              <Subnav props={colors} />
            </div>
          </ListItem>
        </Lists>
      </ThemeProvider>
    );
  }
}

export default Navigation;
