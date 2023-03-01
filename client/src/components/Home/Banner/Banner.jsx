import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Banner.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import gadgetSale from '../../../assets/images/Banners/gadget-sale.jpg';
import kitchenSale from '../../../assets/images/Banners/kitchen-sale.jpg';
import one from '../../../assets/images/Banners/one.jpg';
import two from '../../../assets/images/Banners/two.jpg';
import three from '../../../assets/images/Banners/three.jpg';
import four from '../../../assets/images/Banners/four.jpg';
import five from '../../../assets/images/Banners/five.jpg';
import six from '../../../assets/images/Banners/six.jpg';
import seven from '../../../assets/images/Banners/seven.jpg';
import eight from '../../../assets/images/Banners/eight.jpg';
import nine from '../../../assets/images/Banners/nine.jpg';
import ten from '../../../assets/images/Banners/ten.jpg';
import zIndex from '@mui/material/styles/zIndex';


export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon /> 
    </div>
  )
}

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  )
}

const Banner = () => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  const banners = [one,two,three,four,five,six,seven,eight,nine,ten];

  return (
    <>
      <section className="h-44  sm:h-72 w-full z-[-10]  rounded-sm shadow relative overflow-hidden">
        <Slider {...settings}>
          {banners.map((el, i) => (
            <img draggable="false" className="h-44 z-0  sm:h-72 w-full object-cover" src={el} alt="banner" key={i} />
          ))}
        </Slider>
      </section>
    </>
  );
};

export default Banner;
