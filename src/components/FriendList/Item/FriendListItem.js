import React from 'react';
import s from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={s.item}>
            <span
                className={isOnline ? s.statusOnline : s.statusOffline}
            ></span>
            <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
        </li>
    );
};

export default FriendListItem;
