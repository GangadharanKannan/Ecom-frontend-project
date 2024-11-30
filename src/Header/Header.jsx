import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="2xl:container mx-auto py-4">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* logo */}
        <div className="flex justify-between">
          <p className="text-2xl font-bold">Ecom</p>
          <div>
            {/* Menu Toggle Icon */}
            {show ? (
              <svg
                onClick={toggle}
                className="block md:hidden pt-2"
                viewBox="0 0 21 21"
                fill="currentColor"
                height="1.8em"
                width="1.8em"
                aria-label="Close menu">
                <g fill="none" fillRule="evenodd" stroke="currentColor">
                  <path d="M15.5 15.5l-10-10zM15.5 5.5l-10 10" />
                </g>
              </svg>
            ) : (
              <svg
                onClick={toggle}
                className="block md:hidden pt-2"
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.5em"
                width="1.5em"
                aria-label="Open menu">
                <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
              </svg>
            )}
          </div>
        </div>
        {/* content */}
        <div className={show ? "block" : "hidden md:block"}>
          <ul className="flex flex-col justify-center items-center md:flex-row md:justify-end gap-9">
            <li id="home">
              <Link to="/" onClick={toggle} className="text-xl font-bold"> 
              {/* onClick - TO GET Auto Close Feature */}
                Home
              </Link>
            </li>
            <Link to="/product" onClick={toggle} className="text-xl font-bold">
              Product
            </Link>
            <Link to="/cart/1" className="text-xl font-bold">Cart</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header