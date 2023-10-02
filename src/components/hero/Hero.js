import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { hero } from "../../assets/data/data";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import "./hero.css";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <MdNavigateNext className="icon" />
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <GrFormPrevious className="icon" />
      </button>
    </div>
  );
};

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <section className="hero">
        <div className="content">
          <Slider {...settings}>
            {hero.map((item) => (
              <div className="boxs">
                <div className="box" key={item.id}>
                  <img src={item.cover} alt="cover" />
                  <div className="box_content">
                    <div className="overlay">
                      <div className="overlay_p">
                        <p>{item.category}</p>
                      </div>
                      <h4>{item.title}</h4>
                      <p className="date">{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* <section className="hero">
        <div className="content">
          <Slider {...settings}>
            <div className="boxs">
              <div className="box">
                <img
                  src="https://dynamotechtrends.com/wp-content/uploads/2023/08/Depiction-of-the-Austrian-power-grid-provided-by-the-APG-Triangles-represent-substations.png"
                  alt="sliderimg"
                />
                <div className="overlay">
                  <h4>
                    In "Promoting Austria's Solar Revolution: Unveiling the Grid
                    Capacity Map and Highlighting the Remarkable Growth of
                    Photovoltaic Installations,"
                  </h4>

                  <p>August 31, 2023</p>
                </div>
              </div>

              <div className="box">
                <div className="overlay">
                  <img
                    src="https://dynamotechtrends.com/wp-content/uploads/2023/08/hydrogen_production-768x576.jpeg"
                    alt="sliderimg"
                  />
                  <h4>
                    Advancing Sustainable Hydrogen Production: Innovative
                    Photoanode Breakthrough
                  </h4>
                  <p>August 30, 2023</p>
                </div>
              </div>

              <div className="box">
                <img
                  src="https://dynamotechtrends.com/wp-content/uploads/2023/08/hydrogen-electricity-pharma.png"
                  alt="sliderimg"
                />
                <div className="overlay">
                  <h4>
                    Green Hydrogen Innovations Making Waves Across the Globe
                  </h4>
                  <p>August 30, 2023</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section> */}
    </div>
  );
};

export default Hero;
