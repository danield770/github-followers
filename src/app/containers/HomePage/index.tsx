import React, { useEffect } from 'react';
import githubService from '../../services/githubService';

interface IHomePageProps {}

export function HomePage(props: IHomePageProps) {
  //   async function handleCheckboxChange() {
  //     handleAction({
  //       type: 'UPDATE_CHECKBOX',
  //       isAccountNames: !state.isAccountNames,
  //     });
  //     if (
  //       !state.isAccountNames &&
  //       state.names?.[state.depth - 1] &&
  //       !state.usernames?.[state.depth - 1]
  //     ) {
  //       let accountNames = await fetchAccountNames(state.names[state.depth - 1]);
  //       console.log('handleCheckboxChange: accountNames: ', accountNames);
  //       handleAction({
  //         type: 'ADD_USERNAMES',
  //         usernames: accountNames,
  //       });
  //     }
  //   }
  const fetchFollowers = async () => {
    const followers = await githubService
      .getFollowers('zellwk')
      .catch((err) => {
        console.log('Error: ', err);
      });

    console.log('Followers: ', followers);
  };

  useEffect(() => {
    fetchFollowers();
  }, []);

  return (
    <main>Hello World</main>
    // <main>
    //   {console.log('hi')}
    //   {console.log(state)}
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       type='text'
    //       ref={userRef}
    //       placeholder='Enter github login name'
    //     />
    //     <button>Display followers</button>
    //     <div>
    //       <input type='checkbox' id='cb' onChange={handleCheckboxChange} />
    //       <label htmlFor='cb'>
    //         Display followers' account names (rather than login names)
    //       </label>
    //     </div>
    //   </form>
    //   {loading === 'loading' && <div className='spinner'></div>}
    //   {!!state.names.length && (
    //     <Followers
    //       user={user}
    //       followers={state.isAccountNames ? state.usernames : state.names}
    //       loading={loading}
    //       navigation={navigation}
    //       handleAction={handleAction}
    //       fetchData={fetchData}
    //       currentDepth={state.depth}
    //       totalDepth={state.names.length}
    //     />
    //   )}
    //   {state.names.length === 0 && loading === 'finished' && (
    //     <div>Unfortunately {user} currently doesn't have any followers 😢</div>
    //   )}
    // </main>
  );
}
