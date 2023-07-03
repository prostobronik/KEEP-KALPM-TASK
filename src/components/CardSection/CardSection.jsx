import React, { forwardRef } from "react";
import styles from "./CardSection.module.scss";

export const CardsSection = forwardRef(({ photo1, photo2 }, ref) => {
  return (
    <section className={styles.cardsSection} ref={ref}>
      <h1 className={styles.sectionHeading}>
        ut aliquip ex ea commodo consequat
      </h1>

      <div className={styles.topCard}>
        <div className={styles.photoWrapper}>
          <img src={photo1} alt="Fon" className={styles.photo} />
        </div>
        <div className={styles.text}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p>
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>

      <div className={styles.bottomCard}>
        <div className={styles.text}>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p>
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
        </div>
        <div className={styles.photoWrapper}>
          <img src={photo2} alt="Fon" className={styles.photo} />
        </div>
      </div>
    </section>
  );
});
