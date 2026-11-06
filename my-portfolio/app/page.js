"use client";

import styles from "./home.module.css";

import GridTail from "./components/GridTail";
import Navbar from "./components/Navbar";

import themeStyles from "./context/ThemeButton.module.css";
import {ThemeProvider,useTheme,} from "./context/ThemeContext";


export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}


function HomeContent() {
  const { darkmode, toggleTheme } = useTheme();

  return (
    <div
      className={`${styles.page} ${
        darkmode ? styles.dark : styles.light
      }`}
    >
      <Navbar />

      <main>

      <button
        className={themeStyles.themeButton}
        onClick={toggleTheme}

        // DISABLING KEYBOARD ON THEME CHANGER BUTTON {violet,13}
        onKeyDown={(e) => {
          // Completely disable Space and Enter key triggers on this button
          if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
            e.preventDefault();
          }
        }}

        onKeyUp={(e) => {
          // Completely disable Space and Enter key triggers on this button
          if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
            e.preventDefault();
          }
        }}
      >
        <img
          src={darkmode ? "/icon-sun.png" : "/icon-moon.png"}
          alt={darkmode ? "Light-Mode" : "Dark-Mode"}
          className={themeStyles.themeIcon}
        />
      </button>

        <section className={styles.Profile_Preview}>
          <GridTail />

          <div className={`${styles.profile} ${darkmode ? styles.dark : styles.light}`}>
            <img src="/sample.jpg" alt="profile-image" className={styles.profile_image}></img>
            
            <div className={styles.profile_description}>
              <h1>Jem</h1>
              <p>Full-stack Web Developer passionate about creating modern and interactive web experiences.</p>

              <div className={styles.social_media}>
                <a href="#" target="_blank" rel="noopener noreferrer"><img src="#" alt="facebook" className={styles.social_icon}></img></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><img src="#" alt="instagram" className={styles.social_icon}></img></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><img src="#" alt="telegram" className={styles.social_icon}></img></a>
              </div>
            </div>
          </div>
          
          <div className={`${styles.statistical_container} ${darkmode ? styles.dark : styles.light}`}>
              <div className={styles.stat}>
                <a href="Project"  rel="noopener noreferrer"><h2>15+</h2>
                <p>Project</p>
                </a>
              </div>

              <div className={styles.stat}>
                <a href="Skills"  rel="noopener noreferrer"><h2>10+</h2>
                <p>Skills</p>
                </a>
              </div>

              <div className={styles.stat}>
                <a href="Clients"  rel="noopener noreferrer"><h2>20+</h2>
                <p>Clients</p>
                </a>
              </div>
          </div>
        </section>

        <section className={styles.About_Preview}>

          {/* ========================= */}
          {/* EXPERIENCE */}
          {/* ========================= */}
          <div className={styles.Experience_overview}>
            <h1 className={`font_style_title`}>EXPERIENCE</h1>
            <hr/>
            <h4 className={`font_style_header`}> Full-Stack Web Developer</h4>
            <h4 className={`font_style_header`}>UI/UX Designer</h4>
            <h4 className={`font_style_header`}>Graphic Designer</h4>
            <h4 className={`font_style_header`}>Game Developer</h4>
          </div>

          <br/>

          {/* ========================= */}
          {/* TECH STACK */}
          {/* ========================= */}
          <div className={styles.tech_stack_overview}>
            <legend><h1 className={`font_style_title`}>Tech Stack</h1></legend>

            <div className={styles.stack_container01}>

              <div className={styles.stack01}>
                <img src="#" alt=""></img>
                <span>Html</span>
              </div>

              <div className={styles.stack02}>
                <img src="#" alt=""></img>
                <span>Css</span>
              </div>

              <div className={styles.stack03}>
                <img src="#" alt=""></img>
                <span>Javascript</span>
              </div>

              <div className={styles.stack04}>
                <img src="#" alt=""></img>
                <span>Python</span>
              </div>

              <div className={styles.stack05}>
                <img src="#" alt=""></img>
                <span>React.Js</span>
              </div>

            </div>
          </div>

        </section>


        {/* ========================= */}
        {/* PROJECTS */}
        {/* ========================= */}

        <section className={styles.Project_Preview}>
          
          <h1 className={`font_style_title`}>PROJECTS</h1>
            
            <div className={styles.project_overview}>
              

              {/* ----- Project 01: Adventure Games ----- */}
              <div className={styles.projectCard}>
                <div className={styles.project_Header}>
                  <span className={`${styles.project_Status} font_style_header`}>
                    <span className={styles.status_Dot}></span>
                    Live
                  </span>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.view_Link} font_style_header`}
                  >
                    View <span>→</span>
                  </a>
                </div>

                <div className={styles.image_Container}>
                  <img src="./sample images (1).jpg" alt="Project01" className={styles.project_Image} />
                </div>

                <div className={styles.project_Info}>
                  <h3 className={`font_style_header`}>Adventure Games</h3>
                  <p className={`font_style_header`}><i>Academic Project</i></p>
                </div>
              </div>

              {/* ----- Project 02: JRB Website ----- */}
              <div className={styles.projectCard}>
                <div className={styles.project_Header}>
                  <span className={`${styles.project_Status} font_style_header`}>
                    <span className={styles.status_Dot}></span>
                    Live
                  </span>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.view_Link} font_style_header`}
                  >
                    View <span>→</span>
                  </a>
                </div>

                <div className={styles.image_Container}>
                  <img src="./sample images (1).jpg" alt="Project02" className={styles.project_Image} />
                </div>

                <div className={styles.project_Info}>
                  <h3 className={`font_style_header`}>JRB Website</h3>
                  <p className={`font_style_header`}><i>Architecte Website</i></p>
                </div>
              </div>

              {/* ----- Project 03: Background Remover ----- */}
              <div className={styles.projectCard}>
                <div className={styles.project_Header}>
                  <span className={`${styles.project_Status} font_style_header`}>
                    <span className={styles.status_Dot}></span>
                    Live
                  </span>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.view_Link} font_style_header`}
                  >
                    View <span>→</span>
                  </a>
                </div>

                <div className={styles.image_Container}>
                  <img src="./sample images (1).jpg" alt="Project03" className={styles.project_Image} />
                </div>

                <div className={styles.project_Info}>
                  <h3 className={`font_style_header`}>Background Remover</h3>
                  <p className={`font_style_header`}><i>Background Image Remover</i></p>
                </div>
              </div>

            </div>
        </section>
        
      </main>
    </div>
  );
}