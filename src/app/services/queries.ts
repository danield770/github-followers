import gql from 'graphql-tag';

export const GET_FOLLOWERS = gql`
  query GetFollowers($user: String!, $cursor: String) {
    user(login: $user) {
      followers(first: 30, after: $cursor) {
        totalCount
        edges {
          node {
            login
            name
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;
