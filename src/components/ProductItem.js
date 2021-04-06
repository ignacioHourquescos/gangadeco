import React from 'react';
import './ProductItem.scss'



const ProductItem = props =>{

    // const [products, setProducts] = useState();
    // const [loading, setLoading] =useState(true);
    
	// useEffect(() => {
	// 	getProducts().then((result) => {

    //         setProducts(result);
    //         setLoading(false);
    //     })

	// }, []);

    return(
        <>
               
        {props.products.map(product =>
            <div className="product_container">



                <div className="image_container">
                    {
                            product.stock==="no"
                        ? 
                            <div className="sold_out">
                                <h3>😢</h3>
                                <h3>Sin stock</h3>
                            </div>
                        :
                            
                                product.ganga==="si"
                            ?
                                <div className="special_offer">⚡</div>
                            :
                           ''
                            
                    }
                    <img className="image" alt={product.title} src={product.imagen} />
               
                </div>

                <div className="data_container">
                    <h3 className="title">{product.title}</h3>
                    <h4 className="price">{product.precio}</h4>
                    <h5 className="id">Codigo: {product.id}</h5>
                </div>

            </div>)
        }
            
        </>
    )
}




// "categoria":        data[i].gsx$categoria.$t,
// "id":               data[i].gsx$codigo.$t,
// "producto":         data[i].gsx$producto.$t,
// "stock":            data[i].gsx$stock.$t,
// "desc":             data[i].gsx$descripcion.$t,
// "precio":           data[i].gsx$precio.$t,
// "imagen":           data[i].gsx$link.$t,



export default ProductItem;
