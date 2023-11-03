import Offcanvas from "react-bootstrap/Offcanvas";
import "./search.scss";
import { useState } from "react";
import api from "@/services/api";
import { useNavigate } from "react-router-dom";
import { StoreType } from "@/stores";
import { useSelector } from "react-redux";

type OffcanvasPlacement = "top" | "bottom" | "start" | "end";

interface OffcanvasExampleProps {
  name: string;
  placement: OffcanvasPlacement | undefined;
}

interface Product {
  id: string;
  name: string;
  avatar: string;
  price: number;
  des: string;
  categoryId: string;
  productPictures: {
    id: string;
    path: string;
  }[];
}

function OffCanvasExample({ name, placement }: OffcanvasExampleProps) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [searchStatus, setSearchStatus] = useState(false);
  const [searchData, setSearchData] = useState<Product[]>([]);

  const categoryStore = useSelector((store: StoreType) => store.categoryStore);

  let timeOut: any;
  function search(e: any) {
    clearTimeout(timeOut);
    if (e.target.value == "") {
      setSearchData([]);
      return;
    }
    timeOut = setTimeout(async () => {
      //  call api
      try {
        setSearchStatus(true);
        if (searchStatus) {
          // return;
        }
        let result = await api.productApi.search(e.target.value);
        if (result.status == 200) {
          // sau 1.5s set lai data & tat loading
          // setTimeout(() => {
          //   setSearchStatus(false);
          // console.log("res", result.data.data);
          setSearchData(result.data.data);
          // }, 1500);
        } else {
          // failed
        }
        setSearchStatus(false);
      } catch (err) {
        console.log("loi call api search");
      }
    }, 600);
  }

  return (
    <>
      <button onClick={handleShow} className="nav-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={placement}
        // style={{ padding: "5px" }}
      >
        <div className="page_top"></div>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="search_top">
            <div className="search_input">
              <i
                style={{ padding: "0 15px 0 0" }}
                className="fa-solid fa-magnifying-glass"
              ></i>
              <input
                className="inputSearch"
                type="text"
                placeholder="What do you need?"
                onChange={(e) => search(e)}
              />
            </div>{" "}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="search_body">
          {/* <div className="search_categories">
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
          </div> */}
          {/* <h4>.....................</h4> */}
          <h4>List Products</h4>
          <div className="search_products_list">
            {searchData?.map((product, index) => (
              <div className="search_products_card" key={product.id}>
                <div className="search_products_item">
                  <img
                    src={product.avatar}
                    alt=""
                    onClick={() => {
                      navigate(`/products/${product.id}`);
                      handleClose();
                    }}
                  />
                </div>

                <div className="name_item_search">{product.name}</div>
              </div>
            ))}
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
