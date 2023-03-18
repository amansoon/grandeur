import css from "../styles/sidebar.module.css";
import MenuIcon from "../icons/MenuIcon";
import UserIcon from "@/icons/UserIcon";
import CartIcon from "@/icons/CartIcon";
import SearchIcon from "@/icons/SearchIcon";

function Sidebar() {
  return (
    <div className={css.sidebar}>
      <div className={css.sidebar__item}>
        <MenuIcon />
      </div>
      <div className={css.sidebar__center}>
        <div className={css.sidebar__item}>
          <UserIcon />
        </div>
        <div className={css.sidebar__item}>
          <SearchIcon />
        </div>
        <div className={css.sidebar__item}>
          <CartIcon />
        </div>
      </div>
      <div className={css.sidebar__item}>
        <MenuIcon />
      </div>
    </div>
  );
}

export default Sidebar;
