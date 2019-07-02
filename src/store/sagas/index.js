import { all, takeLatest } from 'redux-saga/effects';
import { getEmojis, getAdvertisement } from './emojis';
import { Types as EmojisTypes } from '../ducks/emojis';

export default function* rootSaga() {
  yield all([
    takeLatest(EmojisTypes.GET_EMOJIS_REQUEST, getEmojis),
    takeLatest(EmojisTypes.GET_ADVERTISEMENT_REQUEST, getAdvertisement),
  ]);
}
