import Carousel from "../../components/commons/Carousel";
import { Link } from "react-router-dom";
import { BiSolidOffer } from "react-icons/bi";
import {
  MdVerifiedUser,
  MdOutlineSentimentVerySatisfied,
} from "react-icons/md";
import shoppingmall from "../../assets/supermarket.jpg";
import movieplex from "../../assets/movieplex.jpg";
import deal1 from "../../assets/deal1.jpg";
import deal2 from "../../assets/deal2.png";
import deal3 from "../../assets/deal3.png";

function HomePage() {
  return (
    <main>
      <section>
        {<Carousel />}
        <div className="container text-center my-5">
          <div className="row">
            <div className="col">
              <div className="card mb-3">
                <div className="row g-0 align-items-center">
                  <div className="col-md-4">
                    <BiSolidOffer size={75} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Best Deals On Top Brands</h5>
                      <p className="card-text">
                        Discover Min 6% upto 70% Discount!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3">
                <div className="row g-0 align-items-center">
                  <div className="col-md-4">
                    <MdVerifiedUser size={75} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Quality Assurance</h5>
                      <p className="card-text">
                        Competitive Prices on Premium Quality assured Products
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-3">
                <div className="row g-0 align-items-center">
                  <div className="col-md-4">
                    <MdOutlineSentimentVerySatisfied size={75} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Customer Satisfaction</h5>
                      <p className="card-text">Your Happiness, Our Priority</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 mb-5">
        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-1 g-4">
          <div className="col">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={deal1}
                    className="d-block w-100 rounded"
                    alt="slide1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={deal2}
                    className="d-block w-100 rounded"
                    alt="slide2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={deal3}
                    className="d-block w-100 rounded"
                    alt="slide3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={deal2}
                    className="d-block w-100 rounded"
                    alt="slide1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={deal3}
                    className="d-block w-100 rounded"
                    alt="slide2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={deal1}
                    className="d-block w-100 rounded"
                    alt="slide3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={deal3}
                    className="d-block w-100 rounded"
                    alt="slide1"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={deal1}
                    className="d-block w-100 rounded"
                    alt="slide2"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={deal2}
                    className="d-block w-100 rounded"
                    alt="slide3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5">
        <p className="text-center fs-4 text-warning">
          <small>We are working in all below segments</small>
        </p>
        <h1 className="text-center text-dark fw-bold">Our Group Companies</h1>

        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="card">
                <img
                  src={shoppingmall}
                  className="card-img-top"
                  alt="shoppingmall"
                />
                <div className="card-body">
                  <h5 className="card-title">Korona Shopping Enterprise</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={movieplex}
                  className="card-img-top"
                  alt="shoppingmall"
                />
                <div className="card-body">
                  <h5 className="card-title">Galeria Movieplex</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={shoppingmall}
                  className="card-img-top"
                  alt="shoppingmall"
                />
                <div className="card-body">
                  <h5 className="card-title">Kielce Construction</h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <Link to="#" className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="my-5">
          <p className="text-center fs-4 text-warning">
            <small>Brands we are dealing with</small>
          </p>
          <h1 className="text-center text-dark fw-bold">
            Top Brands Associated With us!
          </h1>
        </div>

        <div className="container my-5">
          <div className="row">
            {brandList.map(({ logo, id }, index) => (
              <div key={id} className="col align-items-center">
                <img
                  src={logo}
                  width={100}
                  height={100}
                  alt={`slide${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;

const brandList = [
  {
    id: 1,
    logo: "https://bansalsupermarket.com/upload/home/brands/brand_2.png",
  },
  {
    id: 2,
    logo: "https://bansalsupermarket.com/upload/home/brands/brand_5.png",
  },
  {
    id: 3,
    logo: "https://bansalsupermarket.com/upload/home/brands/brand_1.png",
  },
  {
    id: 4,
    logo: "https://bansalsupermarket.com/upload/home/brands/brand_3.png",
  },
  {
    id: 5,
    logo: "https://bansalsupermarket.com/upload/home/brands/brand_4.png",
  },
];
