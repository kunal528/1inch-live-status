import Button from "./Button";
import "./index.css";
import Logo from "./Logo";
const NavBar = () => {
  return (
    <div className="header">
      <Logo key="logo"/>
      <Button text="TEAM" key="team"/>
      <Button
        text="CONTACT US"
        key="contact_us"
        onClick={() => window.open("")}
      />
    </div>
  );
};

export default NavBar;
