/**
 * Types
 */

export const Types = {
  GET_EMOJIS_REQUEST: 'emojis/GET_REQUEST',
  GET_EMOJIS_SUCCESS: 'emojis/GET_SUCCESS',
  GET_ADVERTISEMENT_REQUEST: 'advertisement/GET_REQUEST',
  GET_ADVERTISEMENT_SUCCESS: 'advertisement/GET_SUCCESS',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  ads: [],
  data: [],
};
export default function emojis(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_EMOJIS_SUCCESS:
      return { ...state, data: state.data.concat(action.payload.data) };
    case Types.GET_ADVERTISEMENT_SUCCESS:
      return { ...state, ads: [...state.ads, action.payload.data] };
    default:
      return state;
  }
}

/**
 * Actions
 */

export const Creators = {
  getEmojis: (page = 0) => ({
    type: Types.GET_EMOJIS_REQUEST,
    payload: { page },
  }),
  getEmojisSuccess: data => ({
    type: Types.GET_EMOJIS_SUCCESS,
    payload: { data },
  }),
  getAdvertisement: () => ({
    type: Types.GET_ADVERTISEMENT_REQUEST,
  }),
  getAdvertisementSuccess: number => ({
    type: Types.GET_ADVERTISEMENT_SUCCESS,
    payload: { number },
  }),
};
