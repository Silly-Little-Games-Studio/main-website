/*
// Copyright © 2026 Silly Little Games Studio LTD
// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
// See LICENSE file in the project root for full license text.
 */

import { Header } from "@/components/header/header";
import { MainHero } from "@/components/heros/mainHero";
import { BackLogHero } from "@/components/heros/backLogHero";
import { Manifesto } from "@/components/heros/manifesto";
import { MeetTheTeam } from "@/components/heros/meetTheTeam";
import { Blog } from "@/components/heros/blog";
import { Contact } from "@/components/heros/contact";
import { Footer } from "@/components/heros/footer";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SillyLittleGamesStudio",
  alternateName: "Silly Little Games Studio",
  url: "https://sillylittlegames.studio",
  logo: "https://sillylittlegames.studio/Images/OldLogoMini.png",
  description: "Independent game development studio.",
  sameAs: [
    "https://silly-little-games-studio.itch.io/",
    "https://www.youtube.com/@SillyLittleGamesStudio",
    "https://github.com/Silly-Little-Games-Studio",
    "https://x.com/SillyLittleGS",
    "https://www.instagram.com/silly.little.games.studio/?hl=en",
    "https://steamcommunity.com/id/SillyLittleGamesStudio/",
    "https://www.linkedin.com/company/silly-little-games-studio/",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header />
      <MainHero />
      <BackLogHero id="Portfolio" />
      <Manifesto id="Manifesto" />
      <MeetTheTeam id="Team" />
      <Blog id="Blog" />
      <Contact id="Contact" />
      <Footer id="Footer" />
    </>
  );
}
