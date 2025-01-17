import { Grid } from '@mui/material'
import React, { useState } from 'react'
import styles from './index.module.scss'
import { useGetAllProductsQuery } from '../../../../redux/services'
import { useDispatch, useSelector } from 'react-redux'
import { checkBasket } from '../../../../redux/features/basketslice'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { checkWishlist } from '../../../../redux/features/wishlistslice'
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';

const Products = () => {

    const [searchQuery, setSearchQuery] = useState("")
    const [selectValue, setSelectValue] = useState("")

    const { data, isError, isLoading } = useGetAllProductsQuery()
    const basket = useSelector((state) => state.basket.basket)
    const wishlist = useSelector((state) => state.wishlist.wishlist)
    const nav = useNavigate()
    console.log(wishlist);
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <h1>Some Error Ocurred</h1>
    }
    console.log(selectValue);
    const dispatch = useDispatch()
    const filtered = selectValue ? data.products.filter((d) => d.title.toLowerCase().includes(searchQuery)).filter((f) => f?.category == selectValue) : data.products.filter((d) => d.title.toLowerCase().includes(searchQuery))
    console.log("filtered", filtered);
    console.log(searchQuery);
    return (
        <section id={styles.products}>
            <div className="container">
                <input type="search" placeholder='search' onChange={(e) => setSearchQuery(e.target.value)} />
                <select name="" id="" onChange={(e) => setSelectValue(e.target.value)}>
                    <option value="">all</option>
                    <option value="clothes">clothes</option>
                    <option value="shoes">shoes</option>
                </select>

                <Grid container >
                    <Grid xs={12}>
                        <h1 >Products</h1>
                    </Grid>
                    {filtered && filtered.map((d) => {
                        return (

                            <>

                                <Grid xs={10} sm={6} md={3} className={styles.card} key={d._id} spacing={6}>
                                    {
                                        wishlist.some((w) => w._id == d._id) ? <  FavoriteIcon onClick={() => dispatch(checkWishlist(d))} className={styles.heart} /> : <FavoriteBorderIcon onClick={() => dispatch(checkWishlist(d))} className={styles.heart} />

                                    }

                                    <InfoIcon className={styles.info} onClick={() => nav(`${d._id}`)} />
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
        </section >
    )
}

export default Products