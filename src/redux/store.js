import {createStore} from 'redux';

const initialState = {
  login: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOGIN') {
    return {
      ...state,
      login: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
