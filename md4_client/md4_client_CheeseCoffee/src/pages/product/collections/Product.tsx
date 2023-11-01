
import './product.scss'
import api from '@/services/api'
import { useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function Product() {
    const { categoryId} = useParams()
    const [products, setProducts] = useState([])
    console.log("products: ", products)
    useEffect(() => {
        if (categoryId) {
            api.productApi.findByCategory(categoryId)
                .then((res: any) => {
                    if(res.status == 200) {
                        setProducts(res.data.data)
                    }
                })
                .catch((err: string) => {
                    console.log(err)
                })
        }
    }, [])
    return (
        <div className="products-container">
            <div className="collection-navigation">

            </div>
            <div className="product-items">
                <div className="product-item">
                    <div className="product-item-image">
                        <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/93d1d751-84ff-41ab-b15c-cf68eb417682/jordan-nu-retro-1-low-shoes-8294mJ.png" alt="product-image"/>
                    </div>
                    <div className="product-item-content">
                        <h3>Product Name</h3>
                        <p className="product-item-price">500000</p>
                    </div>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
