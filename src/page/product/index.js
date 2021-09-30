import React from 'react';
import Hero2 from '../../components/Hero2/hero';
import Product_UI from './UI/product';
import Footer from '../../components/Footer/footer'
import Create_Product from '../../components/createProduct/createProduct';
export default function Product() {
	return (
		<>
			<Product_UI />
			<Hero2 />
            <Create_Product />
            <Footer />
		</>
	);
}
