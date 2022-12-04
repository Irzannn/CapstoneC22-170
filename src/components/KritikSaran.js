
import React from 'react';

function KritikSaran () {
  return (
    <section id="contact">
			<div className="overlay">
				<div className="container">
					<div className="row">
						<div className="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
							<h2 className="text-uppercase">Kritik dan Saran</h2>
							<p>Kritik dan saran bisa dikirimkan melalui kolom dibawah ini</p>
							<address>
								<p><i className="fa fa-map-marker"></i>Kantor jahitku SCBD Lt. 100</p>
								<p><i className="fa fa-phone"></i> 08080808</p>
								<p><i className="fa fa-envelope-o"></i> kritik@jahitku.com</p>
							</address>
						</div>
						<div className="col-md-6 wow fadeInUp" data-wow-delay="0.6s">
							<div className="contact-form">
								<form action="#" method="post">
									<div className="col-md-6">
										<input type="text" className="form-control" placeholder="Name"/>
									</div>
									<div className="col-md-6">
										<input type="email" className="form-control" placeholder="Email"/>
									</div>
									<div className="col-md-12">
										<input type="text" className="form-control" placeholder="Subject"/>
									</div>
									<div className="col-md-12">
										<textarea className="form-control" placeholder="Message" rows="4"></textarea>
									</div>
									<div className="col-md-8">
										<input type="submit" className="form-control text-uppercase" value="Send"/>
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
