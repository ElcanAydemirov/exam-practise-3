import React from 'react'
import styles from './index.module.scss'
import { Grid } from '@mui/material'

const HeroBanner = () => {
    return (
        <section id={styles.herobanner}>
            <div className="container">
                <Grid container >
                    <Grid item xs={12} className={styles.leftbanner}>
                        <h2>Spring / Summer Collection 2017</h2>
                        <h1>Get up to 30% Off New Arrivals</h1>
                        <button>Shop Now</button>
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}

export default HeroBanner