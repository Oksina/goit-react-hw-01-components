import React from 'react';

//імпорт компонентів
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendList/FriendsList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

//імпорт json
import user from '../src/components/Profile/user.json';
import statisticalData from '../src/components/Statistics/statistical-data.json';
import friends from '../src/components/FriendList/friends.json';
import transactions from '../src/components/TransactionHistory/Transaction.json';

//імпорт стилів
import './index.css';

function App() {
    return (
        <>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Statistics" stats={statisticalData} />
            <FriendsList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    );
}

export default App;
