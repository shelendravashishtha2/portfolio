import { useState, useEffect } from "react";

const useCustomMediaQuery = () => {
  const [scrollExtent, setScrollExtent] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true); // Assuming desktop as default

  useEffect(() => {
    const handleScroll = () => {
      setScrollExtent(window.scrollY);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);

      // Set device type based on window width
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Initial setup
    handleScroll();
    handleResize();

    // Event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return {
    scrollExtent,
    windowHeight,
    windowWidth,
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useCustomMediaQuery;
