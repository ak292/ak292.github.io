import Navbar from "./Navbar";
import styles from "./css/Education.module.css";

function Education() {
  return (
    <div className={styles["container-two"]}>
      <Navbar />
      <div className={styles["title-container"]}>
        <h3 className={styles.education}>Education</h3>
        <div className={styles.container}>
          <div className={styles["education-container"]}>
            <div className={styles["date-container"]}>
              <div>
                <h1 className={styles.bsc}>MSc Data Science & Analytics</h1>
                <h1 className={styles.uni}>
                  Toronto Metropolitan University | Toronto, Canada
                </h1>
                <p>
                  Accepted into the program and expected to start in September
                  2024
                </p>
                <p className={styles.courses}>
                  <span>Relevant Courses:</span> Machine Learning, Management of
                  Big Data and Big Data Tools, Design of Algorithms and
                  Programming for Massive Data, Data Mining and Prescriptive
                  Analytics
                </p>
              </div>
              <p className={styles["date-para"]}>
                September 2024 - September 2025
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className={styles["education-container"]}>
            <div className={styles["date-container"]}>
              <div>
                <h1 className={styles.bsc}>BSc (HONS) Computer Science</h1>
                <h1 className={styles.uni}>
                  University of Portsmouth | Portsmouth, UK
                </h1>
                <p>Grade: Upper Second Class Honours (B+ equivalent)</p>
                <p className={styles.courses}>
                  <span>Relevant Courses:</span> Web Programming, Enterprise Web
                  Programming, Data Structures & Algorithms, Practical Data
                  Analytics & Mining, Distributed Systems & Security, Discrete
                  Mathematics & Functional Programming, Theoretical Computer
                  Science
                </p>
              </div>
              <p className={styles["date-para"]}>September 2020 - July 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
