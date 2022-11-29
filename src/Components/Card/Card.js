import React from "react"
import "./Card.css"
import { Link } from "react-router-dom"
const pho = require("../../Images/pro4.png")

export const Card = (props) => {
    return (
        <div className="pro-card">
            <div className="circle"></div>
            <div className="pro-info">
                <h2 className="pro-name">{props.item.name}</h2>
                <h3 className="pro-price">$255 - $300</h3>
                <Link to="/products/1a3dfne3536">
                    <button className="pro-button">Shop</button>
                </Link>
            </div>
            <div className="pro-img">
                {console.log(`../../Images/${props.item.photo}`)}
                <img src={require(`../../Images/${props.item.photo}`)} alt="" />
            </div>
        </div>
    )
}
