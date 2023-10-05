function AppFooter() {
  return (
    <footer className="bg-body-secondary pt-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src={"https://bansalsupermarket.com/upload/home/android_icon.png"}
              width="200"
              alt="playstore"
            />
            <img
              src={"https://bansalsupermarket.com/upload/home/apple_icon.png"}
              className="my-3"
              width="200"
              alt="playstore"
            />

            <button className="btn btn-primary">Subscribe</button>
          </div>
          {Object.entries(footerList).map(([keey, val]) => (
            <div key={keey} className="col">
              <h3>{keey.split("_").join(" ")}</h3>
              <ul>
                {val.map((label, index) => (
                  <li key={index} className="list-group-item my-1">
                    {label}
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
    "About Us",
    "Vision / Mission",
    "Why Choose Us",
    "Media Announcement",
    "Careers",
    "Contact Us",
  ],
  Partner_With_Us: [
    "Suppliers / Vendors",
    "Property Owners / Landlord",
    "Supplier for Capital Goods",
  ],

  Feedback: [
    "Feedback From Customers",
    "Feedback From Suppliers",
    "Feedback From Employees",
    "Feedback From Others",
  ],
};
