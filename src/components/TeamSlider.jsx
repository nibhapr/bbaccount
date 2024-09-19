import { Col, Container,Row } from 'react-bootstrap';
import { m } from "framer-motion";
import { InteractiveBannersData02 } from '../components/InteractiveBanners/InteractiveBannersData';

import InteractiveBanners02 from '../components/InteractiveBanners/InteractiveBanners02';
const TeamSlider = () => {

    return (

<section className="py-[130px] lg:py-[90px] md:py-[75px] sm:[50px] bg-[#f7f8fc] overflow-hidden">
          <Container>
            <Row className="justify-center">
              <m.div className="col-xl-5 col-lg-6 col-md-8 col-sm-7 mb-20 text-center md:mb-[60px] sm:[44px]" >
                <span className="mb-[20px] font-medium text-md font-serif uppercase inline-block text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">Why choose us</span>
                <h4 className="font-semibold -tracking-[1px] text-darkgray font-serif block heading-5">Beautifully handcrafted templates for your website</h4>
              </m.div>
            </Row>
          </Container>
          <Container>
            <InteractiveBanners02
              carousalOption={{
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: { delay: 2500, disableOnInteraction: false },
                breakpoints: { 1200: { slidesPerView: 4 }, 992: { slidesPerView: 3 }, 768: { slidesPerView: 2 } }
              }}
              data={InteractiveBannersData02}
              animation=""
              animationDelay={0}
            />
          </Container>
</section>
    )

}
export default TeamSlider