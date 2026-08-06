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

import { Header } from "@/components/header/header";
import { MainHero } from "@/components/heros/mainHero";
import { BackLogHero } from "@/components/heros/backLogHero";
import { Manifesto } from "@/components/heros/manifesto";
import { MeetTheTeam } from "@/components/heros/meetTheTeam";
import { Blog } from "@/components/heros/blog";
import { Contact } from "@/components/heros/contact";
import { Footer } from "@/components/heros/footer";

export default function Home() {
  return (
    <>
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
