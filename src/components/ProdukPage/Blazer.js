import React from 'react';
import Blazer1 from '../../styles/images/Produk/blazer1.jpg'
import Blazer2 from '../../styles/images/Produk/blazer2.jpg'
import Blazer3 from '../../styles/images/Produk/blazer3.jpg'
import Blazer4 from '../../styles/images/Produk/blazer4.jpg'
import Blazer5 from '../../styles/images/Produk/blazer5.jpg'
import Blazer6 from '../../styles/images/Produk/blazer6.jpg'


function Blazer() {
  return (
    
    <section className="menu section-padding">
    <div className="container">
        <div className="row">

            <div className="col-12">
                <h2 className="mb-lg-5 mb-4">Blazer</h2>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
                <div className="menu-thumb">
                    <img src={Blazer1} className="img-fluid menu-image" alt=""/>

                    <div className="menu-info d-flex flex-wrap align-items-center">
                        <h4 className="mb-0">Double Breasted Blazer</h4>

                        <span className="price-tag bg-white shadow-lg ms-4"><small>Rp</small>200.000</span>

                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
                <div className="menu-thumb">
                    <img src={Blazer2} className="img-fluid menu-image" alt=""/>

                    <div className="menu-info d-flex flex-wrap align-items-center">
                        <h4 className="mb-0">Single Breasted Blazer</h4>

                        <span className="price-tag bg-white shadow-lg ms-4"><small>Rp</small>220.000</span>

                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
                <div className="menu-thumb">
                    <img src={Blazer3} className="img-fluid menu-image" alt=""/>

                    <div className="menu-info d-flex flex-wrap align-items-center">
                        <h4 className="mb-0">Cotton Women Blazer</h4>

                        <span className="price-tag bg-white shadow-lg ms-4"><small>Rp</small>250.000</span>

                        <del className="ms-4"><small>Rp</small>400.000</del>

                    </div>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-12">
                <div className="menu-thumb">
                    <img src={Blazer4} className="img-fluid menu-image" alt=""/>

                    <div className="menu-info d-flex flex-wrap align-items-center">
                        <h4 className="mb-0">Slim Fit Blazer</h4>

                        <span className="price-tag bg-white shadow-lg ms-4"><small>Rp</small>250.000</span>

                        <del className="ms-4"><small>Rp</small>400.000</del>

                    </div>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-12">
                <div className="menu-thumb">
                    <img src={Blazer5} className="img-fluid menu-image" alt=""/>

                    <div className="menu-info d-flex flex-wrap align-items-center">
                        <h4 className="mb-0">Long Women Blazer</h4>

                        <span className="price-tag bg-white shadow-lg ms-4"><small>Rp</small>250.000</span>

                        <del className="ms-4"><small>Rp</small>400.000</del>

                    </div>
                </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-12">
                <div className="menu-thumb">
                    <img src={Blazer6} className="img-fluid menu-image" alt=""/>

                    <div className="menu-info d-flex flex-wrap align-items-center">
                        <h4 className="mb-0">Formal Blazer</h4>

                        <span className="price-tag bg-white shadow-lg ms-4"><small>Rp</small>250.000</span>

                        <del className="ms-4"><small>Rp</small>400.000</del>

                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
  );
}

export default Blazer;