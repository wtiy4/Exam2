import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="flex w-full justify-center items-center bg-black text-white h-[60px]">
        <ul className="flex justify-around w-full items-center">
          <Link to={"/"}>
            <li>
              <img
                src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
                width={90}
              />
            </li>
          </Link>
          <li>
            Deliver to <br></br> Saudi Arabia
          </li>
          <li>
            <input
              type="text"
              placeholder="Search Amazon"
              className="w-2xs border-b-blue-700 border-4 "
            />
            <span>🇺🇸En</span>
          </li>
          <Link to="/Signup">
            <li>
              Hello, Sign in <br /> <strong>Accounts & Lists</strong>
            </li>
          </Link>
          <li>
            Returns <br /> <strong> & Orders </strong>
          </li>
          <li>
            <IoCartOutline />
            Cart{" "}
          </li>
        </ul>
      </nav>

      <nav className="w-full bg-gray-800 h-10 text-white flex items-center justify-around">
        <ul className="flex items-center  text-[10px] gap-2 ">
          <div className="flex items-center ">
            <li>
              <IoMdMenu className="text-[17px]" />
            </li>
            <li>All</li>
          </div>
          <li>Browsing History</li>
          <li>Browsing History Today's Deals</li>
          <li>Today's Deals</li>
          <li>Electronics</li>
          <li>Prime</li>
          <li>Gift Cards</li>
          <li>Home</li>
          <li>Mobile Phones</li>
          <li>Fashion</li>
          <li>Toys & Games</li>
          <li>Perfumes</li>
          <li>Books</li>
          <li> Sell</li>
          <li>Help</li>
          <li>Keep Shopping For</li>
          <li>الوليد's Amazon.sa</li>
          <li>Supermarket</li>
          <li>Video Games</li>
          <li>Appliances </li>
          <li>International Brand Pavilion</li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
