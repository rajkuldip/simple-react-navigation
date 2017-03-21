import React, { Component } from 'react';
import logo from './icon.svg';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Subnav from './Subnav';

const Lists = styled.ul`
  background: #FFFFFF;
  list-style: none;
  margin: 0;
  padding: 0;
  > li {
    border-bottom: 1px solid #e4e4e4;
    padding: 0;
    a {
      color: #4a4a4a;
      text-decoration: none;
      transition: color .3s ease;
      display: inline-block;
      max-height: 50px;
      &:hover, &.active {
        color: #F26620;
      }
    }
    > a {
      width: 100%;
      padding: 20px;
    }
    &.settings {
      margin-right: 0;
      padding: 0;
      border-left: 1px solid #e4e4e4;
      position: relative;
      .subnav-container {
        padding-top: 0;
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
      img {
        display: inline-block;
        padding: 5px 25px;
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
  }
  @media screen and (min-width: 768px) {
      float: right;
      background: transparent;
      > li {
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
  }
`;

class Navigation extends Component {
  render() {
    return (
      <Lists>
        <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
        <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
        <li><NavLink to="/team" activeClassName="active">Team</NavLink></li>
        <li><NavLink to="/company" activeClassName="active">Company</NavLink></li>
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
