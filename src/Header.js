import React from 'react';
import first_hero from "./images/hero1.jpg"
import second_hero from "./images/hero2.jpg"

const Header =()=>{
    return(
        <>
<header>
    <section className="container main_hero_container">
        <div className="container">
        <div className="row">
            <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center flex-column align-items-start">
                <h1 className="display-2">welcome to my website</h1>
                <p className="main_hero_para"> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in</p>
                <h3>thanks for visit</h3>
                <div className="input_group">
                    <input type="text" placeholder="Enter your name" className="form-control-text me-1  rounded-pill w-75"/>
                    <div className="input-group-button">
                    get it now
                    </div>
                </div>  
            </div>
        {/* ----------------------------  main header right side   -------------------------------------- */}
        <div className="col-12 col-md-6 col-md-6 header-right-side d-flex justify-content-center  align-content-center main_hero_images">
        <img src={first_hero} alt="hero1" className="img-fluid" />
        <img src={second_hero} alt="hero2" className="img-fluid main_hero_img2" />

        </div>
        </div>

        </div>    
    </section>
</header>
        </>
    );
};
export default Header;