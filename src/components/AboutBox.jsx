import React from "react";
import avatar from "../assets/images/me1.jpg";
import avatar2 from "../assets/images/me2.jpg";
const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Us</h1>
      </div>
      <div className="row">
        {/** About Me */}
        <div className="col">
          <div className="about-info">
            <h3>OUR Memories</h3>
            <p>
              Aurora Diamond was established in 2015 under Aurora Design Public
              Company Limited with over 50 years of experience and expertise in
              diamond jewelry. We aim to provide every customer with access to
              diamond jewelry at an affordable price, maintaining outstanding
              quality and unique design, while also creating convenience in
              receiving services. By being the number one diamond brand with the
              most branches in Thailand, covering over 200 branches nationwide,
              we meet the needs of customers at all times and are ready to be a
              part of every important occasion in life.!
            </p>
          </div>
        </div>
        <div className="featured-image">
          <div className="image">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="featured-image">
          <div className="image">
            <img src={avatar2} alt="avatar" />
          </div>
        </div>
        <div className="col">
          <div className="about-info">
            <h3>Premium Diamonds</h3>
            <p>
              "LEVA Collection" is a rare natural diamond found in only 2% of
              the world's diamonds, with its exquisite beauty that shines at the
              highest level, guaranteeing light and fire play at the Ultimate
              Light Performance level. Every diamond in the LEVA Collection has
              the De Beers Code of Origin, which is specified and comes from the
              De Beers mine, which will give you confidence that you are in
              possession of a genuine diamond that comes from nature, with
              quality certificates from 2 world-class institutions, De Beers
              Institute of Diamond and Sarine, as well as being certified by
              Aurora Diamond.!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
