import { Modal } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../logic/product_action';
import { getAllProductThunk, getProductThunk } from '../logic/product_reducer';
import Product_detail from './proruct_detail';
import './product.css';

export default function Product_UI() {
	const dispatch = useDispatch();
	const { products, currentProduct } = useSelector((state) => state.productReducer);
	useEffect(() => {
		dispatch(getAllProductThunk());
	}, []);
	const disPlayProduct = () => {
		if (!products) {
			return <h1>loading...</h1>;
		}
		const display = Object.keys(products).map((each,index) => {

			const product = products[each];
			console.log(product);
			const image = `http://localhost:5000/${product.image_product}`;

			return (
				<div class="col" key={index}>
					<div
						className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
						style={{ backgroundImage: `url('${image}')` }}
					>
						<div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
							<h5 class="pt-5 mt-5 mb-4 display-6 lh-1">{product.name_product}</h5>
							<ul class="d-flex list-unstyled mt-auto">
								<li class="me-auto">
									<img
										src="https://github.com/twbs.png"
										alt="Bootstrap"
										width="32"
										height="32"
										class="rounded-circle border border-white"
										onClick={() => dispatch(getProductThunk(product._id))}
									/>
									<Modal
										open={!!currentProduct._id}
										onClose={() => dispatch(getProduct({ _id: '' }))}
										aria-labelledby="parent-modal-title"
										aria-describedby="parent-modal-description"
                                        style={{opacity:'0.4'}}
									>
										<Product_detail />
									</Modal>
								</li>
								<li class="d-flex align-items-center me-3">
									<svg class="bi me-2" width="1em" height="1em">
										{/* <use xlink:href="#geo-fill" />  */}
									</svg>
								</li>
								<li class="d-flex align-items-center">
									<svg class="bi me-2" width="1em" height="1em">
										{/* <use xlink:href="#calendar3" />  */}
									</svg>
								</li>
							</ul>
						</div>
					</div>
				</div>
			);
		});
		return display;
	};
	return (
		<div class="container px-4 py-5" id="custom-cards">
			<div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">{disPlayProduct()}</div>
		</div>
	);
}
