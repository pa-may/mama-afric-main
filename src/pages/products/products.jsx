import React from "react";
import "./products.scss";

const Products = () => {
  return <div>
    <div className="food">
      <div className="food__container">
        <div className="food__header">Grocery</div>
        <div className="food__header-small">Lorem ipsum dolor sit amedit quisquam laboriosam eos corporis, et adipisci
                illo nam quidem molestias molestiae, recusandae quae.</div>
      </div>
    </div>

    <div className="main">

      <label classname="productslide__close" for="close1"></label>
      <input type="checkbox" id="close1" classname="close" />

      <div classname="big">

        <div classname="productslide">
          <div classname="productslide__container">
            <div classname="productslide__header">Catergories</div>

            <ul classname="productslide__items">
              <li><label classname="productslide__links Groceries" for="checkbox1"> Product
                            Category<span>&#11206;</span></label>
                <input type="checkbox" classname="productslide__checkbox" id="checkbox1" />
                <ul classname="productslide__droplist productslide__droplist-1">
                  <li classname="productslide__droplinks">food</li>
                  <li classname="productslide__droplinks">drink</li>
                  <li classname="productslide__droplinks">snacks</li>
                  <li classname="productslide__droplinks">rice,pasta</li>
                  <li classname="productslide__droplinks">meat</li>
                </ul>
              </li>
              <li><label classname="productslide__links Home-Products" for="checkbox2">brand
                            <span>&#11206;</span></label>
                <input type="checkbox" classname="productslide__checkbox" id="checkbox2" />
                <ul classname="productslide__droplist productslide__droplist-2">

                  <li classname="productslide__droplinks">indomie</li>
                  <li classname="productslide__droplinks">nato</li>
                  <li classname="productslide__droplinks">mamaa afric</li>
                </ul>
              </li>
              <li><label classname="productslide__links Health" for="checkbox3">Price<span>&#11206;</span></label>
                <input type="checkbox" classname="productslide__checkbox" id="checkbox3" />
                <ul classname="productslide__droplist productslide__droplist-3">
                  <li classname="productslide__droplinks">skin care</li>
                  <li classname="productslide__droplinks">hair care</li>
                  <li classname="productslide__droplinks">oral care</li>
                </ul>
              </li>
            </ul>
          </div>

        </div>

      </div>





      {/* <div className="main__side-menu-container">
        <div className="main__side-menu-box">
          <div className="main__side-header">Product Categories</div>
          <div className="main__category">
            <ul className="main__category-item">
              <li className="main__category__list">Food</li>
              <li className="main__category__list">Food</li>
              <li className="main__category__list">Food</li>
              <li className="main__category__list">Food</li>
              <li className="main__category__list">show more...</li>
            </ul>
          </div>
          <div className="main__side-header">Filter by Brand</div>
          <div className="main__brand">
            <ul className="main__item">
              <li className="main__brand__list">Food</li>
              <li className="main__brand__list">Food</li>
              <li className="main__brand__list">Food</li>
              <li className="main__brand__list">Food</li>
              <li className="main__brand__list">show more...<more className=""></more>
              </li>
            </ul>
          </div>
          <div className="main__side-header">Price</div>
        </div>
      </div> */}



      <div className="mainproduct">
        <div className="mainproduct__top">
          <div className="mainproduct__header">Rice/Pasta</div>
          <div className="mainproduct__sort-container">
            <span className="mainproduct__sort">Sort by:</span>
            <div className="mainproduct__sort-box">Price</div>
          </div>
        </div>
        <div className="product-found">
          <div className="product-found-figure"> 125 product found</div>
        </div>


        <div className="goods">
          <div className="goods__container">
            <img className="goods__image" src="/img/40421.png" alt="" />
            <h5 className="goods__name">Relish Seafood Delight</h5>
            <h6 className="goods__price"> £6.99</h6>
            <button className="goods__add-basket-btn"><a className="goods__add-basket-text" href="">ADD TO
                    BASKET</a></button>
          </div>
          <div className="goods__container">
            <img className="goods__image" src="/img/aboniki.png" alt="" />
            <h5 className="goods__name">Aboniki Balm</h5>
            <h6 className="goods__price"> £6.99</h6>
            <button className="goods__add-basket-btn"><a className="goods__add-basket-text" href="">ADD TO
                    BASKET</a></button>
          </div>

          <div className="goods__container">
            <img className="goods__image" src="/img/amstel.png" alt="" />
            <h5 className="goods__name">Amstel Malt</h5>
            <h6 className="goods__price"> £6.99</h6>
            <button className="goods__add-basket-btn"><a className="goods__add-basket-text" href="">ADD TO
                    BASKET</a></button>
          </div>
        </div>
        <div className="goods">
          <div className="goods__container">
            <img className="goods__image" src="/img/40421.png" alt="" />
            <h5 className="goods__name">Relish Seafood Delight</h5>
            <h6 className="goods__price"> £6.99</h6>
            <button className="goods__add-basket-btn"><a className="goods__add-basket-text" href="">ADD TO
                    BASKET</a></button>
          </div>
          <div className="goods__container">
            <img className="goods__image" src="/img/aboniki.png" alt="" />
            <h5 className="goods__name">Aboniki Balm</h5>
            <h6 className="goods__price"> £6.99</h6>
            <button className="goods__add-basket-btn"><a className="goods__add-basket-text" href="">ADD TO
                    BASKET</a></button>
          </div>

          <div className="goods__container">
            <img className="goods__image" src="/img/amstel.png" alt="" />
            <h5 className="goods__name">Amstel Malt</h5>
            <h6 className="goods__price"> £6.99</h6>
            <button className="goods__add-basket-btn"><a className="goods__add-basket-text" href="">ADD TO
                    BASKET</a></button>
          </div>
        </div>

        <div className="goods">
          <div className="goods__container">
            <img className="goods__image" src="/img/40421.png" alt="" />
            <h5 className="goods__name">Relish Seafood Delight</h5>
            <h6 className="goods__price"> £6.99</h6>
            <button className="goods__add-basket-btn"><a className="goods__add-basket-text" href="">ADD TO
                    BASKET</a></button>
          </div>
          <div className="goods__container">
            <img className="goods__image" src="/img/aboniki.png" alt="" />
            <h5 className="goods__name">Aboniki Balm</h5>
            <h6 className="goods__price"> £6.99</h6>
            <button className="goods__add-basket-btn"><a className="goods__add-basket-text" href="">ADD TO
                    BASKET</a></button>
          </div>

          <div className="goods__container">
            <img className="goods__image" src="/img/amstel.png" alt="" />
            <h5 className="goods__name">Amstel Malt</h5>
            <h6 className="goods__price"> £6.99</h6>
            <button className="goods__add-basket-btn"><a className="goods__add-basket-text" href="">ADD TO
                    BASKET</a></button>
          </div>
        </div>

        <div className="goods">
          <div className="goods__container">
            <img className="goods__image" src="/img/40421.png" alt="" />
            <h5 className="goods__name">Relish Seafood Delight</h5>
            <h6 className="goods__price"> £6.99</h6>
            <button className="goods__add-basket-btn"><a className="goods__add-basket-text" href="">ADD TO
                    BASKET</a></button>
          </div>
          <div className="goods__container">
            <img className="goods__image" src="/img/aboniki.png" alt="" />
            <h5 className="goods__name">Aboniki Balm</h5>
            <h6 className="goods__price"> £6.99</h6>
            <button className="goods__add-basket-btn"><a className="goods__add-basket-text" href="">ADD TO
                    BASKET</a></button>
          </div>

          <div className="goods__container">
            <img className="goods__image" src="/img/amstel.png" alt="" />
            <h5 className="goods__name">Amstel Malt</h5>
            <h6 className="goods__price"> £6.99</h6>
            <button className="goods__add-basket-btn"><a className="goods__add-basket-text" href="">ADD TO
                    BASKET</a></button>
          </div>
        </div>

        <div className="goods">
          <div className="goods__container">
            <img className="goods__image" src="/img/40421.png" alt="" />
            <h5 className="goods__name">Relish Seafood Delight</h5>
            <h6 className="goods__price"> £6.99</h6>
            <button className="goods__add-basket-btn"><a className="goods__add-basket-text" href="">ADD TO
                    BASKET</a></button>
          </div>
          <div className="goods__container">
            <img className="goods__image" src="/img/aboniki.png" alt="" />
            <h5 className="goods__name">Aboniki Balm</h5>
            <h6 className="goods__price"> £6.99</h6>
            <button className="goods__add-basket-btn"><a className="goods__add-basket-text" href="">ADD TO
                    BASKET</a></button>
          </div>

          <div className="goods__container">
            <img className="goods__image" src="/img/amstel.png" alt="" />
            <h5 className="goods__name">Amstel Malt</h5>
            <h6 className="goods__price"> £6.99</h6>
            <button className="goods__add-basket-btn"><a className="goods__add-basket-text" href="">ADD TO
                    BASKET</a></button>
          </div>
        </div>




      </div>



    </div>


  </div>;
};

export default Products;
