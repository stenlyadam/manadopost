import {createStore} from 'redux';

const initialState = {
  login: false,
  location: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOGIN') {
    return {
      ...state,
      login: action.value,
    };
  }
  if (action.type === 'SET_LOCATION') {
    return {
      ...state,
      location: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
