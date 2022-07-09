import { useMutation } from "@apollo/client";

function useLikeButton(likeGQL, unLikeGQL, refetchedQuery, variables) {
  const commonVars = {
    refetchQueries: [refetchedQuery],
    variables,
  };

  const [handleLikePost, { likeLoading }] = useMutation(likeGQL, commonVars);

  const [handleUnlikePost, { unlikeLoading }] = useMutation(
    unLikeGQL,
    commonVars
  );

  return { handleLikePost, handleUnlikePost, likeLoading, unlikeLoading };
}

export default useLikeButton;
