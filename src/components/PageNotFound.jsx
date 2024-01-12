import React from 'react'

const PageNotFound = () => {
    const center = { top: "50%", left: "50%",transform: "translate(-50%, -50%)"}
    return (
        <div className='fs-2 fw-semibold position-absolute' style={center}>
            Page not found
        </div>
    )
}

export default PageNotFound
