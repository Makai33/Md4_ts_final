import { StoreType } from "@/stores";
// import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./homeLayout.scss";

function HomeLayout() {
  // const [show, setShow] = useState(false);
  const navigate = useNavigate();
  // const handleClose = () => setShow(false);
  const categoryStore = useSelector((store: StoreType) => store.categoryStore);

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
              src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/379999684_707859818036641_5333489429331845994_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=JlVS7BkKrHwAX_LsxQq&_nc_oc=AQkD9Oilc9OoM-1UJSuIEGvZKVIyilfM7h5npqsGU9TKX-r4Y8hOKznZB1U0xu-VcrM&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfC0OjbSi7ttROtdh_8IgwGFE-S_0DPS_hF9Y8oXGh7UmA&oe=654891AD"
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
              src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/356863635_660170366138920_2595602435113914012_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Iwl6qGWAL0QAX8dfaE0&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfD8FBRrExtEGrBGGt3ILRwudgIq4-9GxkcLlr4C008Tsw&oe=6548A3C1"
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
              src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/322413311_1516190348905727_6146514292928922769_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=MyssA_ZkZWUAX_tDeqX&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfChDDa3gmOMP5zsZSmGG2tg0DQLRNIOWtcKEj1gbd0vdw&oe=65495D53"
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
      <div className="search_categories">
        <h4>List Categories</h4>
        <div className="category_list">
          {categoryStore.data?.map((category: any, index: number) => (
            <div
              className="category_card"
              key={Math.random() * Date.now()}
              onClick={() => {
                navigate(`/collections/${category.id}`);
                handleClose();
              }}
            >
              <div className="category_card_item">
                <img src={category.avatar} alt="" />
              </div>
              <p>{category.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default HomeLayout;
