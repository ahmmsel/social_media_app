import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Post from "../components/posts/Post";
import Spinner from "../components/UI/Spinner";
import { GET_POST } from "../graphql/postGQL";
import WriteComment from "../components/comments/WriteComment";
import BreakLine from "../components/UI/BreakLine";
import CommentsList from "../components/comments/CommentsList";
import { GET_COMMENTS } from "../graphql/commentGQL";
import Pagination from "../components/UI/Pagination";
import { DEFAULT_PAGE, LIMIT } from "../constant";
import { useState } from "react";

function PostDetails() {
  const { postId } = useParams();

  const [page, setPage] = useState(DEFAULT_PAGE);

  const {
    loading: postLoading,
    data: postData,
    error: postError,
  } = useQuery(GET_POST, {
    variables: { id: postId },
  });

  const { data: commentData, loading: commentLoading } = useQuery(
    GET_COMMENTS,
    {
      variables: { commentedOnId: postId, limit: LIMIT, page },
    }
  );

  const commentPageInformation = commentData?.getComments?.pageInformation;

  if (postLoading) return <Spinner centerd={true} show={postLoading} />;

  return (
    <div>
      <Post data={postData?.getPost} refetchedQuery={GET_POST} />
      <BreakLine />
      <div className="flex flex-col space-y-10 p-4">
        <WriteComment postId={postId} />
        <CommentsList list={commentData?.getComments?.data} />
        <Pagination
          setPage={setPage}
          pageInformation={commentPageInformation}
        />
      </div>
    </div>
  );
}

export default PostDetails;
