import React from 'react'
import Profile from './components/Profile/Profile'
import user from '../src/components/Profile/user.json'

const {name, tag, location, avatar, stats} = {user};
console.log(user)
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



