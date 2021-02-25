import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendsList}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          {friend.isOnline ? (
            <span
              className={s.status}
              style={{ backgroundColor: 'green' }}
            ></span>
          ) : (
            <span
              className={s.status}
              style={{ backgroundColor: 'red' }}
            ></span>
          )}
          <img className={s.avatar} src={friend.avatar} alt="" width="48" />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
