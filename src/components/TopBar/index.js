import React, { Component } from 'react';
import { Container, Tab } from './styles';

export default class TopBar extends Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <Tab>Size</Tab>
        <Tab>Price</Tab>
        <Tab>Id</Tab>
      </Container>
    );
  }
}
