import PropTypes from 'prop-types';
import css from './UserInfo.module.css';

export const UserInfo = ({ avatar, username, tag, location }) => {
  return (
    <div className={css.description}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

UserInfo.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  lacation: PropTypes.string.isRequired,
};
