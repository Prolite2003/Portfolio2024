<template>
  <div class="main">
    <div class="main-container">
      <div class="main-container-inner">
        <div class="inner-container">
          <header>
            <div class="logo">
              <a
                href="https://stefanschooneveld.cyclic.app/#"
                aria-label="Img of my github logo that restart the page"
              >
                <img
                  src="https://avatars.githubusercontent.com/u/56436795?v=4"
                  alt="Img of my github logo"
                />
              </a>
            </div>
            <div>
              <ul>
                <li class="email">
                  <a
                    target="_blank"
                    aria-label="Link to my email with a subject of Response from the portfolio website"
                    href="mailto:stefanschooneveld@hotmail.com?subject=Response from the portfolio website"
                  >
                    <i>
                      <font-awesome-icon :icon="['fas', 'envelope']" />
                    </i>
                  </a>
                </li>
                <li class="github">
                  <a
                    target="_blank"
                    aria-label="Link to my github"
                    href="https://github.com/Prolite2003"
                  >
                    <i>
                      <font-awesome-icon :icon="['fab', 'github']" />
                    </i>
                  </a>
                </li>
                <li class="linkedin">
                  <a
                    target="_blank"
                    aria-label="Link to my linkedin"
                    href="https://www.linkedin.com/in/stefan-schooneveld-b230b0264/"
                  >
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
              <div
                id="welcome"
                class="welcome"
                v-if="currentSection === 'welcome'"
              >
                <h1>Welcome</h1>
                <span>
                  <span>
                    My name is Stefan Schooneveld, and I'm a Junior Software
                    engineer working at Novexx Solutions, I'm 21 years old, I
                    really like coding and exploring new hobby's or activities
                    And I made this portfolio to show my experience.
                  </span>
                </span>
              </div>
              <div
                id="aboutme"
                class="link"
                v-if="currentSection === 'aboutme'"
              >
                <h2>Who am i?</h2>
                <span>
                  <span>
                    I like learning new things, whether it's a new programming
                    language or how to Prepare a three-course meal. <br />
                    I'm a Junior Software engineer at Novexx Solutions. I have a
                    MBO 4 degree for Software and media development, There a
                    learned a lot about coding, we mainly used HTML, CSS and
                    JavaScript, but I also learned more About GitHub, PHP and
                    OOP. After my MBO I started to learn how to use python and
                    vue.js and made some different projects with it to test my
                    skills and I still make projects for the fun, I also
                    occasionally enjoy cooking, playing board and card games,
                    playing Online games with friends, and going to the gym.
                  </span>

                  <span class="cvbtn">
                    <a
                      class="cv"
                      href="./docs/Stefan-Schooneveld-CV.pdf"
                      target="_blank"
                      download="Stefan-Schooneveld-CV.pdf"
                    >
                      cv
                    </a>
                  </span>
                </span>
              </div>
              <div
                id="experience"
                class="link"
                v-if="currentSection === 'experience'"
              >
                <h2>What can i do?</h2>
                <span>
                  <span>
                    At Mbo Utrecht, where I started my journey, I studied GitHub
                    and gained knowledge of HTML, CSS, and JavaScript. I fell in
                    love with coding right away and wanted to learn everything
                    there was to know about it, so I started learning scss/sass
                    because I was so intrigued by it. We then started using
                    node, apis, php, and object-oriented programming. After
                    that, I started coming up with my own projects in an effort
                    to challenge myself and pick up new skills. I also finished
                    a one-year internship at ing, where I learned a lot more
                    about apis and what it's like to work in an office.
                  </span>
                </span>
              </div>
              <div
                id="projects"
                class="link"
                v-if="currentSection === 'projects'"
              >
                <h2>What kind of projects have i already done?</h2>
                <span>
                  <span v-if="!projectDetails">
                    I've started a few projects that I'd like to highlight, and
                    they are represented by the buttons below. To learn more
                    about the various projects, click on them.
                  </span>
                </span>
                <span v-if="projectDetails === 'PortfolioText'">
                  Both the website you are visiting right now and this portfolio
                  are products I developed for the first time. In order to
                  demonstrate more about myself, I started this project. I
                  initially had no idea what I should create, so I searched the
                  Internet for various examples. Based on those, I made the
                  decision that I wanted to create a simple website with a ton
                  of information.
                </span>
                <span class="textbtns">
                  <a @click="changeProjectText('PortfolioText')" href="#"
                    >Portfolio</a
                  >
                </span>
              </div>
            </div>
            <div class="usefull-links">
              <h2>More Information</h2>
              <div class="links-wrapper">
                <ul>
                  <li>
                    <a href="#" @click="showSection('aboutme')"
                      ><span>About me</span></a
                    >
                  </li>
                  <li>
                    <a href="#" @click="showSection('experience')"
                      ><span>Experience</span></a
                    >
                  </li>
                  <li>
                    <a href="#" @click="showSection('projects')"
                      ><span>Projects</span></a
                    >
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
