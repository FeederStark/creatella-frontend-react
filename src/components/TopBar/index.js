import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Creators as EmojisActions } from '../../store/ducks/emojis';
import { Container, Tab, Icon } from './styles';

const TopBar = ({
  sortEmojisBySize, sortEmojisByPrice, sortEmojisById, emojis,
}) => (
  <Fragment>
    {emojis.userLoading && <Icon className="fa fa-spinner fa-pulse" />}
    <Container>
      <Tab onClick={sortEmojisBySize} highlighted={emojis.active === 'size'}>
        Size
      </Tab>
      <Tab onClick={sortEmojisByPrice} highlighted={emojis.active === 'price'}>
        Price
      </Tab>
      <Tab onClick={sortEmojisById} highlighted={emojis.active === 'id'}>
        Id
      </Tab>
    </Container>
  </Fragment>
);

TopBar.propTypes = {
  sortEmojisBySize: PropTypes.func.isRequired,
  sortEmojisByPrice: PropTypes.func.isRequired,
  sortEmojisById: PropTypes.func.isRequired,
  emojis: PropTypes.shape({
    active: PropTypes.string,
    userLoading: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = state => ({
  emojis: state.emojis,
});
const mapDispatchToProps = dispatch => bindActionCreators(EmojisActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopBar);
