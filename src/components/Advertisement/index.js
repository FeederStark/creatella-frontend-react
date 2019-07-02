import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Creators as EmojisActions } from '../../store/ducks/emojis';
import { Container } from './styles';
import hostPath from '../../config/hostPath';

class Advertisement extends Component {
  componentDidMount() {}

  getImg = () => {
    const imgPath = `${hostPath}/ads/?r=${Math.floor(Math.random() * 1000)}`;
    return imgPath;
  };

  render() {
    return (
      <Container>
        <img className="ad" alt="Advertisement" src={this.getImg()} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  emojis: state.emojis,
});

const mapDispatchToProps = dispatch => bindActionCreators(EmojisActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Advertisement);
