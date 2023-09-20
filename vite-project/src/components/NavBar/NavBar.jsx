import { Link, NavLink } from "react-router-dom";
import styles from './NavBar.module.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className={styles['nav']}>
      <div className={styles['link-menu']}>
        <h1>
          <Link to="/" className={styles['link-menu-title']}>La Relojería</Link>
        </h1>
        <ul className={styles['link-menu-item']}>
          <li>
            <NavLink to="/category/watches" className={styles['link-menu-item-li']}>Relojes</NavLink>
          </li>
          <li>
            <NavLink to="/category/smartwatches" className={styles['link-menu-item-li']}>Smartwatch</NavLink>
          </li>
          <li>
            <NavLink to="/category/accessories" className={styles['link-menu-item-li']}>Accesorios</NavLink>
          </li>
          <div>
            <NavLink to="/cart" className={styles['link-menu-item-cart']}>
              <CartWidget />
            </NavLink>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;






