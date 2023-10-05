import { Link } from "react-router-dom";
import AboutPageBanner from "../../assets/about-page.jpg";

function AboutPage() {
  return (
    <section>
      <div className="card m-0 p-0 text-center">
        <div
          className="overflow-hidden"
          style={{
            height: "200px",
            display: "grid",
          }}
        >
          <img
            src={AboutPageBanner}
            className="card-img-top"
            alt="banner"
            style={{
              objectFit: "contain",
              placeItem: "center",
            }}
          />
        </div>
        <div
          className="card-img-overlay d-flex"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h5 className="card-title fs-1 text-light">About Us</h5>
        </div>
      </div>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="#">About</Link>
          </li>
        </ol>
      </nav>

      <div>
        At Korona Shopping Mall, we deliver happiness through quality products
        at affordable prices. We exist to make your shopping life easy. Your
        one-stop destination for groceries, apparel, footwear, household,
        furniture, and daily needs, with 25,000+ products at convenient
        locations in Vadodara, Mehsana, Halol, Godhra, Surat, Visnagar, and
        Patan since 1988. Family-operated, customer satisfaction and product
        availability are our priorities. Enjoy great value, variety, and home
        delivery. Expect a seamless shopping experience with high-quality
        products. Thank you for choosing us for your shopping needs. We look
        forward to serving you."
      </div>
    </section>
  );
}

export default AboutPage;
