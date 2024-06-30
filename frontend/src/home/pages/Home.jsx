
import Nav from '../components/Nav'
import styles from './Home.module.scss'
import { TbHandClick } from 'react-icons/tb'

export default function Home() {
  return (
    <section className={styles.home}>
    <header className={styles.header}>
      <Nav />
    </header>
    <main className={styles.main}>
    </main>
    <div className={styles.click}>
        <TbHandClick />
        <p>Haz click en el que quieras </p>
      </div>
    </section>
  )
}
