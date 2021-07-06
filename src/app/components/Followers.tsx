//import Pagination from './Pagination';

// function Followers({
//   user,
//   followers,
//   navigation,
//   currentDepth,
//   totalDepth,
//   handleAction,
//   fetchData,
// }) {
//   // const startCount = 30*(depth-1)+1;
//   return (
//     <section>
//       {console.log('followers: ', followers)}
//       <h3>{user}'s followers</h3>
//       {Object.keys(navigation).length > 0 && (
//         <Pagination
//           paginationObj={navigation}
//           handleAction={handleAction}
//           currentDepth={currentDepth}
//           totalDepth={totalDepth}
//           fetchData={fetchData}
//         />
//       )}
//       <ol
//         className='followers'
//         style={{ '--start-count': 30 * (currentDepth - 1) }}
//       >
//         {followers?.[currentDepth - 1]?.map((follower) => (
//           <li className='follower' key={follower}>
//             {follower}
//           </li>
//         ))}
//       </ol>
//     </section>
//   );
// }

function Followers() {
  return 'Followers';
}

export default Followers;
