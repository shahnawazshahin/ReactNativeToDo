import { connect } from 'react-redux';

import AddTodo from '../components/AddTodo';
import { addTodo } from '../actions';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  addTodoItem: todoItem => dispatch(addTodo(todoItem))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
