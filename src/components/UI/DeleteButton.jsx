import React from "react";
import { useMutation } from "@apollo/client";
import { TrashIcon } from "@heroicons/react/solid";
import useCurrentUser from "../../utils/hooks/useCurrentUser";
import { merge } from "lodash";

function DeleteButton({ author, anotherAuthor, GQL, options }) {
  const { isCurrentUser } = useCurrentUser();

  const [deleteHandler] = useMutation(GQL, merge(options));

  return (
    <>
      {isCurrentUser(author, anotherAuthor) && (
        <TrashIcon className="w-4 h-4" role="button" onClick={deleteHandler} />
      )}
    </>
  );
}

export default DeleteButton;
