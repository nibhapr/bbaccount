import React, { lazy } from 'react'
import { Col, Container,Row } from 'react-bootstrap';
import { m } from "framer-motion";
import { IconWithTextData_02 } from '../components/IconWithText/IconWithTextData';
const IconWithText = lazy(() => import('../components/IconWithText/IconWithText'))
const SpecialComponents = () => {

    return (
<section className="py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] bg-[#f7f8fc]">
<Container>
  <Row className="justify-center">
    <m.div className="col-xl-6 col-lg-7 col-sm-8 mb-20 text-center w-[51%] xl:mb-[70px] lg:mb-[65px] md:mb-[60px] sm:mb-[55px] md:w-[68%] xs:w-full">
      <span className="inline-block font-serif text-md uppercase mb-[20px] font-medium  text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] xs:mb-[15px]">our premium services</span>
      <h5 className="w-full mb-[20px] font-semibold text-darkgray font-serif -tracking-[1px]">Corporate Accounting Solutions UAE</h5>
    </m.div>
  </Row>
  <Row className="justify-center">
    <Col lg={12} md={9} xs={12}>
      <IconWithText grid="row-cols-1 row-cols-lg-2 gap-y-10 justify-center" theme="icon-with-text-02" data={IconWithTextData_02} animation="" animationDelay={0.2} />
    </Col>
  </Row>
</Container>
</section>
    )
}
export default SpecialComponents