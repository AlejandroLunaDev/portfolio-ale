import style from './Navbar.module.scss';
import Menu from '../components/Menu';
export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style.brand}>
        <a href='/' ><span>alejandro luna</span></a>
      </div>
      <div>
      </div>
        <Menu />
    </nav>
  );
}
