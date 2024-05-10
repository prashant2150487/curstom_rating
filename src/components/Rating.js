import React from 'react'
import { FaStar } from "react-icons/fa";
const rating = ({ noOfStars = 7 }) => {
    return (
        <div>
            {[...Array(noOfStars)].map((_, index) => (
                <FaStar size={35} key={index} />
            ))}
        </div>
    )
}

export default rating