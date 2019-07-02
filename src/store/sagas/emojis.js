import { call, put, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Creators as EmojisCreators } from '../ducks/emojis';

export function* getEmojis() {
  try {
    const end = yield select(state => state.emojis.end);
    if (end) {
      return;
    }
    const page = yield select(state => state.emojis.page);
    const { data } = yield call(api.get, `/api/products?_page=${page}&_limit=20`);
    if (page > 1) {
      yield put(EmojisCreators.getAdvertisement());
    }
    if (data.length < 20) {
      toast.success('End of catalogue', {
        position: toast.POSITION.TOP_RIGHT,
      });
      yield put(EmojisCreators.getEmojisSuccess(page, data, true));
      return;
    }
    yield put(EmojisCreators.getEmojisSuccess(page + 1, data, end));
  } catch (err) {
    toast.error('Error fetching emojis', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}

function findIsDuplicated(ads, randomAd) {
  return ads.find(ad => ad === randomAd);
}

export function* getAdvertisement() {
  try {
    let isDuplicated = true;
    let randomAd;
    const ads = yield select(state => state.emojis.ads);
    while (isDuplicated) {
      randomAd = Math.floor(Math.random() * 1000);
      isDuplicated = findIsDuplicated(ads, randomAd);
    }
    yield put(EmojisCreators.getAdvertisementSuccess(randomAd));
  } catch (err) {
    toast.error('Error fetching advertisement', {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
}
