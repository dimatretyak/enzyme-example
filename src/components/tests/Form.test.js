import React from 'react';
import { shallow } from '../enzyme';

import LoginForm from '../Form';

describe('Login form testing', () => {
  it('should has form element', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find('form')).toHaveLength(1);
  });

  it('should has 2 inputs and send button', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find('input')).toHaveLength(3);
  });

  it('should has username input', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find('input[name="username"]')).toHaveLength(1);
  });

  it('should has password input', () => {
    const wrapper = shallow(<LoginForm />);
    expect(wrapper.find('input[name="password"]')).toHaveLength(1);
  });

  it('should enter username', () => {
    const username = 'admin';
    const wrapper = shallow(<LoginForm />);
    wrapper.setState({ username });
    const element = wrapper.find('input[name="username"]').get(0);

    expect(element.props.value).toBe(username);
  });

  it('should enter password', () => {
    const password = '12345678';
    const wrapper = shallow(<LoginForm />);

    wrapper.setState({ password });

    const element = wrapper.find('input[name="password"]').get(0);
    expect(element.props.value).toBe(password);
  });
});
