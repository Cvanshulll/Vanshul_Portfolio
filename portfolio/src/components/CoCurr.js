import extraData from "./extraData";
const CoCurr = () => {
  return (
    <>
      <section className="co-curr extra-section ">
        <div className="text-center">
          <h1>***</h1>
          <h2 className=" mb-5 section-heading">Co-curricular</h2>
          {/* <p>Sample Projects</p> */}
        </div>
        <div className="row m-3 text-center">
          {extraData.map((item) => {
            return (
              <>
                <div className="extra-item col-sm ">
                  <h4>{item.name}</h4>
                  <div>
                    {item.details.map((e) => (
                      <li> {e.info} </li>
                    ))}
                  </div>
                  <strong>
                    <a
                      style={{ color: "#e94d35" }}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link
                    </a>
                  </strong>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CoCurr;
