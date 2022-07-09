import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import PostsList from "../posts/PostsList";
import Pagination from "../UI/Pagination";
import { DEFAULT_PAGE, LIMIT } from "../../constant";
import Spinner from "../UI/Spinner";
import { EXPLORE_POSTS } from "../../graphql/exploreGQL";

function ExplorePosts() {
  const [page, setPage] = useState(DEFAULT_PAGE);

  const { loading, data } = useQuery(EXPLORE_POSTS, {
    variables: { limit: LIMIT, page },
  });

  if (loading) return <Spinner show={loading} centerd={true} />;

  const explorePosts = data?.explorePosts?.data;

  const pageInformation = data?.explorePosts?.pageInformation;

  return (
    <div className="flex flex-col space-y-12">
      <div className="flex flex-col space-y-8">
        <PostsList list={explorePosts} refetchedQuery={EXPLORE_POSTS} />
      </div>
      <Pagination setPage={setPage} pageInformation={pageInformation} />
    </div>
  );
}

export default ExplorePosts;
