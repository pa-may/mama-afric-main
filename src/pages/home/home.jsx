import React from "react";
import CategoryFilter from "../../component/categoryFilter/categoryFilter";
import ShoppingCart from '../../component/shoppingCart/shoppingCart';
import "./home.scss";

function Home() {
  return (
    <div className="home">
      {/* <CategoryFilter /> */}

      <div className="home-img">
        <div className="home-img__container">
          <h1 className="home-img__header">Bringing Africa to your doorstep</h1>
        </div>
      </div>

      <div className="service">
        <div className="service__container">
          <div className="service__icon service__icon-1"></div>
          <div className="service__box">
            <div className="service__title">FREE SHIPPING</div>
            <div className="service__text">On order over £100</div>
          </div>

        </div>

        <div className="service__container">
          <div className="service__icon service__icon-2"></div>
          <div className="service__box">
            <div className="service__title">ALWAYS FRESH</div>
            <div className="service__text">Product well packaged</div>
          </div>

        </div>
        <div className="service__container">
          <div className="service__icon service__icon-3"></div>
          <div className="service__box">
            <div className="service__title">SUPERIOR QUALITY</div>
            <div className="service__text">Quality products</div>
          </div>

        </div>
        <div className="service__container">
          <div className="service__icon service__icon-4"></div>
          <div className="service__box">
            <div className="service__title">SUPPORT</div>
            <div className="service__text">2/7 support servive</div>
          </div>

        </div>

      </div>
      <main>

      </main>

      <div className="social">
        <div className="social__icon social__icon-1"></div>
        <div className="social__icon social__icon-2"></div>
        <div className="social__icon social__icon-3"></div>
        <div className="social__icon social__icon-4"></div>
      </div>


      <section className="latest-products">

        <div className="latest-box">
          <h2 className="latest">SHOP LATEST PRODUCTS</h2>
          <h2 className="see-all"><a href="item-page.html">see all</a></h2>
        </div>


        <div className="products-slidder" id="one">
          <div className="products-container">
            <div className="hover"><img className="hover__icon" src="/img/icons8-heart-outline.svg" alt="" /></div>
            <img className="products-image" src="/img/40421.png" alt="" />
            <h5 className="products-name">Relish Seafood Delight</h5>
            <h6 className="products-price"> £6.99</h6>
            <button className="add-basket-btn"><a className="add-basket-text" href="">ADD TO BASKET</a></button>

          </div>
          <div className="products-container">
            <div className="hover"><img className="hover__icon" src="/img/icons8-heart-outline.svg" alt="" /></div>
            <img className="products-image" src="/img/aboniki.png" alt="" />
            <h5 className="products-name">Aboniki Balm</h5>
            <h6 className="products-price"> £6.99</h6>
            <button className="add-basket-btn"><a className="add-basket-text" href="">ADD TO BASKET</a></button>
          </div>

          <div className="products-container">
            <div className="hover"><img className="hover__icon" src="/img/icons8-heart-outline.svg" alt="" /></div>
            <img className="products-image" src="/img/amstel.png" alt="" />
            <h5 className="products-name">Amstel Malt</h5>
            <h6 className="products-price"> £6.99</h6>
            <button className="add-basket-btn"><a className="add-basket-text" href="">ADD TO BASKET</a></button>
          </div>

          <div className="products-container">
            <div className="hover"><img className="hover__icon" src="/img/icons8-heart-outline.svg" alt="" /></div>
            <img className="products-image" src="/img/Ayoola-poundo-yam-flour450g.png" alt="" />
            <h5 className="products-name">Ayoola Pounded Yam</h5>
            <h6 className="products-price"> £6.99</h6>
            <button className="add-basket-btn"><a className="add-basket-text" href="">ADD TO BASKET</a></button>
          </div>

          <div className="products-container">
            <div className="hover"><img className="hover__icon" src="/img/icons8-heart-outline.svg" alt="" /></div>
            <img className="products-image" src="/img/black-seed.png" alt="" />
            <h5 className="products-name">Black Seeds</h5>
            <h6 className="products-price"> £6.99</h6>
            <button className="add-basket-btn"><a className="add-basket-text" href="">ADD TO BASKET</a></button>
          </div>

        </div>

      </section>


      <section className="latest-products">
        <div className="latest-box">

          <h2 className="latest">SHOP LATEST PRODUCTS</h2>
          <h2 className="see-all">see all</h2>
        </div>
        <div className="products-slidder">
          <div className="products-container">
            <div className="hover"><img className="hover__icon" src="/img/icons8-heart-outline.svg" alt="" /></div>
            <img className="products-image" src="/img/blades.png" alt="" />
            <h5 className="products-name">Tiger Blades</h5>
            <h6 className="products-price"> £6.99</h6>
            <button className="add-basket-btn"><a className="add-basket-text" href="">ADD TO BASKET</a></button>
          </div>
          <div className="products-container">
            <div className="hover"><img className="hover__icon" src="/img/icons8-heart-outline.svg" alt="" /></div>
            <img className="products-image" src="/img/blue-band.png" alt="" />
            <h5 className="products-name">Blue Band Butter</h5>
            <h6 className="products-price"> £6.99</h6>
            <button className="add-basket-btn"><a className="add-basket-text" href="">ADD TO BASKET</a></button>
          </div>

          <div className="products-container">
            <div className="hover"><img className="hover__icon" src="/img/icons8-heart-outline.svg" alt="" /></div>
            <img className="products-image" src="/img/bon-vita.png" alt="" />
            <h5 className=" products-name">Bournvita</h5>
            <h6 className="products-price"> £6.99</h6>
            <button className="add-basket-btn"><a className="add-basket-text" href="">ADD TO BASKET</a></button>
          </div>

          <div className="products-container">
            <div className="hover"><img className="hover__icon" src="/img/icons8-heart-outline.svg" alt="" /></div>
            <img className="products-image" src="/img//bournvita.png" alt="" />
            <h5 className="products-name">Bournvita</h5>
            <h6 className="products-price"> £6.99</h6>
            <button className="add-basket-btn"><a className="add-basket-text" href="">ADD TO BASKET</a></button>
          </div>

          <div className="products-container">
            <div className="hover"><img className="hover__icon" src="/img/icons8-heart-outline.svg" alt="" /></div>
            <img className="products-image" src="/img/cards.png" alt="" />
            <h5 className="products-name">Playing Cards</h5>
            <h6 className="products-price"> £6.99</h6>
            <button className="add-basket-btn"><a className="add-basket-text" href="">ADD TO BASKET</a></button>
          </div>
        </div>
      </section>


      <div className="banner-container">
        <img className="banner" src="/img/wholesale-poster.png" alt="" />
        <img className="llll" src="/img/posster-1.png" alt="" />
        <img className="llllmm" src="/img/posster-2.png" alt="" />
      </div>




      <section className="latest-products">
        <div className="latest-box">
          <h2 className="latest">SHOP LATEST PRODUCTS</h2>
          <h2 className="see-all">see all</h2>
        </div>

        <div className="products-slidder">
          <div className="products-container">
            <div className="hover"><img className="hover__icon" src="/img/icons8-heart-outline.svg" alt="" /></div>
            <img className="products-image" src="/img/checker-custard.png" alt="" />
            <h5 className="products-name">Checkers Custard</h5>
            <h6 className="products-price"> £6.99</h6>
            <button className="add-basket-btn"><a className="add-basket-text" href="">ADD TO BASKET</a></button>
          </div>
          <div className="products-container">
            <div className="hover"><img className="hover__icon" src="/img/icons8-heart-outline.svg" alt="" /></div>
            <img className="products-image" src="/img/flex-peanuts.png" alt="" />
            <h5 className="products-name">Flex Peanuts</h5>
            <h6 className="products-price"> £6.99</h6>
            <button className="add-basket-btn"><a className="add-basket-text" href="">ADD TO BASKET</a></button>
          </div>

          <div className="products-container">
            <div className="hover"><img className="hover__icon" src="/img/icons8-heart-outline.svg" alt="" /></div>
            <img className="products-image" src="/img//funbact.png" alt="" />
            <h5 className="products-name">Funbact-A Cream</h5>
            <h6 className="products-price"> £6.99</h6>
            <button className="add-basket-btn"><a className="add-basket-text" href="">ADD TO BASKET</a></button>
          </div>

          <div className="products-container">
            <div className="hover"><img className="hover__icon" src="/img/icons8-heart-outline.svg" alt="" /></div>
            <img className="products-image" src="/img/gino.png" alt="" />
            <h5 className="products-name">Gino</h5>
            <h6 className="products-price"> £6.99</h6>
            <button className="add-basket-btn"><a className="add-basket-text" href="">ADD TO BASKET</a></button>
          </div>

          <div className="products-container">
            <div className="hover"><img className="hover__icon" src="/img/icons8-heart-outline.svg" alt="" /></div>
            <img className="products-image" src="/img/golden-basmati.png" alt="" />
            <h5 className="products-name">Golden Basmati</h5>
            <h6 className="products-price"> £6.99</h6>
            <button className="add-basket-btn"><a className="add-basket-text" href="">ADD TO BASKET</a></button>
          </div>
        </div>
      </section>

      <section className="category">
        <div className="latest-box">
          <h2 className="latest">SHOP BY CATEGORY</h2>
        </div>

        <div className="category__container">
          <div className="category__box category__box-1">
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div>

          <div className="category__box category__box-2">
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div>

          <div className="category__box category__box-3">
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div>

          <div className="category__box category__box-4">
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div>

          <div className="category__box category__box-5">
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div>

          <div className="category__box category__box-6">
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div>

          <div className="category__box category__box-7">
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div>

          <div className="category__box category__box-8">
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div>

          <div className="category__box category__box-9">
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div>

          <div className="category__box category__box-10">
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div>

          {/* <div className="category__box category__box-1">
            <div className="category__text">Food</div>
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div>

          <div className="category__box category__box-2">
            <div className="category__text">Cosmetic</div>
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div>
          <div className="category__box category__box-4">
            <div className="category__text">Household</div>
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div>

          <div className="category__box category__box-1">
            <div className="category__text">Food</div>
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div>

          <div className="category__box category__box-2">
            <div className="category__text">Cosmetic</div>
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div>

          <div className="category__box category__box-1">
            <div className="category__text">Food</div>
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div>

          <div className="category__box category__box-2">
            <div className="category__text">Cosmetic</div>
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div>

          <div className="category__box category__box-2">
            <div className="category__text">Cosmetic</div>
            <button className="category__btn"><a href="" className="category__btn-text">shop now</a></button>
          </div> */}
        </div>
      </section>

      <div className="banner-2-container">
        <img className="banner-2" src="img/homed.png" alt="" />
      </div>
      { true && <ShoppingCart />}
    </div >


  );
}

export default Home;
