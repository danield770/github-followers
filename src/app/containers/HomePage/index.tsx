import React, { useEffect, useRef, useState } from 'react';
import { Dispatch } from 'redux';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchFollowers } from '../utlis/fetch';
import {
  addUser,
  addFollowersPage,
  updateNameType,
  selectNameType,
} from './homePageSlice';
import { IPaginationPage } from './types';
import Followers from '../../components/Followers';
import Pagination from '../../components/Pagination';

interface IHomePageProps {}

const actionDispatch = (dispatch: Dispatch) => ({
  setUsername: (user: string) => dispatch(addUser(user)),
  setFollowersPage: (page: IPaginationPage) => dispatch(addFollowersPage(page)),
  setNameType: (type: boolean) => dispatch(updateNameType(type)),
});

export function HomePage(props: IHomePageProps) {
  const { setUsername, setFollowersPage, setNameType } = actionDispatch(
    useAppDispatch()
  );
  const userRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<string>();
  const isAcccountNames = useAppSelector(selectNameType);

  useEffect(() => {
    let cursor: string | undefined = undefined;
    if (!user) return;
    const fetch = async function () {
      let page = await fetchFollowers(user, cursor);
      console.log('page', page);
      if (page) setFollowersPage(page);
    };
    fetch();
  }, [user]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // setLoading("loading");
    console.log('formInput: ', userRef?.current?.value);
    const formInput = userRef.current?.value;
    formInput && setUser(formInput);
    formInput && setUsername(formInput);
  }

  function handleNameToggle() {
    setNameType(!isAcccountNames);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          ref={userRef}
          placeholder='Enter github login name'
        />
        <button>Display followers</button>
        <div>
          <input type='checkbox' id='cb' onChange={handleNameToggle} />
          <label htmlFor='cb'>
            Display followers' account names (rather than login names)
          </label>
        </div>
      </form>
      <Pagination />
      <Followers />
    </main>
  );
}
