import React from "react";

function Header() {
  return (
    <div>
      <nav className="px-8 bg-black flex items-center justify-between">
        <a href="#">
          <img
            className="object-fit h-16"
            src="/images/branding/gravymixes-logo.png"
            alt="gravy-mixes-logo"
          />
        </a>
        <ul className="flex text-white font-semi-bold uppercase justify-between gap-8">
          <li>
            <a className="hover:text-accent transition-colors" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-accent transition-colors" href="#">
              Work
            </a>
          </li>
          <li>
            <a className="hover:text-accent transition-colors" href="#">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-accent transition-colors" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="hover:text-accent transition-colors" href="#">
              FAQ
            </a>
          </li>
        </ul>
        <button className="text-white py-1 px-4 border-2 border-accent rounded-full hover:bg-accent transition-colors duration-500">
          <a href="#">Get A Quote</a>
        </button>
      </nav>
    </div>
  );
}

export default Header;
