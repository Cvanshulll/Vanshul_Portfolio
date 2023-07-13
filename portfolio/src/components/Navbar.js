const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg " id="nav">
        {/* <!-- Navbar content --> */}
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="https://https://">
            Vanshul's Portfolio.
          </a> */}
          <div className=" navbar-brandwave-container mx-2 ">
            <div className="wave w1"></div>
            <div className="wave w2"></div>
            <div className="wave w3"></div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#intro"
                >
                  <i className="fa-solid fa-house"></i>
                </a>
              </li>

              <li className="nav-item ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#aboutus"
                >
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#experience"
                >
                  Experience
                </a>
              </li>

              <li className="resume nav-item">
                <a
                  className="nav-link"
                  href="https://drive.google.com/drive/folders/1Avm_FEGcfqq1q4-9Quyq93gBwyehxEWE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
