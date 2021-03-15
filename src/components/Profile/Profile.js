import React from "react";

const Profile = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <img src={props.avatar} alt={props.name} class="avatar" />
        <p class="name">{props.name}</p>
        <p class="tag">@{props.tag}</p>
        <p class="location">{props.location}</p>
      </div>
      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{props.stats.followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{props.stats.views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
