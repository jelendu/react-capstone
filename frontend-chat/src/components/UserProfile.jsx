import PropTypes from "prop-types";

const UserProfile = (props) => {
  return (
    <div>
      <h2>{props.user.username}</h2>
      <p>First Name: {props.user.first_name}</p>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    first_name: PropTypes.string,
  }).isRequired,
};

export default UserProfile;
