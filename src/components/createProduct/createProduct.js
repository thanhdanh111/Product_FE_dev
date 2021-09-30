import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProductThunk } from '../../page/product/logic/product_reducer';
import './createProduct.css';
export default function Create_Product() {
	const dispatch = useDispatch();
    const [userImage, setUserImage] = useState(
		'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
	);
	const [product, setProduct] = useState({
		type_product: '',
		price_product: '',
		name_product: '',
		image_product: '',
	});

	const addProduct = () => {
		const formData = new FormData();
		formData.append('name_product', product.name_product);
		formData.append('price_product', product.price_product);
		formData.append('dec_product', product.dec_product);
		formData.append('image_product', product.image_product);
		dispatch(createProductThunk(formData));
		setProduct({
			price_product: '',
			dec_product: '',
			name_product: '',
			image_product: '',
		});
	};
    const imageUser = (event) => {
		const reader = new FileReader();
		reader.onload = () => {
			if (reader.readyState === 2) {
				setUserImage(reader.result);
			}
		};
		reader.readAsDataURL(event.target.files[0]);
		setProduct({...product, image_product: event.target.files[0]})
	};
	return (
		<div class="container col-xxl-8 px-4 py-5 border-top">
			<div class="row flex-lg-row-reverse align-items-center g-5 py-5 bg-white" style={{ marginTop: '0px' }}>
				<div class="col-10 col-sm-8 col-lg-6">
					<div className="profile">
						<div className="profile-container">

							<div className="profile-img-holder">
								<img src={userImage} alt=''/>
							</div>
							<input type="file" accept="image/*" name="image-upload" onChange={imageUser} />
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="input-group flex-nowrap input-style">
						<input
							type="text"
							class="form-control"
							placeholder="Name Product"
							aria-label="Username"
							aria-describedby="addon-wrapping"

                            onChange={(e) => setProduct({ ...product,name_product: e.target.value })}
						/>
					</div>
					<div class="input-group flex-nowrap input-style">
						<input
							type="text"
							class="form-control"
							placeholder="Price Product"
							aria-label="Username"
							aria-describedby="addon-wrapping"
                            onChange={(e) => setProduct({ ...product,price_product: e.target.value })}
						/>
					</div>
					<div class="input-group flex-nowrap input-style" style={{height:'200px'}}>
						<input
							type="text"
							class="form-control"
							placeholder="Description"
							aria-label="Username"
							aria-describedby="addon-wrapping"
                            onChange={(e) => setProduct({ ...product,dec_product: e.target.value })}
						/>
					</div>
					<div class="d-grid gap-2 d-md-flex justify-content-md-start">
						<a  className="hero-btn" onClick={addProduct} >
							CREATE
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
