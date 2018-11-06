import React from 'react';
import PropTypes from 'prop-types';
import List from './List';

function ListItem(props) {
  return <li className="item">{props.item}</li>;
}

ListItem.propTypes = {
  item: PropTypes.string.isRequired
};

export default ListItem;
