import { getProducts } from "../../asyncmock"
import { useEffect, useState } from 'react'
import ItemList from "../itemList/itemList"

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return (
        <div className="main-container">
            <div className="container">
                <h1>
                    {props.greetings}
                </h1>
                <ItemList products={products}/>
            </div>
        </div>  
    )
}

export default ItemListContainer