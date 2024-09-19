import Testimonials from '../components/Testimonials/Testimonials';
import { TestimonialsData03 } from '../components/Testimonials/TestimonialsData'
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { m } from "framer-motion";

const TestimonialPage = () => {

    return (

<section className="bg-[#f7f8fc] py-[130px] lg:py-[90px] md:py-[75px] sm:[50px]">
<Container>
  <Row className="justify-center">
    <m.div className="col-xl-5 col-lg-6 col-sm-8 mb-20 text-center">
      <span className="inline-block font-serif text-md uppercase mb-[20px] font-medium  text-gradient bg-gradient-to-r from-[#556fff] via-[#e355ff] to-[#ff798e]">What people are saying</span>
      <h3 className="w-full mb-[20px] font-semibold text-darkgray font-serif heading-5">What our valuable customer are saying about us?</h3>
    </m.div>
  </Row>
  <Row className='sm:justify-center sm:flex'>
    <Col md={12} sm={8}>
      <Testimonials
        grid="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-sm-8 gap-y-10 justify-center"
        theme='testimonials-style-03'
        data={TestimonialsData03}
        animation=""
      />
    </Col>
  </Row>
</Container>
</section>
    )}
export default TestimonialPage