import { useState } from "react";
import Navbar from "./Navbar";
import styles from "./css/Projects.module.css";

function Projects() {
  const [projectStates, setProjectStates] = useState({
    firstProject: false,
    secondProject: false,
    thirdProject: false,
  });

  const handleClick = (e) => {
    const id = e.currentTarget.id;
    switch (id) {
      case "first-div":
        setProjectStates((prevStates) => ({
          ...prevStates,
          firstProject: !prevStates.firstProject,
        }));
        break;
      case "second-div":
        setProjectStates((prevStates) => ({
          ...prevStates,
          secondProject: !prevStates.secondProject,
        }));
        break;
      case "third-div":
        setProjectStates((prevStates) => ({
          ...prevStates,
          thirdProject: !prevStates.thirdProject,
        }));
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles["container-two"]}>
        <div className={styles["projects-text"]}>Projects</div>

        <div className={styles["discord-bot"]}>
          <h3>Discord Management Bot (Graduation Project)</h3>
          <p>
            <span>Technologies used: </span>JavaScript, NodeJS, Discord.js, CSV Parsing/Text
            processing, FileTransfer Browser API, HTML, CSS
          </p>
          <div className={styles.gitcontainer}>
            <a
              href="https://github.com/ak292/discord-management-bot"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i id={styles.git} className="icons fa-brands fa-3x fa-github"></i>
            </a>
            <div className={styles.linkparacontainer}>
              <a
                href="https://github.com/ak292/discord-management-bot/blob/main/README.md"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i id={styles.link} className="icons fa-solid fa-3x fa-link"></i>
              </a>
              <p className={styles["github-para"]}>
                README file in GitHub repo contains GIFs and images of the bot in action if you'd
                like to see a demo.
              </p>
            </div>
          </div>

          <div id="first-div" onClick={handleClick} className={styles["hidden-more-info"]}>
            <p className={styles["para-hidden"]}>
              <i
                id={styles.dropicon}
                class={
                  projectStates.firstProject ? "fa-solid fa-caret-down" : "fa-solid fa-caret-right"
                }
              ></i>
              Click for more info!
            </p>

            <div className={projectStates.firstProject ? styles.visible : styles["hidden-info"]}>
              <p className={styles["info-para"]}>
                This is a Discord bot created to help manage the University of Portsmouth official
                Discord server.{" "}
                <span className={styles["bot-para"]}>
                  The bot was deployed in the official UoP server and saved University staff tens of
                  hours per year.
                </span>{" "}
                It was created as the software artefact of my final year graduation project as a
                Computer Science student at the University of Portsmouth. The bot has many
                functionalities built in to help manage the official University of Portsmouth
                Discord server (which has thousands of members) including:
              </p>
              <ul className={styles["ul-list"]}>
                <li className={styles["li-para"]}>
                  Verifying new students who join the Discord server by reading a CSV file
                  containing UoP students information which will be input by the client.
                </li>
                <li className={styles["li-para"]}>
                  Updating students roles based on progress decisions at the end of the academic
                  year by reading a CSV file containing the progress decisions of each student which
                  will be input by the client.
                </li>
                <li className={styles["li-para"]}>
                  Bot also comes with a dashboard created with Node & Express to allow the client to
                  input any neccessary CSV files to the bot and to toggle certain features such as
                  security mode (a mode that allows the client to input a security question upon
                  verification) on or off.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles["discord-bot"]}>
          <h3>Custom Wordle Web Application</h3>
          <p>
            <span>Technologies used: </span>JavaScript, NodeJS, SQLite, HTML, CSS
          </p>
          <div className={styles.gitcontainer}>
            <a href="https://github.com/ak292/a-better-wordle" target="_blank" rel="noreferrer">
              {" "}
              <i id={styles.git} className="icons fa-brands fa-3x fa-github"></i>
            </a>
            <div className={styles.linkparacontainer}>
              <a href="https://a-better-wordle.onrender.com" target="_blank" rel="noreferrer">
                {" "}
                <i id={styles.link} className="icons fa-solid fa-3x fa-link"></i>
              </a>
              <p className={styles["link-para"]}>
                Play the game for yourself! Backend uses free hosting so the website will take some
                time to load (~30 seconds) initially.
              </p>
            </div>
          </div>

          <div id="second-div" onClick={handleClick} className={styles["hidden-more-info"]}>
            <p className={styles["para-hidden"]}>
              {/* <i class="fa-solid fa-caret-down"></i> */}
              <i
                id={styles.dropicon}
                class={
                  projectStates.secondProject ? "fa-solid fa-caret-down" : "fa-solid fa-caret-right"
                }
              ></i>
              Click for more info!
            </p>

            <div className={projectStates.secondProject ? styles.visible : styles["hidden-info"]}>
              <p className={styles["info-para"]}>
                This is a better, custom made, version of the popular game known as "Wordle" created
                by me. <span className={styles["bot-para"]}>What makes this version better?</span>{" "}
              </p>
              <ul className={styles["ul-list"]}>
                <li className={styles["li-para"]}>
                  No cheating! Users cannot inspect the client code to find the word that they need
                  to guess. This is because word validation is done server-side in this version of
                  Wordle.
                </li>
                <li className={styles["li-para"]}>
                  "Play Again" feature that allows user to play as many times as they want with a
                  random word selected each time.
                </li>
                <li className={styles["li-para"]}>
                  Users are allowed to submit their own words to be used in a game of Wordle given
                  that it is a 5 letter valid dictionary word.
                </li>
                <li className={styles["li-para"]}>
                  Added a QoL feature that allows users to click on a letter in the word to edit it
                  instead of having to delete the entire word.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles["discord-bot"]}>
          <h3>React.js Social Media Web Application</h3>
          <p>
            <span>Technologies used: </span> React.js (hooks, context, reducers, React Suspense,
            etc.), Node.js, MongoDB Atlas, LocalStorage, Socket.io, Webpack, JavaScript, HTML, CSS
          </p>
          <div className={styles.gitcontainer}>
            <a
              href="https://github.com/ak292/react-social-media-web-app"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i id={styles.git} className="icons fa-brands fa-3x fa-github"></i>
            </a>
            <div className={styles.linkparacontainer}>
              <a
                href="https://master--deluxe-horse-c91768.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <i id={styles.link} className="icons fa-solid fa-3x fa-link"></i>
              </a>
              <p className={styles["link-para"]}>
                Check out the web app! Backend uses free hosting so the website will take some time
                to load (~30 seconds) initially.
              </p>
            </div>
          </div>

          <div id="third-div" onClick={handleClick} className={styles["hidden-more-info"]}>
            <p className={styles["para-hidden"]}>
              <i
                id={styles.dropicon}
                class={
                  projectStates.thirdProject ? "fa-solid fa-caret-down" : "fa-solid fa-caret-right"
                }
              ></i>
              Click for more info!
            </p>

            <div className={projectStates.thirdProject ? styles.visible : styles["hidden-info"]}>
              <p className={styles["info-para"]}>
                This is a social media web app created with React. It allows users to sign up,
                login, make posts and comments, like posts and comments, and follow other people (to
                customize their newsfeed). <b>Please note:</b> This web application was built as
                part of an online React.js course I took while learning React.
              </p>
              <ul className={styles["ul-list"]}>
                <li className={styles["li-para"]}>
                  Web app communicates with a real-world backend API created with Node.js and
                  Express.js using Axios and renders the data dynamically.
                </li>
                <li className={styles["li-para"]}>
                  Uses LocalStorage to store JWT token information, usernames, avatars, so users can
                  remain logged in when they first sign in.
                </li>
                <li className={styles["li-para"]}>
                  Socket.io was used for a live chat feature enabling users to communicate in real
                  time.
                </li>
                <li className={styles["li-para"]}>
                  MongoDB Atlas was used as a Cloud Database for storing user information
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
