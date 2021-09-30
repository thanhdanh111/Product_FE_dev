import React from 'react';
import './hero2.css';
export default function Hero2() {
	return (
		<div class="container col-xxl-8 px-4 py-5">
			<div class="row flex-lg-row-reverse align-items-center g-5 py-5">
				<div class="col-10 col-sm-8 col-lg-6">
					<img
						src="https://hoanghamobile.com/i/preview/Uploads/2020/10/12/Macbook%20Pro%2013%20inch%20(2020)%20with%20Touch%20bar%202-8.png"
						class="d-block mx-lg-auto img-fluid"
						alt="Bootstrap Themes"
						width="700"
						height="500"
						loading="lazy"
					/>
				</div>
				<div class="col-lg-6">
					<h1 class="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
					<p class="lead">
						Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most
						popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid
						system, extensive prebuilt components, and powerful JavaScript plugins.
					</p>
					<div class="d-grid gap-2 d-md-flex justify-content-md-start">
						<a href="/product" className="hero-btn">
							More Product
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
