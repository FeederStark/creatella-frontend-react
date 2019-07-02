import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Creators as EmojisActions } from '../../store/ducks/emojis';
import { Container } from './styles';
import hostPath from '../../config/hostPath';

class Advertisement extends Component {
  static propTypes = {
    emojis: PropTypes.shape({
      ads: PropTypes.arrayOf(PropTypes.number),
    }).isRequired,
    getAdvertisement: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.getImg();
  }

  getImg = () => {
    const { getAdvertisement } = this.props;
    getAdvertisement();
  };

  render() {
    const { emojis } = this.props;
    const ad = emojis.ads[emojis.ads.length - 1];
    const imgPath = `${hostPath}/ads/?r=${ad}`;
    return (
      <Container>
        <img className="ad" alt="Advertisement" src={imgPath} />
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
