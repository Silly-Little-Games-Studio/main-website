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

import styles from "./contact.module.css";

export const Contact = ({ id }) => {
  return (
    <>
      <heroSection
        style={{
          gap: "8px",
        }}
      >
        <section id={id} />
        <heroHeading
          style={{
            alignItems: "center",
          }}
        >
          <h1>Contact</h1>
        </heroHeading>
        <div className={styles.contactHolder}>
          <h2>VIA Email:</h2>
          <h1
            style={{
              fontSize: "32px",
              color: "#FF8B4C",
              textDecoration: "underline",
            }}
          >
            contact@sillylittlegames.studio
          </h1>
        </div>
        <div className={styles.contactHolder}>
          <h2>OR Social Media:</h2>
          <h1
            style={{
              fontSize: "20px",
              color: "#E7ECEF",
              justifyContent: "end",
              alignItems: "end",
              fontWeight: "400",
            }}
          >
            @SillyLittleGamesStudio
          </h1>
        </div>
      </heroSection>
    </>
  );
};
