import React from 'react';

export const useInputHandler = (state) => {
  const [inputState, setInputState] = React.useState(state);
  const inputUpdate = (e) => {
    const inpValue = e.target.value;
    setInputState({
      ...inputState,
      [e.target.name]: inpValue,
    });
  };
  return { inputState, inputUpdate, setInputState };
};
