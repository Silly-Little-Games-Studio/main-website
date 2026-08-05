import { Header } from "@/components/header/header";
import { MainHero } from "@/components/heros/mainHero";
import { BackLogHero } from "@/components/heros/backLogHero";

export default function Home() {
  return (
    <>
      <Header />
      <MainHero />
      <BackLogHero id="Portfolio" />
      <h1>test again!</h1>
      {/*
      <h1>================================</h1>
      <h1>Website is under construction</h1>
      <h1>I am very slow at this :(</h1>
      <h1>================================</h1>
      <h1>Website is under construction</h1>
      <h1>I am very slow at this :(</h1>
      <h1>================================</h1>
      <h1>Test commit2</h1>
      */}
    </>
  );
}
