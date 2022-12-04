import React from 'react';
import gaun1 from '../../styles/images/Produk/gaun1.jpg'
import gaun2 from '../../styles/images/Produk/gaun2.jpg'


function GownDress() {
  return (
    <section className="menu section-padding bg-white">
    <div className="container">
        <div className="row">

            <div className="col-12">
                <h2 className="mb-lg-5 mb-4">Gown Dress & Set Wedding</h2>
            </div>

            <div className="col-lg-6 col-12">
                <div className="menu-thumb">
                    <img src={gaun1} className="img-fluid menu-image" alt=""/>

                    <div className="menu-info d-flex flex-wrap align-items-center">
                        <h4 className="mb-0">Gown Set</h4>

                        <span className="price-tag bg-white shadow-lg ms-4"><small>Rp</small>900.000</span>

                        <del className="ms-4"><small>Rp</small>1.000.000</del>

                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-12">
                <div className="menu-thumb">
                    <img src={gaun2} className="img-fluid menu-image" alt=""/>

                    <div className="menu-info d-flex flex-wrap align-items-center">
                        <h4 className="mb-0">Couple Wedding Set</h4>

                        <span className="price-tag bg-white shadow-lg ms-4"><small>RP</small>1.500.000</span>

                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
  );
}

export default GownDress;