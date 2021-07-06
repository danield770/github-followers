/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFollowers
// ====================================================

export interface GetFollowers_user_followers_edges_node {
  __typename: "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * The user's public profile name.
   */
  name: string | null;
}

export interface GetFollowers_user_followers_edges {
  __typename: "UserEdge";
  /**
   * The item at the end of the edge.
   */
  node: GetFollowers_user_followers_edges_node | null;
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface GetFollowers_user_followers_pageInfo {
  __typename: "PageInfo";
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface GetFollowers_user_followers {
  __typename: "FollowerConnection";
  /**
   * Identifies the total count of items in the connection.
   */
  totalCount: number;
  /**
   * A list of edges.
   */
  edges: (GetFollowers_user_followers_edges | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: GetFollowers_user_followers_pageInfo;
}

export interface GetFollowers_user {
  __typename: "User";
  /**
   * A list of users the given user is followed by.
   */
  followers: GetFollowers_user_followers;
}

export interface GetFollowers {
  /**
   * Lookup a user by login.
   */
  user: GetFollowers_user | null;
}

export interface GetFollowersVariables {
  user: string;
}
