import axios from 'axios';

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios.post(
        'http://localhost:3001/authenticate',
        {username: value}
        )
        .then(r => props.onAuth({...r.data, secret: value }))
        .catch(err => console.log(err));
    // props.onAuth({ username: value, secret: value });
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Whats up 👋</div>

        <div className="form-subtitle">To start, set a username</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;

import PropTypes from "prop-types";

AuthPage.propTypes = {
  onAuth: PropTypes.func.isRequired,
};
