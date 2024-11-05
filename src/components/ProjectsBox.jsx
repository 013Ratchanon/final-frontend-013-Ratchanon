import React from "react";
import avatar from "../assets/images/me1.jpg";
import avatar2 from "../assets/images/me2.jpg";
import avatar3 from "../assets/images/me3.jpg";
import avatar4 from "../assets/images/me4.jpg";
import avatar5 from "../assets/images/me5.jpg";
const ProjectsBox = () => {
  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Popular</h1>
      </div>

      <div className="project-container">
        <div className="project-box">
          <div className="featured-image">
            <div className="image">
              <img src={avatar2} alt="avatar" />
            </div>
          </div>

          <label>แหวนเพชร LEVA COLLECTION</label>
          <br></br>
          <button className="btn">BUY</button>
        </div>

        <div className="project-box">
          <div className="featured-image">
            <div className="image">
              <img src={avatar3} alt="avatar" />
            </div>
          </div>

          <label>จี้พร้อมสร้อย SWEET BOW</label>
          <br></br>
          <button className="btn">BUY</button>
        </div>
        <div className="project-box">
          <div className="featured-image">
            <div className="image">
              <img src={avatar4} alt="avatar" />
            </div>
          </div>

          <label>สร้อยข้อมือเพชรใบโคลเวอร์ MINIMAL COLLECTION</label>
          <br></br>
          <button className="btn">BUY</button>
        </div>
        <div className="project-box">
          <div className="featured-image">
            <div className="image">
              <img src={avatar5} alt="avatar" />
            </div>
          </div>

          <label> ต่างหูเพชร DIAMOND LINE COLLECTION </label>
          <br></br>
          <button className="btn">BUY</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBox;
