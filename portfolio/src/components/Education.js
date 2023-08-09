import { Icon } from "@iconify/react";

const Education = () => {
  return (
    <>
      <div class="about container  mt-5">
        <div className="text-center">
          <h1>***</h1>
          <h2 className=" mb-5 section-heading">Education</h2>
          {/* <p>Sample Projects</p> */}
        </div>
        <figure class="">
          <hr />
          <blockquote class="blockquote">
            <p>
              Bachelor of Technology in <cite title="Source Title" />
              <b>Mathematics and Scientific Computing </b>
            </p>
          </blockquote>
          <figcaption class="blockquote-footer">
            <cite title="Source Title">
              National Institute of Technology, Hamirpur
            </cite>
          </figcaption>
          <div class="mx-3">
            <p>
              <span>
                <b>CourseWork: </b>
              </span>
              Data Structures and Algorithms, Object Oriented Programming,
              Operating Systems, DBMS, SQL, Soft Computing, Python, R{" "}
            </p>
          </div>
        </figure>
        <hr />
        <figure>
          <blockquote class="blockquote">
            <p>Himachal Pradesh Board of School Education</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            <cite title="Source Title">
              12th — Percentage:{" "}
              <mark>
                <b>91.2% </b>{" "}
              </mark>{" "}
              , 10th — Percentage:
              <mark>
                <b> 94.2%</b>
              </mark>
            </cite>
          </figcaption>
        </figure>

        <div class="container">
          <div class="container  skills px-3 d-none d-sm-block">
            <figure>
              <blockquote class="blockquote">
                <h2 class="py-4">Skill-Set</h2>
              </blockquote>
            </figure>
            <div class="row mt-3">
              <div class="col">
                <Icon icon="logos:html-5" width="80" height="80" />
              </div>
              <div class="col">
                <Icon icon="logos:css-3" width="80" height="80" />
              </div>
              <div class="col">
                <Icon
                  icon="devicon:bootstrap-wordmark"
                  width="80"
                  height="80"
                />{" "}
              </div>
              <div class="col">
                <Icon
                  icon="devicon:djangorest-wordmark"
                  width="80"
                  height="80"
                />
              </div>
              <div class="col">
                <Icon icon="logos:javascript" width="70" height="70" />
              </div>
            </div>

            <div class="row mt-3">
              <div class="col">
                <Icon icon="devicon:python-wordmark" width="80" height="80" />{" "}
              </div>
              <div class="col">
                <Icon icon="devicon:github" width="80" height="80" />{" "}
              </div>
              <div class="col">
                <Icon icon="skill-icons:django" width="80" height="80" />{" "}
              </div>
              <div class="col">
                <Icon icon="skill-icons:react-dark" width="80" height="80" />{" "}
              </div>
              <div class="col">
                <Icon icon="logos:material-ui" width="70" height="70" />{" "}
              </div>
            </div>

            <div class="row mt-3">
              <div class="col">
                <Icon icon="devicon:numpy" width="70" height="70" />{" "}
              </div>
              <div class="col">
                <Icon icon="devicon:matplotlib" width="80" height="80" />{" "}
              </div>
              <div class="col">
                <Icon icon="devicon:pandas-wordmark" width="80" height="80" />{" "}
              </div>
              <div class="col">
                <Icon icon="devicon:git" width="80" height="80" />
              </div>
              <div class="col">
                <Icon icon="logos:r-lang" width="80" height="80" />{" "}
              </div>
            </div>

            <div class="row mt-3">
              <div class="col">
                <Icon icon="skill-icons:mysql-dark" width="70" height="70" />{" "}
              </div>
              <div class="col">
                <Icon
                  icon="vscode-icons:file-type-matlab"
                  width="80"
                  height="80"
                />{" "}
              </div>
              <div class="col">
                <Icon icon="devicon:rstudio" width="80" height="80" />{" "}
              </div>
              <div class="col">
                <Icon icon="devicon:spss" width="80" height="80" />{" "}
              </div>
              <div class="col">
                <Icon icon="logos:react-router" width="80" height="80" />{" "}
              </div>
            </div>

            <div class="row mt-3">
              <div class="col">
                <Icon icon="logos:codepen-icon" width="80" height="80" />
              </div>
              <div class="col">
                <Icon icon="devicon:vercel-wordmark" width="80" height="80" />
              </div>
              <div class="col">
                <Icon icon="logos:codesandbox-icon" width="70" height="70" />
              </div>
              <div class="col">
                <Icon icon="devicon:canva" width="80" height="80" />{" "}
              </div>
              <div class="col">
                <Icon icon="logos:netlify" width="90" height="90" />{" "}
              </div>
              {/* <div class="col">
                <Icon icon="logos:notion" width="80" height="80" />{" "}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
