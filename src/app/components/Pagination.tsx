// function Pagination({
//   paginationObj,
//   handleAction,
//   currentDepth,
//   totalDepth,
//   fetchData,
// }) {
//   async function handlePaginationClick(link, url) {
//     let newDepth;
//     let newFollowers;
//     if (link === 'prev') {
//       newDepth = currentDepth - 1;
//       // handleAction({ type: "UPDATE_DEPTH", depth: newDepth });
//     }
//     if (link === 'next') {
//       newDepth = currentDepth + 1;
//       // console.log("newDepth: ", newDepth);
//       // console.log("totalDepth: ", totalDepth);
//       if (newDepth > totalDepth) {
//         let res = await fetchData(url, 'addFollowers');
//         newFollowers = res.map((user) => user.login);
//         // console.log("res (addFollowers)", newFollowers);
//       }
//     }
//     // console.log("newDepth: ", newDepth);
//     // console.log("currentDepth: ", currentDepth);
//     !!newFollowers &&
//       newDepth !== currentDepth &&
//       handleAction({
//         type: 'ADD_FOLLOWERS',
//         names: newFollowers,
//       });
//     handleAction({ type: 'UPDATE_DEPTH', depth: newDepth });
//   }
//   return (
//     <div className='pagination-buttons'>
//       {!!paginationObj.prev && currentDepth > 1 && (
//         <button
//           title={paginationObj.prev}
//           type='button'
//           onClick={() => handlePaginationClick('prev', paginationObj.prev)}
//         >
//           &lsaquo; Show previous 30 followers
//         </button>
//       )}
//       {(!!paginationObj.next || currentDepth < totalDepth) && (
//         <button
//           title={paginationObj.next}
//           type='button'
//           onClick={() => handlePaginationClick('next', paginationObj.next)}
//         >
//           Show more followers &rsaquo;
//         </button>
//       )}
//     </div>
//   );
// }

function Pagination() {
  return 'Pagination';
}

export default Pagination;
