import { useState, useEffect } from "react";

const useCustomMediaQuery = () => {
  const [scrollExtent, setScrollExtent] = useState(window.scrollY);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true); // Assume desktop by default

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  };

  const handleScroll = () => {
    setScrollExtent(window.scrollY);
  };

  useEffect(() => {
    // Set initial values
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);

    // Set media query breakpoints
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");
    const tabletMediaQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)"
    );
    const desktopMediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleMediaQuery = () => {
      setIsMobile(mobileMediaQuery.matches);
      setIsTablet(tabletMediaQuery.matches);
      setIsDesktop(desktopMediaQuery.matches);
    };

    handleMediaQuery(); // Call once to set initial values

    // Listen for window resize and scroll events
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    // Listen for changes in media queries
    mobileMediaQuery.addEventListener("change", handleMediaQuery);
    tabletMediaQuery.addEventListener("change", handleMediaQuery);
    desktopMediaQuery.addEventListener("change", handleMediaQuery);

    return () => {
      // Cleanup event listeners
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      mobileMediaQuery.removeEventListener("change", handleMediaQuery);
      tabletMediaQuery.removeEventListener("change", handleMediaQuery);
      desktopMediaQuery.removeEventListener("change", handleMediaQuery);
    };
  }, []); // Empty dependency array to run this effect only once on mount

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
