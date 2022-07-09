import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  AnnotationIcon,
  IdentificationIcon,
  PhotographIcon,
} from "@heroicons/react/solid";
import { AuthContext } from "../context";
import Avatar from "../components/UI/Avatar";
import PrimaryFormControl from "../components/UI/PrimaryFormControl";
import TextFormControl from "../components/UI/TextFormControl";
import { GET_USER, UPDATE_USER } from "../graphql/userGQL";
import useForm from "../utils/hooks/useForm";
import SingleError from "../components/UI/SingleError";
import Spinner from "../components/UI/Spinner";

function Settings() {
  const ctx = useContext(AuthContext);

  const [errorMessage, setErrorMessage] = useState(null);

  const { data, loading } = useQuery(GET_USER, {
    variables: { id: ctx.user.id },
  });

  const [updateUser, { error }] = useMutation(UPDATE_USER, {
    onError: (err) => {
      setErrorMessage(err.message);
    },
  });

  const { values, handleInputChange, handleSubmitForm } = useForm({
    username: null,
    picture: null,
    bio: null,
  });

  const submitCallback = () => updateUser({ variables: values });

  const userData = data?.getUser;

  if (loading) return <Spinner show={loading} centerd={true} />;

  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-center p-4 space-y-11">
          <header>
            <Avatar
              src={values.picture ? values.picture : userData?.picture}
              alt={userData?.username}
              className="w-40 h-40"
            />
          </header>
          <form
            onSubmit={handleSubmitForm(submitCallback)}
            className="space-y-7">
            <PrimaryFormControl
              Icon={IdentificationIcon}
              inputProps={{
                type: "text",
                name: "username",
                placeholder: "username",
                defaultValue: userData?.username,
                onChange: handleInputChange(),
              }}
            />
            <PrimaryFormControl
              Icon={PhotographIcon}
              inputProps={{
                type: "url",
                name: "picture",
                placeholder: "add picture via url",
                onChange: handleInputChange(),
              }}
            />
            <TextFormControl
              textareaProps={{
                name: "bio",
                placeholder: "describe yourself",
                onChange: handleInputChange(),
              }}
              Icon={AnnotationIcon}
              defaultValue={userData?.bio}
            />
            <SingleError show={error} message={errorMessage} />
            <button
              type="submit"
              className="w-full p-2 uppercase font-semibold text-white text-xl bg-pink-800 rounded-full hover:bg-pink-700 transition-all duration-300">
              save
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Settings;
