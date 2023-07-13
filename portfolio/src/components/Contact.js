const Contact = () => {
  return (
    <>
      <section id="contact" className="text-center">
        {/* <!-- START CONTACT SECTION --> */}
        <section className="contact-section">
          <div className="contact-section-header">
            <h2>Let's work together...</h2>
            <p>Discuss a Project or Just want to say Hii? Contact Me.</p>
          </div>
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
        </section>
      </section>

      {/* <!-- START FOOTER SECTION --> */}
      <footer
        className="text-center"
        style={{
          marginTop: "10px",
          borderTop: "1px solid rgb(229, 229, 228)",
          fontSize: "12px",
          padding: " 0px 5px"
        }}
      >
        <p>Desinged with ❤ by Vanshul | Copyright © All rights reserved</p>
      </footer>

      {/* <!-- END FOOTER SECTION --> */}
    </>
  );
};

export default Contact;
