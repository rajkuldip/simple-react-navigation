import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

const Lists = styled.ul`
  position: relative;
  width: 100%;
  background: ${props => props.theme.grey};
  padding: 5px 0;
  li {
    height: 49px;
    border-bottom: 1px dotted ${props => props.theme.LightGrey};
    &:last-child {
      border: none;
    }
    a {
      display: block;
      padding: 19px 20px;
      width: 100%;
      position: relative;
      &:hover {
        transition: all .3s ease;
        background: ${props => props.theme.DarkGrey};
        box-shadow: inset 0 1px 3px 0 rgba(0,0,0,.2);
        color: ${props => props.theme.color} !important;
      }
      span {
        display: inline-block;
        margin-left: 10px;
        padding: 6px;
        position: absolute;
        top: 14px;
        background: ${props => props.theme.active};
        border-radius: 50%;
        color: ${props => props.theme.white};
        font-size: 10px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    border: 1px solid ${props => props.theme.LightGrey};
    border-radius: 9px;
    background: ${props => props.theme.white};
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
      border-bottom: 18px solid ${props => props.theme.LightGrey};
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
      border-bottom: 18px solid ${props => props.theme.white};
    }
    li {
      height: 54px;
      a {
        width: 140px;
        padding: 19px 25px;
      }
    }
  }
`;
const colors = {
  white: '#FFFFFF',
  LightGrey: '#E4E4E4',
  DarkGrey: '#D8D8D8',
  color: '#4A4A4A',
  grey: '#F3F3F3',
  active:'#F26620'
}
class Subnav extends Component {
  render() {
    return (
      <ThemeProvider theme={colors}>
        <Lists>
          <li><NavLink to="#" activeClassName="active">My Profile</NavLink></li>
          <li><NavLink to="#" activeClassName="active">My Projects<span>30</span></NavLink></li>
          <li><NavLink to="#" activeClassName="active">Notifications<span>23</span></NavLink></li>
          <li><NavLink to="#" activeClassName="active">Tasks<span>10</span></NavLink></li>
          <li><NavLink to="#" activeClassName="active">Help</NavLink></li>
          <li><NavLink to="#" activeClassName="active">Logout</NavLink></li>
        </Lists>
      </ThemeProvider>
    );
  }
}
export default Subnav;
