import PropTypes from 'prop-types'
import s from './FriendsList.module.css'
function FriendsList({ friends }) {
    return (
    <div>
            <ul className={s.friendlist}>
        {friends.length > 0 && friends.map((friend) => {
            return (<li className={s.item} key={friend.id}>
                 <span className={friend.isOnline ? s.statusOnLine : s.statusOffLine}></span>
                <img className={s.avatar} src={friend.avatar} alt="" width="48" />
                <p className={s.name}>{friend.name}</p>
                </li>)
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