import React from 'react'

// Components
import Buttons from '../components/Button/Buttons'
import Clients from '../components/Clients/Clients'
import Team from '../components/Team/Team'
import IconWithText from '../components/IconWithText/IconWithText'
import Lists from '../components/Lists/Lists'
import Counter from '../components/Counters/Counter'
import Overlap from './Overlap/Overlap'
import CustomModal from '../components/CustomModal'
import ClientCarouselPage from '../components/ClientCarousel'

import { Navigation } from "swiper/modules";
import { Col, Container, Row, Navbar } from 'react-bootstrap'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import { Swiper, SwiperSlide } from "swiper/react";
import { m } from 'framer-motion'
import { Link as ScrollTo } from "react-scroll"
// Data
import { ClientData01 } from "../components/Clients/ClientsData";

import { TeamData04 } from '../components/Team/TeamData';
import { fadeIn } from '../Functions/GlobalAnimations'

const TestimonialsCarouselData = [
  {
    img: "https://via.placeholder.com/800x622",
    title: "Unlimited power customization",
    number: "01",
    content: "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt elit.",
  },
  {
    img: "https://via.placeholder.com/800x622",
    title: "Powerful creatives designer",
    number: "02",
    content: "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt elit.",
  },
  {
    img: "https://via.placeholder.com/800x622",
    title: "Advanced customization options",
    number: "03",
    content: "Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt elit.",
  },
]

const ListData = [
  {
    icon: "feather-arrow-right-circle",
    content: "Beautiful and easy to understand animations"
  },
  {
    icon: "feather-arrow-right-circle",
    content: "Theme advantages are pixel perfect design",
  },
  {
    icon: "feather-arrow-right-circle",
    content: "Find more creative ideas for your projects",
  },
]

