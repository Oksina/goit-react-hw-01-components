import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './Item/FriendListItem';
import s from './Item/FriendList.module.css';

const FriendsList = ({ friends }) => {
    //console.log(friends);
    return (
        <ul className={s.friendList}>
            {friends.map(el => (
                <FriendListItem
                    avatar={el.avatar}
                    name={el.name}
                    isOnline={el.isOnline}
                    key={el.id}
                />
            ))}
        </ul>
    );
};

export default FriendsList;

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ).isRequired,
};
