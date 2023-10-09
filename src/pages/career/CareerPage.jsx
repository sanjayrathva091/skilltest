import { Link } from "react-router-dom";
import WeAreHiring from "../../assets/product_bb.jpg";
import { AiTwotoneCalendar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { BiTargetLock } from "react-icons/bi";
import { jobListings } from "../../data";

function CareerPage() {
  return (
    <main>
      <section>
        {/* Career Banner starts */}
        <div className="card m-0 p-0 text-center">
          <div className="overflow-hidden">
            <img src={WeAreHiring} className="card-img-top" alt="banner" />
          </div>
          <div className="card-img-overlay d-flex justify-content-center align-items-center">
            <h1 className="card-title fs-1 text-light">Career</h1>
          </div>
        </div>
        {/* Career banner ends  */}
        {/* BreadCrumb starts */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="career">Career</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Opportunity
            </li>
          </ol>
        </nav>
        {/* BreadCrumb ends */}
        {/* Search forms starts */}
        <div className="container card border-0">
          <h2>Search Your Job</h2>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-1 col-md-4">
                <input
                  type="text"
                  className="form-control form-control-lg mb-3"
                  placeholder="Search Job title"
                />
              </div>

              <div className="col-sm-1 col-md-4">
                <select
                  className="form-select form-select-lg mb-3"
                  aria-label="Large select example"
                >
                  <option selected>Select Department</option>
                  <option value="Operation">Operation</option>
                  <option value="Accountant">Accountant</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>

              <div className="col-sm-1 col-md-4">
                <select
                  className="form-select form-select-lg mb-3"
                  aria-label="Large select example"
                >
                  <option selected>Select Location</option>
                  <option value="Vadodara">Vadodara</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Surat">Surat</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* Search forms ends */}
        <div className="container">
          <p>
            Do you have a high-quality product that's looking for a dedicated
            audience? At <em>KORONA Shopping Enterprise</em>, we believe in
            fostering valuable partnerships with suppliers to bring exceptional,
            yet affordable products to our discerning customers. We extend a
            warm invitation to suppliers who share our commitment to providing
            the very best to our shoppers. Become a part of our esteemed network
            of suppliers, where we've built successful, long-term partnerships
            that are both commercially satisfying and profitable. Please take a
            moment to fill out the form below, including your product details.
            Our dedicated team will promptly reach out to you, tailoring our
            collaboration to meet your unique requirements. Your success is our
            priority, and together, we can make a lasting impact in the world of
            retail.
          </p>
          <p>
            <b>Fields marked with * are mandatory.</b> We look forward to the
            opportunity to work closely with you and showcase your outstanding
            products at <em>KORONA Shopping Enterprise</em>.
          </p>
        </div>
        {/* Job list starts */}
        <div className="container mb-5">
          <div className="row">
            {jobListings.map(
              ({
                id,
                lastDate,
                numberOfPositions,
                jobTitle,
                keySkills,
                jobDescription,
                locations,
              }) => (
                <div key={id} className="col col-md-12 g-3">
                  <div className="card">
                    <div className="card-header d-flex flex-wrap gap-2">
                      <span className="d-flex align-items-center gap-2">
                        {<AiTwotoneCalendar size={20} />}Last Date: {lastDate}
                      </span>
                      <span className="d-flex align-items-center gap-2">
                        {<BsFillPersonFill size={20} />} {numberOfPositions}{" "}
                        Positions
                      </span>
                      <span className="d-flex align-items-center gap-2">
                        {<BiTargetLock size={20} />} {}
                      </span>
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{jobTitle}</h5>
                      <p className="m-0 p-0 mb-2">
                        <span className="m-0 p-0 badge bg-light fs-6 text-bg-light">
                          Key Skills
                        </span>
                      </p>
                      <div className="d-flex flex-wrap gap-2">
                        {keySkills.map((label, index) => (
                          <p
                            key={index}
                            className="m-0 badge text-bg-secondary"
                          >
                            {label}
                          </p>
                        ))}
                      </div>
                      <p className="card-text">{jobDescription.description}</p>
                      <p className="m-0 p-0 mb-2">
                        <span className="m-0 p-0 badge bg-light fs-6 text-bg-light">
                          Qualifications:
                        </span>
                        {` ${jobDescription.qualifications}`}
                      </p>
                      <p className="m-0 p-0 mb-2">
                        <span className="m-0 p-0 badge bg-light fs-6 text-bg-light">
                          Locations:
                        </span>
                        {locations.map((city, index) => (
                          <span key={index} className="px-2">
                            {city}
                          </span>
                        ))}
                      </p>
                      <div className="d-flex gap-2">
                        <Link to="apply" className="btn btn-primary">
                          Apply Now
                        </Link>
                        <Link to="more-details" className="btn btn-primary">
                          More Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        {/* Job list ends */}
      </section>
    </main>
  );
}

export default CareerPage;
