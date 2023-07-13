const Intro = () => {
  return (
    <>
      <section id="intro" className="main-section col-sm">
        <div className="main">
          <h1>Hi, I'm Vanshul.</h1>

          <p>
            Welcome to my portfolio! I'm a passionate coder on a mission to
            create digital magic. With each line of code, I explore endless
            possibilities and bring innovative solutions to life.
          </p>
          {/* <div> */}
          {/* <button className="btn btn-dark rounded-0 btn1">
              Got a project?
            </button> */}
          {/* <button className="btn btn-outline-dark rounded-0">
              Download Resume
            </button>
          </div> */}
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/vanshul-choudhary"
              target="_blank"
              rel="noopener noreferrer"
              className="btn contact-details"
            >
              <i className="fa-brands fa-linkedin-in fa-beat"></i> LinkedIn
            </a>
            <a
              id="profile-link"
              href="https://github.com/Cvanshulll"
              target="_blank"
              rel="noopener noreferrer"
              className="btn contact-details"
            >
              <i className="fa-brands fa-github fa-beat"></i> GitHub
            </a>
            <a
              href="https://twitter.com/cvanshul"
              target="_blank"
              rel="noopener noreferrer"
              className="btn contact-details"
            >
              <i className="fa-brands fa-twitter fa-beat"></i> Twitter
            </a>
            <a
              href="mailto:cvanshul09@gmail.com"
              className="btn contact-details"
            >
              <i className="fa-solid fa-at fa-beat"></i> Send a mail
            </a>
            {/* <a href="tel:555-555-5555" className="btn contact-details">
            <i className="fas fa-mobile-alt"></i> Call me
          </a> */}
          </div>
        </div>
      </section>
      {/* <section className="col">
          <img src="./img.png" alt="iag" />
        </section> */}
    </>
  );
};

export default Intro;
