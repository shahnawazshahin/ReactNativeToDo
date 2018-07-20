import React from 'react';
import { Container, Header, Body, Title, Content, Text } from 'native-base';

import AddTodoItem from './containers/AddTodoItem';
import GetTodoList from './containers/GetTodoList';

export class Application extends React.Component {

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Todo App</Title>
          </Body>
        </Header>
        <Content>
          <AddTodoItem />
          <GetTodoList />
        </Content>
      </Container>
    );
  }
}
