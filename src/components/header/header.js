import styles from "./header.module.css";

export const Header = ({ takeRef }) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}></div>
        <h2>Portfolio</h2>
        <h2>Manifesto</h2>
        <h2>Team</h2>
        <h2>Blog</h2>
        <h2>Contact</h2>
      </div>
    </>
  );
};
