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
  setNewUser: (obj: any) => dispatch(addUser(obj)),
  setFollowersPage: (page: IPaginationPage) => dispatch(addFollowersPage(page)),
  setNameType: (type: boolean) => dispatch(updateNameType(type)),
});

export function HomePage(props: IHomePageProps) {
  const { setNewUser, setFollowersPage, setNameType } = actionDispatch(
    useAppDispatch()
  );
  const userRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<string>();
  const [errorMsg, setErrorMsg] = useState<string>('');
  const isAcccountNames = useAppSelector(selectNameType);

  useEffect(() => {
    let cursor: string | undefined = undefined;
    if (!user) return;
    const fetch = async function () {
      try {
        let page = await fetchFollowers(user, cursor);
        console.log('page', page);
        if (page) setFollowersPage(page);
        setErrorMsg('');
      } catch (error) {
        console.log('error 456: ', error);
        setErrorMsg(error);
      }
    };
    fetch();
  }, [user]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log('formInput: ', userRef?.current?.value);
    const formInput = userRef.current?.value;
    if (user === formInput) return; // same user so nothing to do
    formInput && setUser(formInput);
    formInput && setNewUser(formInput);
  }

  function handleNameToggle() {
    setNameType(!isAcccountNames);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          className='input'
          type='text'
          ref={userRef}
          placeholder='Enter github login name'
        />
        <button className='btn btn--primary'>Display followers</button>
        <div className='checkbox-wpr'>
          <input
            className='checkbox'
            type='checkbox'
            id='cb'
            onChange={handleNameToggle}
          />
          <label className='cb-label1' htmlFor='cb'>
            Login Names
          </label>
          <label className='cb-label2' htmlFor='cb'>
            Account Names
          </label>
        </div>
      </form>
      <Pagination />
      {errorMsg.toString() !== '' ? (
        <div className='error-msg'>{errorMsg.toString()}</div>
      ) : (
        <Followers />
      )}
    </main>
  );
}
