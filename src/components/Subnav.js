import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Lists = styled.ul`
  position: relative;
  width: 100%;
  background: #F3F3F3;
  padding: 5px 0;
  li {
    height: 49px;
    border-bottom: 1px dotted #E4E4E4;
    &:last-child {
      border: none;
    }
    a {
      display: block;
      padding: 18px 25px;
      width: 100%;
      position: relative;
      &:hover {
        transition: all .3s ease;
        background: #D8D8D8;
        box-shadow: inset 0 1px 3px 0 rgba(0,0,0,.2);
        color: #4A4A4A !important;
      }
      span {
        display: inline-block;
        margin-left: 10px;
        padding: 6px;
        position: absolute;
        top: 14px;
        background: #F26620;
        border-radius: 50%;
        color: #FFFFFF;
        font-size: 10px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    border: 1px solid #E4E4E4;
    border-radius: 9px;
    background: #FFFFFF;
    width: 190px;
    &:before {
      content: '';
      position: absolute;
      top: -18px;
      right: 25px;
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 18px solid #E4E4E4;
    }
    &:after {
      content: '';
      position: absolute;
      top: -16px;
      right: 25px;
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 18px solid #FFFFFF;
    }
    li {
      border-bottom: none;
      height: 54px;
      a {
        width: 140px;
      }
    }
  }
`;

class Subnav extends Component {
  render() {
    return (
      <Lists>
        <li><NavLink to="#" activeClassName="active">My Profile</NavLink></li>
        <li><NavLink to="#" activeClassName="active">My Projects<span>30</span></NavLink></li>
        <li><NavLink to="#" activeClassName="active">Notifications<span>23</span></NavLink></li>
        <li><NavLink to="#" activeClassName="active">Tasks<span>10</span></NavLink></li>
        <li><NavLink to="#" activeClassName="active">Help</NavLink></li>
        <li><NavLink to="#" activeClassName="active">Logout</NavLink></li>
      </Lists>
    );
  }
}
export default Subnav;
