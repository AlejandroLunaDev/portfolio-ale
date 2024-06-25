import { NavLink } from 'react-router-dom'
import style from './Nav.module.scss'

export default function Nav() {
  return (
    <nav className={style.nav}>
      <NavLink to='/about'>hola</NavLink>
      <NavLink to='/about'>soy</NavLink>
      <NavLink to='/about'>ale</NavLink>
    </nav>
  )
}
