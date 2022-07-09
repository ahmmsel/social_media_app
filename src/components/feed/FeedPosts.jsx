import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import PostsList from "../posts/PostsList";
import { FEED_POSTS } from "../../graphql/feedGQL";
import Pagination from "../UI/Pagination";
import { DEFAULT_PAGE, LIMIT } from "../../constant";
import Spinner from "../UI/Spinner";

function FeedPosts() {
  const [page, setPage] = useState(DEFAULT_PAGE);

  const { loading, data } = useQuery(FEED_POSTS, {
    variables: { limit: LIMIT, page },
  });

  if (loading) return <Spinner show={loading} centerd={true} />;

  const feedPosts = data?.feedPosts?.data;

  const pageInformation = data?.feedPosts?.pageInformation;

  return (
    <div className="flex flex-col space-y-12">
      <div className="flex flex-col space-y-8">
        <PostsList list={feedPosts} refetchedQuery={FEED_POSTS} />
      </div>
      <Pagination setPage={setPage} pageInformation={pageInformation} />
    </div>
  );
}

export default FeedPosts;
