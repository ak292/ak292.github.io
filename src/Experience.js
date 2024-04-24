import Navbar from "./Navbar";
import styles from "./css/Experience.module.css";

function Experience() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles["container-two"]}>
        <h2 className={styles.experience}>Experience</h2>
        <h3>IBM - Application Developer Internship</h3>
        <div className={styles["container-three"]}>
          <ul>
            <li>
              Developed software at IBM in a team focused on automating business
              logic in applications
            </li>
            <li>
              Made use of IBMs Operational Decision Manager tool to create
              business rules using IBMs Business Action Language and a Java XOM
              (Execution Object Model)
            </li>
            <li>
              Passed a test to achieve the IBM Operational Decision Manager
              Standard V8.9 Business Analyst certification through Credly
            </li>
          </ul>
          <p className={styles["date-para"]}>August 2023 - October 2023</p>
        </div>
        <a
          href="https://www.credly.com/badges/cd04391d-eb62-4c2b-b85b-f59ae8177d51"
          target="_blank"
          rel="noreferrer"
          className={styles.alink}
        >
          <button className={styles.btn}>
            View my IBM Credly certification
          </button>
        </a>
      </div>
    </div>
  );
}

export default Experience;
