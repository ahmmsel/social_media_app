import React from "react";

import Avatar from "../components/UI/Avatar";
import ProfileAnalytic from "../components/profile/ProfileAnalytic";
import { Route, Routes, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  GET_USER,
  GET_USER_FOLLOWERS,
  GET_USER_FOLLOWING,
} from "../graphql/userGQL";
import Spinner from "../components/UI/Spinner";
import FollowButton from "../components/users/FollowButton";
import useCurrentUser from "../utils/hooks/useCurrentUser";
import UserPosts from "../components/profile/UserPosts";
import ConnectionList from "../components/profile/ConnectionsList";

function Profile() {
  const { userId } = useParams();

  const { loading, data } = useQuery(GET_USER, {
    variables: { id: userId },
  });

  const userData = data?.getUser;

  const { isCurrentUser } = useCurrentUser(userData?.id);

  if (loading) return <Spinner centerd={true} show={loading} />;

  return (
    <>
      <section>
        <div className="flex flex-col justify-center space-y-16">
          <div className="flex flex-col w-full space-y-8 p-4">
            <div className="flex flex-col items-center space-y-3">
              <Avatar src={userData?.picture} className="w-40 h-40" />
              <h1 className="font-medium text-2xl">{userData?.username}</h1>
              {!isCurrentUser(userData?.id) && (
                <FollowButton
                  isFollowed={userData?.isFollowed}
                  refetchedQuery={GET_USER}
                />
              )}
              <small className="font-light">{userData?.gender}</small>
              <small className="font-bold uppercase">
                from {userData?.country}
              </small>
              <p className="text-gray-400 text-xs text-center">
                {userData?.bio}
              </p>
            </div>
            <div className="flex justify-between md:justify-evenly items-center">
              <ProfileAnalytic total={userData?.posts} name="posts" to="" />
              <ProfileAnalytic total={userData?.followers} name="followers" />
              <ProfileAnalytic total={userData?.following} name="following" />
            </div>
          </div>
          <Routes>
            <Route index element={<UserPosts />} />
            <Route
              path="following"
              element={
                <ConnectionList
                  GQL={GET_USER_FOLLOWING}
                  id={userId}
                  getData="getUserFollowing"
                />
              }
            />
            <Route
              path="followers"
              element={
                <ConnectionList
                  GQL={GET_USER_FOLLOWERS}
                  id={userId}
                  getData="getUserFollowers"
                />
              }
            />
          </Routes>
        </div>
      </section>
    </>
  );
}

export default Profile;
