import style from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import Menu from '../components/Menu';
export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.brand}>
        <NavLink to='/'>alejandro luna</NavLink>
      </div>
      <div>
      </div>
        <Menu />
    </nav>
  );
}
