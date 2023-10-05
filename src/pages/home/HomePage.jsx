import Carousel from "../../components/commons/Carousel";
import { BiSolidOffer } from "react-icons/bi";
import {
  MdVerifiedUser,
  MdOutlineSentimentVerySatisfied,
} from "react-icons/md";
import shoppingmall from "../../assets/supermarket.jpg";
import movieplex from "../../assets/movieplex.jpg";

function HomePage() {
  return (
    <main>
      <section>
        {<Carousel />}
        <div class="container text-center my-5">
          <div class="row">
            <div class="col">
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
            <div class="col">
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
            <div class="col">
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

      <section>
        <p className="text-center fs-4 text-warning">
          <small>We are working in all below segments</small>
        </p>
        <h1 className="text-center text-dark fw-bold">Our Group Companies</h1>

        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="card">
                <img
                  src={shoppingmall}
                  class="card-img-top"
                  alt="shoppingmall"
                />
                <div class="card-body">
                  <h5 class="card-title">Korona Shopping Mall</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={movieplex} class="card-img-top" alt="shoppingmall" />
                <div class="card-body">
                  <h5 class="card-title">Galeria Movieplex</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img
                  src={shoppingmall}
                  class="card-img-top"
                  alt="shoppingmall"
                />
                <div class="card-body">
                  <h5 class="card-title">Kielce Construction</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
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
