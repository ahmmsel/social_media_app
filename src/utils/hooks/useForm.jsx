import { useState } from "react";

function useForm(initialState) {
  const [values, setValues] = useState(initialState);

  const handleInputChange = () => {
    return (event) => {
      const { name, value } = event.target;
      setValues((prevValues) => ({ ...prevValues, [name]: value }));
    };
  };

  const handleInputRest = () => {
    return () => {
      setValues(initialState);
    };
  };

  const handleSubmitForm = (callback, requiredAll = false) => {
    if (requiredAll) {
      for (const key in values) {
        if (!values[key]) {
          return;
        }
      }
    }
    return (event) => {
      event.preventDefault();
      callback();
    };
  };

  return { values, handleInputChange, handleSubmitForm, handleInputRest };
}

export default useForm;
