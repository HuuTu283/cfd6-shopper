import { useEffect, useState } from "react";
import ProductApi from "service/productApi";
import LeftShop from "./components/LeftShop";
import RightShop from './components/RightShop';


export default function ShopPage() {

    let [category, setCategory] = useState([])
    let [product, setProduct] = useState([])
    useEffect(() => {
        ProductApi.category()
            .then((res) => {
                setCategory(res)
            })
    }, [])

    useEffect(() => {
        ProductApi.product()
            .then((res) => {
                setProduct(res)
                console.log(res)
            })

    }, [])


    return (
        <>
            {/* CONTENT */}
            <section className="py-11" >
                <div className="container">
                    <div className="row">

                        <LeftShop category={category} />
                        <RightShop product={product} />
                    </div>
                </div>
            </section>
        </>
    )
}
