import './App.css';
import Dishes from './components/Dishes/Dishes.tsx';
import Order from './components/Order/Order.tsx';

const App = () => (
    <div className={'container'}>
        <Order />
        <Dishes />
    </div>
);

export default App;