/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

/*
 * action creators
 */

export function addTodo(newItem) {
  return { type: ADD_TODO, newItem };
}

export function removeTodo(secId, rowId, rowMap) {
  return { type: REMOVE_TODO, secId, rowId, rowMap };
}

export function toggleTodo(secId, rowId, rowMap) {
  return { type: TOGGLE_TODO, secId, rowId, rowMap };
}
