import React from "react";
//import user from './user.json';

function Profile (user) {
  console.log(user);
  const {name, tag, location, avatar, stats} = {user};
  console.log(name, tag, location, avatar, stats);
  return(
    <div>
      <div>
        <img
          src={avatar}
          alt={name}
          class="avatar"
        />
        <p class="name">{name}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>
      
    </div>
  );
}

export default Profile;