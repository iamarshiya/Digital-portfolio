import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content container">
        <div className="text-section">
          <h1 className="headline">
            With every line of <br />
            code, I make the <br />
            world a little better !
          </h1>

          <p className="description">
            For me, programming isn’t just a job — it’s a way to build, learn,
            and make digital experiences better. I started this journey in 2010
            and have been working professionally since 2015.
          </p>

          <div className="stats">
            <div className="stat-box">
              <div className="stat-number">98</div>
              <div className="stat-label">Completed projects</div>
            </div>

            <div className="stat-box">
              <div className="stat-number">9</div>
              <div className="stat-label">Positive reviews</div>
            </div>
          </div>
        </div>

        <div className="image-section">
          <img
            src="https://i.imgur.com/Q51br2K.png"
            alt="profile"
            className="profile-img"
          />
        </div>
      </div>

      <section className="skills-container">
        <div className="container skills-content">
          <div className="skill-block">
            <h2>Skills</h2>
            <p>
              Here’s a look at my skill set. The tech world changes every moment
              and that’s what makes it exciting!
            </p>
          </div>

          <div className="skill-block">
            <h2>Language skill</h2>
            <p>
              I try to learn something new every day and keep improving the
              languages I love so I can grow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
