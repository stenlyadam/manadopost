import {createStore} from 'redux';

const initialState = {
  login: false,
  news: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOGIN') {
    return {
      ...state,
      login: action.value,
    };
  }
  if (action.type === 'SET_NEWS') {
    return {
      ...state,
      news: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
