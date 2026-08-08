/*
// Copyright © 2026 Silly Little Games Studio LTD
// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
// See LICENSE file in the project root for full license text.
 */

import styles from "./manifesto.module.css";

export const Manifesto = ({ id }) => {
  return (
    <>
      <heroSection
        style={{
          backgroundColor: "#170c28",
          backgroundImage: "url(/Images/ThumbsUpWireFrame.png)",
          backgroundPositionX: "900px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section id={id} />
        <heroHeading>
          <h1>Manifesto</h1>
          <h2>Time to get serious...</h2>
        </heroHeading>
        <text className={styles.manifestoText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu
          libero dolor. Pellentesque ullamcorper ex dui, sit amet rhoncus mi
          condimentum eget. Pellentesque pharetra diam et vehicula pharetra.
          Nunc eu urna pretium libero vestibulum varius nec vel mi.
        </text>
        <text className={styles.manifestoText}>
          {" "}
          Nullam blandit, lorem eget dignissim convallis, ex nulla tempor
          tortor, vel blandit tellus massa sed nibh. Mauris hendrerit turpis at
          feugiat egestas. Integer tincidunt semper faucibus. Nunc porta lacus
          ipsum, id sagittis neque commodoet. Nam in lobortis ligula, eget
          tincidunt diam. Nam sollicitudin dignissim turpis, nec lobortis urna
          blandit eget.
        </text>
        <text className={styles.manifestoText}>
          {" "}
          Integer nunc arcu, facilisis a aliquam a, interdum eget erat. Aliquam
          erat volutpat. Nunc aliquet mi in imperdiet facilisis. Maecenas
          placerat, neque eu rhoncus laoreet, leo quam tincidunt dolor, ac
          fermentum tellus lorem ut ipsum.
        </text>
      </heroSection>
    </>
  );
};
