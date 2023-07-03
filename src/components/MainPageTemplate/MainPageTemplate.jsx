import React, { useEffect, useRef } from "react";
import { CardsSection } from "../CardSection/CardSection";
import { handleScrollConstructor } from "../../shared/helper";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { ReactComponent as Phone } from "../../assets/icons/Phone.svg";
import styles from "./MainPage.module.scss";

export const MainPageTemplate = ({
  upperCardSectionPhotos,
  lowerCardSectionPhotos,
  galleryPhotos,
}) => {
  const gallery = useRef(null);
  const gallerySection = useRef(null);
  const galleryPhoto = useRef(null);
  const gallerySectionHeading = useRef(null);
  const galleryWrapper = useRef(null);
  const nextSection = useRef(null);

  useEffect(() => {
    if (
      gallerySection.current &&
      galleryWrapper.current &&
      gallerySectionHeading.current &&
      gallery.current &&
      galleryPhoto.current &&
      nextSection.current
    ) {
      const handleScroll = handleScrollConstructor(
        {
          galleryPhoto: galleryPhoto.current,
          gallerySection: gallerySection.current,
          gallerySectionHeading: gallerySectionHeading.current,
          galleryWrapper: galleryWrapper.current,
          nextSection: nextSection.current,
          gallery: gallery.current,
        },
        galleryPhotos.length
      );

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.headerWrapper}>
        <header className={styles.header}>
          <Logo className={styles.logo} />
          <div className={styles.phoneNumber}>
            <a className={styles.phoneNumberText} href="tel:+79001111111">
              +7 (495) 495-49-54
            </a>
            <a href="tel:+79001111111">
              <Phone className={styles.phoneIcon} />
            </a>
          </div>
        </header>
      </div>
      <main className={styles.mainSection}>
        <CardsSection
          photo1={upperCardSectionPhotos[0]}
          photo2={upperCardSectionPhotos[1]}
        />

        <section className={styles.gallerySection} ref={gallerySection}>
          <div className={styles.galleryWrapper} ref={galleryWrapper}>
            <h1 className={styles.sectionHeading} ref={gallerySectionHeading}>
              Lorem ipsum dolor sit amet
            </h1>
            <div className={styles.gallery} ref={gallery}>
              {galleryPhotos.map((photo, index) => (
                <div
                  className={styles.photoWrapper}
                  key={index}
                  ref={index === 0 ? galleryPhoto : null}
                >
                  <img src={photo} alt="Fon" className={styles.photo} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <CardsSection
          photo1={lowerCardSectionPhotos[0]}
          photo2={lowerCardSectionPhotos[1]}
          ref={nextSection}
        />
      </main>
      <footer className={styles.footer}> &copy;TEST, 1022–2023</footer>
    </div>
  );
};
