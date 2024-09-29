import Navigation from "../Navigation/Navigation";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.wrapper}>
      <header>
        <Navigation />
      </header>
    </div>
  );
};

export default Header;
