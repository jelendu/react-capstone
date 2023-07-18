import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
      "25f06b5d-0a92-4a43-b1ea-e91f449baa16",
      props.user.username,
      props.user.secret
    );
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
        </div>
    )
}

export default ChatsPage

import PropTypes from "prop-types";

ChatsPage.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    secret: PropTypes.string.isRequired,
  }).isRequired,
};



// import PropTypes from "prop-types";
// import { PrettyChatWindow } from "react-chat-engine-pretty";

// import UserProfile from "./UserProfile";
// import ChatList from "./ChatList";
// import Settings from "./Settings";

// const ChatsPage = (props) => {
//   const { user, chats, settings, onChangeSettings } = props;

//   return (
//     <div style={{ height: "100vh" }}>
//       <UserProfile user={user} />
//       <ChatList chats={chats} />
//       <Settings settings={settings} onChangeSettings={onChangeSettings} />
//       <PrettyChatWindow
//         projectId="25f06b5d-0a92-4a43-b1ea-e91f449baa16"
//         username={props.user.username}
//         secret={props.user.secret}
//         style={{ height: "100%" }}
//       />
//     </div>
//   );
// };

// ChatsPage.propTypes = {
//   user: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     secret: PropTypes.string.isRequired,
//   }).isRequired,
//   chats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       lastMessage: PropTypes.string,
//     })
//   ).isRequired,
//   settings: PropTypes.shape({
//     notifications: PropTypes.bool.isRequired,
//   }).isRequired,
//   onChangeSettings: PropTypes.func.isRequired,
// };

// export default ChatsPage;

// import { PrettyChatWindow } from "react-chat-engine-pretty";

// const ChatsPage = (props) => {
//     return (
//       <div style={{ height: "100vh" }}>
//         <PrettyChatWindow
//             projectId="25f06b5d-0a92-4a43-b1ea-e91f449baa16"
//             username={props.user.username}
//             secret={props.user.secret}
//             style={{ height: '100%'}}
//         />
//       </div>
//     )
// }

// export default ChatsPage;

// import PropTypes from "prop-types";

// ChatsPage.propTypes = {
//   user: PropTypes.shape({
//     username: PropTypes.string.isRequired,
//     secret: PropTypes.string.isRequired,
//   }).isRequired,
// };