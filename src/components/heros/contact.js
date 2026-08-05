import styles from "./contact.module.css";

export const Contact = ({ id }) => {
  return (
    <>
      <heroSection>
        <section id={id} />
        <heroHeading>
          <h1>Contact</h1>
        </heroHeading>
      </heroSection>
    </>
  );
};
