import { GetFollowers } from '../--tagname=gql/GetFollowers';
import { apolloClient } from '../../graphql';
import { GET_FOLLOWERS } from '../queries';

class GithubService {
  async getFollowers(user: String): Promise<GetFollowers['user']> {
    try {
      const response = await apolloClient.query({
        query: GET_FOLLOWERS,
        variables: { user },
      });
      if (!response || !response.data) {
        console.log('response: ', response);
        throw new Error('Cannot get followers');
      }
      return response.data;
    } catch (err) {
      throw err;
    }
  }
}

export default new GithubService();
