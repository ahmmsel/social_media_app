import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import PostsList from "../posts/PostsList";
import { USER_POSTS } from "../../graphql/userGQL";
import { useParams } from "react-router-dom";
import Pagination from "../UI/Pagination";
import { DEFAULT_PAGE, LIMIT } from "../../constant";

function UserPosts() {
  const { userId } = useParams();

  const [page, setPage] = useState(DEFAULT_PAGE);

  const { data } = useQuery(USER_POSTS, {
    variables: { id: userId, limit: LIMIT, page },
  });

  const userPosts = data?.getUserPosts?.data;

  const pageInformation = data?.getUserPosts?.pageInformation;

  return (
    <div className="flex flex-col space-y-12">
      <div className="flex flex-col space-y-8">
        <PostsList list={userPosts} refetchedQuery={USER_POSTS} />
      </div>
      <Pagination setPage={setPage} pageInformation={pageInformation} />
    </div>
  );
}

export default UserPosts;
