import React from 'react';
import PenjelasanImg from '../styles/images/software-img.jpg';
import { FaMobileAlt, FaCode } from "react-icons/fa";


function Penjelasan () {
  return (
    <section id="feature">
			<div className="container">
				<div className="row">
					<div className="col-md-6 wow fadeInLeft" data-wow-delay="0.6s">
						<h2 className="text-uppercase">Apa yang kamu dapatkan?</h2>
						<p>Anda akan mendapatkan penjatih yang berpengalaman dalam bidangnya</p>
						<p><span><i className="fa"><FaMobileAlt /></i></span>Ukur badanmu dari rumah dan kirimkan lalu akan di proses tanpa perlu repot keluar dan mencari penjahit</p>
						<p><i className="fa"><FaCode /></i>Dapatkan garansi ukuran apabila tidak sesuai</p>
					</div>
					<div className="col-md-6 wow fadeInRight" data-wow-delay="0.6s">
						<img src={PenjelasanImg} className="img-responsive" alt="feature img"/>
					</div>
				</div>
			</div>
		</section>
  );
}

export default Penjelasan;