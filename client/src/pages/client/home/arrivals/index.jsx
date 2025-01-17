import { Grid } from '@mui/material'
import React from 'react'
import styles from './index.module.scss'

const Arrivals = () => {
    return (
        <section id={styles.arrivals}>
            <div className="container">
                <Grid container>
                    <Grid xs={10} md={4} lg={4} item className={styles.card}>
                        <div className="img">
                            <img src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg" alt="" />
                        </div>

                    </Grid>
                    <Grid xs={10} md={4} lg={4} item>
                        <img src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg" alt="" />
                    </Grid>
                    <Grid xs={10} md={4} lg={4} item>
                        <img src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg" alt="" />
                    </Grid>
                </Grid>
            </div>
        </section>
    )
}

export default Arrivals