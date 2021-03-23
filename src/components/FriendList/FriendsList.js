import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendsList = ({ friends }) => {
    //console.log(friends);
    return (
        <ul className="friend-list">
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
