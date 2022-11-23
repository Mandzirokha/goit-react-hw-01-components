import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: { name, avatar } }) => {
  return (
    <div>
      <span className={css.status}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  // isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
