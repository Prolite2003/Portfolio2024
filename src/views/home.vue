<template>
  <div class="main">
    <div class="main-container">
      <div class="main-container-inner">
        <div class="inner-container">
          <header>
            <div class="logo">
              <a href="https://stefanschooneveld.cyclic.app/#" aria-label="Img of my github logo that restart the page">
                <img src="https://avatars.githubusercontent.com/u/56436795?v=4" alt="Img of my github logo" />
              </a>
            </div>
            <div>
              <ul>
                <li class="email">
                  <a target="_blank" aria-label="Link to my email with a subject of Response from the portfolio website"
                    href="mailto:stefanschooneveld@hotmail.com?subject=Response from the portfolio website">
                    <i>
                      <font-awesome-icon :icon="['fas', 'envelope']" />
                    </i>
                  </a>
                </li>
                <li class="github">
                  <a target="_blank" aria-label="Link to my github" href="https://github.com/Prolite2003">
                    <i>
                      <font-awesome-icon :icon="['fab', 'github']" />
                    </i>
                  </a>
                </li>
                <li class="linkedin">
                  <a target="_blank" aria-label="Link to my linkedin"
                    href="https://www.linkedin.com/in/stefan-schooneveld-b230b0264/">
                    <i>
                      <font-awesome-icon :icon="['fab', 'linkedin']" />
                    </i>
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <main class="info-field">
            <div class="text-box">
              <div id="welcome" class="welcome" v-if="currentSection === 'welcome'">
                <h1>Welcome</h1>
                <span>
                  <span>
                    My name is Stefan Schooneveld.
                    <br />
                    I'm a Junior Software engineer working at Novexx Solutions.
                    <br />
                    I'm 21 years old. <br />
                    I really like coding and exploring new hobby's or activities And I made this portfolio to show my
                    experiences and more about me.
                  </span>
                </span>
              </div>
              <div id="aboutme" class="link" v-if="currentSection === 'aboutme'">
                <h2>Who am i?</h2>
                <span>
                  <span>
                    <p>
                      My name is Stefan Schooneveld. I'm 21 years old and currently work at Novexx Solutions as a Junior
                      Software Engineer. I have a passion for coding and enjoy creating websites, apps, and programs.
                    </p>
                    <p>
                      I began my journey at MBO Utrecht, where I earned my MBO 4 degree In Software and Media
                      Development.
                      During my studies, I learned more about TypeScript, HTML, SCSS/CSS, PHP, JavaScript, and GitHub.
                      After completing my degree, I further expanded my knowledge by diving deeper into JavaScript and
                      Vue.js, which I used to build this portfolio. Additionally, I have started learning Python and C#.
                    </p>
                    <p>
                      Outside of work, I am a gamer, enjoying titles such as Destiny 2 and Ratchet & Clank. I also
                      have a love for board and card games, including Unstable Unicorns, Catan, Clever and much more.
                      After work I like to stay active by going to the gym or taking walks.
                    </p>

                  </span>

                  <span class="cvbtn">
                    <button class="cv" href="./Stefan-Schooneveld-CV.pdf" target="_blank"
                      download="Stefan-Schooneveld-CV.pdf">
                      cv
                    </button>
                  </span>
                </span>
              </div>
              <div id="experience" class="link" v-if="currentSection === 'experience'">
                <h2>What can i do?</h2>
                <span>
                  <span>
                    <p>
                      At Mbo Utrecht, where I started my journey, I studied GitHub
                      and gained knowledge of HTML, CSS, and JavaScript. I fell in
                      love with coding right away and wanted to learn everything
                      there was to know about it, so I started learning scss/sass
                      because I was so intrigued by it. We then started using
                      node, apis, php, and object-oriented programming. After
                      that, I started coming up with my own projects with vue.js, python and c# in an effort
                      to challenge myself and pick up some new skills.
                    </p>
                    <p>
                      I also finished a one-year internship at ing, where I learned a lot more about apis and what it's
                      like to work in an office.
                    </p>
                  </span>
                </span>
              </div>
              <div id="projects" class="link" v-if="currentSection === 'projects'">
                <h2>My projects</h2>
                <span>
                  <span v-if="!projectDetails">
                    I've made 2 projects that I'd like to highlight, and
                    they are represented by the buttons below. To learn more
                    about the various projects, click on them.
                  </span>
                </span>
                <span v-if="projectDetails === 'PortfolioText'">
                  <p>
                    My portfolio website was my first project that I aimed to perfect. I searched for inspiration
                    online and sketched my ideas on paper. Once I had everything drawn out, I began coding and learned
                    new skills throughout the process.
                  </p>
                  <p>
                    After completing the project, I thought of the text to tell more about myself and then uploaded the
                    site
                    to
                    Netlify so i could make it publicly accessible.
                  </p>
                </span>
                <span v-if="projectDetails === 'HomeApp'">
                  <p>
                    I made a HomeApp for me and my girlfriend so we can save our workouts and so we can share text from
                    1 device to another.
                  </p>
                  <p>
                    I started this project because noticed i could not find a good way to save my workouts, i started by
                    making a website to save our workouts but then realised that i should add some more functions.
                    From there i added a page to share text from 1 device to another because i sometimes have to copy
                    links or text from my phone to my laptop or to another device and this made it easier to do so.
                    In the future i will be adding a leaderboard to save our scores from the games we play.
                  </p>
                  <a href="https://stefanschooneveldhomeapp.vercel.app" target="_blank">Home App Website</a>
                  <p>
                    <b>Login Credentails:</b>
                    <br />
                    Username: temp@user.nl
                    <br />
                    Password: tempuser
                  </p>
                </span>
                <span class="textbtns">
                  <button @click="changeProjectText('PortfolioText')" href="#">Portfolio</button>
                  <button @click="changeProjectText('HomeApp')" href="#">HomeApp</button>
                </span>
              </div>
            </div>
            <div class="usefull-links">
              <h2>More Information</h2>
              <div class="links-wrapper">
                <ul>
                  <li>
                    <a href="#" @click="showSection('aboutme')"><span>About me</span></a>
                  </li>
                  <li>
                    <a href="#" @click="showSection('experience')"><span>Experience</span></a>
                  </li>
                  <li>
                    <a href="#" @click="showSection('projects')"><span>Projects</span></a>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope as fasEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub as fabGithub,
  faLinkedin as fabLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";

library.add(fasEnvelope, fabGithub, fabLinkedin);

export default {
  data() {
    return {
      currentSection: "welcome",
      projectDetails: null,
    };
  },
  methods: {
    showSection(section) {
      this.currentSection = section;
      this.projectDetails = null;
    },
    changeProjectText(detail) {
      this.projectDetails = detail;
    },
  },
  components: {
    FontAwesomeIcon,
  },
};
</script>
