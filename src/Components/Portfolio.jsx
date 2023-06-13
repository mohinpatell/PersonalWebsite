/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/winners.jpg";

const imageAltText = "Picture of a screen with unintelligible code on it.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Best Financial Hack Winner",
    description:
      "Won against 85+ teams in the 2023 MLH Hackathon sponsored by Microsoft and Capital One for my project, ''Finance for Dummies.''",
    url: "https://devpost.com/software/capitolonebankazure",
  },
  {
    title: "freeCodeCamp Profile/Certifications",
    description:
      "I have completed 600+ hours of freeCodeCamp's curriculum and earned 2 certifications.",
    url: "https://www.freecodecamp.org/Mohin_Patel",
  },
  {
    title: "Blomberg Certification",
    description:
      "I have completed Bloomberg's Market Concepts Certification, signifying proficient knowledge for the Bloomberg Terminal and financial markets.",
    url: "https://portal.bloombergforeducation.com/certificates/kok6mr6172n7brc6LjSpcAqD",
  },

];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h5 style={{ textAlign: "center" }}>Portfolio</h5>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h4 style={{ flexBasis: "40px" }}>{project.title}</h4>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
