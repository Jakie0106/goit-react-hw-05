import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <NavLink to="/" className={s.headerLink}>
          Home
        </NavLink>
        <NavLink to="/movies" className={s.headerLink}>
          Movies
        </NavLink>
      </header>
    </div>
  );
};

export default Header;
