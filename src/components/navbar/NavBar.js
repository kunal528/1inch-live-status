import Button from "./Button";
import "./index.css";
import Logo from "./Logo";
const NavBar = () => {
  return (
    <div className="header">
      <Logo />
      <Button text="TEAM" />
      <Button
        text="CONTACT US"
        onClick={() => window.open("")}
      />
    </div>
  );
};

export default NavBar;
