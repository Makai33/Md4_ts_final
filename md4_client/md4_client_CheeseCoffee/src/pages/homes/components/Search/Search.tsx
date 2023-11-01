import { useState } from "react";
// import Button from 'react-bootstrap/Button';
import Offcanvas from "react-bootstrap/Offcanvas";
import "./search.scss";

type OffcanvasPlacement = "top" | "bottom" | "start" | "end";

interface OffcanvasExampleProps {
  name: string;
  placement: OffcanvasPlacement | undefined;
}
function OffCanvasExample({ name, placement }: OffcanvasExampleProps) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="nav-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={placement}
        style={{ padding: "5px" }}
      >
        <div className="page_top"></div>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="search_top">
            <div className="search_input">
              <input
                className="inputSearch"
                type="text"
                placeholder="What do you need?"
              />
              <i
                style={{ padding: "0 15px 0 0" }}
                className="fa-solid fa-magnifying-glass"
              ></i>
            </div>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="search_body">
          {/* <div className="search_categories">
            <h4>List Categories</h4>
          </div> */}
          <div
            // to="/addtocart"
            className="search_categories d-flex justify-content-between"
          >
            <img
              src="https://images.foody.vn/res/g31/307624/s400x400/894ca522-26bf-4aa9-8257-75237cf1-d57a4f99-230914095820.jpeg"
              alt="football"
            />
            <div className="d-flex product_item flex-column justify-content-between">
              <p>OVOCADO MILK TEA - TRÀ SỮA BƠ OLIVE</p>
              <p>55,000VND</p>
              <button className="btn btn-warning">
                <i className="fas fa-cart-plus align-self-end"></i> add to cart
              </button>
            </div>
          </div>
          <div
            // to="/addtocart"
            className="search_categories d-flex justify-content-between"
          >
            <img
              src="https://images.foody.vn/res/g31/307624/s400x400/8ed4ee61-8076-4879-a8ca-1304cfe1-02fccdbc-230922113229.jpeg"
              alt="football"
            />
            <div className="d-flex flex-column justify-content-between">
              <p>SALTED CREAM CAFFÈ - CÀ PHÊ KEM MUỐI</p>
              <p>55,000VND</p>
              <button className="btn btn-warning">
                <i className="fas fa-cart-plus align-self-end"></i> add to cart
              </button>
            </div>
          </div>
          <div
            // to="/addtocart"
            className="search_categories d-flex product_item justify-content-between"
          >
            <img
              src="https://images.foody.vn/res/g31/307624/s400x400/894ca522-26bf-4aa9-8257-75237cf1-d57a4f99-230914095820.jpeg"
              alt="football"
            />
            <div className="d-flex product_item flex-column justify-content-between">
              <p>OVOCADO MILK TEA - TRÀ SỮA BƠ OLIVE</p>
              <p>55,000VND</p>
              <button className="btn btn-warning">
                <i className="fas fa-cart-plus align-self-end"></i> add to cart
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Search() {
  return (
    <>
      <OffCanvasExample placement="top" name="top" />
    </>
  );
}
export default Search;
