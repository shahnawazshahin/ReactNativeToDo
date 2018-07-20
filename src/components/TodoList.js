import React from 'react';
import PropTypes from 'prop-types';
import { List, Button, Icon, View } from 'native-base';

import Todo from './Todo';

const TodoList = ({ datasource, removeTodoItem, toggleTodoComplete }) => {
  return (
    <List
      leftOpenValue={75}
      rightOpenValue={-75}
      dataSource={datasource}
      renderRow={ (rowData) => <Todo text={rowData.text} completed={rowData.completed} /> }
      renderLeftHiddenRow={ (secId, rowId, rowMap) =>
        <Button warning onPress={ () => toggleTodoComplete(secId, rowId, rowMap) }>
          <Icon active name='md-ice-cream' />
        </Button>
      }
      renderRightHiddenRow={ (data, secId, rowId, rowMap) =>
        <Button danger onPress={ () => removeTodoItem(secId, rowId, rowMap) }>
          <Icon active name='trash' />
        </Button>
      }
      />
  );
}

TodoList.propTypes = {
  datasource: PropTypes.object.isRequired
}

export default TodoList;
