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
        }}
      >
        <section id={id} />
        <heroHeading>
          <h1>Temp footer</h1>
        </heroHeading>
      </heroSection>
    </>
  );
};
