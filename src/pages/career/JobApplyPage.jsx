import { Link } from "react-router-dom";
import WeAreHiring from "../../assets/product_bb.jpg";
import JobApplicationForm from "../../components/JobApplicationForm";

function JobApplyPage() {
  return (
    <main>
      <section>
        {/* Career Banner starts */}
        <div className="card m-0 p-0 text-center">
          <div className="overflow-hidden">
            <img src={WeAreHiring} className="card-img-top" alt="banner" />
          </div>
          <div className="card-img-overlay d-flex justify-content-center align-items-center">
            <h1 className="card-title fs-1 text-light">Job Apply</h1>
          </div>
        </div>
        {/* Career banner ends  */}
        {/* BreadCrumb starts */}
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="career">Career</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                <Link to="career">Opportunity</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Apply
              </li>
            </ol>
          </nav>
          {/* BreadCrumb ends */}
          <ul className="nav nav-underline">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="">
                Application Form
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="https://buy.stripe.com/7sI16U9rkbOx5jy5kl"
              >
                Application Fee
              </Link>
            </li>
          </ul>
          <JobApplicationForm />
        </div>
      </section>
    </main>
  );
}

export default JobApplyPage;
