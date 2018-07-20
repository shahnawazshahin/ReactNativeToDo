import React from 'react';
import PropTypes from 'prop-types';
import { Form, Item, Label, Input, Button, Text } from 'native-base';

const AddTodo = ({ addTodoItem }) => {
  let newItem;

  return (
    <Form>
      <Item floatingLabel>
        <Label>New Item</Label>
        <Input onChangeText={(text) => newItem = text} />
      </Item>
      <Button block onPress={ () => addTodoItem(newItem) }>
        <Text>Add Item</Text>
      </Button>
    </Form>
  )
}

AddTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired
};

export default AddTodo;
