const Item = ({ name, img, price }) => {
    return(
        <li className="item">
            <img src={img} alt={name} className="img-product"/>
            <h4 className="name-product">{name}</h4>
            <h4 className="price-product">${price}</h4>
        </li>
    )
}

export default Item