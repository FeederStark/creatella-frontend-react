import { sortBySize, sortByPrice, sortById } from '../../common/functions';

/**
 * Types
 */

export const Types = {
  GET_EMOJIS_REQUEST: 'emojis/GET_REQUEST',
  GET_EMOJIS_SUCCESS: 'emojis/GET_SUCCESS',
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
};
export default function emojis(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_EMOJIS_SUCCESS:
      return {
        ...state,
        data: state.data.concat(action.payload.data),
        page: action.payload.page,
        end: action.payload.end,
        active: '',
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
