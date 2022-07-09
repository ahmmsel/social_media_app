import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Avatar from "../UI/Avatar";
import { useMutation } from "@apollo/client";
import { GET_COMMENTS, REMOVE_COMMENT } from "../../graphql/commentGQL";
import DeleteButton from "../UI/DeleteButton";

function Comment({ data }) {
  const navigate = useNavigate();

  const handleNavigate = () => navigate(`/profile/${data?.author?.id}`);

  return (
    <div className="group flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <div
          className="flex items-center space-x-4"
          role="button"
          onClick={handleNavigate}>
          <Avatar
            src={data?.author?.picture}
            alt={data?.author?.username}
            className="w-14 h-14 rounded-full"
          />
          <h1 className="font-medium">{data?.author?.username}</h1>
        </div>
        <DeleteButton
          GQL={REMOVE_COMMENT}
          author={data?.author?.id}
          anotherAuthor={data?.commentedOn?.authorId}
          options={{
            refetchQueries: [GET_COMMENTS],
            variables: { id: data?.id },
          }}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <p className="font-medium">{data?.text}</p>
        <small className="font-light text-gray-600">
          {moment(new Date(data?.createdAt)).fromNow()}
        </small>
      </div>
    </div>
  );
}

export default Comment;
