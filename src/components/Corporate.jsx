
import React from "react";
// Libraries
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Lists from "../components/Lists/Lists";
import { TextAnime } from '../components/FancyText/FancyText'
import { fadeIn, fadeInLeft } from "../Functions/GlobalAnimations";
import { ListData01 } from "../components/Lists/ListsData";


const TestimonialsCarouselData = [
    {
      img: "/assets/img/bb67.jpg",
      title: "Unlimited power customization",
      number: "01",
      content:
        "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt elit.",
    },
    {
      img: "https://via.placeholder.com/800x622",
      title: "Powerful creatives designer",
      number: "02",
      content:
        "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt elit.",
    },
    {
      img: "https://via.placeholder.com/800x622",
      title: "Advanced customization options",
      number: "03",
      content:
        "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt elit.",
    },
  ];

const Corporate = () => {
    const swiperRef = React.useRef(null);

    return (


<motion.section
className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] bg-lightgray overflow-hidden"
{...fadeIn}
>
<Container>
  <Row className="items-center justify-center">
    <Col lg={6} md={9} className="p-0 md:mb-[30px]">
      <motion.div className="relative" {...fadeIn}>
        <div
          onClick={() => swiperRef.current.swiper.slidePrev()}
          className="btn-slider-prev bg-darkgray z-[11] text-[#fff] w-[50px] h-[50px] left-[15px] transition-default leading-[40px] m-0 right-auto absolute top-[47%] flex item-center justify-center hover:bg-white hover:text-darkgray  cursor-pointer"
        >
          <button className="text-xmd" aria-label="prev btn">
            <i className="feather-arrow-left"></i>
          </button>
        </div>

        <div
          onClick={() => swiperRef.current.swiper.slideNext()}
          className="btn-slider-next btn-slider-next bg-darkgray z-[11] text-[#fff] w-[50px] transition-default h-[50px] right-[15px] leading-[40px] m-0 left-auto absolute top-[47%] flex item-center justify-center hover:bg-white hover:text-darkgray  cursor-pointer"
        >
          <button className="text-xmd" aria-label="next btn">
            <i className="feather-arrow-right"></i>
          </button>
        </div>
        <Swiper
          className="black-move swiper-pagination-medium h-full"
          ref={swiperRef}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {TestimonialsCarouselData.map((item, i) => {
            return (
              <SwiperSlide key={i} className="p-[15px]">
                <div className="h-full bg-[#fff] box-shadow">
                  <img className="w-full" src={item.img} alt="TestimonialsCarousel" width={555} height={432} />
                  <div className="items-center justify-center text-center flex px-[4.5rem] py-14 flex-row	xs:p-8">
                    <div className="grow-0 shrink-0 basis-auto flex-initial pr-[40px] xs:pr-[15px]">
                      <h2 className="heading-4 font-semibold text-darkgray font-serif mb-0">
                        {item.number}
                      </h2>
                    </div>
                    <div className="overflow-hidden max-w-full pl-[40px] border-basecolor border-l-[2px] text-left xs:pl-[15px]">
                      <span className="mb-[5px] font-medium text-darkgray text-xmd font-serif block">
                        {item.title}
                      </span>
                      <p className="mb-0">{item.content}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </Col>
    <motion.div
      className="col-lg-5 col-md-9 offset-lg-1"
      {...fadeInLeft}
    >
      <h2 className="heading-4 mb-[40px] leading-[40px] font-semibold tracking-[-1px] text-darkgray font-serif xs:mb-[20px]">
        <span className="p-0 block">B & B Accounting </span>
        <TextAnime
          duration={3000}
          color="#232323"
          className="font-semibold animated-text-black"
          animation="slide"
          data={["Accounting services", "Book Keeping services","VAT Consultancy"]}
        />
      </h2>
      <p className="w-[90%] mb-[30px] xs:w-full">
      At B&B Accounting services Dubai, we specialize in providing tailored accounting and bookkeeping solutions to businesses of all sizes. Our experienced team ensures accurate financial records, timely VAT compliance, and insightful financial analysis, helping you make informed decisions. We offer comprehensive services, including payroll management, tax planning, and financial consulting. With our advanced tools and dedicated support, you can focus on growing your business while we handle your finances. Contact us today for a free consultation and experience peace of mind in your financial management!
      </p>
      <motion.div className="col w-[85%] xs:w-full">
        <Lists
          className="font-medium"
          theme="list-style-01"
          data={ListData01}
        />
      </motion.div>
    </motion.div>
  </Row>
</Container>
</motion.section>
  )
}

export default Corporate