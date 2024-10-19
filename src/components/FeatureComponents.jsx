
import React, { lazy } from "react";
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { motion } from "framer-motion";
import { fadeIn } from '../Functions/GlobalAnimations';
const IconWithText = lazy(() => import('../components/IconWithText/IconWithText'))
import Buttons from '../components/Button/Buttons'

const IconWithTextData = [
    {
      icon: "line-icon-Money-Bag text-[#b7b7b7] text-[40px]",
      title: "Clarity in every number",
      content:
        "Clear, precise accounting that keeps your business on track.",
    },
    {
      icon: "line-icon-Gear-2 text-[#b7b7b7] text-[40px]",
      title: "Maximize financial growth",
      content:
        "Expert accounting that drives business growth and efficiency.",
    },
    {
      icon: "line-icon-Talk-Man text-[#b7b7b7] text-[40px]",
      title: "Customer satisfaction",
      content:
        "Tailored solutions designed to meet your business needs..",
    },
    {
      icon: "line-icon-Cursor-Click2 text-[#b7b7b7] text-[40px]",
      title: "Trusted accounting support",
      content:
        "Your trusted partner for accurate and reliable financial management.",
    },
  ];
  
const FeatureComponets = (props) => {

    return (

<section className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
 
<Container>
<Row className="justify-center">
    <motion.div className="col-xl-3 col-lg-4 col-sm-7 flex flex-col md:mb-24"{...{ ...fadeIn, transition: { delay: 0.2 } }}>
      <div className="mb-[20px] md:text-center sm:mb-[10px]">
        <span className="font-serif text-md uppercase font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">About company</span>
      </div>
      <h3 className="alt-font text-darkgray font-semibold mb-[20px] font-serif md:text-center md:mb-[30px] heading-5">Empower your business with accuracy.</h3>
      <div className="mt-auto mx-auto mx-lg-0">
        <Buttons href="/" className="font-medium font-serif uppercase bg-[#635b5b] hover:bg-black rounded-none md:mb-[15px] text-xxs btn-fancy xs:mb-0" color="#000" size="sm" themeColor="#000" title="BB ACCOUNTING" />
      </div>
    </motion.div>
    <Col xl={{ span: 7, offset: 2 }} lg={8}>
      <IconWithText grid="row-cols-1 row-cols-lg-2 row-cols-sm-2 gap-y-[40px]" theme="icon-with-text-01" data={IconWithTextData} animation={fadeIn} animationDelay={0.2}  />
    </Col>
  </Row>
</Container>
</section>

    )
}

export default FeatureComponets