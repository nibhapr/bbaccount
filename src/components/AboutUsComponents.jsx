import Buttons from '../components/Button/Buttons'
import Lists from '../components/Lists/Lists'
import ClientCarouselPage from '../components/ClientCarousel'
import { Navigation } from "swiper/modules";
import { Col, Container, Row, Navbar } from 'react-bootstrap'
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion'
import { fadeIn, zoomIn } from '../Functions/GlobalAnimations'

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
    content: "Partnership in Accounting"
  },
  {
    icon: "feather-arrow-right-circle",
    content: "Success Through Collaboration",
  },
  {
    icon: "feather-arrow-right-circle",
    content: "Professional Financial Management",
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
      <motion.div className="md:flex md:items-center overflow-hidden relative md:h-[465px] sm:h-[350px] xs:h-[357px]" {...fadeIn}>
      <div className="lg-no-parallax bg-cover cover-background absolute left-0 h-[80vh] top-[60px] lg:h-[64vh] lg:top-[-46px] lg:!translate-y-0 md:h-[60vh] md:-top-[30px] sm:top-[-44px] sm:h-[49vh] xs:top-0 xs:h-[40vh] w-full" translateY={[-40, 40]} style={{ backgroundImage: `url(assets/img/bb1.jpeg)` }}></div>
      {/* <div className="absolute h-full w-full opacity-75 top-0 left-0 bg-gradient-to-tr from-[#0039e3] via-[#5e28dd] to-[#8600d4]"></div> */}
      <Container className="h-full relative">

     
      </Container>
      </motion.div>
  
   
    
     
      
     
      <section id="about" className="bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]">
        <Container>
          <Row className="font-serif">
            <Col lg={4} className=" flex md:mb-[30px]">
              <div className="w-full md:h-[700px] sm:h-[550px] xs:h-[450px] cover-background" style={{ backgroundImage: "url('/assets/img/about.jpg') " }}></div>
            </Col>
            <Col lg={4} md={6} className=" flex items-center sm:mb-[30px]">
              <div className="justify-center h-full w-full flex flex-col items-start bg-gray-300 px-[5.5rem] lg:px-[3rem] md:p-16">
                <span className="text-xlg lg:text-lg lg:leading-[26px] font-medium text-black mb-[20px] block">Bookkeeping Solutions Dubai</span>
                <p className="text-black font-sans opacity-70 mb-[20px] xs:mb-[15px]">Welcome to B & B Accounting services, your trusted partner for accounting and bookkeeping services in Dubai for over a decade. We specialize in providing tailored financial solutions to small and medium-sized businesses, ensuring compliance and promoting growth.</p>
                {/* <Buttons href="/page/our-services" className="font-medium font-serif uppercase btn-link after:h-[2px] md:text-md md:mb-[15px] after:bg-[#fff] hover:text-[#fff]" color="#fff" title="Company overview" /> */}
              </div>
            </Col>
            <Col lg={4} md={6} className="flex flex-col pr-0">
              <img src="/assets/img/webp/about2.webp" alt="about us" className="sm:w-full" />
              <div className="bg-white px-[3.5rem] py-[3rem] h-full lg:p-8 sm:p-16">
                <span className="text-darkgray font-medium mb-[10px] block">About B & B Accounting services in Dubai</span>
                <p className="font-sans">Navigate Dubai’s tax landscape effortlessly with our expert tax preparation services, ensuring compliance and maximizing deductions.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    <ClientCarouselPage/>
   
    <motion.section className="py-[130px] lg:py-[90px] md:py-[75px] xs:py-[50px]">
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
              <h5 className="font-serif text-darkgray font-medium">Teamwork for Financial Success</h5>
              <p>Partner with Us for Financial Success! At B&B Accounting, we believe in building lasting relationships with our clients. Our dedicated team of accounting and bookkeeping professionals works hand-in-hand with you, ensuring transparency and trust at every step. Together, we’ll navigate the complexities of financial management, empowering your business to thrive.Join us on the path to success—where your goals become our mission</p>
              <Lists theme="list-style-02" data={ListData} className="mb-12 mt-8 text-darkgray font-serif" animation="" />
              <Buttons href="/page/contact-modern" className="btn-fill font-medium font-serif rounded-[4px] uppercase md:mb-[15px]" themeColor="#0038e3" color="#fff" size="md" title="Get Started Now" />
            </Col>
          </Row>
        </Container>
      </motion.section>
     
      
    
    </div>
  )
}

export default AboutUsPage