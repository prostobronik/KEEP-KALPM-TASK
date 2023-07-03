import { MainPageTemplate } from "./components/MainPageTemplate/MainPageTemplate";
import {
  galleryPhotos,
  lowerCardSectionPhotos,
  upperCardSectionPhotos,
} from "./shared/constants";

function App() {
  return (
    <MainPageTemplate
      galleryPhotos={galleryPhotos}
      upperCardSectionPhotos={upperCardSectionPhotos}
      lowerCardSectionPhotos={lowerCardSectionPhotos}
    />
  );
}

export default App;
