import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Creators as EmojisActions } from '../../store/ducks/emojis';
import {
  Container, Row, Element, Info, Face,
} from './styles';
import { parseDate } from '../../common/functions';

class Grid extends Component {
  static propTypes = {
    emojis: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          size: PropTypes.number,
          price: PropTypes.number,
          face: PropTypes.string,
          date: PropTypes.date,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
    getEmojis: PropTypes.func.isRequired,
    fillData: PropTypes.func.isRequired,
    setUserLoadingTrue: PropTypes.func.isRequired,
    setUserLoadingFalse: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getEmojis } = this.props;
    getEmojis();
  }

  // Tried to resolve this with promise but I
  // couldn't make the promise keep calling itself so I just used setInterval

  // scrollPromise = () => new Promise((resolve, reject) => {
  //   const { emojis } = this.props;
  //   if (emojis.loading) {
  //     reject();
  //   } else {
  //     resolve();
  //   }
  // });

  // applyScroll = () => {
  //   const { fillData, getEmojis } = this.props;
  //   const scroller = document.getElementById('scrollDiv');
  //   if (scroller.offsetHeight + scroller.scrollTop === scroller.scrollHeight) {
  //     this.scrollPromise()
  //       .then(() => {
  //         fillData();
  //         getEmojis();
  //       })
  //       .catch((error) => {
  //         console.log('err');
  //       });
  //   }
  // };

  applyScroll = () => {
    const {
      fillData, getEmojis, emojis, setUserLoadingTrue, setUserLoadingFalse,
    } = this.props;
    const scroller = document.getElementById('scrollDiv');
    if (scroller.offsetHeight + scroller.scrollTop === scroller.scrollHeight) {
      if (emojis.loading) {
        setUserLoadingTrue();
        window.setTimeout(() => {
          this.applyScroll();
        }, 500);
      } else {
        fillData();
        setUserLoadingFalse();
        getEmojis();
      }
    }
  };

  render() {
    const { emojis } = this.props;
    return (
      <Container onScroll={this.applyScroll} id="scrollDiv">
        {emojis.data.map(emoji => (
          <Row key={emoji.id}>
            <Element>
              <Face size={emoji.size}>{emoji.face}</Face>
            </Element>
            <Info>
              <p>Size: {emoji.size}</p>
              <p>Price: ${emoji.price / 100}</p>
              <p>Date: {parseDate(emoji.date)}</p>
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
