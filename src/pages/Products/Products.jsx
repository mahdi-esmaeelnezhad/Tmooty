import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"

import "./Products.css"
import Comments from "../../componenet/Comments/Comments";

const Products = () => {
    const [data , setData] = useState()
    const {id} = useParams()
    useEffect(() => {
        axios
        .get("http://localhost:3000/Product")
        .then((res) => {
            const product = res.data.find((item) => {
                return (
                  item._id == id
                )
              })
            setData(product)
        })
    },[setData])
    return(
        <div>
            {
                data ? (
                    <div>
                        <img className="img" src={data.image} />
                        <p className="para">{data.lorem}</p>
                    </div>
                    
                ) : null
            }
            <Comments />
        </div>
    )
}

export default Products