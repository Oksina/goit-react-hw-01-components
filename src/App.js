import React from "react";
import Profile from "./components/Profile/Profile";
import user from "./user.json";
console.log(user);

const { name, tag, location, avatar, stats } = { user };
function App() {
  return (
    <div>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </div>
  );
}

export default App;
