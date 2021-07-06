import gql from 'graphql-tag';

export const GET_FOLLOWERS = gql`
  query GetFollowers($user: String!) {
    user(login: $user) {
      followers(first: 30) {
        totalCount
        edges {
          node {
            login
            name
          }
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;
