
import ProductItem from '../components/ProductItem'
import './ProductScreen.scss'
import React, {useEffect, useState} from 'react';
import Loader from '../UI/Loader'
import {getProducts} from '../Backend/Sheets';


export default function ProductsScreen() {


    const [products, setProducts] = useState();
    const [loading, setLoading] =useState(true);
    
	useEffect(() => {
		getProducts().then((result) => {

            //setProducts(result.filter(product => product.stock!="no"));
            setProducts(result);
            setLoading(false);
        })

	}, []);



    return (

        <div className="product_list">
            {loading ? <Loader /> : <ProductItem className="list" products={products} loading={loading} />}
        </div>

    )
}
