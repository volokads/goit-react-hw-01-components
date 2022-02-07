import s from './FriendsListItem.module.css'
function FriendListItem({ friend }) {
    return (
        <li className={s.item} key={friend.id} id={friend.id}>
            <span className={friend.isOnline ? s.statusOnLine : s.statusOffLine}></span>
            <img className={s.avatar} src={friend.avatar} alt="" width="48" />
            <p className={s.name}>{friend.name}</p>
        </li>
    )
}
export default FriendListItem