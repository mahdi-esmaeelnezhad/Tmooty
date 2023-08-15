import React, { useEffect, useState } from "react";
import axios from "axios"
import {Link } from "react-router-dom"
import { Container, Grid, Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { styled } from "@mui/material/styles";

import "./Cart.css"

const Cart = () => {
    const [products, setProducts] = useState()
    useEffect(() => {
        function getProducts() {
            axios.get("http://localhost:3000/Product")
                .then((res) => {
                    setProducts(res.data)
                })
        }
        getProducts()
        const interval = setInterval(() => getProducts(), 10000)
        return () => {
            clearInterval(interval);
        }
    }, [setProducts])
    return (
          <Grid 
            container
            spacing={3}>
              {products ? (
                products.map((item)=> {
                  return (
                  <Grid item center xs={12} style={{display: "flex" , justifyContent : "center"}} md={4}>
                  <Link style={{textDecoration : "none"}} to={`/product/${item._id}`}>
                  <Card className="cart" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="300"
                        image={item.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">{item.name}</Typography>
                        <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                        </CardContent>
                  </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">more</Button>
                      </CardActions>
                    </Card>  
                  </Link>
                </Grid>
                    )
                    })
                  ) : null
                  }
            </Grid>
    )
}

export default Cart

