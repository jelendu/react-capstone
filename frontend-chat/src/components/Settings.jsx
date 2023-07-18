import PropTypes from "prop-types";

const Settings = (props) => {
  const { settings, onChangeSettings } = props;

  const handleChange = (e) => {
    onChangeSettings({ ...settings, [e.target.name]: e.target.checked });
  };

  return (
    <div>
      <h2>Settings</h2>
      <label>
        Notifications
        <input
          type="checkbox"
          name="notifications"
          checked={settings.notifications}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

Settings.propTypes = {
  settings: PropTypes.object.isRequired,
  onChangeSettings: PropTypes.func.isRequired,
};

export default Settings;
