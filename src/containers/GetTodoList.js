import { connect } from 'react-redux';

import TodoList from '../components/TodoList';
import { removeTodo, toggleTodo } from '../actions';

const mapStateToProps = (state) => ({
  datasource: state.datasource
});

const mapDispatchToProps = (dispatch) => ({
  removeTodoItem: (secId, rowId, rowMap) => dispatch(removeTodo(secId, rowId, rowMap)),
  toggleTodoComplete: (secId, rowId, rowMap) => dispatch(toggleTodo(secId, rowId, rowMap))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
