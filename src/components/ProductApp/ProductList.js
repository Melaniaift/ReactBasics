import { useState } from "react";
import './ProductList.css'
import { useFetch } from "../hooks/useFetch";

export const ProductList = () => {
    const [url, setUrl] = useState("http://localhost:8000/products")
    const { data: products } = useFetch(url);

    return (<>
        <div className="button-group">
            <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
            <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock</button>
        </div>
        <section>
            {products && products.map((product) => (
                <div className="card" key={product.id}>
                    <p className="id">{product.name}</p>
                    <p className="info">
                        <span>${product.price}</span>
                        <span className={product.in_stock ? 'instock' : 'unavailable'}>{product.in_stock ? 'In Stock' : 'Unavailable'}</span>
                    </p>
                </div>
            ))}
        </section>
    </>
    )
}
