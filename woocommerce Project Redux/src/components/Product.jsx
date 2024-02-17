import React, { useState, useEffect } from 'react'
import { fetchProducts } from '../store/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../store/cartSlice'
import "./component.css"
import { STATUSES } from '../store/productSlice'

function Product() {
    // const [product, setProduct] = useState([]);
    const dispatch = useDispatch()

    const handleAdd = (product) => {
        dispatch(add(product));
        console.log(product)
    }

    const { data: product, status } = useSelector(state => state.product);
    // console.log(products,"geogeo")
    // setProduct(products)
    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     try {
        //         const res = await fetch("https://fakestoreapi.com/products");
        //         if (!res.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //         const data = await res.json();
        //         setProduct(data);
        //     } catch (error) {
        //         console.error('Error fetching products:', error);
        //     }
        // }
        // fetchProducts();
    }, []);

    if (status === STATUSES.LOADING) {
        return (
            <>
                <div className="waiting-container">
                    <div className="waiting-overlay">
                        <div className="waiting-message">
                            Please Wait...
                            <div className="waiting-spinner">
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className='productsWrapper' >
            {product.length > 0 ? (
                product.map((productItem) => (
                    <div className='card' key={productItem.id}>
                        <img className='p-1 cover' src={productItem.image} alt="" />
                        <h4 className="product-title">{productItem.title}</h4>
                        <h5 className="product-price">{productItem.price}</h5>
                        <button className='btn btn-primary' onClick={() => handleAdd(productItem)}>Add To Cart</button>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Product;
