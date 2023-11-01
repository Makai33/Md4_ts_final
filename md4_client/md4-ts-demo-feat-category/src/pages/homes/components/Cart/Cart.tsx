import { useState } from "react";
// import Button from 'react-bootstrap/Button';
import Offcanvas from "react-bootstrap/Offcanvas";
import { Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";
import "./cart.scss";

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button variant="primary" onClick={handleShow} className="nav-icon">
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-warning">Your cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="cart-body">
          {/* <p>
            <img
              style={{ width: "50px" }}
              src="https://media.istockphoto.com/id/1312921508/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-xe-t%E1%BA%A3i-giao-h%C3%A0ng-mi%E1%BB%85n-ph%C3%AD-v%E1%BA%ADn-chuy%E1%BB%83n-nhanh-thi%E1%BA%BFt-k%E1%BA%BF-cho-trang-web-v%C3%A0-%E1%BB%A9ng-d%E1%BB%A5ng-di.jpg?s=612x612&w=0&k=20&c=OOMkIbb-cGWGZXm39URW6CmUpcOYLOIrt7yi1j9e_Sk="
              alt="freeShipping"
            />
            Congrat! You get free shipping!
          </p> */}
          <div className="cart-products">
            <div className="cart-product">
              <div className="cart-product-img">
                <img
                  style={{ width: "70px" }}
                  src="https://images.foody.vn/res/g31/307624/s400x400/894ca522-26bf-4aa9-8257-75237cf1-d57a4f99-230914095820.jpeg"
                  alt="product1"
                />
              </div>
              <div className="cart-product-infor">
                <h6 className="cart-product-name">
                  OVOCADO MILK TEA - TRÀ SỮA BƠ OLIVE
                </h6>
                <p className="cart-product-price">55,000</p>
                <p className="cart-product-quantity-title">QUANTITY</p>
                <div className="cart-product-quantity">
                  <button>
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <button>
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                {/* <div>
                  <p>Frequency</p>
                  <select name="" id="">
                    <option>1 week ship every</option>
                    <option>2 week </option>
                    <option>3 week </option>
                    <option>4 week </option>
                  </select>
                </div> */}
              </div>
              <div className="delete-button">
                <Popconfirm
                  title="Delete Cart Item?"
                  description="Are you sure to delete this item?"
                  /*     onConfirm={confirm}
                                    onCancel={cancel}*/
                  okText="Yes"
                  cancelText="No"
                >
                  <button>
                    <span className="material-symbols-outlined">close</span>
                  </button>
                </Popconfirm>
              </div>
            </div>
          </div>

          <div className="cart-footer">
            <p className="cart-total">
              <span className="cart-total-label">Subtotal: </span>
              <span className="cart-total-value">0đ</span>
            </p>
            <button
              className="checkoutButton"
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Cart() {
  return (
    <>
      <OffCanvasExample placement="end" name="end" />
    </>
  );
}

export default Cart;
