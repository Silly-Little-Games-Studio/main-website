import styles from "./contact.module.css";

export const Contact = ({ id }) => {
  return (
    <>
      <heroSection
        style={{
          gap: "8px",
        }}
      >
        <section id={id} />
        <heroHeading
          style={{
            alignItems: "center",
          }}
        >
          <h1>Contact</h1>
        </heroHeading>
        <div className={styles.contactHolder}>
          <h2>VIA Email:</h2>
          <h1
            style={{
              fontSize: "32px",
              color: "#FF8B4C",
              textDecoration: "underline",
            }}
          >
            contact@sillylittlegames.studio
          </h1>
        </div>
        <div className={styles.contactHolder}>
          <h2>OR Social Media:</h2>
          <h1
            style={{
              fontSize: "20px",
              color: "#E7ECEF",
              justifyContent: "end",
              alignItems: "end",
              fontWeight: "400",
            }}
          >
            @SillyLittleGamesStudio
          </h1>
        </div>
      </heroSection>
    </>
  );
};
