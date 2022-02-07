import PropTypes from 'prop-types'
import s from './FriendsList.module.css'
import FriendListItem from '../FriendListItem/FriendListItem'

function FriendsList({ friends }) {
  console.log(friends);
  return (
    <div>
      <ul className={s.friendlist}>
        {friends.length > 0 && friends.map((friend) => {
          return (
            <FriendListItem friend={friend}/>
            )
        })}
      </ul>
    </div>
  )
}
export default FriendsList

FriendsList.propType = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
  }))
}