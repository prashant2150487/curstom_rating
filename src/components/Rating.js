import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import "./Styles.css"
const Rating = ({ noOfStars = 7 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(index) {
        setRating(index)
    }
    function handleMouseEnter(index) {
        setHover(index)
    }
    function handleMouseLeave(index) {
        setHover(rating);
    }
    return (
        <div>
            {[...Array(noOfStars)].map((_, index) => (
                <FaStar
                    size={25}
                    key={index}
                    className={index < (hover || rating) ? 'active' : 'inactiv'}
                    onClick={() => { handleClick(index + 1) }}
                    onMouseEnter={() => handleMouseEnter(index + 1)}
                    onMouseLeave={() => handleMouseLeave(index + 1)} />
            ))}
        </div>
    )
}

export default Rating