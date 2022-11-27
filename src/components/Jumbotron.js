import React from 'react';

function Jumbotron () {
  return (
    <section id='home'>
			<div className='overlay'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-1'></div>
						<div className='col-md-10 wow fadeIn' data-wow-delay='0.3s'>
							<h1 className='text-upper'>Find A Tailor and Make Your Clothes Here</h1>
							<p className='tm-white'>Jahitku adalah sebuah website untuk mencari dan mempertemukan antara penjahit dan orang yang mencari penjahit.</p>
						</div>
						<div className='col-md-1'></div>
					</div>
				</div>
			</div>
		</section>
  );
}

export default Jumbotron;