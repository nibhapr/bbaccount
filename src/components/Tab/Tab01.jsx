import React, { memo } from 'react'

// Libraries
import { Col, Tab, Tabs } from 'react-bootstrap'

import { m } from "framer-motion";

// Components
import Buttons from '../Button/Buttons'

import "../../assets/scss/components/_tab.scss"

// Data
import { TabData01 } from '../Tab/TabData'

const Tab01 = (props) => {
    return (
        <Tabs className="tab-style-01 font-serif mb-[7.4rem] flex bg-transparent border-b-0 font-medium text-center justify-center md:mb-[60px] sm:mb-[20px]">
            {
                props.data.map((item, i) => {
                    return (
                        <Tab className="tab-style-01" key={i} eventKey={i} title={item.tabTitle ? item.tabTitle : "Tab Title"}>
                            <m.div className='row items-center' {...{  transition: { duration: 0.9 }, viewport: { once: false } }}>
                                <Col md={6} className="sm:mb-[40px]">
                                    {item.img && <img height="434" width="555" className="w-full" src={item.img} alt="tab" />}
                                </Col>
                                <Col lg={{ offset: 1, span: 5 }} md={6} className="md:px-[15px] sm:px-[15px] sm:text-start xs:text-center">
                                    {item.subtitle && <span className="text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] mb-[15px] font-serif text-md font-medium uppercase inline-block leading-[20px]">{item.subtitle}</span>}
                                    {item.title && <h5 className="font-serif font-semibold text-darkgray tracking-[-0.5px] mb-[35px] sm:mb-[30px]">{item.title}</h5>}
                                    {item.content && <p className="mb-[45px] w-[85%] md:w-full xs:mb-[15px]">{item.content}</p>}
                                    {(item.buttonLink && item.buttonTitle) && <Buttons ariaLabel="tab button" className="btn-fill rounded-none font-medium font-serif tracking-[1px] uppercase btn-fancy md:mb-[15px] xs:mb-0 xs:mt-[20px]" size="md" themeColor="#808080" color="#ffffff" to={item.buttonLink ? item.buttonLink : "#"} title={item.buttonTitle} />}
                                </Col>
                            </m.div>
                        </Tab>
                    )
                })
            }
        </Tabs>
    )
}

Tab01.defaultProps = {
    data: TabData01
}




export default memo(Tab01)