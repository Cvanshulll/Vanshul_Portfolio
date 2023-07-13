import Data from "./Projects.js";

const Project = () => {
  return (
    <>
      <section id="projects" className="projects-section">
        <div className="text-center">
          <h1>***</h1>
          <h2 className=" mb-5 section-heading">Projects</h2>
          {/* <p>Sample Projects</p> */}
        </div>
        <div className="project-item row text-center">
          {Data.map((item) => {
            return (
              <>
                <div className="item col-md-4 ">
                  <div>
                    <img src={item.image} alt="gg" />
                  </div>
                  <p>
                    <b>{item.name}</b>
                  </p>
                  <p>
                    {item.skills.map((e) => (
                      <span
                        style={{
                          backgroundColor: "lightgrey",
                          margin: "2px",
                          padding: "2px"
                        }}
                      >
                        {e.info}
                      </span>
                    ))}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between"
                    }}
                  >
                    <a
                      href={item.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>&lt; Github /&gt;</strong>
                    </a>
                    <a
                      href={item.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>&lt; Demo /&gt;</strong>
                    </a>
                  </div>
                  <p>{item.details}</p>
                </div>
              </>
            );
          })}
        </div>
        <div class="text-center">
          <p>
            Show more <br />{" "}
            <strong>
              <a
                href="https://github.com/Cvanshulll"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>{" "}
              |{" "}
              <a
                href="https://codepen.io/cvanshulll/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codepen
              </a>
            </strong>
          </p>
        </div>
      </section>
    </>
  );
};

export default Project;
