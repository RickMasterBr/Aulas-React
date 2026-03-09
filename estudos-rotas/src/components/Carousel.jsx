import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselHome() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <div>
        <img src="https://picsum.photos/1200/400?random=20" alt="Banner 1" />
      </div>
      <div>
        <img src="https://picsum.photos/1200/400?random=21" alt="Banner 2" />
      </div>
      <div>
        <img src="https://picsum.photos/1200/400?random=22" alt="Banner 3" />
      </div>
    </Carousel>
  );
}

export default CarouselHome;