// import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <html>
        <head>
          <title>Portfolio - Rotimi Oluwafemi Solomon</title>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          <link rel="stylesheet" href="/static/assets/css/main.css" />
        </head>
        <body class="is-preload"> */}
          {/* <!-- Nav --> */}
          <nav id="nav">
            <ul class="container">
              <li>
                <a href="#top">Top</a>
              </li>
              <li>
                <a href="#work">Work</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          {/* <!-- Home --> */}
          <article id="top" class="wrapper style1">
            <div class="container">
              <div class="row">
                <div class="col-4 col-5-large col-12-medium">
                  <span class="image fit">
                    <img
                      src="/static/images/itzfeminisce.jpg"
                      alt="itzfeminisce"
                      loading="lazy"
                    />
                  </span>
                </div>
                <div class="col-8 col-7-large col-12-medium">
                  <header>
                    <h1 >
                      Hi! I'm <strong>Rotimi Oluwafemi S.</strong>
                    </h1>
                  </header>
                  <p>
                    Rotimi describes himself as reserved, logical thinker, smart
                    worker, music lover (esp. while coding), early morning
                    coffee is his thing.
                  </p>
                  <a
                    href="/static/res/Rotimi-Oluwafemi-resume.pdf"
                    download
                    class="button alt large scrolly"
                  >
                    Download Resumé
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* <!-- Work --> */}
          <article id="work" class="wrapper style2">
            <div class="container">
              <header>
                <h2>Languages, Libraries and Frameworks</h2>
                <p>I enjoy writing in these languages</p>
              </header>
              <div class="row aln-center">
                <div class="col-4 col-6-medium col-12-small">
                  <section class="box style1">
                    <span class="icon featured fa-comments"></span>
                    <h3>HTML5 & CSS3</h3>
                    <p>
                      Ornare nulla proin odio consequat sapien vestibulum ipsum
                      primis sed amet consequat lorem dolore
                    </p>
                  </section>
                </div>
                <div class="col-4 col-6-medium col-12-small">
                  <section class="box style1">
                    <span class="icon solid featured fa-camera-retro"></span>
                    <h3>Javascript</h3>
                    <p>
                      Ornare nulla proin odio consequat sapien vestibulum ipsum
                      primis sed amet consequat lorem dolore.
                    </p>
                  </section>
                </div>
                <div class="col-4 col-6-medium col-12-small">
                  <section class="box style1">
                    <span class="icon featured fa-thumbs-up"></span>
                    <h3>React.js</h3>
                    <p>
                      Ornare nulla proin odio consequat sapien vestibulum ipsum
                      primis sed amet consequat lorem dolore.
                    </p>
                  </section>
                </div>
              </div>
              <footer>
                <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
                <a href="#portfolio" class="button large scrolly">
                  See some of my recent work
                </a>
              </footer>
            </div>
          </article>

          {/* <!-- Portfolio --> */}
          <article id="portfolio" class="wrapper style3">
            <div class="container">
              <header>
                <h2>Here’s some stuff I made recently.</h2>
                <p>
                  More projects I've worked on can be found in my GitHub page.
                </p>
              </header>
              <div class="row">
                <div class="col-4 col-6-medium col-12-small">
                  <article class="box style2">
                    <div class="image featured">
                      <img
                        src="/static/images/image-filter.png"
                        alt="Image-filter screenshot"
                      />
                    </div>
                    <h3>Real-time Image Filter</h3>
                    <p>
                      A tool written in vanilla javascript for filtering image
                    </p>
                    <p class="lang">
                      <span>HTML</span>
                      <span>CSS3</span>
                      <span>Javascript</span>
                    </p>
                    <div class="actions">
                      <a
                        href="https://github.com/Itzfeminisce/image-filter"
                        class="link"
                        rel="nofollow noreferrer"
                        target="_blank"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://filterize.vercel.app/"
                        rel="nofollow noreferrer"
                        target="_blank"
                      >
                        Preview
                      </a>
                    </div>
                  </article>
                </div>
                <div class="col-4 col-6-medium col-12-small">
                  <article class="box style2">
                    <div class="image featured">
                      <img
                        src="/static/images/blueprint-snap.png"
                        alt="Blueprint.js"
                        loading="lazy"
                      />
                    </div>
                    <h3>Blueprint.js</h3>
                    <p>
                      Blueprint is a standalone code file that adds useful
                      methods to your model and makes life easier for crud
                      operations
                    </p>
                    <p class="lang">
                      <span>Javascript</span>
                      <span>Node.js</span>
                    </p>
                    <div class="actions">
                      <a
                        href="https://github.com/Itzfeminisce/Blueprint"
                        class="link"
                        rel="nofollow noreferrer"
                        target="_blank"
                      >
                        GitHub
                      </a>
                    </div>
                  </article>
                </div>
                <div
                  onclick="return false"
                  class="col-4 col-6-medium col-12-small"
                  
                >
                  <article class="box style2">
                    <div class="image featured">
                      <img
                        src="/static/images/pic04.jpg"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <h4>(ARCHIEVED)</h4>
                    <h3>
                      <a href="#">Imagify.ng</a>
                    </h3>
                    <p>
                      Imagify.ng is an online store of cameras and photographic
                      accessories where users shop, pays and get items delivered
                      with fully integrated payment system
                    </p>
                    <p class="lang">
                      <span>HTML</span>
                      <span>CSS3</span>
                      <span>JQuery</span>
                      <span>PHP</span>
                      <span>MySQL</span>
                    </p>
                    <div class="actions">
                      <a
                        href="https://imagify.ng"
                        class="link"
                        rel="nofollow noreferrer"
                        target="_blank"
                      >
                        Preview
                      </a>
                    </div>
                  </article>
                </div>
                <div class="col-4 col-6-medium col-12-small">
                  <article class="box style2">
                    <div class="image featured">
                      <img
                        src="/static/images/portfolio-screenshot.png"
                        alt="portfolio screenshot"
                        loading="lazy"
                      />
                    </div>
                    <h3>Portfolio</h3>

                    <p>
                      That is the website you are curently viewing. It is a
                      static website written from scratch.
                    </p>
                    <p class="lang">
                      <span>HTML</span>
                      <span>TailwindCSS</span>
                      <span>Javascript</span>
                    </p>
                    <div class="actions">
                      <a
                        href="https://github.com/Itzfeminisce/portfolio"
                        class="link"
                        rel="nofollow noreferrer"
                        target="_blank"
                      >
                        GitHub
                      </a>
                    </div>
                  </article>
                </div>
                <div class="col-4 col-6-medium col-12-small">
                  <article class="box style2">
                    <div class="image featured">
                      <img
                        src="/static/images/4clicks-snap.png"
                        alt="4clicks snap"
                        loading="lazy"
                      />
                    </div>
                    <h4>(ON DEVELOPMENT)</h4>
                    <h3>
                      <a href="#">4Clicks</a>
                    </h3>
                    <p>
                      A social networking site for business and private meeting
                      with telecommunication subscription integration
                    </p>
                    <p class="lang">
                      <span>HTML</span>
                      <span>CSS3</span>
                      <span>JQuery</span>
                      <span>Node.js</span>
                      <span>MySQL</span>
                    </p>
                    <div class="actions">
                      <a
                        href="https://github.com/Itzfeminisce/4clicks"
                        class="link"
                        rel="nofollow noreferrer"
                        target="_blank"
                      >
                        GitHub
                      </a>
                      <a
                        onclick="return false"
                        href="https://github.com/Itzfeminisce/4clicks"
                        class="link"
                        rel="nofollow noreferrer"
                        target="_blank"
                        
                      >
                        Preview
                      </a>
                    </div>
                  </article>
                </div>
              </div>
              <footer>
                {/* <!-- <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p> --> */}
                <a href="#contact" class="button large scrolly">
                  Get in touch with me
                </a>
              </footer>
            </div>
          </article>

          {/* <!-- Contact --> */}
          <article id="contact" class="wrapper style4">
            <div class="container medium">
              <header>
                <h2>Have me make stuff for you.</h2>
                <p>
                  I entertain new challenges because i don't just write codes, i
                  solve problems and grow.
                </p>
              </header>
              <div class="row">
                <div class="col-12">
                  <form method="post" action="#">
                    <div class="row">
                      <div class="col-6 col-12-small">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Name"
                        />
                      </div>
                      <div class="col-6 col-12-small">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                      <div class="col-12">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                        />
                      </div>
                      <div class="col-12">
                        <textarea
                          name="message"
                          id="message"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div class="col-12">
                        <ul class="actions">
                          <li>
                            <input type="submit" value="Send Message" />
                          </li>
                          <li>
                            <input
                              type="reset"
                              value="Clear Form"
                              class="alt"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="col-12">
                  <hr />
                  <h3>Find me on ...</h3>
                  <ul class="social">
                    <li>
                      <a
                        href="https://www.facebook.com/itzfeminisce"
                        class="icon brands fa-facebook-f"
                        target="_blank"
                        rel="noreferrer nofollow"
                      >
                        <span class="label">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/femi-rotimi-040072121"
                        class="icon brands fa-linkedin-in"
                        target="_blank"
                        rel="nofollow noreferrer"
                      >
                        <span class="label">LinkedIn</span>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://github.com/Itzfeminisce?tab=repositories"
                        class="icon brands fa-github"
                        rel="noreferrer nofollow"
                        target="_blank"
                      >
                        <span class="label">Github</span>
                      </a>
                    </li>
                  </ul>
                  <hr />
                </div>
              </div>
              <footer>
                <ul id="copyright">
                  <li>&copy; WebDev. All rights reserved.</li>
                  <li>
                    Design:
                    <a href="https://www.linkedin.com/in/femi-rotimi-040072121">
                      Itzfeminisce
                    </a>
                  </li>
                </ul>
              </footer>
            </div>
          </article>

          {/* {/* <!-- Scripts --> */}
          {/* <script src="/static/assets/js/jquery.min.js"></script>
          <script src="/static/assets/js/jquery.scrolly.min.js"></script>
          <script src="/static/assets/js/browser.min.js"></script>
          <script src="/static/assets/js/breakpoints.min.js"></script>
          <script src="/static/assets/js/util.js"></script>
          <script src="/static/assets/js/main.js"></script> */}
        {/* </body>
      </html> */}
    </>
  );
}