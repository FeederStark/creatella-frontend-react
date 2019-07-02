import React from 'react';
import { Container } from './styles';
import Header from '../Header';
import Advertisement from '../Advertisement';
import TopBar from '../TopBar';
import Grid from '../Grid';

const Main = () => (
  <Container>
    <Header />
    <Advertisement />
    <TopBar />
    <Grid />
  </Container>
);

export default Main;
