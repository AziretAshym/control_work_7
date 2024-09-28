import React from 'react';
import './Order.css';
import { IDishes } from '../../types';
import deleteBnt from '../../assets/delete-button.png';

interface Props {
    dishes: IDishes[];
    removeDish: (title:string) => void;
    removeAllDishes: () => void;
}

const Order = ({ dishes, removeDish, removeAllDishes }: Props) => {
    const totalOrderPrice = dishes.reduce((acc, dish) => acc + (dish.count * dish.price), 0);
    const totalItemsCount = dishes.reduce((acc, dish) => acc + dish.count, 0);

    return (
        <div className={'orderSide'}>
            <h2>Order Details</h2>
            {totalItemsCount > 0 ? (
                <>
                    {dishes.map((dish) => {
                        if (dish.count > 0) {
                            return (
                                <div key={dish.title} className={'oneOrder'}>
                                    <div className="orderLeftSide">
                                        <p>{dish.title}</p>
                                        <img src={dish.image} alt={dish.title} style={{width: '30px'}}/>
                                    </div>
                                    <p>x <strong>{dish.count}</strong></p>
                                    <strong>{dish.count * dish.price}</strong>
                                    <button type={'button'} className={'deleteBtn'} onClick={() => removeDish(dish.title)}>
                                        <img src={deleteBnt} alt="Delete" style={{width: '30px'}}/>
                                    </button>
                                </div>
                            );
                        }
                        return null;
                    })}
                    <h3>Total Price: <strong>{totalOrderPrice}</strong></h3>
                    <button type={'button'} onClick={removeAllDishes} className={'removeAllDishes'}>Clear cart</button>
                </>
            ) : (
                <p>Order is empty <br/>Please add some items</p>
            )}
        </div>
    );
};

export default Order;
