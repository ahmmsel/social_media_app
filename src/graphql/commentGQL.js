import { gql } from "@apollo/client";

const ADD_COMMENT = gql`
  mutation AddComment($text: String!, $commentedOnId: ID!) {
    addComment(input: { text: $text, commentedOnId: $commentedOnId }) {
      id
    }
  }
`;

const GET_COMMENTS = gql`
  query GetComments($commentedOnId: ID!, $limit: Int!, $page: Int!) {
    getComments(commentedOnId: $commentedOnId, limit: $limit, page: $page) {
      pageInformation {
        hasPreviousPage
        hasNextPage
        totalPages
        currentPage
      }
      data {
        id
        author {
          id
          username
          picture
        }
        commentedOn {
          authorId
        }
        text
        createdAt
      }
    }
  }
`;

const REMOVE_COMMENT = gql`
  mutation RemoveComment($id: ID!) {
    removeComment(id: $id)
  }
`;

export { ADD_COMMENT, GET_COMMENTS, REMOVE_COMMENT };
