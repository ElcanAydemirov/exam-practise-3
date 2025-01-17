import React from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../../redux/features/basketslice';

const Basket = () => {
    const basket = useSelector((state) => state.basket.basket)
    console.log(basket);
    const dispatch = useDispatch()
    return (
        <section id="basket">
            <div className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>price</th>

                            <th>Increment</th>
                            <th>quantity</th>
                            <th>Decrement</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            basket && basket.map((b) => {
                                return (
                                    <tr>
                                        <td><img src={b.imageUrl} alt="" /></td>
                                        <td>{b.title}</td>
                                        <td>{b.description}</td>
                                        <td>{b.price}</td>
                                        <th><button onClick={() => dispatch(increment(b))}>+</button></th>
                                        <td>{b.quantity}</td>
                                        <th><button onClick={() => dispatch(decrement(b))}>-</button></th>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </Table>
            </div>
        </section>
    )
}

export default Basket