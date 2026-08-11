/*
// Copyright © 2026 Silly Little Games Studio LTD
// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
// See LICENSE file in the project root for full license text.
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
          167-169 Great Portland Street 5th Floor
          <br />
          London W1W 5PF United Kingdom
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
