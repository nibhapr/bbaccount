import React, { memo } from 'react'

// Data
import { ListData01 } from '../../components/Lists/ListsData'

// Libraries
import { m } from 'framer-motion';


const Lists = (props) => {
    return (
        <ul className={`${props.theme}${props.className ? ` ${props.className}` : ""}`}>
            {
                props.data.map((item, i) => {
                    return (
                        <m.li key={i}  {...{ ...props.animation, transition: { delay: (i+1) * props.animationDelay, initial: { opacity: 0, x: "100%" }, ease: [0.25, 1, 0.5, 1], duration: 1.2 } }}>
                            {item.icon && <i className={item.icon}></i>}
                            {item.linkTitle && <a aria-label="list" href={item.link} >{item.linkTitle}</a>}
                            {item.title ?
                                <div className='block'>
                                    {item.title && <span className='block list-title'>{item.title}</span>}
                                    <span className='list-content'>{item.content}</span>
                                </div> : (
                                    <span>{item.content}</span>
                                )}
                            {item.number && <span className='list-number'>{item.number}</span>}
                        </m.li>
                    )
                })
            }
        </ul>
    )
}

Lists.defaultProps = {
    data: ListData01,
    theme: "list-style-01",
    animationDelay: 0.1
}



export default memo(Lists)