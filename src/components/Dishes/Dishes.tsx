import React from 'react';
import {IDishes} from '../../types';
import './Dishes.css';

interface Props {
    dishes: IDishes[];
    addDish: (title: string) => void;
}


const Dishes = ({dishes, addDish}: Props) => {
    return (
        <div className='dishesSide'>
            <h2>Add item</h2>
            <div className="cards">
                {dishes.map((dish) => (
                    <button key={dish.title} className={'dish'} onClick={() => addDish(dish.title)}>
                        <img src={dish.image} alt={dish.title} style={{width: '100px'}}/>
                        <div className='text'>
                            <h5 className={'dishTitle'}>{dish.title}</h5>
                            <p>Price: <strong>{dish.price}</strong></p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Dishes;