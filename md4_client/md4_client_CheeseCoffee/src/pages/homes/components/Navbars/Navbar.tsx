// import { Carousel } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../Search/Search";
import "./navbar.scss";
import DropdownLogout from "../Dropdown/DropdownLogout";
import Cart from "../Cart/Cart";

function Navbar() {
  const [banners, setBanners] = useState([
    {
      id: 1,
      title: "Download the app to access everything Nike. Get Your Great",
    },
    {
      id: 2,
      title: "Free shipping. Get discount 50% for nike vip member",
    },
  ]);
  const navigate = useNavigate();
  return (
    <nav>
      {/* <div className="carousel-container">
        <Carousel
          autoplay
          autoplaySpeed={2000}
          effect={"fade"}
          dots={false}
          dotPosition={"bottom"}
        >
          {banners.map((banner, index) => (
            <div className="items" key={banner.id + index}>
              <p className="title">{banner.title}</p>
            </div>
          ))}
        </Carousel>
      </div> */}
      <div className="nav-container">
        <div className="logo" onClick={() => navigate("/")}>
          <img
            src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/312267442_1733706610324569_8415950618405057213_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wawPsgabNBQAX9dszI9&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfAUqAk2iKIhyKcoLABvsCl_3WUdjAL118YxnkBSOC01_g&oe=654496C8"
            alt="logo"
            loading="lazy"
          />
        </div>
        {/* <div className="middle-nav">
          <span>New</span>
          <span>Coffee</span>
          <span>Fruit Tea</span>
          <span>Milktea</span>
          <span>Cake</span>
        </div> */}
        <div className="right-nav">
          <span className="right-nav-icon">
            <Search />
          </span>
          <span className="right-nav-icon">
            <DropdownLogout />
          </span>
          <span className="right-nav-icon cart-icon">
            <Cart />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
