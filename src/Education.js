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
                <h1 className={styles.bsc}>
                  Master of Interdisciplinary Applied Artificial Intelligence
                </h1>
                <h1 className={styles.uni}>University of Ottawa | Ottawa, Canada</h1>
                <p>
                  <b>Grade:</b> A
                </p>
                <p className={styles.courses}>
                  <span>Relevant Courses:</span> Foundations and Applications of Machine Learning,
                  Essential Concepts in Data Science, System Optimization and Management
                </p>
              </div>
              <p className={styles["date-para"]}>September 2024 - Dec 2025</p>
            </div>
          </div>
        </div>

        <div>
          <div className={styles["education-container"]}>
            <div className={styles["date-container"]}>
              <div>
                <h1 className={styles.bsc}>BSc (HONS) Computer Science</h1>
                <h1 className={styles.uni}>University of Portsmouth | Portsmouth, UK</h1>
                <p>
                  <b>Grade:</b> UK 2:1 – equivalent to a Canadian A- or B+
                </p>
                <p className={styles.courses}>
                  <span>Relevant Courses:</span> Web Programming, Enterprise Web Programming, Data
                  Structures & Algorithms, Practical Data Analytics & Mining, Distributed Systems &
                  Security, Discrete Mathematics & Functional Programming, Theoretical Computer
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
