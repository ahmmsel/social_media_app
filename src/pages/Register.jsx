import React, { useContext, useState } from "react";

import { CheckIcon, KeyIcon, IdentificationIcon } from "@heroicons/react/solid";
import AuthSection from "../components/authentication/AuthSection";
import PrimaryFormControl from "../components/UI/PrimaryFormControl";
import AuthSubmit from "../components/authentication/AuthSubmit";
import AuthOptions from "../components/authentication/AuthOptions";
import { AuthContext } from "../context";
import { useMutation } from "@apollo/client";
import { REGISTER } from "../graphql/authGQL";
import useForm from "../utils/hooks/useForm";
import SingleError from "../components/UI/SingleError";
import Spinner from "../components/UI/Spinner";

function Register() {
  const ctx = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState("");

  const [registerUser, { loading, error }] = useMutation(REGISTER, {
    onCompleted({ register }) {
      ctx.login(register);
      window.location.href = "/";
    },
    onError(err) {
      setErrorMessage(err.message);
    },
  });

  const { values, handleInputChange, handleSubmitForm } = useForm({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const submitCallback = () => registerUser({ variables: values });

  return (
    <>
      <Spinner centerd={true} show={loading} />
      <AuthSection onSubmit={handleSubmitForm(submitCallback)}>
        <PrimaryFormControl
          Icon={IdentificationIcon}
          inputProps={{
            type: "text",
            name: "username",
            placeholder: "username",
            onChange: handleInputChange(),
          }}
        />
        <PrimaryFormControl
          Icon={KeyIcon}
          inputProps={{
            type: "password",
            name: "password",
            placeholder: "password",
            onChange: handleInputChange(),
          }}
        />
        <PrimaryFormControl
          Icon={CheckIcon}
          inputProps={{
            type: "password",
            name: "confirmPassword",
            placeholder: "confirm password",
            onChange: handleInputChange(),
          }}
        />
        <AuthSubmit operation="register" />
        <SingleError message={errorMessage} show={error} />
        <AuthOptions message="already have an account ?" option="login" />
      </AuthSection>
    </>
  );
}

export default Register;
