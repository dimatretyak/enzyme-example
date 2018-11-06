import React from 'react';
import { shallow, mount, render } from '../enzyme';

import List from '../List';
import ListItem from '../ListItems';
import { wrap } from 'module';

describe('List tests', () => {
  it('renders list-items', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = mount(<List items={items} />);

    console.log(wrapper.debug());

    expect(wrapper.find('.list-items')).toBeDefined();
    expect(wrapper.find('.item')).toHaveLength(items.length);
  });

  it('renders a list item', () => {
    const items = ['Friedrich', 'Matilda'];
    const wrapper = mount(<List items={items} />);

    expect(
      wrapper.contains(
        <li key={'Friedrich'} className="item">
          Friedrich
        </li>
      )
    ).toBeTruthy();
  });

  it('renders correct text in item', () => {
    const items = ['John', 'Adolf', 'Kendall'];
    const wrapper = mount(<List items={items} />);

    expect(wrapper.find('.item').get(0).props.children).toEqual('John');
  });
});
