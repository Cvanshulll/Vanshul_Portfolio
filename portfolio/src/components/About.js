const About = () => {
  return (
    <>
      {/* <!-- Experience --> */}
      <section id="about">
        <div id="aboutus" className="container">
          <div className="row gx-5">
            <div className="col-lg-5 col-md-12">
              {/* <h4>About Me.</h4> */}
              <img
                src="../photos/tree.png"
                alt="tree_image"
                style={{ height: "90%" }}
              />
            </div>
            <div className="col demo22" style={{ textAlign: "left" }}>
              <h3 className="section-heading" style={{ textAlign: "left" }}>
                About Me.
              </h3>
              <p>
                I am a student of Mathematics and Scientific Computing at the
                National Institute of Technology Hamirpur. As a passionate
                programmer, I enjoy using my computer skills to solve problems.
                I am always eager to take on challenging tasks that allow me to
                learn and explore new technologies. With a strong drive for
                continuous growth and a dedication to finding innovative
                solutions, I am excited to contribute my knowledge and
                enthusiasm to meaningful projects. Join me on this journey as we
                navigate the world of software development and create impactful
                solutions together.
              </p>
              {/* <div className="row">
                <div className="col mt-2">
                  <h6 id="sub-title">C++, Python</h6>
                  <h4>Programming Languages</h4>
                </div>
                <div className="col mt-2">
                  <h6 id="sub-title">
                    HTML, CSS, JavaScript, React, Django, Git, RestAPI
                  </h6>
                  <h4>Technology Toolbox</h4>
                </div>
                <div className="col mt-2">
                  <h6 id="sub-title">
                    DSA, Operating Systems, Object-Oriented Programming (OOP),
                    SQL, DBMS
                  </h6>
                  <h4>Additional Technical Skills</h4>
                </div>
              </div>
              */}
            </div>
          </div>
        </div>

        {/* <!-- Work --> */}
        <div className="about-skill container pt-4 pb-5">
          <div className=" row border  text-center">
            <div className=" col-4 bg-light p-4">
              <h2>2+</h2>
              <p>Year of Experience</p>
            </div>
            <div className="col-4 p-4 bg-dark text-white">
              <h2>700+</h2>
              <p>Coding Questions Solved</p>
            </div>
            <div className="col-4 bg-light p-4">
              <h2>14+</h2>
              <p>Projects</p>
            </div>
          </div>
        </div>
        {/* <section>
        <div className="card ">
          <div className="card-header about">
            <h1>About Me</h1>
          </div>
          <div className="card-body ">
            
          </div>
        </div>
        <div className="card">
          {/* <div className="card-header">Quote</div> */}
        {/* <div className="card-body">
            
          </div>
        </div>
      </section> */}
      </section>
    </>
  );
};

export default About;
