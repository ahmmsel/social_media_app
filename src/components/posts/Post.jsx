import React from "react";
import { useNavigate } from "react-router-dom";
import { ChatAlt2Icon, HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/solid";
import { DELETE_POST, LIKE_POST, UNLIKE_POST } from "../../graphql/postGQL";
import moment from "moment";
import PostButton from "./PostButton";
import Avatar from "../UI/Avatar";
import useLikeButton from "../../utils/hooks/useLikeButton";
import BreakLine from "../UI/BreakLine";
import DeleteButton from "../UI/DeleteButton";

function Post({ data, refetchedQuery }) {
  const { handleLikePost, handleUnlikePost, likeLoading, unlikeLoading } =
    useLikeButton(LIKE_POST, UNLIKE_POST, refetchedQuery, {
      postId: data?.id,
    });

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    return () => navigate(path);
  };

  return (
    <article className="flex flex-col space-y-4 p-4">
      <header className="flex justify-between items-center">
        <div
          className="flex items-center space-x-2"
          role="button"
          onClick={handleNavigate(`/profile/${data?.author?.id}`)}>
          <Avatar
            src={data?.author?.picture}
            alt={data?.author?.username}
            className="w-14 h-14 rounded-full"
          />
          <h1 className="font-medium">{data?.author?.username}</h1>
        </div>
        <DeleteButton
          GQL={DELETE_POST}
          author={data?.author?.id}
          options={{
            refetchQueries: [refetchedQuery],
            variables: { id: data?.id },
          }}
        />
      </header>
      {data?.picture && (
        <img
          src={data?.picture}
          alt={data?.content}
          className="w-full rounded-xl shadow-lg sm:w-4/5 md:w-3/5 lg:w-2/5"
        />
      )}
      <div className="space-y-3">
        <p className="font-medium">{data?.content}</p>
        <small
          className="font-light text-gray-600"
          role="button"
          onClick={handleNavigate(`/p/${data?.id}`)}>
          {moment(new Date(data?.createdAt)).fromNow()}
        </small>
      </div>
      <footer className="flex items-center justify-evenly sm:justify-start sm:space-x-6">
        <PostButton
          title="likes"
          Icon={data?.isLiked ? HeartSolidIcon : HeartIcon}
          total={data?.totalLikes}
          disabled={likeLoading || unlikeLoading}
          additionalStyle={data?.isLiked && "text-pink-900"}
          onClickIcon={data?.isLiked ? handleUnlikePost : handleLikePost}
        />
        <BreakLine vertical={true} />
        <PostButton
          title="comments"
          Icon={ChatAlt2Icon}
          total={data?.totalComments}
          onClick={handleNavigate(`/p/${data?.id}`)}
        />
      </footer>
    </article>
  );
}

export default Post;
