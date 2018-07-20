import { ListView } from 'react-native';

import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions';

const todos = [
  { text: 'Default 1', completed: true },
  { text: 'Default 2', completed: false },
  { text: 'Default 3', completed: false },
];

function datasource(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      todos = todos.concat({ text: action.newItem, completed: false});
      return state.cloneWithRows(todos);
    case REMOVE_TODO:
      action.rowMap[`${action.secId}${action.rowId}`].props.closeRow();
      todos.splice(action.rowId, 1);
      return state.cloneWithRows(todos);
    case TOGGLE_TODO:
      let todo = todos[action.rowMap];
      todo.completed = !todo.completed;
      todos[action.rowMap] = todo;
      console.log(todos);
      state = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      return state.cloneWithRows(todos);
    default:
      state = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      return state.cloneWithRows(todos);
  }
}

export default datasource;
