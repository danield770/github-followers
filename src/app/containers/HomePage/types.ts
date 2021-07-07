// import { GetFollowers } from '../../services/--tagname=gql/GetFollowers';

export interface IPaginationPage {
  names: (string | null | undefined)[][] | undefined;
  endCursor: string | undefined | null;
  hasNextPage: boolean | undefined;
}

export interface IHomePageState {
  followersPages: Array<IPaginationPage>;
  user: string;
  isAccountName: boolean;
  depth: number;
}
