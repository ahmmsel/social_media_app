import { gql } from "@apollo/client";

const FEED_POSTS = gql`
  query FeedPosts($limit: Int!, $page: Int!) {
    feedPosts(limit: $limit, page: $page) {
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

export { FEED_POSTS };
