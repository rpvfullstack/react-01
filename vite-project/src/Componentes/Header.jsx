import styles from './Header.module.css'


export function Header() {
  return (

    <header className={styles.header} >
      <ul className={styles.menu}>
        <li><a className={styles.linkmenu} href="./">HOME</a></li>
        <li><a className={styles.linkmenu} href="./Missao">MISSÃO</a></li>
        <li><a className={styles.linkmenu} href="./Produto">PRODUTOS</a></li>
        <li><a className={styles.linkmenu} href="./Historia">NOSSA HISTORIA</a></li>
        <li><a className={styles.linkmenu} href="./Contato">CONTATO</a></li>
      </ul>
 
        {/* <strong className={styles.header}>Página Header</strong> */}

    </header>
  )
}

