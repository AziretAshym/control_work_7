import React from 'react';
import hamburger from '../../assets/hamburger.png';
import cheeseburger from '../../assets/cheeseburger.png';
import fries from '../../assets/fries.png';
import coffee from '../../assets/coffee.png';
import tea from '../../assets/tea.png';
import cola from '../../assets/cola.png';
import {IDishes} from '../../types';
import './Dishes.css';



const dishesArray: IDishes[] = [
    {title: 'Hamburger', image: hamburger, price: 80},
    {title: 'CheeseBurger', image: cheeseburger, price: 90},
    {title: 'Fries', image: fries, price: 45},
    {title: 'Coffee', image: coffee, price: 70},
    {title: 'Tea', image: tea, price: 50},
    {title: 'Cola', image: cola, price: 40},
];

const Dishes = () => {
    return (
        <div className='dishesSide'>
            <h2>Add item</h2>
            <div className="cards">
                {dishesArray.map((dish) => (
                    <div>
                        <a className="click-btn btn-style511" href="#">
                            <span>
                                <button className={'dish'}>
                                    <img src={dish.image} alt={dish.title} style={{width: '100px'}}/>
                                    <div className='text'>
                                        <h5 className={'dishTitle'}>{dish.title}</h5>
                                        <p>Price: <strong>{dish.price}</strong></p>
                                    </div>
                                 </button>
                            </span>
                        </a>
                    </div>


                ))}
            </div>
        </div>
    );
};

export default Dishes;