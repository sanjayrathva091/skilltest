import { Link } from "react-router-dom";

function AppFooter() {
  return (
    <footer className="bg-body-secondary pt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <img
              src={"https://bansalsupermarket.com/upload/home/android_icon.png"}
              width="200"
              alt="playstore"
            />
            <img
              src={"https://bansalsupermarket.com/upload/home/apple_icon.png"}
              className="d-block my-3"
              width="200"
              alt="playstore"
            />

            <button className="btn btn-primary d-block">Subscribe</button>
          </div>
          {Object.entries(footerList).map(([keey, val]) => (
            <div key={keey} className="col-12 col-md-6 col-lg-3">
              <h3>{keey.split("_").join(" ")}</h3>
              <ul>
                {val.map(({ label, link }, index) => (
                  <li key={index} className="list-group-item my-1">
                    <Link
                      to={link}
                      className="link-dark link-underline-opacity-0"
                    >
                      {" "}
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="row text-center">
          <p>
            <small>
              Copyrights@2020 All rights reserved by Korona@Shopping mall, India
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;

const footerList = {
  Quick_Links: [
    { label: "About Us", link: "about" },
    { label: "Vision / Mission", link: "about" },
    { label: "Why Choose Us", link: "about" },
    { label: "Media Announcement", link: "#" },
    { label: "Careers", link: "career" },
    { label: "Contact Us", link: "contact" },
  ],
  Partner_With_Us: [
    { label: "Suppliers / Vendors", link: "#" },
    { label: "Property Owners / Landlord", link: "#" },
    { label: "Supplier for Capital Goods", link: "#" },
  ],

  Feedback: [
    { label: "Feedback From Customers", link: "#" },
    { label: "Feedback From Suppliers", link: "#" },
    { label: "Feedback From Employees", link: "#" },
    { label: "Feedback From Others", link: "#" },
  ],
};
