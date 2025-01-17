import { Grid } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'
import { useSelector } from 'react-redux'

const ClientHeader = () => {
    const wishlist = useSelector((state) => state.wishlist.wishlist)
    console.log(wishlist);
    const basket = useSelector((state) => state.basket.basket)
    let quantity = 0;
    basket.forEach((b) => {
        quantity += b.quantity
    });


    return (
        <section id={styles.header}>
            <div className="container">

                <Grid container spacing={3} className={styles.navbar}  >
                    <Grid xs={6} style={{ display: "flex", justifyContent: "start" }}>
                        <img src="https://images.seeklogo.com/logo-png/52/3/colorshop-logo-png_seeklogo-522696.png?v=1958563167734169680" alt="" />
                    </Grid>
                    <Grid xs={6} style={{ display: "flex", justifyContent: "end" }} >
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to={"/"}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/wishlist"}>wishlist <sup>{wishlist.length}</sup></NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/basket"}>basket <sup>{quantity}</sup></NavLink>
                                </li>
                            </ul>
                        </nav>
                    </Grid>
                </Grid>
            </div>

        </section>
    )
}

export default ClientHeader