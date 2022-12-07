import React from 'react';

function OurTeam () {
  return (
    <div className='d-flex justify-content-center pt-3 mb-3 mx-3'>
      <div className='g-4 row row-cols-md-4 profile w-auto'>
        <div className='col'>
          <div className='card shadow border-0 h-100'>
            <div className='card-body'>
              <img className='image_profile mb-3 rounded-circle' variant="top" src='/images/irzan.jpg' alt="profile" />
              <h5 className='text-center font-weight-bold pb-3'>Irzan Luhtfi Al Khalid</h5>
              <p className='text-center'>Universitas Negeri Semarang</p>
              <p className='text-center'>Teknik Informatika</p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card shadow border-0 h-100'>
            <div className='card-body'>
              <img className='image_profile mb-3 rounded-circle' variant="top" src='/images/fernanda.jpg' alt="profile" />
              <h5 className='text-center font-weight-bold pb-3'>Muhammad Fernanda Naufal Fathoni</h5>
              <p className='text-center'>UPN Veteran Jatim</p>
              <p className='text-center'>Informatika</p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card shadow border-0 h-100'>
            <div className='card-body'>
              <img className='image_profile mb-3 rounded-circle' variant="top" src='/images/profile_blank.jpg' alt="profile" />
              <h5 className='text-center font-weight-bold pb-3'>Iqbal Mahandika Putra</h5>
              <p className='text-center'>Universitas Bhayangkara Jakarta Raya</p>
              <p className='text-center'>Program Studi??</p>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='card shadow border-0 h-100'>
            <div className='card-body'>
              <img className='image_profile mb-3 rounded-circle' variant="top" src='/images/profile_blank.jpg' alt="profile" />
              <h5 className='text-center font-weight-bold pb-3'>Rommy Julyan Sembiring</h5>
              <p className='text-center'>Universitas Pertamina</p>
              <p className='text-center'>Program Studi??</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
