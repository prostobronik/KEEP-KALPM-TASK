export const handleScrollConstructor = (elements, numberOfPhotos) => {
  const {
    gallery,
    gallerySection,
    gallerySectionHeading,
    galleryWrapper,
    nextSection,
    galleryPhoto,
  } = elements;

  const tabletWidth = 800;
  const laptopWidth = 1400;

  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const oneFrame = Math.floor(windowWidth / 100);

  const galleryPhotoHeight = galleryPhoto.clientHeight;
  const galleryPhotoWidth = galleryPhoto.clientWidth;

  const galleryGap = 30;

  const sectionHeadingBottomMargin =
    windowWidth <= tabletWidth ? 64 : windowWidth <= laptopWidth ? 94 : 123;

  const gallerySectionHeadingHeight =
    gallerySectionHeading.clientHeight + sectionHeadingBottomMargin;

  const headerHeight =
    windowWidth <= tabletWidth ? 60 : windowWidth <= laptopWidth ? 80 : 100;

  const galleryPadding = windowWidth > tabletWidth ? oneFrame * 8 : 20;

  const topOffset =
    (windowHeight +
      headerHeight -
      (galleryPhoto.clientHeight + gallerySectionHeadingHeight)) /
    2;

  const galleryWidth =
    galleryPhotoWidth * numberOfPhotos +
    (numberOfPhotos - 1) * galleryGap +
    galleryPadding * 2;

  const galleryWidthForScroll = galleryWidth - windowWidth;

  nextSection.style.marginTop =
    galleryWidthForScroll +
    galleryPhotoHeight +
    gallerySectionHeadingHeight +
    "px";

  return function () {
    const scrolledY = window.scrollY;

    const gallerySectionOffsetTop = gallerySection.offsetTop;
    const gallerySectionCenteredOffsetTop = gallerySectionOffsetTop - topOffset;
    const endOfScrollYPoint =
      gallerySectionCenteredOffsetTop + galleryWidthForScroll;

    if (
      scrolledY > gallerySectionCenteredOffsetTop &&
      scrolledY < endOfScrollYPoint
    ) {
      //console.log(scrolledY, gallerySectionOffsetTop);

      gallery.style.transform =
        "translateX(" + -(scrolledY - gallerySectionCenteredOffsetTop) + "px)";

      galleryWrapper.style.position = "fixed";
      galleryWrapper.style.top = topOffset + "px";
    }
    if (scrolledY <= gallerySectionCenteredOffsetTop) {
      gallery.style.transform = "translateX(0px)";

      galleryWrapper.style.position = "initial";
    }
    if (scrolledY >= endOfScrollYPoint) {
      gallery.style.transform = "translateX(" + -galleryWidthForScroll + "px)";

      galleryWrapper.style.position = "absolute";
      galleryWrapper.style.top =
        galleryWidthForScroll + gallerySectionOffsetTop + "px";
      galleryWrapper.style.width = "100vw";
    }
  };
};
