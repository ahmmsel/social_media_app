import { gql } from "@apollo/client";

const CREATE_POST = gql`
  mutation CreatePost($content: String!, $picture: String) {
    createPost(input: { content: $content, picture: $picture }) {
      id
    }
  }
`;

const GET_POST = gql`
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
      updatedAt
    }
  }
`;

const LIKE_POST = gql`
  mutation LikePost($postId: ID!) {
    likePost(id: $postId)
  }
`;

const UNLIKE_POST = gql`
  mutation UnlikePost($postId: ID!) {
    unlikePost(id: $postId)
  }
`;

const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
`;

export { CREATE_POST, GET_POST, LIKE_POST, UNLIKE_POST, DELETE_POST };
