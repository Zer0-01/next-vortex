import imageNews1 from "../public/images/image-news-1.jpg";
import imageNews2 from "../public/images/image-news-2.jpg";
import imageNews3 from "../public/images/image-news-3.jpg";

import NewsCard from "./news-card";

function NewsList() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        <NewsCard
          description=""
          image={imageNews1.src}
          title="Vortex Edge TGB in 7–6 Thriller!"
        />
        <NewsCard description="" image={imageNews2.src} title="" />
        <NewsCard description="" image={imageNews3.src} title="" />
      </div>
    </>
  );
}

export default NewsList;
