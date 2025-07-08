import React from "react";
import styles from "./Footer.module.css";
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.leftBlock}>
          <div className={styles.logo}>DELTA<span>CHEATS</span></div>
          <p className={styles.description}>
            Наша цель — обеспечить стабильный, безопасный и удобный доступ к инструментам, которые делают игровой опыт более ярким и индивидуальным.
          </p>
          <div className={styles.socials}>
            <a href="https://t.me/yourchannel" target="_blank" rel="noreferrer" aria-label="Telegram"><TelegramIcon /></a>
            <a href="https://t.me/yourchannel" target="_blank" rel="noreferrer" aria-label="Telegram"><TelegramIcon /></a>
            <a href="https://t.me/yourchannel" target="_blank" rel="noreferrer" aria-label="Telegram"><TelegramIcon /></a>
            <a href="https://t.me/yourchannel" target="_blank" rel="noreferrer" aria-label="Telegram"><TelegramIcon /></a>
          </div>
        </div>
        <div className={styles.centerBlock}>
          <h3 className={styles.navTitle}>НАВИГАЦИЯ</h3>
          <nav className={styles.navColumns}>
            <ul className={styles.navList}>
              <li><a href="/">Главная</a></li>
              <li><a href="/catalog">Каталог</a></li>
              <li><a href="/services">Услуги</a></li>
              <li><a href="/drivers">Драйвера</a></li>
            </ul>
            <ul className={styles.navList}>
              <li><a href="/agreement">Соглашение</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/support">Поддержка</a></li>
            </ul>
          </nav>
        </div>

        <div className={styles.rightBlock}>
          <h3 className={styles.paymentTitle}>ОПЛАТА</h3>
          <img
            className={styles.paymentImage}
            src="https://uls-mason.ru/wp-content/uploads/2021/12/oplata-uslug-spb-thai-kartami-visa-mastercard-mir-maestro-1536x290-3-1.png"
            alt="Способы оплаты Visa, Mir, Crypto"
          />
        </div>
      </div>
      <div className={styles.bottomLine}>
        <p>© 2025 deltacheats - deltacheats@gmail.com</p>
        <a href="/privacy-policy">Политика сайта и обработка персональных данных</a>
      </div>
    </footer>
  );
};

export default Footer;
