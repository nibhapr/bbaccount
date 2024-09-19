
import React, { lazy } from "react";
import { Col, Container, Navbar, Row } from 'react-bootstrap';
import { m } from "framer-motion";

const IconWithText = lazy(() => import('../components/IconWithText/IconWithText'))
import Buttons from '../components/Button/Buttons'
// const IconWithText = lazy(() => import('../../Components/IconWithText/IconWithText'))

const IconWithTextData = [
    {
      icon: "line-icon-Money-Bag text-[#b7b7b7] text-[40px]",
      title: "Effective strategy",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.",
    },
    {
      icon: "line-icon-Gear-2 text-[#b7b7b7] text-[40px]",
      title: "Powerfull customize",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.",
    },
    {
      icon: "line-icon-Talk-Man text-[#b7b7b7] text-[40px]",
      title: "Customer satisfaction",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.",
    },
    {
      icon: "line-icon-Cursor-Click2 text-[#b7b7b7] text-[40px]",
      title: "No coding required",
      content:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor.",
    },
  ];
  
const FeatureComponets = (props) => {

    return (

<section className="py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]">
 
<Container>
  <Row className="justify-center">
    <m.div className="col-xl-3 col-lg-4 col-sm-7 flex flex-col md:mb-24">
      <div className="mb-[20px] md:text-center sm:mb-[10px]">
        <span className="font-serif text-md uppercase font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e]">About company</span>
      </div>
      <h3 className="alt-font text-darkgray font-semibold mb-[20px] font-serif md:text-center md:mb-[30px] heading-5">We combine design, thinking and technical</h3>
      <div className="mt-auto mx-auto mx-lg-0">
        <Buttons href="/" className="font-medium font-serif uppercase bg-[#fff] hover:bg-black rounded-none md:mb-[15px] text-xxs btn-fancy xs:mb-0" color="#000" size="sm" themeColor="#000" title="Discover litho" />
      </div>
    </m.div>
    <Col xl={{ span: 7, offset: 2 }} lg={8}>
      <IconWithText grid="row-cols-1 row-cols-lg-2 row-cols-sm-2 gap-y-[40px]" theme="icon-with-text-01" data={IconWithTextData}  />
    </Col>
  </Row>
</Container>
</section>

    )
}

export default FeatureComponets