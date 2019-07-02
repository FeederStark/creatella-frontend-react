import { call, put, select } from 'redux-saga/effects';
// import { toast } from 'react-toastify';
import api from '../../services/api';
import { Creators as EmojisCreators } from '../ducks/emojis';
import hostPath from '../../config/hostPath';

export function* getEmojis(action) {
  try {
    const { page } = action.payload;
    const { data } = yield call(api.get, `/api/products?_page=${page}&_limit=20`);
    yield put(EmojisCreators.getEmojisSuccess(data));
  } catch (err) {
    console.log('error');
  }
}

export function* getAdvertisement(action) {
  try {
    let isDuplicated = true;
    let randomAd;
    while (isDuplicated) {
      randomAd = Math.floor(Math.random() * 1000);
      isDuplicated = yield select(state => state.emojis.ads.find(ad => ad === randomAd));
    }

    // const imgPath = `${hostPath}/ads/?r=${Math.floor(Math.random() * 1000)}`;
  } catch (err) {
    console.log(err);
  }
}
