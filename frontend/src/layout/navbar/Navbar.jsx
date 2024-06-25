import style from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react';
export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.brand}>
        <NavLink to='/'>alejandro luna</NavLink>
      </div>
      <Hamburger size={34} color='#fff' />
    </nav>
  );
}
