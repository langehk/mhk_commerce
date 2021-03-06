import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles'
import { CallMissedSharp } from '@material-ui/icons'
import useStyles from './Styles'
import CartItem from './CartItem/CartItem'

const Cart = ({cart}) => {

    const classes = useStyles();

    const isEmpty = !cart.line_items?.length;

    const EmptyCart = () => {
        return (
        <Typography variant='subtitle1'>You have no items in your shopping cart, start adding some!</Typography>
        )
    };

    

    const FilledCart = () => {
        return (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                    <Typography variant='h4'>
                        Subtotal: {cart.subtotal.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary'>Empty cart</Button>
                        <Button className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Checkout</Button>
                    </div>
            </div>
        </>
        )
    };


    if(!cart.line_items) return 'Loading....';

    return (
        <div>
            <Container>
                <div className={classes.toolbar}/>
                <Typography className={classes.title} variant='h3'>Your shopping cart</Typography>
                {isEmpty ? <EmptyCart /> : <FilledCart/>}
            </Container>
        </div>
    )
}

export default Cart
