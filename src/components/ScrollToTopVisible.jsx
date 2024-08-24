import { useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";

const ScrollToTopVisible = () => {
  const [activate, setActivate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top + window.scrollY;
        const offset = 60;

        if (window.scrollY + window.innerHeight >= footerTop - offset) {
          setActivate(false);
        } else {
          setActivate(window.scrollY > 310);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      className={`${
        activate ? "z-10 opacity-100" : "-z-50 opacity-0"
      } fixed bottom-5 right-10 rounded-2xl bg-primary duration-300`}
    >
      <BsChevronUp
        className="cursor-pointer p-2 text-6xl text-accent"
        onClick={handleClick}
      />
    </div>
  );
};

export default ScrollToTopVisible;
