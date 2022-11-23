import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      {friends.map(friend => {
        return (
          <li className={css.item} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
};
