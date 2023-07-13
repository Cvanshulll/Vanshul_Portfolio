// import Certificate from "./Certificate";
import ExpData from "./ExpData";

// export ExpData from "./ExpData.js";

const Experience = () => {
  return (
    <>
      {/* <!-- Project --> */}
      <div id="experience" className="container">
        <div className="headings text-center">
          <h1>***</h1>
          <h2 className=" mb-5 section-heading">Experience</h2>
          {/* <p>Sample Projects</p> */}
        </div>

        <div className="column">
          {ExpData.map((item) => {
            return (
              <>
                <div className="experience-box p-5 my-4 demo-effect">
                  <div className="row">
                    <div className="col">
                      <h3>{item.title}</h3>
                      <p
                        style={{
                          fontWeight: "450"
                        }}
                      >
                        {item.company}
                      </p>
                      <ul>
                        {item.detail.map((e) => (
                          <li> {e.info} </li>
                        ))}
                      </ul>
                      <div className="project-links">
                        <div
                          style={{
                            fontWeight: "450"
                          }}
                        >
                          <a
                            href={item.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {" "}
                            &lt; Code /&gt;
                          </a>
                        </div>
                        <div
                          style={{
                            fontWeight: "450"
                          }}
                        >
                          {/* <a href={item.demoLink}>&lt; Demo /&gt;</a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Experience;
