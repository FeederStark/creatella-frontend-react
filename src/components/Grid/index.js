import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Creators as EmojisActions } from '../../store/ducks/emojis';
import {
  Container, Row, Element, Info,
} from './styles';

class Grid extends Component {
  static propTypes = {
    emojis: PropTypes.shape({
      ads: PropTypes.arrayOf(PropTypes.string),
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          size: PropTypes.number,
          price: PropTypes.number,
          face: PropTypes.string,
          date: PropTypes.date,
        }),
      ),
    }).isRequired,
    getEmojis: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getEmojis } = this.props;
    getEmojis();
  }

  render() {
    const { emojis } = this.props;
    return (
      <Container>
        {emojis.data.map(emoji => (
          <Row key={emoji.id}>
            <Element>
              <p>{emoji.face}</p>
            </Element>
            <Info>
              <p>Size: {emoji.size}</p>
              <p>Price: {emoji.price}</p>
              <p>Date: 3 days ago</p>
            </Info>
          </Row>
        ))}
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
)(Grid);
