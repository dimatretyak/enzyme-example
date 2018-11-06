import React from 'react';
import Link from '../Link';
import rerender from 'react-test-renderer';

it('should return undefined', () => {
  expect().toBeUndefined();
});

it('Link changes the class when hovered', () => {
  const component = rerender.create(
    <Link page="http://www.facebook.com">Instagram</Link>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
