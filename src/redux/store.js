import {createStore} from 'redux';

const initialState = {
  login: false,
  subscription: false,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOGIN') {
    return {
      ...state,
      login: action.value,
    };
  }
  if (action.type === 'SET_SUBSCRIPTION') {
    return {
      ...state,
      subscription: action.value,
    };
  }

  return state;
};

const store = createStore(reducer);

export default store;
