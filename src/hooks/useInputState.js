import { useState } from "react";

const useInputState = (initialState) => {
  const [input, setInput] = useState(initialState);
  const handleChange = (evt) => setInput(evt.target.value);
  const reset = () => setInput(initialState);
  return [input, handleChange, reset];
};

export default useInputState;
