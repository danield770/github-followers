import { GetFollowers_user } from '../../services/--tagname=gql/GetFollowers';
import githubService from '../../services/githubService';
import { IPaginationPage } from '../HomePage/types';

export const fetchFollowers = async (user: string, cursor: any) => {
  console.log('getfollowers(user,cursor): ', user, cursor);
  const response: void | GetFollowers_user | null = await githubService
    .getFollowers(user, cursor)
    .catch((err) => {
      console.log('Error: ', err);
    });

  if (!response) return;

  // console.log('Response: ', response);
  let page: IPaginationPage = {
    names: response?.followers?.edges?.map((edge) => [
      edge?.node?.login,
      edge?.node?.name,
    ]),
    endCursor: response?.followers?.pageInfo?.endCursor,
    hasNextPage: response?.followers?.pageInfo?.hasNextPage,
  };

  return page;
};
