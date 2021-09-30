import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { URL } from '../../../helper/URL';
import { DeleteProduct } from '../logic/product_reducer';

export default function Product_detail() {
	const dispatch = useDispatch();
	const { currentProduct } = useSelector((state) => state.productReducer);
	const image = `${URL}/${currentProduct.image_product}`;
	return (
		<div class="container col-xxl-8 px-4 py-5">
			<div class="row flex-lg-row-reverse align-items-center g-5 py-5 bg-white" style={{marginTop:'0px'}}>
				<div class="col-10 col-sm-8 col-lg-6">
					<img
						src={image}
						class="d-block mx-lg-auto img-fluid"
						alt="Bootstrap Themes"
						width="700"
						height="500"
						loading="lazy"
					/>
				</div>
				<div class="col-lg-6">
					<h1 class="display-5 fw-bold lh-1 mb-3">{currentProduct.name_product}</h1>
					<p class="lead">
						Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most
						popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid
						system, extensive prebuilt components, and powerful JavaScript plugins.
					</p>
					<div class="d-grid gap-2 d-md-flex justify-content-md-start">
						<button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
							Buy
						</button>
						<button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={() => dispatch(DeleteProduct(currentProduct._id))}>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
