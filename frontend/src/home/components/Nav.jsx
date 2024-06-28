import { NavLink } from 'react-router-dom';
import style from './Nav.module.scss';
import { useTypewriter } from 'react-simple-typewriter';

export default function Nav() {
  const [text1] = useTypewriter({
    words: ['hola'],
    loop: 1,
    typeSpeed: 220,
    deleteSpeed: 50,
    delaySpeed: 1000
  });

  const [text2] = useTypewriter({
    words: ['soy'],
    loop: 1,
    typeSpeed: 320,
    deleteSpeed: 50,
    delaySpeed: 1200
  });

  const [text3] = useTypewriter({
    words: ['ale'],
    loop: 1,
    typeSpeed: 340,
    deleteSpeed: 50,
    delaySpeed: 1500
  });

  return (
    <nav className={style.nav}>
      <NavLink to='/about'>
        {text1}
      </NavLink>
      <NavLink to='/about'>
        {text2}
      </NavLink>
      <NavLink to='/about'>
        {text3}
      </NavLink>
    </nav>
  );
}
