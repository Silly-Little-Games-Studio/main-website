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

import styles from "./backlogHero.module.css";

export const BackLogHero = ({ id }) => {
  return (
    <>
      <heroSection>
        <section id={id} />
        <heroHeading>
          <h1>BackLog</h1>
          <h2>Our little back log of projects and most interesting demos.</h2>
        </heroHeading>

        <div className={styles.itemContainer}>
          <div className={styles.backLogArticle}>
            <div className={styles.articleImage}></div>
            <div className={styles.articleText}>
              <text className={styles.articleType}> Game Jam</text>
              <text className={styles.articleName}> Test Name</text>
            </div>
          </div>
          <div className={styles.backLogArticle}>
            <div className={styles.articleImage}></div>
            <div className={styles.articleText}>
              <text className={styles.articleType}> Game Jam</text>
              <text className={styles.articleName}> Test Name</text>
            </div>
          </div>
          <div className={styles.backLogArticle}>
            <div className={styles.articleImage}></div>
            <div className={styles.articleText}>
              <text className={styles.articleType}> Game Jam</text>
              <text className={styles.articleName}> Test Name</text>
            </div>
          </div>
          <div className={styles.backLogArticle}>
            <div className={styles.articleImage}></div>
            <div className={styles.articleText}>
              <text className={styles.articleType}> Game Jam</text>
              <text className={styles.articleName}> Test Name</text>
            </div>
          </div>
        </div>
      </heroSection>
    </>
  );
};
