import firstslide from "../../assets/architecture-906737_1280.jpg";
import secondslide from "../../assets/shoes-3316260_1280.jpg";
import thirdslide from "../../assets/flea-market-5002452_1280.jpg";

function Carousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner h-100">
        <div className="carousel-item active">
          <img src={firstslide} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="fs-1">Discover the Korona Shopping Experience</h5>
            <p className="fs-5">
              Explore the Korona Shopping Experience: Where Convenience Meets
              Quality!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={secondslide} className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="fs-1">Bag Bliss: Shop for School</h5>
            <p className="fs-5">
              Bag Bliss: Your One-Stop Shop for School Bags and Accessories!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={thirdslide} className="d-block w-100" alt="cheesebanner" />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="fs-1">Winter Wardrobe Essentials</h5>
            <p className="fs-5">
              Winter wardrobe essentials include warm coats, cozy sweaters,
              insulated boots, scarves, and gloves.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
