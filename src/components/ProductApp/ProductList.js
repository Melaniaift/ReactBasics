import { useEffect, useState } from "react";
import './ProductList.css'

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [url, setUrl] = useState("http://localhost:8000/products")
    const [counter, setCounter] = useState(0)

    //infinite loop
    // fetch("http://localhost:8000/products")
    //     .then(response => response.json())
    //     .then(data => setProducts(data));

    // to avoid side effects, you can try useEffect function
    // if between [] is a variable and it is changed, then it will re-execute this function
    // if there is no dependency, then the fetch will be executed for the first time entering the page
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [url]);

    useEffect(() => {
        console.error(counter);
    }, [counter]);

    return (<>

        <div className="button-group">
            <button onClick={() => setCounter(counter + 1)}>{counter}</button>
            <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
            <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock</button>
        </div>
        <section>


            {products.map((product) => (
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
