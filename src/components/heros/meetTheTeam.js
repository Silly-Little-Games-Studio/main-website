/*
 * Copyright © 2026 Silly Little Games Studio LTD
 *
 * This source code is provided for viewing and reference purposes only.
 * Redistribution, modification, commercial reuse, or use for AI training,
 * machine learning, automated code-generation systems, or similar purposes
 * is not permitted without prior written permission.
 *
 * See LICENSE.txt for full terms.
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
            <h2>Director And Lead Dev</h2>
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
            <h2>Contracted Lead 3D Artist</h2>
            <a
              href="https://www.artstation.com/redforgecreates"
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
