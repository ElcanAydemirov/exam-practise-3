import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetByIdQuery } from '../../../redux/services'
import { useDispatch } from 'react-redux'
import { Grid } from '@mui/material'
import styles from './index.module.scss'
import InfoIcon from '@mui/icons-material/Info';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { checkBasket } from '../../../redux/features/basketslice'
import { checkWishlist } from '../../../redux/features/wishlistslice'

const ProductDetail = () => {
    const { id } = useParams()
    const { data, isError, isLoading } = useGetByIdQuery(id)
    console.log(data);
    const d = data?.product
    const dispatch = useDispatch()
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (isError) {
        return <h1>Some Error Ocurred</h1>
    }
    return (
        <section id={styles.detail}>
            <div className="container">
                <Grid container>
                    <Grid xs={10} sm={6} md={3} className={styles.card} key={d._id} spacing={6}>
                        <FavoriteBorderIcon onClick={() => dispatch(checkWishlist(d))} className={styles.heart} />
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
                </Grid>

            </div>
        </section>
    )
}

export default ProductDetail