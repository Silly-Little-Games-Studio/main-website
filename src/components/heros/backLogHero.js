/*
// Copyright © 2026 Silly Little Games Studio LTD
// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
// See LICENSE file in the project root for full license text.
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
