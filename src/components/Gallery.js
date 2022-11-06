import Image from "./Image";

import { IMAGES } from "../constants/IMAGES";

function importImages(directory) {
  let images = [];
  directory.keys().map((item) => {
    images.push(directory(item));
  });

  return images;
}

const Gallery = () => {
  const bilderFull = importImages(
    require.context("../images/full", false, /\.(png|jpe?g|svg)$/)
  );
  const bilderCompressed = importImages(
    require.context("../images/compressed", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <main>
      <div className="container-xl p-4 grid grid-cols-2 md:grid-cols-3 gap-2 mx-auto">
        {bilderCompressed.map((bilde, idx) => (
          <Image
            key={idx}
            title={IMAGES[idx].title}
            latin={IMAGES[idx].latin}
            source={bilderFull[idx]}
            sourceCompressed={bilde}
          />
        ))}
      </div>
    </main>
  );
};

export default Gallery;
