import React from 'react';

function OurPrice () {
  return (
    <section id="pricing">
	<div className="container">
		<div className="row">
			<div className="col-md-12 wow bounceIn">
				<h2 className="text-uppercase">Our Price</h2>
			</div>
			<div className="col-md-4 wow fadeIn" data-wow-delay="0.6s">
				<div className="pricing text-uppercase">
					<div className="pricing-title">
						<h4>Atasan</h4>
						<small className="text-lowercase">start</small>
						<p>250.000 rb</p>
					</div>
					<ul>
						<li>Kebaya</li>
						<li>Kemeja</li>
						<li>Blazer</li>
						<li>etc</li>
					</ul>
				</div>
			</div>
			<div className="col-md-4 wow fadeIn" data-wow-delay="0.6s">
				<div className="pricing active text-uppercase">
					<div className="pricing-title">
						<h4>Bawahan</h4>
						<small className="text-lowercase">start</small>
						<p>200.000</p>
					</div>
					<ul>
						<li>Celana</li>
						<li>Skirt</li>
						<li>Etc</li>
					</ul>
				</div>
			</div>
			<div className="col-md-4 wow fadeIn" data-wow-delay="0.6s">
				<div className="pricing text-uppercase">
					<div className="pricing-title">
						<h4>Full Complete</h4>
						<small className="text-lowercase">start</small>
						<p>400.000</p>
					</div>
					<ul>
						<li>Complete for wedding</li>
						<li>Complete for Lebaran</li>
						<li>Complete for Family</li>
						<li>Etc</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
  );
}

export default OurPrice;