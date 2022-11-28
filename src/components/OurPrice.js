import React from 'react';

function OurPrice () {
  return (
    <section id="pricing">
	<div class="container">
		<div class="row">
			<div class="col-md-12 wow bounceIn">
				<h2 class="text-uppercase">Our Price</h2>
			</div>
			<div class="col-md-4 wow fadeIn" data-wow-delay="0.6s">
				<div class="pricing text-uppercase">
					<div class="pricing-title">
						<h4>Atasan</h4>
						<small class="text-lowercase">start</small>
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
			<div class="col-md-4 wow fadeIn" data-wow-delay="0.6s">
				<div class="pricing active text-uppercase">
					<div class="pricing-title">
						<h4>Bawahan</h4>
						<small class="text-lowercase">start</small>
						<p>200.000</p>
					</div>
					<ul>
						<li>Celana</li>
						<li>Skirt</li>
						<li>Etc</li>
					</ul>
				</div>
			</div>
			<div class="col-md-4 wow fadeIn" data-wow-delay="0.6s">
				<div class="pricing text-uppercase">
					<div class="pricing-title">
						<h4>Full Complete</h4>
						<small class="text-lowercase">start</small>
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