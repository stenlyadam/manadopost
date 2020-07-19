import {useState} from 'react';

export const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  return [
    values,
    (type, params) => {
      if (type === 'reset') {
        return setValues(initialState);
      }
      return setValues({...values, [type]: params});
    },
  ];
};
