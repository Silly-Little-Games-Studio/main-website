import styles from "./mainHero.module.css";

export const MainHero = ({ takeRef }) => {
  return (
    <>
      <div className={styles.mainHero}>
        <div className={styles.main1Content}>
          <text className={styles.logoText}>SILLY LITTLE GAMES STUDIO</text>
          <div className={styles.socialsHolder}>
            <a
              href="https://github.com/Silly-Little-Games-Studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={styles.socialIcon}
                style={{
                  backgroundImage: 'url("/Images/socialIcons/github.png")',
                }}
              ></div>
            </a>
            <a
              href="https://store.steampowered.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={styles.socialIcon}
                style={{
                  backgroundImage: 'url("/Images/socialIcons/steam.png")',
                }}
              ></div>
            </a>
            <a
              href="https://silly-little-games-studio.itch.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={styles.socialIcon}
                style={{
                  backgroundImage: 'url("/Images/socialIcons/itch.io.png")',
                }}
              ></div>
            </a>
            <a
              href="https://discord.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={styles.socialIcon}
                style={{
                  backgroundImage: 'url("/Images/socialIcons/discord.png")',
                }}
              ></div>
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <div
                className={styles.socialIcon}
                style={{
                  backgroundImage: 'url("/Images/socialIcons/twitter.png")',
                }}
              ></div>
            </a>
            <a
              href="https://www.instagram.com/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={styles.socialIcon}
                style={{
                  backgroundImage: 'url("/Images/socialIcons/instagram.png")',
                }}
              ></div>
            </a>
            <a
              href="https://www.youtube.com/@SillyLittleGamesStudio/featured"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                className={styles.socialIcon}
                style={{
                  backgroundImage: 'url("/Images/socialIcons/youtube.png")',
                }}
              ></div>
            </a>
          </div>
          <div className={styles.currentProject}>
            <div className={styles.currentProjectText}>
              <h1 style={{ fontSize: "34px" }}>
                Current Project: HexaDrones Colourshift
              </h1>
              <h2>
                HexaDrones Colourshift is a reboot and full fledged version of
                our best game jam submission. Fly around and unlock power ups
                and fight waves of enemies in this hexagon themed arcade
                shooter!
              </h2>
              <div className={styles.currentProjectStoreButton}>
                Steam page pending...
              </div>
              <div className={styles.currentProjectStoreButton}>
                Steam page pending...
              </div>
              <div className={styles.currentProjectDevlogButton}>
                Read the dev log!
              </div>
            </div>
            <div className={styles.currentProjectImage}></div>
          </div>
        </div>
      </div>
    </>
  );
};
