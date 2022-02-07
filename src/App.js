import './App.css';

import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';

import FriendsList from './components/FriendsList/FriendsList';
import friends from './components/FriendsList/friends.json'

import Statistic from './components/Statistics/Statistics';
import statistic from './components/Statistics/statistic.json'

import Transaction from './components/Transaction-history/THistory';
import transaction from './components/Transaction-history/transaction.json'

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
      <FriendsList friends={friends} />
      <Statistic title="Upload stats" stats={statistic} />
      <Transaction
        items={transaction}
      />
    </>
  );
}

export default App;
