
import React from 'react';

function KritikSaran () {
  return (
    <section id="contact">
			<div class="overlay">
				<div class="container">
					<div class="row">
						<div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
							<h2 class="text-uppercase">Kritik dan Saran</h2>
							<p>Kritik dan saran bisa dikirimkan melalui kolom dibawah ini</p>
							<address>
								<p><i class="fa fa-map-marker"></i>Kantor jahitku SCBD Lt. 100</p>
								<p><i class="fa fa-phone"></i> 08080808</p>
								<p><i class="fa fa-envelope-o"></i> kritik@jahitku.com</p>
							</address>
						</div>
						<div class="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
							<div class="contact-form">
								<form action="#" method="post">
									<div class="col-md-6">
										<input type="text" class="form-control" placeholder="Name"/>
									</div>
									<div class="col-md-6">
										<input type="email" class="form-control" placeholder="Email"/>
									</div>
									<div class="col-md-12">
										<input type="text" class="form-control" placeholder="Subject"/>
									</div>
									<div class="col-md-12">
										<textarea class="form-control" placeholder="Message" rows="4"></textarea>
									</div>
									<div class="col-md-8">
										<input type="submit" class="form-control text-uppercase" value="Send"/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}

export default KritikSaran;
