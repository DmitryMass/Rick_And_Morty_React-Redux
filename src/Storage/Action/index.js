import { getAllCharacter, getOneCharacter } from '../../Api/index';

export const ACTION__GET_HEROES = 'ACTION__GET_HEROES';
export const ACTION_GET_ONE_HERO = 'ACTION_GET_ONE_HERO';
export const ACTION_EPISODES = 'ACTION_EPISODES';

export function fetchHeroes(id) {
  return async (dispatch) => {
    const data = await getAllCharacter(id);
    dispatch({ type: ACTION__GET_HEROES, payload: data });
  };
}

export function fetchOneHero(id) {
  return async (dispatch) => {
    const data = await getOneCharacter(id);
    dispatch({ type: ACTION_GET_ONE_HERO, payload: data });
  };
}
