import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = (className) => {
  return (
    <Link to="/" href="../../../public/index.html">
      <img
        className={`${className.className}`}
        src={require("../../../images/kintsugi-logo.jpg")}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
