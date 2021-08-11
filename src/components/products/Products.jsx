import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './product/Product';

import useStyles from './styles';

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$25', image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cushion-shoes-7659-1584132587.jpg?crop=1.00xw:0.701xh;0,0.229xh&resize=1200:*'},
    {id: 2, name: 'Macbook', description: 'Apple Macbook.', price: '$300', image: 'https://m.media-amazon.com/images/I/61W71ou-vPL._AC_SY355_.jpg'},
];

const Products = () => {

    const classes = useStyles();

    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    ); 
}

export default Products;