// const CounterData05 = [
//   {
//     number: {
//       text: "1227",
//       class: "text-fastblue"
//     },
//     title: "Winning awards",
//     content: "For creative design",
//   },
//   {
//     number: {
//       text: "1947",
//       class: "text-fastblue"
//     },
//     title: "Working hours",
//     content: "Desperate for work",
//   },
//   {
//     number: {
//       text: "1587",
//       class: "text-fastblue"
//     },
//     title: "Happy clients",
//     content: "We love clients",
//   },
// ]
const IconWithTextData = [
  {
    icon: "line-icon-Navigation-LeftWindow text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]",
    title: "Powerfull theme options",
    content: "Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been text. Adipiscing eiusmod tempor incididunt magna.",
  },
  {
    icon: "line-icon-Cursor-Click2 text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]",
    title: "Unlimited layouts and styles",
    content: "Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been text. Adipiscing eiusmod tempor incididunt magna.",
  },
  {
    icon: "line-icon-Archery-2 text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]",
    title: "Developing an effective strategy",
    content: "Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been text. Adipiscing eiusmod tempor incididunt magna.",
  },
  {
    icon: "line-icon-Female text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]",
    title: "Automated testing and support",
    content: "Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been text. Adipiscing eiusmod tempor incididunt magna.",
  },
]
const AboutUsPage = (props) => {

  return (
    <div style={props.style}>
     <ParallaxProvider>
     <div className="h-[660px] lg:h-[580px] md:h-[550px] sm:h-[500px] xs:h-[380px] flex items-center overflow-hidden relative">
    
         <Parallax className="lg-no-parallax bg-cover cover-background absolute top-[0px] left-0 w-full h-[100vh]" translateY={[-40, 40]} style={{ backgroundImage: `url(/assets/img/webp/audit.jpg)` }}></Parallax>
  
        <div className="absolute h-full w-full opacity-50 top-0 left-0 bg-darkgray"></div>
        <Container>
          <Row className="items-center justify-center">
            <Col md={8} xl={6} lg={7} sm={9} className="relative text-center">
              <h1 className="inline-block text-white opacity-60 mb-[20px] text-xmd leading-[20px] -tracking-[.5px] font-serif">About our company</h1>
              <h2 className="font-serif text-white -tracking-[1px] text-[3.9rem] font-medium mb-0 sm:-tracking-[1px]">we are a creative design studio</h2>
            </Col>
            <ScrollTo to="about" offset={0} delay={0} spy={true} smooth={true} duration={800} className="absolute bottom-[50px] left-1/2 w-auto inline-block p-0 -translate-x-1/2 sm:bottom-7 xs:bottom-[4.5rem] cursor-pointer">
              <i className="ti-arrow-down text-lg leading-[1] text-white bg-[#000000b3] p-[15px] xs:p-[10px] rounded-full flex justify-center items-center"></i>
            </ScrollTo>
          </Row>
        </Container>
      </div>
      </ParallaxProvider>
     
      
     
      <section id="about" className="bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="font-serif">
            <Col lg={4} className=" flex md:mb-[30px]">
              <div className="w-full md:h-[700px] sm:h-[550px] xs:h-[450px] cover-background" style={{ backgroundImage: "url('/assets/img/webp/about.webp') " }}></div>
            </Col>
            <Col lg={4} md={6} className=" flex items-center sm:mb-[30px]">
              <div className="justify-center h-full w-full flex flex-col items-start bg-fastblue px-[5.5rem] lg:px-[3rem] md:p-16">
                <span className="text-xlg lg:text-lg lg:leading-[26px] font-medium text-white mb-[20px] block">We started this company 10 years ago out of a desire to design and build amazing things.</span>
                <p className="text-white font-sans opacity-70 mb-[20px] xs:mb-[15px]">Lorem ipsum is simply dummy text of the printing and typeing industry. Lorem ipsum has been the industry's standard dummy text ever since text.</p>
                <Buttons href="/page/our-services" className="font-medium font-serif uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-[#fff] hover:text-[#fff]" color="#fff" title="Company overview" />
              </div>
            </Col>
            <Col lg={4} md={6} className="flex flex-col pr-0">
              <img src="/assets/img/webp/about2.webp" alt="about us" className="sm:w-full" />
              <div className="bg-white px-[3.5rem] py-[3rem] h-full lg:p-8 sm:p-16">
                <span className="text-darkgray font-medium mb-[10px] block">About digital agency</span>
                <p className="font-sans">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    <ClientCarouselPage/>
     
    <m.section className="py-[130px] lg:py-[90px] md:py-[75px] xs:py-[50px]">
        <Container>
          <Row className="items-center">
            <Col lg={6} className="p-0 md:mb-[50px] border-white border-[12px] rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)]">
              <div className="relative">
                <Swiper
                  className="white-move swiper-pagination-medium h-full swiper-navigation-01 swiper-navigation-light"
                  modules={[Navigation]}
                  spaceBetween={30}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  navigation={true}>
                  {
                    TestimonialsCarouselData.map((item, i) => {
                      return (
                        <SwiperSlide key={i}>
                          <div className="h-full shadow-lg bg-[#fff]">
                            <img src={item.img} alt="business" className="w-full" width="531" height="413" />
                          </div>
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
              </div>
            </Col>
            <Col lg={{ span: 5, offset: 1 }} >
              <h5 className="font-serif text-darkgray font-medium">It is teamwork that makes the dream work.</h5>
              <p>With years of experience in the website design and development industry ThemeZaa pride ourselves on creating unique, creative &amp; quality designs that are developed upon the latest coding.</p>
              <Lists theme="list-style-02" data={ListData} className="mb-12 mt-8 text-darkgray font-serif" animation="" />
              <Buttons href="/page/contact-modern" className="btn-fill font-medium font-serif rounded-[4px] uppercase md:mb-[15px]" themeColor="#0038e3" color="#fff" size="md" title="Get Started Now" />
            </Col>
          </Row>
        </Container>
      </m.section>
     
      
    
    </div>
  )
}

export default AboutUsPage