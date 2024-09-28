import './App.css';
import Dishes from './components/Dishes/Dishes.tsx';
import Order from './components/Order/Order.tsx';
import {IDishes} from './types';
import hamburger from './assets/hamburger.png';
import cheeseburger from './assets/cheeseburger.png';
import fries from './assets/fries.png';
import coffee from './assets/coffee.png';
import tea from './assets/tea.png';
import cola from './assets/cola.png';
import {useState} from 'react';

const dishesArray: IDishes[] = [
    {title: 'Hamburger', image: hamburger, price: 80, count: 0},
    {title: 'CheeseBurger', image: cheeseburger, price: 90, count: 0},
    {title: 'Fries', image: fries, price: 45, count: 0},
    {title: 'Coffee', image: coffee, price: 70, count: 0},
    {title: 'Tea', image: tea, price: 50, count: 0},
    {title: 'Cola', image: cola, price: 40, count: 0},
];

const App = () => {
    const [dishes, setDishes] = useState<IDishes[]>(dishesArray);
    // const orderArray = [];
    const addDish = (title: string) => {
        setDishes(prevState =>
            prevState.map(dish =>
                title === dish.title
                ? {...dish, count: dish.count + 1}
                : dish
            )
        );
    };

    const removeDish = (title: string) => {
        setDishes(prevState =>
            prevState.map(dish =>
                title === dish.title
                    ? {...dish, count: dish.count - 1}
                    : dish
            )
        );
    };

    const removeAllDishes = () => {
        setDishes(prevState =>
            prevState.map(dish => ({...dish, count: 0}))
        );
    };

    return (
        <div className={'container'}>
            <Order dishes={dishes} removeDish={removeDish} removeAllDishes={removeAllDishes}/>
            <Dishes dishes={dishes} addDish={addDish}/>

        </div>
    );
};

export default App;