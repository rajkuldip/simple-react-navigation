import React, { Component } from 'react';
import logo from './icon.svg';
import styled from 'styled-components';
import Subnav from './Subnav';

const Lists = styled.ul`
  float: right;
  list-style: none;
  margin: 0;
  padding: 0;
  > li {
    float: left;
    margin-right: 46px;
    padding: 29px 0;
    a {
      color: #4a4a4a;
      text-decoration: none;
      transition: color .3s ease;
      display: inline-block;
      max-height: 50px;
      &:hover {
        color: #F26620;
      }
    }
    &.settings {
      margin-right: 0;
      padding: 13px 25px;
      border-left: 1px solid #e4e4e4;
      height: 50px;
      position: relative;
      .subnav-container {
        position: absolute;
        right: 10px;
        top: 75px;
        padding-top: 10px;
        display: none;
      }
      &:hover {
        transition: all .3s ease;
        background: #E4E4E4;
        .subnav-container {
          transition: display .3s ease;
          display: block;
        }
      }
    }
  }
`;

class Navigation extends Component {
  render() {
    return (
      <Lists>
        <li><a href="#" title="Dashboard">Dashboard</a></li>
        <li><a href="#" title="Projects">Projects</a></li>
        <li><a href="#" title="Team">Team</a></li>
        <li><a href="#" title="Company">Company</a></li>
        <li className="settings">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="subnav-container">
            <Subnav />
          </div>
        </li>
      </Lists>
    );
  }
}

export default Navigation;
