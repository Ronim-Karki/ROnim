import React from 'react';
import Logo from '../img/logo.png';
// import Moon from '../img/moon.png';
export default function NavBar() {
  return (
    <div>
      <nav className="nav">
        {/* <img src={Moon} className="particles__moon" alt="Moon" /> */}
        <img src={Logo} className="particles__logo" alt="logo" />
        <ul className="nav__list">
          <li>Home</li>
          <li>Portfolio</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="wrapper">
        <h1 className="wrapper__description">
          Hi, <span className="wrapper__text">I'm </span>
        </h1>
        <ul class="wrapper__dynamic-texts">
          <li>
            <span> Ronim karki.</span>
          </li>
          <li>
            <span> a web designer.</span>
          </li>
          <li>
            <span> a Developer.</span>
          </li>
          <li>
            <span> a freelancer.</span>
          </li>
          <li>
            <span> a motivated person.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
