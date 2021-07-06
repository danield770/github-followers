import { GetFollowers } from '../../services/--tagname=gql/GetFollowers';

export interface IHomePageState {
  followers: GetFollowers['user'];
}
