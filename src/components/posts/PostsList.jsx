import React from "react";
import Post from "./Post";

function PostsList({ list, refetchedQuery }) {
  return (
    <>
      {list?.map((post) => (
        <Post key={post.id} data={post} refetchedQuery={refetchedQuery} />
      ))}
    </>
  );
}

export default PostsList;
