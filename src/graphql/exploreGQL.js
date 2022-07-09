import { gql } from "@apollo/client";

const EXPLORE_POSTS = gql`
  query ExplorePosts($limit: Int!, $page: Int!) {
    explorePosts(limit: $limit, page: $page) {
      pageInformation {
        hasNextPage
        hasPreviousPage
        totalPages
        currentPage
      }
      data {
        id
        author {
          username
          id
          picture
        }
        isLiked
        totalLikes
        totalComments
        content
        picture
        createdAt
      }
    }
  }
`;

export { EXPLORE_POSTS };
