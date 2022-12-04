import React from 'react';
import Blazer1 from '../../styles/images/Produk/blazer1.jpg'
import Blazer2 from '../../styles/images/Produk/blazer2.jpg'
import Blazer3 from '../../styles/images/Produk/blazer3.jpg'
import Blazer4 from '../../styles/images/Produk/blazer4.jpg'
import Blazer5 from '../../styles/images/Produk/blazer5.jpg'
import Blazer6 from '../../styles/images/Produk/blazer6.jpg'


function Blazer() {
  return (
    
    <section class="menu section-padding">
    <div class="container">
        <div class="row">

            <div class="col-12">
                <h2 class="mb-lg-5 mb-4">Blazer</h2>
            </div>

            <div class="col-lg-4 col-md-6 col-12">
                <div class="menu-thumb">
                    <img src={Blazer1} class="img-fluid menu-image" alt=""/>

                    <div class="menu-info d-flex flex-wrap align-items-center">
                        <h4 class="mb-0">Double Breasted Blazer</h4>

                        <span class="price-tag bg-white shadow-lg ms-4"><small>Rp</small>200.000</span>

                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12">
                <div class="menu-thumb">
                    <img src={Blazer2} class="img-fluid menu-image" alt=""/>

                    <div class="menu-info d-flex flex-wrap align-items-center">
                        <h4 class="mb-0">Single Breasted Blazer</h4>

                        <span class="price-tag bg-white shadow-lg ms-4"><small>Rp</small>220.000</span>

                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12">
                <div class="menu-thumb">
                    <img src={Blazer3} class="img-fluid menu-image" alt=""/>

                    <div class="menu-info d-flex flex-wrap align-items-center">
                        <h4 class="mb-0">Cotton Women Blazer</h4>

                        <span class="price-tag bg-white shadow-lg ms-4"><small>Rp</small>250.000</span>

                        <del class="ms-4"><small>Rp</small>400.000</del>

                    </div>
                </div>
            </div>
            
            <div class="col-lg-4 col-md-6 col-12">
                <div class="menu-thumb">
                    <img src={Blazer4} class="img-fluid menu-image" alt=""/>

                    <div class="menu-info d-flex flex-wrap align-items-center">
                        <h4 class="mb-0">Slim Fit Blazer</h4>

                        <span class="price-tag bg-white shadow-lg ms-4"><small>Rp</small>250.000</span>

                        <del class="ms-4"><small>Rp</small>400.000</del>

                    </div>
                </div>
            </div>
            
            <div class="col-lg-4 col-md-6 col-12">
                <div class="menu-thumb">
                    <img src={Blazer5} class="img-fluid menu-image" alt=""/>

                    <div class="menu-info d-flex flex-wrap align-items-center">
                        <h4 class="mb-0">Long Women Blazer</h4>

                        <span class="price-tag bg-white shadow-lg ms-4"><small>Rp</small>250.000</span>

                        <del class="ms-4"><small>Rp</small>400.000</del>

                    </div>
                </div>
            </div>
            
            <div class="col-lg-4 col-md-6 col-12">
                <div class="menu-thumb">
                    <img src={Blazer6} class="img-fluid menu-image" alt=""/>

                    <div class="menu-info d-flex flex-wrap align-items-center">
                        <h4 class="mb-0">Formal Blazer</h4>

                        <span class="price-tag bg-white shadow-lg ms-4"><small>Rp</small>250.000</span>

                        <del class="ms-4"><small>Rp</small>400.000</del>

                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
  );
}

export default Blazer;