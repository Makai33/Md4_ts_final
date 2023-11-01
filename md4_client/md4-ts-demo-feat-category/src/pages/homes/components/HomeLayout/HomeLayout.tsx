export default function HomeLayout() {
  return (
    <>
      {/* Carousel wrapper */}
      <div
        id="carouselBasicExample"
        className="carousel slide carousel-fade"
        data-mdb-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        {/* Inner */}
        <div className="carousel-inner">
          {/* Single item */}
          <div className="carousel-item active">
            <img
              src="https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/379999684_707859818036641_5333489429331845994_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9BTmIlB-agoAX8gz80a&_nc_oc=AQkTTbybx4nRJT4TzlICo85pHDfINa4pMjcATtGF3DMwGCrYn2DR0xmZim0VKAtpicg&_nc_ht=scontent.fsgn2-10.fna&oh=00_AfAfXy77prQZA9lX8q01343hAgKFKlobUDP20zr4ZcCLeQ&oe=6542A2ED"
              className="d-block w-100"
              alt="CheeseQuan1"
            />
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div> */}
          </div>
          {/* Single item */}
          <div className="carousel-item">
            <img
              src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/354521593_653330856822871_5182743587779714989_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vX-3cgDt_w0AX8z1nkg&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAFXLifW7gJk9n7pRNY2xoqoVXyeGcnC2PaK45yBthqEQ&oe=6543AA2E"
              className="d-block w-100"
              alt="Canyon at Nigh"
            />
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div> */}
          </div>
          {/* Single item */}
          <div className="carousel-item">
            <img
              src="https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/367071244_687250600097563_2850512828186736171_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FWoqfBhHgG4AX91Ix_w&_nc_ht=scontent.fsgn2-10.fna&oh=00_AfAJTaMAs-JZ1mBX2il3zVZrt0Tcju17cfyxC3qjaU8ZLQ&oe=65429A8C"
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
            />
            {/* <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div> */}
          </div>
        </div>
        {/* Inner */}
        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Carousel wrapper */}
    </>
  );
}
