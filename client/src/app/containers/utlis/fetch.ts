import { IPaginationPage } from '../HomePage/types';

export const fetchFollowers = async (user: string, cursor: any) => {
  const port = process.env.PORT || 8080;
  const BASE_URL = `http://localhost:${port}/`;
  try {
    let url =
      cursor === undefined
        ? `${BASE_URL}?user=${user}`
        : `${BASE_URL}?user=${user}&cursor=${cursor}`;
    // console.log('url: ', url);
    const response = await fetch(url);
    const result = await response.json();
    // console.log('result', result);

    let page: IPaginationPage = {
      names: result?.user?.followers?.edges?.map((edge: any) => [
        edge?.node?.login,
        edge?.node?.name,
      ]),
      endCursor: result?.user?.followers?.pageInfo?.endCursor,
      hasNextPage: result?.user?.followers?.pageInfo?.hasNextPage,
    };

    return page;
  } catch (error) {
    throw error;
  }
};
