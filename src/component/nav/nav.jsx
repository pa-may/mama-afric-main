import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";

const Nav = () => {
    return (

        <div className="smallnav">
            <ul className="smallnav__top">
                {/* <li className="smallnav__list smallnav__list-a">CATERGORIES
        <ul className="smallnav__droplist">
                        <li className="smallnav__item"><a href="" className="smallnav__link">food</a> </li>
                        <li className="smallnav__item"><a href="" className="smallnav__link">drink</a> </li>
                        <li className="smallnav__item"><a href="" className="smallnav__link">spices & seasoning</a></li>
                        <li className="smallnav__item"><a href="" className="smallnav__link">snacks</a> </li>
                        <li className="smallnav__item"><a href="" className="smallnav__link">meat,fish & poultry</a></li>
                        <li className="smallnav__item"><a href="" className="smallnav__link">rice,pasta,flour</a></li>
                        <li className="smallnav__item"><a href="" className="smallnav__link">fruit & veg</a> </li>
                    </ul>
                </li> */}
                <li className="smallnav__list">GROCERIES
        <ul className="smallnav__droplist">
                        <li className="smallnav__item"><a href="" className="smallnav__link">food</a> </li>
                        <li className="smallnav__item"><a href="" className="smallnav__link">drink</a> </li>
                        <li className="smallnav__item"><a href="" className="smallnav__link">spices & seasoning</a></li>
                        <li className="smallnav__item"><a href="" className="smallnav__link">snacks</a> </li>
                        <li className="smallnav__item"><a href="" className="smallnav__link">meat,fish & poultry</a></li>
                        <li className="smallnav__item"><a href="" className="smallnav__link">rice,pasta,flour</a></li>
                        <li className="smallnav__item"><a href="" className="smallnav__link">fruit & veg</a> </li>
                    </ul>
                </li>
                <li className="smallnav__list">HOME PRODUCTS
        <ul className="smallnav__droplist">
                        <li className="smallnav__item"><a href="" className="smallnav__link">household items</a> </li>
                        <li className="smallnav__item"><a href="" className="smallnav__link">mats</a> </li>
                        <li className="smallnav__item"><a href="" className="smallnav__link">Jugs</a> </li>

                    </ul>
                </li>
                <li className="smallnav__list">HEALTH & BEAUTY
        <ul className="smallnav__droplist">
                        <li className="smallnav__item"><a href="" className="smallnav__link">skin care</a> </li>
                        <li className="smallnav__item"><a href="" className="smallnav__link">hair care</a> </li>
                        <li className="smallnav__item"><a href="" className="smallnav__link">oral care</a> </li>

                    </ul>
                </li>
                <li className="smallnav__list">OFFERS</li>
            </ul>
        </div>
    );
};

export default Nav;
