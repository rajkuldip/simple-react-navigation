import React, { Component } from 'react';
import styled from 'styled-components';

const Lists = styled.ul`
  position: relative;
  border: 1px solid #E4E4E4;
  border-radius: 9px;
  width: 190px;
  background: #FFFFFF;
  padding: 5px 0;
  li {
    height: 54px;
    a {
      display: block;
      padding: 18px 25px;
      width: 140px;
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
`;

class Subnav extends Component {
  render() {
    return (
      <Lists>
        <li><a href="#" title="Dashboard">My Profile</a></li>
        <li><a href="#" title="My Projects">My Projects<span>25</span></a></li>
        <li><a href="#" title="Notifications">Notifications<span>15</span></a></li>
        <li><a href="#" title="Tasks">Tasks<span>10</span></a></li>
        <li><a href="#" title="Help">Help</a></li>
        <li><a href="#" title="Logout">Logout</a></li>
      </Lists>
    );
  }
}

export default Subnav;
