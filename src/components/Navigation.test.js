import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { shallow, render, mount } from 'enzyme';

describe("Varify Navigatin Events", () => {
  it("On Hover", () => {
    const navigation = shallow(
      <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
    );
    expect(navigation).toMatchSnapshot();
    navigation.simulate('hover');
    expect(navigation).toMatchSnapshot();
  })

  it("When Clicked", () => {
    const navigation = shallow(
      <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
    );
    expect(navigation).toMatchSnapshot();
    navigation.simulate('click');
    expect(navigation).toMatchSnapshot();
  })
})
