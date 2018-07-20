import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, Text } from 'native-base';

const Todo = ({ text, completed }) => (
  <ListItem><Text style={{ textDecorationLine: completed ? 'line-through' : 'none' }}>{text}</Text></ListItem>
)

Todo.propTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;
