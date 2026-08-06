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

import styles from "./header.module.css";

export const Header = ({ takeRef }) => {
  return (
    <>
      <div className={styles.header}>
        <a href="#">
          <div className={styles.logo}></div>
        </a>
        <a href="#Portfolio">
          <h2>Portfolio</h2>
        </a>
        <a href="#Manifesto">
          <h2>Manifesto</h2>
        </a>
        <a href="#Team">
          <h2>Team</h2>
        </a>
        <a href="#Blog">
          <h2>Blog</h2>
        </a>
        <a href="#Contact">
          <h2>Contact</h2>
        </a>
      </div>
    </>
  );
};
