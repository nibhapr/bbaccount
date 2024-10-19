import React, { useState, memo } from 'react';
import { m } from 'framer-motion';
import Buttons from '../Button/Buttons';
import { TabData01 } from '../Tab/TabData';

const Tab01 = (props) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="mb-[7.4rem] flex flex-col items-center">
            <div className="flex space-x-4 border-b border-gray-300 mb-5">
                {props.data.map((item, i) => (
                    <button
                        key={i}
                        className={`py-2 px-4 font-medium text-center ${activeTab === i ? 'border-b-2 border-blue-500' : ''}`}
                        onClick={() => setActiveTab(i)}
                    >
                        {item.tabTitle ? item.tabTitle : 'Tab Title'}
                    </button>
                ))}
            </div>
            <m.div className="flex flex-wrap justify-center items-center" transition={{ duration: 0.9 }} viewport={{ once: false }}>
                {props.data[activeTab] && (
                    <>
                        <div className="w-full md:w-1/2 mb-10">
                            {props.data[activeTab].img && (
                                <img height="434" width="555" className="w-full" src={props.data[activeTab].img} alt="tab" />
                            )}
                        </div>
                        <div className="w-full md:w-1/2 md:px-[15px] text-center md:text-left">
                            {props.data[activeTab].subtitle && (
                                <span className="text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] mb-4 font-serif text-md font-medium uppercase inline-block leading-[20px]">
                                    {props.data[activeTab].subtitle}
                                </span>
                            )}
                            {props.data[activeTab].title && (
                                <h5 className="font-serif font-semibold text-darkgray tracking-[-0.5px] mb-8">{props.data[activeTab].title}</h5>
                            )}
                            {props.data[activeTab].content && (
                                <p className="mb-12 w-[85%] md:w-full">{props.data[activeTab].content}</p>
                            )}
                            {props.data[activeTab].buttonLink && props.data[activeTab].buttonTitle && (
                                <Buttons
                                    ariaLabel="tab button"
                                    className="btn-fill rounded-none font-medium font-serif tracking-[1px] uppercase btn-fancy md:mb-[15px] xs:mb-0 xs:mt-[20px]"
                                    size="md"
                                    themeColor="#808080"
                                    color="#ffffff"
                                    to={props.data[activeTab].buttonLink}
                                    title={props.data[activeTab].buttonTitle}
                                />
                            )}
                        </div>
                    </>
                )}
            </m.div>
        </div>
    );
};

Tab01.defaultProps = {
    data: TabData01,
};

export default memo(Tab01);
