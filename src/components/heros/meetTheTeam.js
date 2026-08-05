import styles from "./meetTheTeam.module.css";

export const MeetTheTeam = ({ id }) => {
  return (
    <>
      <heroSection>
        <section id={id} />
        <heroHeading>
          <h1>Meet The Team</h1>
          <h2>This is a little studio after all</h2>
        </heroHeading>
      </heroSection>
    </>
  );
};
