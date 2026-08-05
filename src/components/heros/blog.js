import styles from "./blog.module.css";

export const Blog = ({ id }) => {
  return (
    <>
      <heroSection
        style={{
          backgroundColor: "#170c28",
        }}
      >
        <section id={id} />
        <heroHeading>
          <h1>Blog</h1>
          <h2>No AI here, just rambling about game design</h2>
        </heroHeading>
      </heroSection>
    </>
  );
};
