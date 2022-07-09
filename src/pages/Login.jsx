import React, { useContext, useState } from "react";

import { KeyIcon, IdentificationIcon } from "@heroicons/react/solid";
import AuthSection from "../components/authentication/AuthSection";
import PrimaryFormControl from "../components/UI/PrimaryFormControl";
import AuthSubmit from "../components/authentication/AuthSubmit";
import AuthOptions from "../components/authentication/AuthOptions";
import { useLazyQuery } from "@apollo/client";
import { LOGIN } from "../graphql/authGQL";
import { AuthContext } from "../context";
import useForm from "../utils/hooks/useForm";
import Spinner from "../components/UI/Spinner";
import SingleError from "../components/UI/SingleError";

function Login() {
  const ctx = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginUser, { loading, error }] = useLazyQuery(LOGIN, {
    onCompleted({ login }) {
      ctx.login(login);
      window.location.href = "/";
    },
    onError(err) {
      setErrorMessage(err.message);
    },
  });

  const { values, handleInputChange, handleSubmitForm } = useForm({
    username: "",
    password: "",
  });

  const submitCallback = () => loginUser({ variables: values });

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
        <AuthSubmit operation="login" />
        <SingleError message={errorMessage} show={error} />
        <AuthOptions message="already have an account ?" option="register" />
      </AuthSection>
    </>
  );
}

export default Login;
