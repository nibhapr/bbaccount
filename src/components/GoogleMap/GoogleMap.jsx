import React, { memo } from 'react'

// Libraries


const GoogleMap = (props) => {
    return (
        <iframe
            title="Google Map"
            className={props.className}
            src={props.location}
            width="600"
            height="540"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    )
}

GoogleMap.defaultProps = {
    location: "https://www.google.com/maps/dir/11.1345664,75.9563316/B%26+B+ACCOUNTING+DUBAI/@16.9852248,43.8812795,4z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3e5f5da1eaef86cd:0x6216e72c96fdb935!2m2!1d55.3388001!2d25.2772726?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D"
}



export default memo(GoogleMap)