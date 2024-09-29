import { NavLink } from "react-router-dom";
import s from "../Header/Header.module.css";

const Navigation = () => {
  return (
    <div className={s.headerNav}>
      <NavLink to="/" className={s.headerLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={s.headerLink}>
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
