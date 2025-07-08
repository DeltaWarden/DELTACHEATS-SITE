import React from "react";
import styles from "./subheader.module.css";
import sub from "../../assets/sub.png";

const SubHeader: React.FC = () => {
  return (
    <div className={styles.subheader}>
      <div className={styles.container}>
        <div className={styles.subheaderText}>
          <h2>ИГРОВОЙ КАТАЛОГ</h2>
          <p className={styles.slogan}>
            Здесь ты найдёшь лучшие читы для популярных игр. Удобная навигация, быстрый выбор, только актуальные и проверенные решения.
          </p>
        </div>
        <div className={styles.subheaderImage}>
          <img src={sub} alt="Subheader" />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
