import { Profile } from './Profile/Profile';
import { UserInfo } from './UserInfo/UserInfo';
import user from '../user.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile text="Profile" />
      <UserInfo userinfo={user} />
    </div>
  );
};
