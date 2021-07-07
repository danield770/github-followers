import { GetFollowers } from '../--tagname=gql/GetFollowers';
import { apolloClient } from '../../graphql';
import { GET_FOLLOWERS } from '../queries';
class GithubService {
  static getFollowers(user: string, cursor: string | undefined) {
    throw new Error('Method not implemented.');
  }
  async getFollowers(
    user: string,
    cursor: string | undefined = undefined
  ): Promise<GetFollowers['user']> {
    try {
      const response = await apolloClient.query({
        query: GET_FOLLOWERS,
        variables: { user, cursor },
      });
      if (!response || !response.data) {
        console.log('response: ', response);
        throw new Error('Cannot get followers');
      }
      return response.data.user;
    } catch (err) {
      throw err;
    }
  }
}

export default new GithubService();
