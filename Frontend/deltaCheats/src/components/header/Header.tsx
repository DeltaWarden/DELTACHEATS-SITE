import styles from "./Header.module.css";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div className={styles.logo}>
        DELTA<span>CHEATS</span>
      </div>
      <nav className={styles.nav}>
        <a href="/">Главная</a>
        <a href="/catalog">Каталог</a>
        <a href="/services">Услуги</a>
        <a href="/drivers">Драйвера</a>
        <a href="/support">Поддержка</a>
      </nav>
    </div>
  </header>
);

export default Header;
