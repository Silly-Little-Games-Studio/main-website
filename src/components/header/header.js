/*
// Copyright © 2026 Silly Little Games Studio LTD
// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
// See LICENSE file in the project root for full license text.
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
