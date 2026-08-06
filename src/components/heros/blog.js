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

import styles from "./blog.module.css";

export const Blog = ({ id }) => {
  return (
    <>
      <heroSection
        style={{
          backgroundColor: "#170c28",
          backgroundImage: "url(/Images/BooksWireFrame.png)",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          minHeight: "600px",
          maxHeight: "600px",
        }}
      >
        <section id={id} />
        <heroHeading>
          <h1>Blog</h1>
          <h2>No AI here, just rambling about game design</h2>
        </heroHeading>
        <div className={styles.articleItem}>
          <div className={styles.articleDate}>06/08/2026</div>
          <div className={styles.articleTitle}>There is no articles yet</div>
          <a href="#" className={styles.articleReadPost}>
            Read Post
          </a>
        </div>
        <div className={styles.articleItem}>
          <div className={styles.articleDate}>06/08/2026</div>
          <div className={styles.articleTitle}>There is no articles yet</div>
          <a href="#" className={styles.articleReadPost}>
            Read Post
          </a>
        </div>
        <div className={styles.articleItem}>
          <div className={styles.articleDate}>06/08/2026</div>
          <div className={styles.articleTitle}>There is no articles yet</div>
          <a href="#" className={styles.articleReadPost}>
            Read Post
          </a>
        </div>
      </heroSection>
    </>
  );
};
