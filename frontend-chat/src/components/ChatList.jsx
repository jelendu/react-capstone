import PropTypes from "prop-types";

const ChatList = (props) => {
  return (
    <div>
      {props.chats.map((chat, i) => (
        <div key={i}>
          <h2>{chat.title}</h2>
        </div>
      ))}
    </div>
  );
};

ChatList.propTypes = {
  chats: PropTypes.array.isRequired,
};

export default ChatList;
