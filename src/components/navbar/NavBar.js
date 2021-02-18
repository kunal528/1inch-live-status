
import "./index.css";
import Logo from "./Logo";
import DarkModeToggle from "react-dark-mode-toggle";
const NavBar = ({ isDarkMode , onChange }) => {
  return (
    <div className={`header ${isDarkMode && 'darkMode'}`}>
      <Logo key="logo" isDarkMode={ isDarkMode}/>
      <DarkModeToggle checked={isDarkMode} onChange={onChange} size='10vh' />
    </div>
  );
};

export default NavBar;
