import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core'
import { AddShoppingCart, CallMissedSharp } from '@material-ui/icons'
import useStyles from './styles'



const Product = ({product, onAddToCart}) => {

    const classes = useStyles(); // Henter vores styles from styles.js
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image.url} title={product.name} />
            <CardContent>
                <div className={classes.CardContent}>
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5' >
                        {product.price.formatted_with_symbol}
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant='body2' color='textSecondary' / > 
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label onClick={() => onAddToCart(product.id, 1)}>Add to cart</IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
