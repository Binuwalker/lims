import React, { useEffect, useState } from 'react';
import {IoIosArrowUp} from 'react-icons/io';

const TopScroller = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
    };
    
    return (
        <button
            className={`top-scroller ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            <IoIosArrowUp />
        </button>
    )
}

export default TopScroller