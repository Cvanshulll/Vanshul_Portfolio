const Award = () => {
  return (
    <>
      <section>
        <div className="text-center">
          <h1>***</h1>
          <h3 className=" mb-5 section-heading">Awards and Achievements</h3>
          {/* <p>Sample Projects</p> */}
        </div>
        <div className="award-section">
          <ul>
            <li>
              <i>Cleared</i> Ideation phase and got selected in{" "}
              <b>Electrothon</b> 3.0
            </li>
            <li>
              Participated in Electrothon organized by NITH, cleared Ideology
              phase. Built a front-end of the website using <b>Bootstrap</b> and
              <b> Django</b>.
            </li>
            <li>
              Participated in 4-day-long event Codigo and <i>Built a website</i>{" "}
              to list all the clubs & societies of our college.{" "}
              <b>
                <a
                  href="https://cvanshulll.github.io/socialise/
                    "
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#e94d35" }}
                >
                  LINK
                </a>
              </b>
            </li>
          </ul>
        </div>

        <div className="certi">
          <div
            id="carouselExampleDark"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className=" carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <img
                  src="https://cvanshulll.github.io/Vanshul-s_Portfolio/Images/Coursera%20TYGQVJQDLWLB_page-0001.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                {/* <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div> */}
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="https://cvanshulll.github.io/Vanshul-s_Portfolio/Images/Z2iIy3R_page-0001.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                {/* <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div> */}
              </div>
              <div className="carousel-item">
                <img
                  src="https://cvanshulll.github.io/Vanshul-s_Portfolio/Images/free.jpeg"
                  className="d-block w-100"
                  alt="..."
                />
                {/* <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                </div> */}
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Award;
