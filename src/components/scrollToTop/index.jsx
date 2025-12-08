// src/components/scrollToTop/index.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 *  - Listens to route changes (pathname)
 *  - On every change, scrolls window back to top
 *  - Use once, near the top of your Router tree
 */
const ScrollToTop = ({ behavior = "smooth" }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior,
        });
    }, [pathname, behavior]);

    return null;
};

export default ScrollToTop;
