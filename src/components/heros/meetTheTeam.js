/*
// Copyright © 2026 Silly Little Games Studio LTD
// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
// See LICENSE file in the project root for full license text.
 */

import styles from "./meetTheTeam.module.css";

export const MeetTheTeam = ({ id }) => {
  return (
    <>
      <heroSection>
        <section id={id} />
        <heroHeading>
          <h1>Meet The Team</h1>
          <h2>This is a little studio after all</h2>
        </heroHeading>
        <div className={styles.articleHolder}>
          <div className={styles.articleItem}>
            <div
              style={{
                backgroundImage: "url(/Images/teamPfp/JackPfp.webp)",
                backgroundPosition: "centre",
                backgroundRepeat: "no-repeat",
              }}
              className={styles.articleImage}
            ></div>
            <h1
              style={{
                fontSize: "24px",
              }}
            >
              Jack Gravil
            </h1>
            <h2
              style={{
                height: "50px",
                textAlign: "center",
              }}
            >
              Company Director
              <br />
              Lead Developer
            </h2>
            <a
              href="https://www.jackgravil.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.articleLink}
            >
              Website
            </a>
          </div>

          <div className={styles.articleItem}>
            <div
              style={{
                backgroundImage: "url(/Images/teamPfp/RedForgePfp.png)",
                backgroundPosition: "centre",
                backgroundRepeat: "no-repeat",
                backgroundSize:
                  "210px" /*Have to force this size cuz weird image size? Get person to give better pfp*/,
              }}
              className={styles.articleImage}
            ></div>
            <h1
              style={{
                fontSize: "24px",
              }}
            >
              RedForge
            </h1>
            <h2
              style={{
                height: "50px",
                textAlign: "center",
              }}
            >
              Contracted Lead
              <br />
              3D Artist
            </h2>
            <a
              href="https://www.artstation.com/redforgecreates"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.articleLink}
            >
              Website
            </a>
          </div>
          <div className={styles.articleItem}>
            <div
              style={{
                backgroundImage: "url(/Images/teamPfp/AngelTempPfp.avif)",
                backgroundPosition: "centre",
                backgroundRepeat: "no-repeat",
                backgroundSize:
                  "300px" /*Have to force this size cuz weird image size? Get person to give better pfp*/,
              }}
              className={styles.articleImage}
            ></div>
            <h1
              style={{
                fontSize: "24px",
              }}
            >
              Angel Kneppers
            </h1>
            <h2
              style={{
                height: "50px",
                textAlign: "center",
              }}
            >
              Social Media Manager
              <br />
              Game Designer
            </h2>
            <a
              href="https://www.linkedin.com/in/angel-kneppers-183a58299/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.articleLink}
            >
              Website
            </a>
          </div>
          <div className={styles.articleItem}>
            <div
              style={{
                backgroundImage: "url(/Images/teamPfp/KotyPfp.jpg)",
                backgroundPosition: "centre",
                backgroundRepeat: "no-repeat",
                backgroundSize:
                  "200px" /*Have to force this size cuz weird image size? Get person to give better pfp*/,
              }}
              className={styles.articleImage}
            ></div>
            <h1
              style={{
                fontSize: "24px",
              }}
            >
              Koty
            </h1>
            <h2
              style={{
                height: "50px",
                textAlign: "center",
              }}
            >
              Contracted Lead
              <br />
              Concept Artist
            </h2>
            <a
              href="https://www.artstation.com/creatureu"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.articleLink}
            >
              Website
            </a>
          </div>
        </div>
      </heroSection>
    </>
  );
};
