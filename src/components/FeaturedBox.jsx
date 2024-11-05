import React from "react";
import avatar from "../assets/images/me1.jpg";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Accessories</span>
        </div>
        <div className="featured-name">
          Accessories <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
            We select natural diamonds from the world's best cutting sources,
            each diamond is inspected using advanced technology that is
            exclusive and specially developed with over 130 years of experience,
            with expert gemologists controlling the quality of every diamond to
            meet the 5Cs standards so that you can possess the most beautiful
            and perfect diamond jewelry.
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            Shop Now <i className="uil uil-pricetag-alt"></i>
          </button>
          <button className="btn">
            Know More <i className="uil uil-bars"></i>
          </button>
        </div>

        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/auroradiamond_official/"></a>
            <i className="uil uil-instagram-alt"></i>
          </div>

          <div className="icon">
            <a href="https://www.facebook.com/AuroraDiamondOfficial"></a>
            <i className="uil uil-facebook"></i>
          </div>

          <div className="icon">
            <a href="https://page.line.me/wtr6646r?openQrModal=true"></a>
            <i class="uil uil-line"></i>
          </div>
          <div className="icon">
            <a href="https://www.youtube.com/@AuroraGoldandJewelry"></a>
            <i class="uil uil-youtube"></i>
          </div>
        </div>
      </div>

      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>

      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-angle-down"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
