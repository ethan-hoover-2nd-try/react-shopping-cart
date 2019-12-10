import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {useLocalStorage} from './hooks/useLocalStorage';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts 
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage('cart', []);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = id => {
		const newCart = cart.filter(item => {
			return (item.id !== id);
		});

		setCart(newCart);
	};
	return (
		<div className="App">
			

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={{cart, removeItem}}>
					<Navigation />
					<Route exact path="/" component={Products} />
					<Route path="/cart" component={ShoppingCart}/>
				</CartContext.Provider>
			</ProductContext.Provider>
			
		</div>
	);
}

export default App;