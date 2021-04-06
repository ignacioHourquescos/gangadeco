
import ProductItem from '../components/ProductItem'
import './ProductScreen.scss'
import React, {useEffect, useState} from 'react';
import Loader from '../UI/Loader'
import {getProducts} from '../Backend/Sheets';
import Header from '../components/Header/Header'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

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

        <>
        <Header/>
        <Carousel autoplay>
                <div className="carrousel_image">
                  <h3>1</h3>
                </div>
                <div className="carrousel_image">
                  <h3>2</h3>
                </div>
   
        </Carousel>
        <div className="product_list">
             {loading ? <Loader /> : <ProductItem className="list" products={products} loading={loading} />} 
        </div>
        </>
    )
}
