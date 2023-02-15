import React from 'react'
import '../css/home.css'
import { ArticleList } from '../components/Article';
import { ContactForm } from '../components/ContactForm';

function Home() {
    return (
        <>
            <section>
                <div className="sliderDiv uk-slider-container-offset" data-uk-slider="center: true">

                    <div className="uk-position-relative uk-visible-toggle uk-light" data-tabindex="-1">

                        <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
                            <li>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-media-top">
                                        <img src="images/20555070.jpg" width="1800" height="1200" alt="" />
                                    </div>
                                    <div className="uk-card-body">
                                        <h3 className="uk-card-title">Headline</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-media-top">
                                        <img src="images/newyork-city-minimalism-4p-2560x1600.jpg" width="1800" height="1200" alt="" />
                                    </div>
                                    <div className="uk-card-body">
                                        <h3 className="uk-card-title">Headline</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-media-top">
                                        <img src="images/img.jpg" width="1800" height="1200" alt="" />
                                    </div>
                                    <div className="uk-card-body">
                                        <h3 className="uk-card-title">Headline</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-media-top">
                                        <img src="images/20555070.jpg" width="1800" height="1200" alt="" />
                                    </div>
                                    <div className="uk-card-body">
                                        <h3 className="uk-card-title">Headline</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="uk-card uk-card-default">
                                    <div className="uk-card-media-top">
                                        <img src="images/newyork-city-minimalism-4p-2560x1600.jpg" width="1800" height="1200" alt="" />
                                    </div>
                                    <div className="card uk-card-body">
                                        <h3 className="uk-card-title">Headline</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                        <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>

                    </div>

                    <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

                </div>
            </section>

            <section>
                <ArticleList />
            </section>

            <section>
                <div className="galleryDiv">
                    <div className="galleryContainer uk-grid-large uk-child-width-expand@s uk-text-center" data-uk-grid>
                        <div className='heightDiv'>
                            <div className="cardContainer uk-card uk-card-default uk-card-body">
                                <img src="images/img.jpg" alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus, nibh at interdum vehicula.</p>
                                <a href="">Read more...</a>
                            </div>
                        </div>
                        <div className='heightDiv'>
                            <div className="cardContainer uk-card uk-card-default uk-card-body">
                                <img src="images/20555070.jpg" alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus, nibh at interdum vehicula.</p>
                                <a href="">Read more...</a>
                            </div>
                        </div>
                        <div className='heightDiv'>
                            <div className="cardContainer uk-card uk-card-default uk-card-body">
                                <img src="images/newyork-city-minimalism-4p-2560x1600.jpg" alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus, nibh at interdum vehicula.</p>
                                <a href="">Read more...</a>
                            </div>
                        </div>
                        <div className='heightDiv'>
                            <div className="cardContainer uk-card uk-card-default uk-card-body">
                                <img src="images/img.jpg" alt="" />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tempus, nibh at interdum vehicula.</p>
                                <a href="">Read more...</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='aboutContactDiv'>
                    <div className="contactContainer">
                        <div className="uk-child-width-expand@s" data-uk-grid>
                            <div className="uk-grid-item-match">
                                <div className="uk-card uk-card-default uk-card-body">
                                    <h2>About me</h2>
                                    <div className='photoContainer'>
                                        <div className='profileContainer'>
                                            <h3>Hello,<br />I'm Dandi Christiawan<br />Junior Fullstack Developer</h3>
                                        </div>
                                        <img className="selfImage" src="images/dandi.jpeg" alt="dandi" />
                                    </div>
                                    <h5>+6285156540916 <br /> Jl. Ekologi no. 15 RT.3 RW.7, Komplek Unpad 1, Kel. Cigadung, Kec. Cibeunying Kaler, Bandung 40191.</h5>
                                    <p>
                                        A recent graduate with a degree in Computer Engineering. Passionate and admiration of new technology. Possesses excellent organizational skills and confident with the ability to adapt to tends. I am seeking to build an exciting career in web and mobile app development.
                                    </p>
                                </div>
                            </div>
                            <div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Home;