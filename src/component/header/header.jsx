import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const basketItem = 2;
  return (

    <header>
      <label className="sidemenu__close" for="close1"></label>
      <input type="checkbox" id="close1" className="close" />

      <div className="big">

        <div className="sidemenu">
          <div className="sidemenu__container">

            <div className="sidemenu__logo"></div>
            <div className="sidemenu__header">Catergories</div>
            <ul className="sidemenu__items">
              <li><label className="sidemenu__links Groceries" for="checkbox1"> Groceries<span>&#11206;</span></label>
                <input type="checkbox" className="sidemenu__checkbox" id="checkbox1" />
                <ul className="sidemenu__droplist sidemenu__droplist-1">
                  <li className="sidemenu__droplinks">food</li>
                  <li className="sidemenu__droplinks">drink</li>
                  <li className="sidemenu__droplinks">snacks</li>
                  <li className="sidemenu__droplinks">rice,pasta</li>
                  <li className="sidemenu__droplinks">meat</li>
                </ul>
              </li>
              <li><label className="sidemenu__links Home-Products" for="checkbox2">Home Products
                    <span>&#11206;</span></label>
                <input type="checkbox" className="sidemenu__checkbox" id="checkbox2" />
                <ul className="sidemenu__droplist sidemenu__droplist-2">

                  <li className="sidemenu__droplinks">snacks</li>
                  <li className="sidemenu__droplinks">rice,pasta</li>
                  <li className="sidemenu__droplinks">meat</li>
                </ul>
              </li>
              <li><label className="sidemenu__links Health" for="checkbox3">Health &
                    Beauty<span>&#11206;</span></label>
                <input type="checkbox" className="sidemenu__checkbox" id="checkbox3" />
                <ul className="sidemenu__droplist sidemenu__droplist-3">
                  <li className="sidemenu__droplinks">snacks</li>
                  <li className="sidemenu__droplinks">rice,pasta</li>
                  <li className="sidemenu__droplinks">meat</li>
                </ul>
              </li>
              <li className="sidemenu__links">Offer</li>
            </ul>
            <div className="sidemenu__social">
              <img src="/img/facebook-icon.png" alt="facebook" className="sidemenu__social-icon" />
              <img src="/img/instagram-icon.png" alt="insta" className="sidemenu__social-icon" />
              <img src="/img/twitter-icon.png" alt="twitter" className="sidemenu__social-icon" />
              <img src="/img/email-icon.png" alt="email" className="sidemenu__social-icon" />
            </div>
          </div>

        </div>

      </div>


      <div className="logo"></div>
      <input className="search-bar" type="search" />
      <button className="btn">
        <Link className="btn-text" to="/">
          search
        </Link>
      </button>
      <div className="icon-box">
        {/* <Link className="text" to="sign-in.html">
          {" "}
          login/register
        </Link> */}
        {/* <div className="icon icon-1 "></div> */}
        <div className="icon-text">
          <Link to="#cart-popup">Cart</Link>
        </div>
        <div className="icon icon-2">
          <Link to="#cart-popup"></Link>
        </div>
        {basketItem > 0 && (
          <div className="cart-amount">
            <div className="cart-figure">{basketItem}</div>
          </div>
        )}
      </div>

    </header>



  );
};

export default Header;
