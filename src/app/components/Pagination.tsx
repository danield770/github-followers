import React from 'react';
import { Dispatch } from 'redux';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  addFollowersPage,
  updateDepth,
  selectUser,
  selectDepth,
  selectPaginationInfo,
} from '../containers/HomePage/homePageSlice';
import { IPaginationPage } from '../containers/HomePage/types';
import { fetchFollowers } from '../containers/utlis/fetch';

const actionDispatch = (dispatch: Dispatch) => ({
  setFollowersPage: (page: IPaginationPage) => dispatch(addFollowersPage(page)),
  setDepth: (num: number) => dispatch(updateDepth(num)),
});

function Pagination() {
  const user = useAppSelector(selectUser);
  const depth = useAppSelector(selectDepth);
  const paginationInfo = useAppSelector(selectPaginationInfo);
  const { setFollowersPage, setDepth } = actionDispatch(useAppDispatch());

  function handlePrevClick() {
    setDepth(-1);
  }

  function handleNextClick() {
    const fetch = async function () {
      let page = await fetchFollowers(user, paginationInfo[0]);
      console.log('page: nextclick', page);
      if (page) setFollowersPage(page);
    };
    fetch();
    setDepth(1);
  }

  return (
    <div className='pagination-buttons'>
      {depth > 1 && (
        <button
          title={`${1 + 30 * (depth - 2)} - ${30 * (depth - 1)}`}
          type='button'
          onClick={handlePrevClick}
        >
          &lsaquo; Show previous 30 followers
        </button>
      )}
      {paginationInfo[1] && (
        <button
          title={`${1 + 30 * depth} - ${30 * (depth + 1)}`}
          type='button'
          onClick={handleNextClick}
        >
          Show more followers &rsaquo;
        </button>
      )}
    </div>
  );
}

export default Pagination;
