import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom';
import { checkBasket } from '../../../redux/features/basketslice';
import { checkWishlist } from '../../../redux/features/wishlistslice';
import { Grid } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Wishlist = () => {

    const wishlist = useSelector((state) => state.wishlist.wishlist)
    const nav = useNavigate()
    console.log(wishlist);
    const dispatch = useDispatch()

    return (<>
        <section id="wishlist">
            <div className="container">
                <Grid container >
                    <Grid xs={12}>
                        <h1 >Products</h1>
                    </Grid>
                    {wishlist && wishlist.map((d) => {
                        console.log(d._id)
                        return (

                            <>

                                <Grid xs={10} sm={6} md={3} className={styles.card} key={d._id} spacing={6}>
                                    <FavoriteIcon onClick={() => dispatch(checkWishlist(d))} className={styles.heart} />
                                    <InfoIcon className={styles.info} onClick={() => nav(`/${d._id}`)} />
                                    <div className="img">
                                        <img src={d.imageUrl} alt="" />
                                    </div>
                                    <div className={styles.texts}>
                                        <h2>
                                            {d.title}
                                        </h2>
                                        <p className={styles.price}>
                                            ${d.price}
                                        </p>
                                    </div>
                                    <button onClick={() => dispatch(checkBasket(d))}>Add To Card</button>
                                </Grid>
                            </>

                        )
                    })}



                </Grid>
            </div>
        </section>
    </>)
}

export default Wishlist