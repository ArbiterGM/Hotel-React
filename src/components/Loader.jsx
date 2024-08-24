import { useState } from "react";
import logo from "../assets/images/logo-white.svg";

const Loader = () => {
  const [hidden, setHidden] = useState(false);
  const [remove, setRemove] = useState(false);

  setTimeout(() => {
    setHidden(true);
  }, 750);
  setTimeout(() => {
    setRemove(true);
  }, 1250);

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-primary transition-opacity duration-[800ms] ease-in-out ${
        hidden && "opacity-0"
      } ${remove && "hidden"}`}
    >
      <img src={logo} className="w-72 sm:w-96 md:w-[35rem]" alt="hotel logo" />
    </div>
  );
};

export default Loader;
