import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	// const removeItem = id =>{
	// 	const newCart = cart.filter(item =>{
	// 		return (item.id !== id);
	// 	});

	// 	console.log(newCart);
	// 	setCart(newCart);
	// 	console.log(id);
	// };

	return (
		<div className="App">
			

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={{cart}}>
					<Navigation />
					<Route exact path="/" component={Products} />
					<Route path="/cart" component={ShoppingCart}/>
				</CartContext.Provider>
			</ProductContext.Provider>
			
		</div>
	);
}

export default App;