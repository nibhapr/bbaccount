
// Libraries
import { Col, Container, Row } from "react-bootstrap";
import { m } from 'framer-motion'
import Clients from "../components/Clients/Clients";

// Data
import { ClientData01 } from "../components/Clients/ClientsData";

const ClientCarouselPage = () => {
  return (
    <>
   

      <section className="py-40 overflow-hidden">
        <Container>
          <Row>
          <m.div className="text-center mb-20 md:mb-12 col-lg-12 col-sm-8">
              <span className="text-xmd mb-[15px] font-serif block w-full">Browse amazing social media features</span>
              <h5 className="font-serif text-darkgray font-medium mb-8 sm:w-full">We offer a full range of digital marketing services!</h5>
            </m.div>
            <Col className="relative">
              <Clients
                theme="client-logo-style-03"
                className="swiper-navigation-04 swiper-navigation-light"
                data={ClientData01}
               
                carousel={true}
                carouselOption={{
                  slidesPerView: 1,
                  loop: true,
                  spaceBetween: 20,
                  autoplay: { delay: 3000, disableOnInteraction: false },
                  navigation: true,
                  breakpoints: {
                    1200: { slidesPerView: 4 },
                    992: { slidesPerView: 3 },
                    768: { slidesPerView: 3 },
                  },
                }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ClientCarouselPage;
