import ProfileImage from './ProfileImage';
import User from './User';
import Timestamp from './Timestamp';
import Message from './Message';
import Actions from './Actions';

export default function Tweet({ user, timestamp, message }) {
  return (
    <div className="tweet">
      <ProfileImage image={user.image} name={user.name} />

      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle} />
          <Timestamp time={timestamp} />
        </div>

        <Message message={message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}