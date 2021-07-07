import React from 'react';

import { useAppSelector } from '../hooks';
import {
  selectUser,
  selectCurrentNames,
  selectNameType,
  selectDepth,
} from '../containers/HomePage/homePageSlice';

function Followers() {
  const user = useAppSelector(selectUser);
  const names = useAppSelector(selectCurrentNames);
  const isAccountNames = useAppSelector(selectNameType);
  const depth = useAppSelector(selectDepth);
  var listStyle = { '--start-count': 30 * (depth - 1) } as React.CSSProperties;

  return (
    <ol className='followers' style={listStyle}>
      {names?.length === 0 && (
        <div>Unfortunately {user} currently doesn't have any followers 😢</div>
      )}
      {names?.map((follower) => (
        <li className='follower' key={follower[0]}>
          {isAccountNames
            ? follower[1] || '- No name specified -'
            : follower[0]}
        </li>
      ))}
    </ol>
  );
}

export default Followers;
