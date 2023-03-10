import React from "react";
import './styles.css';



const Card = ({ product }) => {
    const { id , categoryId , description , image , name, price, stock } = product || {};
    return(
        <div className="card">
            <div className="card-body">
            <img className ="card-image" src={image} alt={name} />
            <div className="card-content">
                <h3 className="card-name">{name}</h3>
                <p className="card-description">{description}</p>
                <p className="card-price">{price}</p>
                <p className="card-stock">{stock}</p>
                </div>

            </div>
            <div className="card-button-container">
                <button className="card-button-minus">-</button>
                <input
                className="card-input" 
                type="text" />
                <button className="card-button-plus">+</button>
            </div>
        </div>
    )
}

export default Card; 