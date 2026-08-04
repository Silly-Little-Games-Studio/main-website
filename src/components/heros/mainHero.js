import styles from "./mainHero.module.css";

export const MainHero = ({ takeRef }) => {
  return (
    <>
      <div className={styles.mainHero}>
        <div className={styles.main1Content}>
          <text className={styles.logoText}>SILLY LITTLE GAMES STUDIO</text>
          <div className={styles.socialsHolder}>
            <h5>Github</h5>
            <h5>Steam</h5>
            <h5>Itch</h5>
            <h5>Discord</h5>
            <h5>Twitter</h5>
            <h5>Instagram</h5>
            <h5>Youtube</h5>
          </div>
          <div className={styles.currentProject}>
            <div className={styles.currentProjectText}>
              <h2>Current Project: HexaDrones Colourshift</h2>
              <h3>
                HexaDrones Colourshift is a reboot and full fledged version of
                our best game jam submission. Fly around and unlock power ups
                and fight waves of enemies in this hexagon themed arcade
                shooter!
              </h3>
              <h2>Steam page pending...</h2>
              <h2>Itch.io page pending...</h2>
            </div>
            <div className={styles.currentProjectImage}></div>
          </div>
        </div>
      </div>
    </>
  );
};
