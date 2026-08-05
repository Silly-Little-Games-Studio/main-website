import styles from "./footer.module.css";

export const Footer = ({ id }) => {
  return (
    <>
      <heroSection
        style={{
          backgroundColor: "#170c28",
        }}
      >
        <section id={id} />
        <heroHeading>
          <h1>Temp footer</h1>
        </heroHeading>
      </heroSection>
    </>
  );
};
