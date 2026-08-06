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

import styles from "./footer.module.css";

export const Footer = ({ id }) => {
  return (
    <>
      <heroSection
        style={{
          backgroundColor: "#170c28",
          backgroundImage: "url(/Images/GodotWireFrame.png)",
          backgroundPosition: "left bottom",
          backgroundRepeat: "no-repeat",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <section id={id} />

        <div className={styles.logo}></div>
        <div className={styles.copywrite}>
          © 2026 Silly Little Games Studio LTD
        </div>
        <h2
          style={{
            textAlign: "center",
          }}
        >
          123 Real Street - Building 99
          <br />
          London G6G 9WP United Kingdom
        </h2>
        <h2
          style={{
            textAlign: "center",
            color: "#FF8B4C",
          }}
        >
          contact@sillylittlegames.studio
        </h2>
      </heroSection>
    </>
  );
};
