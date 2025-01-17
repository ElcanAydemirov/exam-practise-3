import React from 'react'
import styles from './index.module.scss'
import { Grid } from '@mui/material'
import { NavLink } from 'react-router-dom'

const AdminHeader = () => {
    return (
        <>
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
                                        <NavLink to={"/admin"}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/admin/add-delete"}>add-delete</NavLink>
                                    </li>

                                </ul>
                            </nav>
                        </Grid>
                    </Grid>
                </div>
            </section >
        </>
    )
}

export default AdminHeader