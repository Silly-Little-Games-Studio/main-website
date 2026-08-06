import styles from "./blog.module.css";

export const Blog = ({ id }) => {
  return (
    <>
      <heroSection
        style={{
          backgroundColor: "#170c28",
          backgroundImage: "url(/Images/BooksWireFrame.png)",
          backgroundPosition: "right bottom",
          backgroundRepeat: "no-repeat",
          minHeight: "600px",
          maxHeight: "600px",
        }}
      >
        <section id={id} />
        <heroHeading>
          <h1>Blog</h1>
          <h2>No AI here, just rambling about game design</h2>
        </heroHeading>
        <div className={styles.articleItem}>
          <div className={styles.articleDate}>06/08/2026</div>
          <div className={styles.articleTitle}>There is no articles yet</div>
          <a href="#" className={styles.articleReadPost}>
            Read Post
          </a>
        </div>
        <div className={styles.articleItem}>
          <div className={styles.articleDate}>06/08/2026</div>
          <div className={styles.articleTitle}>There is no articles yet</div>
          <a href="#" className={styles.articleReadPost}>
            Read Post
          </a>
        </div>
        <div className={styles.articleItem}>
          <div className={styles.articleDate}>06/08/2026</div>
          <div className={styles.articleTitle}>There is no articles yet</div>
          <a href="#" className={styles.articleReadPost}>
            Read Post
          </a>
        </div>
      </heroSection>
    </>
  );
};
