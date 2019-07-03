import { toast } from 'react-toastify';
import { sortBySize, sortByPrice, sortById } from '../../common/functions';

/**
 * Types
 */

export const Types = {
  GET_EMOJIS_REQUEST: 'emojis/GET_REQUEST',
  GET_EMOJIS_SUCCESS: 'emojis/GET_SUCCESS',
  FILL_EMOJIS_DATA: 'emojis/FILL_DATA',
  SET_LOADING_TRUE: 'emojis/SET_LOADING_TRUE',
  SET_LOADING_FALSE: 'emojis/SET_LOADING_FALSE',
  SET_USER_LOADING_TRUE: 'emojis/SET_USER_LOADING_TRUE',
  SET_USER_LOADING_FALSE: 'emojis/SET_USER_LOADING_FALSE',
  SORT_EMOJIS_BY_SIZE: 'emojis/SORT_BY_SIZE',
  SORT_EMOJIS_BY_PRICE: 'emojis/SORT_BY_PRICE',
  SORT_EMOJIS_BY_ID: 'emojis/SORT_BY_ID',
  GET_ADVERTISEMENT_REQUEST: 'advertisement/GET_REQUEST',
  GET_ADVERTISEMENT_SUCCESS: 'advertisement/GET_SUCCESS',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  ads: [],
  data: [],
  page: 1,
  end: false,
  active: '',
  fetched_data: [],
  loading: false,
  userLoading: true,
  has_toasted: false,
};
export default function emojis(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_EMOJIS_SUCCESS:
      return {
        ...state,
        fetched_data: state.data.concat(action.payload.data),
        page: action.payload.page,
        end: action.payload.end,
        active: '',
        loading: false,
      };
    case Types.FILL_EMOJIS_DATA:
      if (state.end && state.has_toasted) {
        return state;
      }
      if (state.end && !state.has_toasted) {
        toast.success('End of catalogue', {
          position: toast.POSITION.TOP_RIGHT,
        });
        return {
          ...state,
          has_toasted: true,
          data: state.fetched_data,
        };
      }
      return {
        ...state,
        data: state.fetched_data,
        should_fill_again: false,
      };
    case Types.SET_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case Types.SET_LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    case Types.SET_USER_LOADING_TRUE:
      return {
        ...state,
        userLoading: true,
      };
    case Types.SET_USER_LOADING_FALSE:
      return {
        ...state,
        userLoading: false,
      };
    case Types.SORT_EMOJIS_BY_SIZE:
      return {
        ...state,
        data: sortBySize(state.data),
        active: 'size',
      };
    case Types.SORT_EMOJIS_BY_PRICE:
      return {
        ...state,
        data: sortByPrice(state.data),
        active: 'price',
      };
    case Types.SORT_EMOJIS_BY_ID:
      return {
        ...state,
        data: sortById(state.data),
        active: 'id',
      };
    case Types.GET_ADVERTISEMENT_SUCCESS:
      return { ...state, ads: [...state.ads, action.payload.number] };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  getEmojis: () => ({
    type: Types.GET_EMOJIS_REQUEST,
  }),
  getEmojisSuccess: (page, data, end) => ({
    type: Types.GET_EMOJIS_SUCCESS,
    payload: { page, data, end },
  }),
  fillData: () => ({
    type: Types.FILL_EMOJIS_DATA,
  }),
  setLoadingTrue: () => ({
    type: Types.SET_LOADING_TRUE,
  }),
  setLoadingFalse: () => ({
    type: Types.SET_LOADING_FALSE,
  }),
  setUserLoadingTrue: () => ({
    type: Types.SET_USER_LOADING_TRUE,
  }),
  setUserLoadingFalse: () => ({
    type: Types.SET_USER_LOADING_FALSE,
  }),
  sortEmojisBySize: () => ({
    type: Types.SORT_EMOJIS_BY_SIZE,
  }),
  sortEmojisByPrice: () => ({
    type: Types.SORT_EMOJIS_BY_PRICE,
  }),
  sortEmojisById: () => ({
    type: Types.SORT_EMOJIS_BY_ID,
  }),
  getAdvertisement: () => ({
    type: Types.GET_ADVERTISEMENT_REQUEST,
  }),
  getAdvertisementSuccess: number => ({
    type: Types.GET_ADVERTISEMENT_SUCCESS,
    payload: { number },
  }),
};
