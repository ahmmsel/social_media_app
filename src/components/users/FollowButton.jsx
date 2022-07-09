import React from "react";
import { useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { UserRemoveIcon } from "@heroicons/react/solid";
import { FOLLOW_USER, UNFOLLOW_USER } from "../../graphql/userGQL";
import { FEED_POSTS } from "../../graphql/feedGQL";

function FollowButton({
  isFollowed,
  secondary = false,
  refetchedQuery,
  followedUserId,
}) {
  const { userId } = useParams();

  const commonVars = { id: followedUserId ?? userId };

  const [followUser] = useMutation(FOLLOW_USER, {
    refetchQueries: [refetchedQuery],
    variables: commonVars,
  });

  const [unfollowUser] = useMutation(UNFOLLOW_USER, {
    refetchQueries: [refetchedQuery],
    variables: commonVars,
  });
  return (
    <>
      {isFollowed ? (
        <div className={"flex items-center space-x-2"}>
          <button
            className={`font-semibold border border-pink-900 p-2 rounded-md uppercase ${
              secondary && "text-xs"
            }`}
            onClick={unfollowUser}>
            unfollow
          </button>
        </div>
      ) : (
        <button
          onClick={followUser}
          className={
            secondary
              ? "uppercase font-semibold text-xs"
              : "font-semibold p-2 rounded-md w-2/4 md:w-1/4 uppercase text-lg text-white bg-pink-800 hover:bg-pink-700"
          }>
          follow
        </button>
      )}
    </>
  );
}

export default FollowButton;
