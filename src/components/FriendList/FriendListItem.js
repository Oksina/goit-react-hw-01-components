import React from "react";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li class="item" key={id}>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
