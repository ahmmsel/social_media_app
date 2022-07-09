import React from "react";
import { useNavigate } from "react-router-dom";
import FollowButton from "../users/FollowButton";
import Avatar from "../UI/Avatar";
import useCurrentUser from "../../utils/hooks/useCurrentUser";

function Connection({ data, refetchedQuery }) {
  const navigate = useNavigate();

  const { isCurrentUser } = useCurrentUser();

  const handleNavigate = () => navigate(`/profile/${data?.id}`);

  return (
    <div className="flex justify-between">
      <div
        className="flex items-center space-x-2"
        role="button"
        onClick={handleNavigate}>
        <Avatar
          alt={data?.username}
          src={data?.picture}
          className="w-12 h-12"
        />
        <h1 className="font-medium text-lg">{data?.username}</h1>
      </div>
      {!isCurrentUser(data?.id) && (
        <FollowButton
          followedUserId={data?.id}
          isFollowed={data?.isFollowed}
          secondary={true}
          refetchedQuery={refetchedQuery}
        />
      )}
    </div>
  );
}

export default Connection;
