import { gql } from "@apollo/client";

const GET_USER = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      picture
      bio
      posts
      following
      followers
      country
      gender
      isFollowed
    }
  }
`;

const UPDATE_USER = gql`
  mutation UpdateUser($username: String, $picture: String, $bio: String) {
    updateUser(input: { username: $username, picture: $picture, bio: $bio }) {
      id
      username
      picture
      bio
    }
  }
`;

const FOLLOW_USER = gql`
  mutation FollowUser($id: ID!) {
    followUser(id: $id) {
      followerId
      followingId
    }
  }
`;
const UNFOLLOW_USER = gql`
  mutation UnfollowUser($id: ID!) {
    unfollowUser(id: $id)
  }
`;

const USER_POSTS = gql`
  query GetUserPosts($id: ID!, $limit: Int!, $page: Int!) {
    getUserPosts(id: $id, limit: $limit, page: $page) {
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

const GET_USER_FOLLOWERS = gql`
  query GetUserFollowers($id: ID!, $limit: Int!, $page: Int!) {
    getUserFollowers(id: $id, limit: $limit, page: $page) {
      pageInformation {
        hasNextPage
        hasPreviousPage
        totalPages
        currentPage
      }
      data {
        id
        username
        picture
        isFollowed
      }
    }
  }
`;

const GET_USER_FOLLOWING = gql`
  query GetUserFollowing($id: ID!, $limit: Int!, $page: Int!) {
    getUserFollowing(id: $id, limit: $limit, page: $page) {
      pageInformation {
        hasNextPage
        hasPreviousPage
        totalPages
        currentPage
      }
      data {
        id
        username
        picture
        isFollowed
      }
    }
  }
`;

const USERS_RESULTS = gql`
  query GetUserResults($query: String!, $limit: Int!, $cursor: Int!) {
    getUserResults(query: $query, limit: $limit, cursor: $cursor) {
      hasMore
      data {
        id
        username
        picture
      }
    }
  }
`;

export {
  GET_USER,
  UPDATE_USER,
  FOLLOW_USER,
  UNFOLLOW_USER,
  USER_POSTS,
  GET_USER_FOLLOWERS,
  GET_USER_FOLLOWING,
  USERS_RESULTS,
};
