import Button from "./Button";
import "./index.css";
import Logo from "./Logo";
import DarkModeToggle from "react-dark-mode-toggle";
const NavBar = ({ isDarkMode , onChange }) => {
  return (
    <div className={`header ${isDarkMode && 'darkMode'}`}>
      <Logo key="logo" isDarkMode={ isDarkMode}/>
      <Button text="TEAM" key="team" />
      <Button
        text="CONTACT US"
        key="contact_us"
        onClick={() => window.open("")}
      />
      <DarkModeToggle checked={isDarkMode} onChange={onChange} size='10vh' />
    </div>
  );
};

export default NavBar;
