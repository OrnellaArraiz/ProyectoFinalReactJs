import { Link, NavLink } from "react-router-dom";
import styles from './NavBar.module.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className={styles['nav']}>
      <div className={styles['enlaces-menu']}>
        <h1>
          <Link to="/" className={styles['enlaces-menu-titulo']}>La Relojería</Link>
        </h1>
        <ul className={styles['enlaces-menu-item']}>
          <li>
            <NavLink to="/category/watches" className={styles['enlaces-menu-item-li']}>Relojes</NavLink>
          </li>
          <li>
            <NavLink to="/category/smartwatches" className={styles['enlaces-menu-item-li']}>Smartwatch</NavLink>
          </li>
          <li>
            <NavLink to="/category/accessories" className={styles['enlaces-menu-item-li']}>Accesorios</NavLink>
          </li>
          <div>
            <NavLink to="/cart" className={styles['enlaces-menu-item-cart']}>
              <CartWidget />
            </NavLink>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;






