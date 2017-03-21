import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders button with correct type', () => {
    const wrapper = shallow(<Button>Hello</Button>);
    expect(wrapper.type()).toEqual('button');
  });
});
