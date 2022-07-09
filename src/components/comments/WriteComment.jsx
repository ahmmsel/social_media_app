import React from "react";
import { ChatAltIcon } from "@heroicons/react/solid";
import PrimaryFormControl from "../UI/PrimaryFormControl";
import TextFormControl from "../UI/TextFormControl";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT, GET_COMMENTS } from "../../graphql/commentGQL";
import useForm from "../../utils/hooks/useForm";

function WriteComment({ postId }) {
  const [addComment, { loading }] = useMutation(ADD_COMMENT, {
    refetchQueries: [GET_COMMENTS],
  });

  const { values, handleInputChange, handleInputRest, handleSubmitForm } =
    useForm({ text: "" });

  const submitCallback = () => {
    addComment({ variables: { text: values.text, commentedOnId: postId } });
    handleInputRest()();
  };

  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={handleSubmitForm(submitCallback)}>
      <TextFormControl
        Icon={ChatAltIcon}
        textareaProps={{
          placeholder: "Write a comment...",
          name: "text",
          value: values.text,
          onChange: handleInputChange(),
        }}
      />
      <button
        className="primary-btn p-2 text-base"
        type="submit"
        disabled={!values.text || loading}>
        {loading ? "adding..." : "add comment"}
      </button>
    </form>
  );
}

export default WriteComment;
