import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { AnnotationIcon, LinkIcon } from "@heroicons/react/solid";
import { PhotographIcon } from "@heroicons/react/outline";
import useForm from "../utils/hooks/useForm";
import PrimaryFormControl from "../components/UI/PrimaryFormControl";
import SingleError from "../components/UI/SingleError";
import TextFormControl from "../components/UI/TextFormControl";
import { CREATE_POST } from "../graphql/postGQL";
import { FEED_POSTS } from "../graphql/feedGQL";

function CreatePost() {
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const [createPost, { loading, error }] = useMutation(CREATE_POST, {
    onError(err) {
      setErrorMessage(err.message);
    },
    onCompleted() {
      navigate("/");
    },
    refetchQueries: [FEED_POSTS, "FeedPosts"],
  });

  const { values, handleInputChange, handleInputRest, handleSubmitForm } =
    useForm({
      content: "",
      picture: "",
    });

  const submitCallback = () => {
    createPost({ variables: values });
    handleInputRest()();
  };

  return (
    <div>
      <form
        className="flex flex-col space-y-6 overflow-y-auto"
        onSubmit={handleSubmitForm(submitCallback)}>
        {values.picture ? (
          <img
            src={values.picture}
            className="rounded-xl shadow-xl w-full sm:w-3/5 md:w-2/5 lg:w-1/5"
            alt="create post"
          />
        ) : (
          <PhotographIcon className="w-32 h-32" />
        )}
        <PrimaryFormControl
          Icon={LinkIcon}
          inputProps={{
            type: "url",
            name: "picture",
            defaultValue: values.picture,
            placeholder: "add picture via url",
            onChange: handleInputChange(),
          }}
        />
        <TextFormControl
          Icon={AnnotationIcon}
          defaultValue={values.content}
          textareaProps={{
            type: "text",
            name: "content",
            placeholder: "write something",
            onChange: handleInputChange(),
          }}
        />
        <SingleError message={errorMessage} show={error} />
        <button
          type="submit"
          className="primary-btn"
          disabled={loading || !values.content}>
          {loading ? "loading..." : "publish"}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
