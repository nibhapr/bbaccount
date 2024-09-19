import React, { memo, useEffect, useRef } from 'react'

// Libraries


const Overlap = (props) => {
    const overlap = useRef(null)

    useEffect(() => {
        function setOverlapHeight() {
            if (overlap.current) {
                let sectionHeight = overlap?.current.clientHeight,
                    Height = window.innerWidth >= 768 ? (sectionHeight * props.value) / 100 : 0;
                overlap?.current.style.setProperty('--overlapheight', `-${Height}px`)
            }
        }

        window.addEventListener('resize', setOverlapHeight)

        let img = overlap.current.querySelectorAll('img')

        if (img.length > 0) {
            img.forEach(function (item) {
                item.addEventListener('load', setOverlapHeight)
            })
        } else {
            setOverlapHeight();
        }
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []);

    return (
        <div ref={overlap} className={`overlap-section${props.className ? ` ${props.className}` : ""}`}>
            {props.children}
        </div>
    )
}

Overlap.defaultProps = {
    value: 50
}



export default memo(Overlap)