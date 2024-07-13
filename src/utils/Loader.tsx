import React from 'react'
import "../styles/loader.css";

const Loader = () => {
    return (
        <div className='w-full flex items-center justify-center h-screen bg-black'>
            <div className="honeycomb">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader