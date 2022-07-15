import { ACTION_GET_ONE_HERO, ACTION__GET_HEROES } from '../Action';

const initialState = {
  rickAndMorty: [],
  oneCharacter: {},
  location: {},
  origin: {},
};

export function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION__GET_HEROES:
      return {
        ...state,
        rickAndMorty: [...state.rickAndMorty, ...payload.results],
      };
    case ACTION_GET_ONE_HERO:
      return {
        ...state,
        oneCharacter: payload,
        location: payload.location,
        origin: payload.origin,
      };

    default:
      return state;
  }
}
