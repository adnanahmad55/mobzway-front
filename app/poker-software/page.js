import React from 'react'
import BannerForm from '../components/BannerForm'

export default function PokerSoftware() {
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    @media (min-width: 767px) {\n\n\n        .heroSlider {\n            padding-top: 150px;\n            padding-bottom: 50px;\n        }\n\n        .hero_cta_block {\n            bottom: 18%;\n        }\n\n        /* .hero__title {\n        padding-top: 50px;\n    } */\n\n        /* .heroSlider .col-md-7 {\n        padding-bottom: 140px;\n    } */\n\n        .hero_cta_block {\n            bottom: 24%;\n        }\n\n        .heroSlider img {\n            height: auto;\n        }\n\n        .heroSlider .col-md-7 {\n            padding-top: 2rem;\n            min-height: 386px;\n        }\n    }\n"
                }}
            />
            <div
                className="heroSlider cstylener-fluid"
                style={{
                    backgroundImage: 'url("/assets/images/rummy_banner.png")',
                    backgroundColor: "rgba(0, 0, 0, 0.80)",
                    backgroundBlendMode: "overlay",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}
            >
                <div className="container position-relative">
                    <div className="w-100 position-relative heroslidebg-mb">
                        <div className="row">
                            <div className="col-md-12">
                                <div
                                    id="heroSlide4_1"
                                    className="carousel w-100 slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
                                    data-ride="carousel"
                                    data-pause="hover"
                                    data-interval={5000}
                                    data-duration={2000}
                                >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <h1 data-hk="s40-1-12" className="hero__title">
                                                        Best Poker Software Provider Company
                                                    </h1>
                                                    <img
                                                        className="d-block d-md-none mb-3 w-100"
                                                        src="/assets/images/pokerSlideSoft1.webp"
                                                        alt="#1 poker software provider"
                                                    />
                                                    <div className="hero__description">
                                                        Want to hire best Poker Software provider company, that
                                                        lets you start your online poker business with top notch
                                                        technology? Mobzway's Poker software solution is the
                                                        best fit for you.
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-md-5 pl-0 d-none d-md-block"
                                                    style={{ marginTop: "-30px" }}
                                                >
                                                    <img
                                                        src="/assets/images/pokerSlideSoft1.webp"
                                                        alt="Best Poker software provider company"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <h2 data-hk="s40-1-12" className="hero__title">
                                                        #1 Poker Software Solutions
                                                    </h2>
                                                    <img
                                                        className="d-block d-md-none mb-3 w-100"
                                                        src="/assets/images/pokerSlideSoft.webp"
                                                        alt="#1 Poker Software Solutions"
                                                    />
                                                    <div className="hero__description">
                                                        With ready to go #1 Poker Software Solutions that
                                                        enables you to launch your business within a very short
                                                        span of time. Our poker software hosts all the essential
                                                        &amp; important features required to run successful
                                                        poker rooms.
                                                    </div>
                                                </div>
                                                <div className="col-md-5 d-none d-md-block">
                                                    <img
                                                        src="/assets/images/pokerSlideSoft.webp"
                                                        alt="A23 Rummy software app development"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="row justify-content-between align-items-center d-md-flex d-none pt-0 pt-md-3"
                                        style={{ padding: "0 15px" }}
                                    >
                                        <div className="heroSliderarrow">
                                            <a
                                                className="carousel-control-prev carousel-control-prev-1"
                                                href="#heroSlide4_1"
                                                aria-label="prev"
                                                rel="noopener"
                                                data-slide="prev"
                                            >
                                                <span className="carousel-control-prev-icon">
                                                    <i className="fas fa-angle-left" />
                                                </span>
                                            </a>
                                            <a
                                                className="carousel-control-next carousel-control-next-1"
                                                href="#heroSlide4_1"
                                                aria-label="next"
                                                rel="noopener"
                                                data-slide="next"
                                            >
                                                <span className="carousel-control-next-icon">
                                                    <i className="fas fa-angle-right" />
                                                </span>
                                            </a>
                                        </div>
                                        <div className="hero-carousel-indicators position-relative">
                                            <div className="carousel-indicators">
                                                <button
                                                    className="heroSlide-dots active"
                                                    type="button"
                                                    data-target="#heroSlide4_1"
                                                    data-slide-to={0}
                                                    aria-current="true"
                                                    aria-label="Slide 1"
                                                />
                                                <button
                                                    className="heroSlide-dots"
                                                    type="button"
                                                    data-target="#heroSlide4_1"
                                                    data-slide-to={1}
                                                    aria-label="Slide 2"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="heroSliderarrow d-block d-md-none mt-4 w-100 d-flex justify-content-between align-items-center">
                            <a
                                className="carousel-control-prev"
                                style={{ position: "static" }}
                                href="#heroSlide4_1"
                                aria-label="prev"
                                rel="noopener"
                                data-slide="prev"
                            >
                                <span className="carousel-control-prev-icon">
                                    <i className="fas fa-angle-left" />
                                </span>
                            </a>
                            <a
                                className="carousel-control-next"
                                style={{ position: "static" }}
                                href="#heroSlide4_1"
                                aria-label="next"
                                rel="noopener"
                                data-slide="next"
                            >
                                <span className="carousel-control-next-icon">
                                    <i className="fas fa-angle-right" />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="hero_cta_block pmb-0">
                        <div className="hero-submit__description">
                            Fill in the form to contact us and expand your product offering.
                        </div>
                        <BannerForm />
                    </div>
                </div>
            </div>
            {/* <section class="banner pokers position-relative"
    style="background-image: url('/assets/images/poker_game_deve_banner.webp');">
    <div class="overlay"></div>
    <div class="wel_come_container wel_come_container_other">
  <h1 class="welcome_text">
      POKER SOFTWARE PROVIDER COMPANY
  </h1>

  <p class="sml_text">
      If you want to get the best poker game developer, that lets you start your online poker business? Mobzway's
      poker solution is the best fit for you. It is a ready to go live solution that enables you to launch your
      business within a very short span of time. Our poker software hosts all the essential & important features
      required to run successful poker rooms.
  </p>
  <div class="btn_outer">

      <a data-toggle="modal" data-target="#requestQoute" id="requestPokersoftware2" class="contact_btn">Request a
          Demo</a>

  </div>
    </div>
    <div class="banner_bottom_info" style="background-color: rgba(15, 16, 15, 0.8);">
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-11">
              <div class="bottom_header">
                  <div class="bottom_text">
                      Your search for the perfect online poker software provider ends here! Now get a feature loaded
                      software solution that is compatible with Windows, Mac, iOS and Android and runs seamlessly
                      on all popular browsers.
                  </div>
              </div>
          </div>
      </div>
  </div>
    </div>
</section> */}
            <section
                className="product_offer poker_features_icon"
                style={{
                    backgroundImage: 'url("/assets/images/comman_bg.png")'
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div
                                className="sub_title_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">OUR POKER</span>{" "}
                                    <span className="black">software features</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-2 mt-4 col-md-3 col-sm-4 col-6">
                        <div
                            className="circle_one_outer aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <div className="circle_outer position-relative aftes">
                                <span
                                    className="fea_imgbox real_cash aos-init aos-animate"
                                    data-aos="zoom-in"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <img
                                        alt="Texas Hold'em"
                                        src="/assets/images/0001.png"
                                    />
                                </span>
                            </div>
                            <div className="title_pltfm">Texas Hold'em</div>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-4 col-md-3 col-sm-4 col-6">
                        <div
                            className="circle_one_outer aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <div className="circle_outer position-relative aftes">
                                <span
                                    className="fea_imgbox real_cash aos-init aos-animate"
                                    data-aos="zoom-in"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <img
                                        alt="5 Card Omaha"
                                        src="/assets/images/02.png"
                                    />
                                </span>
                            </div>
                            <div className="title_pltfm">5 Card Omaha</div>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-4 col-md-3 col-sm-4 col-6">
                        <div
                            className="circle_one_outer aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <div className="circle_outer position-relative aftes">
                                <span
                                    className="fea_imgbox real_cash aos-init aos-animate"
                                    data-aos="zoom-in"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <img
                                        alt="4 Card PLO"
                                        src="/assets/images/omaha02.png"
                                    />
                                </span>
                            </div>
                            <div className="title_pltfm">4 Card PLO</div>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-4 col-md-3 col-sm-4 col-6">
                        <div
                            className="circle_one_outer aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <div className="circle_outer position-relative aftes">
                                <span
                                    className="fea_imgbox real_cash aos-init aos-animate"
                                    data-aos="zoom-in"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <img alt="Sit & Go" src="/assets/images/04.png" />
                                </span>
                            </div>
                            <div className="title_pltfm">Sit &amp; Go</div>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-4 col-md-3 col-sm-4 col-6">
                        <div
                            className="circle_one_outer aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <div className="circle_outer position-relative aftes">
                                <span
                                    className="fea_imgbox real_cash aos-init aos-animate"
                                    data-aos="zoom-in"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <img
                                        alt="Tournaments"
                                        src="/assets/images/05.png"
                                    />
                                </span>
                            </div>
                            <div className="title_pltfm">Tournaments</div>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-4 col-md-3 col-sm-4 col-6">
                        <div
                            className="circle_one_outer aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <div className="circle_outer position-relative aftes">
                                <span
                                    className="fea_imgbox real_cash aos-init aos-animate"
                                    data-aos="zoom-in"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <img
                                        alt="Payment Gateway"
                                        src="/assets/images/soft_eleven.png"
                                    />
                                </span>
                            </div>
                            <div className="title_pltfm">Payment Gateway</div>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-4 col-md-3 col-sm-4 col-6">
                        <div
                            className="circle_one_outer aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <div className="circle_outer position-relative aftes">
                                <span
                                    className="fea_imgbox real_cash aos-init aos-animate"
                                    data-aos="zoom-in"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <img
                                        alt="Rewards & Loyalty"
                                        src="/assets/images/09.png"
                                    />
                                </span>
                            </div>
                            <div className="title_pltfm">Rewards &amp; Loyalty</div>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-4 col-md-3 col-sm-4 col-6">
                        <div
                            className="circle_one_outer aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <div className="circle_outer position-relative aftes">
                                <span
                                    className="fea_imgbox real_cash aos-init aos-animate"
                                    data-aos="zoom-in"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <img
                                        alt="Multi Language"
                                        src="/assets/images/soft_six.png"
                                    />
                                </span>
                            </div>
                            <div className="title_pltfm">Multi Language</div>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-4 col-md-3 col-sm-4 col-6">
                        <div
                            className="circle_one_outer aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <div className="circle_outer position-relative aftes">
                                <span
                                    className="fea_imgbox real_cash aos-init aos-animate"
                                    data-aos="zoom-in"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <img
                                        alt="RNG Certified Games"
                                        src="/assets/images/soft_ning.png"
                                    />
                                </span>
                            </div>
                            <div className="title_pltfm">RNG Certified Games</div>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-4 col-md-3 col-sm-4 col-6">
                        <div
                            className="circle_one_outer aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <div className="circle_outer position-relative aftes">
                                <span
                                    className="fea_imgbox real_cash aos-init aos-animate"
                                    data-aos="zoom-in"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <img
                                        alt="Anti Fraud System"
                                        src="/assets/images/08.png"
                                    />
                                </span>
                            </div>
                            <div className="title_pltfm">Anti Fraud System</div>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-4 col-md-3 col-sm-4 col-6">
                        <div
                            className="circle_one_outer aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <div className="circle_outer position-relative aftes">
                                <span
                                    className="fea_imgbox real_cash aos-init aos-animate"
                                    data-aos="zoom-in"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <img
                                        alt="Responsible Gaming"
                                        src="/assets/images/11.png"
                                    />
                                </span>
                            </div>
                            <div className="title_pltfm">Responsible Gaming</div>
                        </div>
                    </div>
                    <div className="col-lg-2 mt-4 col-md-3 col-sm-4 col-6">
                        <div
                            className="circle_one_outer aos-init aos-animate"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <div className="circle_outer position-relative aftes">
                                <span
                                    className="fea_imgbox real_cash aos-init aos-animate"
                                    data-aos="zoom-in"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <img
                                        alt="Back Office & CRM"
                                        src="/assets/images/12.png"
                                    />
                                </span>
                            </div>
                            <div className="title_pltfm">Back Office &amp; CRM</div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------Online poker software solution------------------*/}
            <img
                src="/assets/images/why_choose_poker_mb.webp"
                className="w-100 d-block d-md-none"
                alt="Poker software development company"
            />
            <section
                className="why_choose"
                style={{
                    backgroundImage:
                        'url("/assets/images/why_choose_poker.webp")'
                }}
            >
                <div className="container-fluid px-0">
                    <div className="row">
                        <div
                            className="col-md-6 offset-md-6 manual_pad"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
                        >
                            <div
                                className="sub_title_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h3 className="sub_title ft_40">
                                    <span className="yellow">Online</span>{" "}
                                    <span className="black">Poker Software Solution</span>
                                </h3>
                            </div>
                            <p className="why_content" data-aos="fade-up" data-aos-duration={800}>
                                {/* <a href="https://www.mobzway.com/blog/how-to-start-your-own-online-poker-site/">Start your online
                  poker business</a> */}
                                <strong className="d-block" style={{ marginBottom: 10 }}>
                                    Start Your Poker Software Using Innovative Solutions
                                </strong>
                                Why Choose Our Poker Software?
                                <br />
                                Extremely customizable: made to match your exact
                                specifications.Reliable and Verified: Recommended by top
                                businesses.Comprehensive back-end management with real-time
                                information.
                                <br />
                                <br />
                                <strong className="d-block" style={{ marginBottom: 10 }}>
                                    Outstanding User Experience
                                </strong>
                                An interesting UI keeps gamers interested. Smooth Operations: Play,
                                withdraw, deposit, and register with ease. Cross-Platform
                                Compatibility: HTML5-based programming runs on many screens
                                including iOS and Android devices.
                                <br />
                                <br />
                                <strong className="d-block" style={{ marginBottom: 10 }}>
                                    Different Variations of Poker
                                </strong>
                                Popular All Over the World: Give an assortment of diversions to keep
                                your gathering of people interested. Create Your Brand: Our items
                                help you in developing your company and fashion an unmistakable
                                identity. Versatile Arrangements: Effectively create modern computer
                                programs or move forward current ones.
                                <br />
                                <br />
                                <strong className="d-block" style={{ marginBottom: 10 }}>
                                    Reliable and Current
                                </strong>
                                Reliable facilitating: secure facilitating for back-office computer
                                programs, diversions, and webpages. Most recent Tech: Keep up with
                                the most recent progressions in coding guidelines and innovation.
                                Visit Upkeep: Our experts make beyond any doubt your computer
                                program is upgraded on time and capacities properly.
                                <br />
                                <br />
                                <strong className="d-block" style={{ marginBottom: 10 }}>
                                    Team Accomplices with the Finest
                                </strong>
                                Top Designer of Poker Diversions: Find the finest computer program
                                for online poker. Victory Expressed: We back the advancement and
                                benefit of your poker business.
                                <br />
                                <br />
                                <strong>
                                    Join us to launch your poker business, and watch it expand with
                                    ease!
                                </strong>
                            </p>
                            <div className="btn_outer mt-2">
                                <a
                                    data-toggle="modal"
                                    data-target="#requestQoute"
                                    id="requestPokersoftware3"
                                    className="contact_btn"
                                >
                                    Request a Demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Poker Platfroms*/}
            {/*Poker Platfroms*/}
            <section>
                <div className="container ">
                    {/* <div class="heading_title text-center">
   <h1 class="text-white"><span>WE</span> BUILD THE POKER GAME FOR ALL PLATFORMS</h1>
   </div> */}
                    <div className="col-md-12 text-center">
                        <div
                            className=""
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <h2 className="sub_title">
                                <span className="yellow">Our</span>{" "}
                                <span className="black"> Poker Software Platforms</span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-12 col1 wow" data-wow-duration="1s">
                        <p className="hire-para col-md-12 para-plateform ">
                            <br />
                        </p>
                    </div>
                    <div className="row row1 desktopversion">
                        <div className="col-md-12 col2">
                            <div className="row">
                                <div
                                    className="col-lg-4 col-md-6 col21 mb-3 wow bounceInRight"
                                    data-wow-duration="2s"
                                >
                                    <div className="card plateform-card">
                                        <div className="imgminheight">
                                            <img
                                                alt="best online rummy game app"
                                                src="/assets/images/HTML_five-broweswer.webp"
                                                className="wow bounceInRight new-one "
                                                data-wow-duration="2s"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title cards text-center">
                                                HTML 5 Browser
                                            </h5>
                                            <p className="card-text text-center text-dark">
                                                Get a highly responsive HTML 5 based software for your
                                                online poker business. Our HTML 5 coded games are adaptive
                                                to different screen sizes and can also be enjoyed on all
                                                popular browsers. So, no matter which device or web browser
                                                your customers use, they will thoroughly enjoy playing
                                                online poker software with our advanced HTML 5 technology.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-md-6 col21 mb-3 wow bounceInRight"
                                    data-wow-duration="2s"
                                    data-wow-delay=".4s"
                                >
                                    <div className="card  plateform-card">
                                        <div className="imgminheight">
                                            <img
                                                alt="best online rummy game app"
                                                src="/assets/images/Native_Mobile.webp"
                                                className="wow bounceInRight new-one"
                                                data-wow-duration="2s"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title cards text-center">
                                                Native Mobile
                                            </h5>
                                            <p className="card-text text-center text-dark">
                                                Keep your poker players engaged on mobile devices with our
                                                advanced native mobile apps compatible with both android as
                                                well as iOS platforms. Our poker software apps come with
                                                various exciting features like social logins, multi-player
                                                gaming, secured payment gateways, etc. so that mobile gaming
                                                enthusiasts enjoy the games uninterruptedly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-md-6 col21 mb-5  wow bounceInRight"
                                    data-wow-duration="2s"
                                    data-wow-delay=".2s"
                                >
                                    <div className="card  plateform-card">
                                        <div className="imgminheight">
                                            <img
                                                alt="best online rummy game app"
                                                src="/assets/images/Mac_PC.webp"
                                                style={{ width: 150 }}
                                                className="wow bounceInRight new-one "
                                                data-wow-duration="2s"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title cards text-center">MAC / PC</h5>
                                            <p className="card-text text-center text-dark">
                                                Now provide access to software users with our
                                                easy-to-download online poker software for MAC / PC. Our
                                                talented expert's design software for computer devices for
                                                both Mac and Windows. This software for PCs comes with
                                                amazing visual effects, superior quality sound effects,
                                                various payment options, and many other amazing features.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------How We Can Help------------------*/}
            <section
                className="how_we_canhelp"
                style={{
                    backgroundImage: 'url("/assets/images/help_banner.png")'
                }}
            >
                <div className="overlay_help" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <div
                                className="sub_title_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h3 className="sub_title ft_40">
                                    <span className="yellow">WE</span>{" "}
                                    <span className="black">ARE ALWAYS HERE TO HELP YOU</span>
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-8 text-center">
                            <div className="help_cotnent text-center">
                                Let our poker game experts advise you on building &amp; launching
                                the online poker software that meets your business objectives.
                                Connect with us now to get a free expert consultation for your poker
                                business.
                            </div>
                            <div className="btn_outer">
                                <a
                                    data-toggle="modal"
                                    data-target="#requestQoute"
                                    id="requestPokersoftware4"
                                    className="contact_btn"
                                >
                                    Request a Call Back
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*backoffice & CRM*/}
            <section
                className="gaming_platform backoffice"
                style={{
                    backgroundImage: 'url("/assets/images/comman_bg.png")',
                    overflow: "hidden"
                }}
            >
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center">
                            <div
                                className="sub_title_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h3 className="sub_title ft_40">
                                    <span className="yellow">backoffice</span>{" "}
                                    <span className="black">&amp; CRM</span>
                                </h3>
                                <p className="sub_paragraph">
                                    With our best poker software solutions, we offer the best
                                    BackOffice and CRM tools which make software management very easy.
                                    You can enjoy a user-friendly dashboard along with all the
                                    essential &amp; useful features to manage the game rooms in
                                    real-time.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row backoffice-crm-block">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 backoffice-crm-inner">
                            <div
                                className="circle_one_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <div className="circle_outer position-relative aftes">
                                    <span className="fea_imgbox real_cash aos-init">
                                        <img
                                            src="/assets/images/backoffice-crm-icon/dashboard.png"
                                            alt="Dashboard"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Dashboard</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 backoffice-crm-inner">
                            <div
                                className="circle_one_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <div className="circle_outer position-relative aftes">
                                    <span className="fea_imgbox real_cash aos-init">
                                        <img
                                            src="/assets/images/backoffice-crm-icon/game-management.png"
                                            alt="Game Rooms
"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Game Rooms</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 backoffice-crm-inner">
                            <div
                                className="circle_one_outer"
                                data-aos="fade-left"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <div className="circle_outer position-relative aftes">
                                    <span className="fea_imgbox real_cash aos-init">
                                        <img
                                            src="/assets/images/backoffice-crm-icon/tournament-management.png"
                                            alt="Tournaments"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Tournaments</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 backoffice-crm-inner">
                            <div
                                className="circle_one_outer"
                                data-aos="fade-left"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <div className="circle_outer position-relative">
                                    <span className="fea_imgbox real_cash aos-init">
                                        <img
                                            src="/assets/images/backoffice-crm-icon/game-history.png"
                                            alt="Hand History"
                                            className="pt-2"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Hand History</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 backoffice-crm-inner">
                            <div
                                className="circle_one_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <div className="circle_outer position-relative aftes">
                                    <span className="fea_imgbox real_cash aos-init">
                                        <img
                                            src="/assets/images/backoffice-crm-icon/player-management.png"
                                            alt="Player Management"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Player Management</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 backoffice-crm-inner">
                            <div
                                className="circle_one_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <div className="circle_outer position-relative aftes">
                                    <span className="fea_imgbox real_cash aos-init">
                                        <img
                                            src="/assets/images/backoffice-crm-icon/user-management.png"
                                            alt="Users & Sub Admins"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Users &amp; Sub Admins</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 backoffice-crm-inner">
                            <div
                                className="circle_one_outer"
                                data-aos="fade-left"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <div className="circle_outer position-relative aftes">
                                    <span className="fea_imgbox real_cash aos-init">
                                        <img
                                            src="/assets/images/backoffice-crm-icon/affiliate-management.png"
                                            alt="Affiliates"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Affiliates</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 backoffice-crm-inner">
                            <div
                                className="circle_one_outer"
                                data-aos="fade-left"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <div className="circle_outer position-relative">
                                    <span className="fea_imgbox real_cash aos-init">
                                        <img
                                            src="/assets/images/backoffice-crm-icon/finance-management.png"
                                            alt="Finance"
                                            className="pt-2"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Finance</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 backoffice-crm-inner">
                            <div
                                className="circle_one_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <div className="circle_outer position-relative aftes">
                                    <span className="fea_imgbox real_cash aos-init">
                                        <img
                                            src="/assets/images/backoffice-crm-icon/notificstion-management.png"
                                            alt="Notifications"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Notifications</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 backoffice-crm-inner">
                            <div
                                className="circle_one_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <div className="circle_outer position-relative aftes">
                                    <span className="fea_imgbox real_cash aos-init">
                                        <img
                                            src="/assets/images/backoffice-crm-icon/promotion-management.png"
                                            alt="Promotions"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Promotions</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 backoffice-crm-inner">
                            <div
                                className="circle_one_outer"
                                data-aos="fade-left"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <div className="circle_outer position-relative aftes">
                                    <span className="fea_imgbox real_cash aos-init">
                                        <img
                                            src="/assets/images/backoffice-crm-icon/analytics.png"
                                            alt="Analytics"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Analytics</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 backoffice-crm-inner">
                            <div
                                className="circle_one_outer"
                                data-aos="fade-left"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <div className="circle_outer position-relative">
                                    <span className="fea_imgbox real_cash aos-init">
                                        <img
                                            src="/assets/images/backoffice-crm-icon/reports.png"
                                            alt="Reports"
                                            className="pt-2"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Reports</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------Hire poker software prowider------------------*/}
            <section className="engagement_models engagement_models_pb">
                <div className="container ">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <div
                                className="sub_title_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">Hire </span>{" "}
                                    <span className="black">ONLINE POKER SOFTWARE PROVIDER</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="eng_img_content">
                                <img
                                    src="/assets/images/poker-software-developers.webp"
                                    alt="Buy Online Poker Software"
                                />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="hire_soft_content">
                                <p>
                                    Are you looking for a capable poker redirection builder who can
                                    easily facilitate their thing with other apps, such as well-known
                                    web browsers? There's no put else to see! We grant specialized
                                    courses of action to fulfill your uncommon needs. The best poker
                                    computer program courses of action have been made by our bunch of
                                    gifted redirection modelers, and they work with predominant
                                    browsers like Windows, Mac, iOS, Android, and others. .<br />
                                    <br />
                                </p>
                                <br />
                                <p style={{ marginTop: "-17px" }}>
                                    Our competitive advantage is being able to offer diversions with
                                    great vector design in their HTML5 versions. Our poker
                                    arrangements are moreover well-known for their exceptional
                                    highlights, user-friendly interface, extraordinary client benefit,
                                    and reasonableness for poker diversion improvement companies.
                                </p>
                                <br />
                                <p>
                                    Our progressed innovation, prevalent craftsmanship, and pleased
                                    clients from the USA, UK, Africa, and numerous other European and
                                    Asian countries verify to these focuses. Our worldwide reach has
                                    been expanded to meet the requests of poker endeavors all over the
                                    globe.
                                </p>
                                <br />
                                <p>
                                    Our extraordinary work of art, advanced innovation, and
                                    extraordinary administrations. We as of now serve poker firms
                                    around the world, with a group of onlookers that covers the USA,
                                    UK, Africa, and various other European and Asian countries. Making
                                    gaming and exciting items is what we do best. Our mission is to
                                    make the best poker stages in the world. To fulfill this, our
                                    group makes utilize of progressed equipment.
                                </p>
                                <br />
                                <p>
                                    Our essential center is on creating gaming and amusement
                                    merchandise, and we are committed to creating the best poker
                                    stages in the world. Our group employments progressed apparatuses
                                    to fulfill this. Our commitment to giving our clients the best
                                    comes about implies that we make beyond any doubt, and premium
                                    poker program for Macs within the designated budget and period.
                                    You may be certain that security and security are our basic needs
                                    when playing poker.
                                </p>
                                <br />
                                <p>
                                    Get in touch with us right now to dispatch your poker commerce
                                    with the{" "}
                                    <a href="https://www.mobzway.com/blog/kick-start-your-online-poker-business-during-lockdown">
                                        best poker diversion improvement firm in the business
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------why choose poker us------------------*/}
            <section className="why_choose pokermobzway">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 manual_pad">
                            <div className="sub_title_outer">
                                <h3 className="sub_title ft_40">
                                    <span className="yellow">Why</span>{" "}
                                    <span className="black">
                                        {" "}
                                        CHOOSE MOBZWAY'S
                                        <br />
                                        pOker SOFTWARE?
                                    </span>
                                </h3>
                            </div>
                            <ul className="why_content">
                                <li>Product Designed by a Team of poker experts</li>
                                <li>
                                    Top Programmers to build and enhance the games to ensure best
                                    quality
                                </li>
                                <li>Supports all the popular Poker Variations</li>
                                <li>
                                    Solutions that work on all platforms such as Web, iOS and Android
                                </li>
                                <li>
                                    24x7 monitoring &amp; support team to ensure 99.99% game update
                                </li>
                                <li>Product delivered with your local language support</li>
                                <li>Cost-effective and time-saving gaming solutions</li>
                                <li>World class security against frauds &amp; attacks</li>
                            </ul>
                            <div className="btn_outer">
                                <a
                                    data-toggle="modal"
                                    data-target="#requestQoute"
                                    id="requestPokersoftware5"
                                    className="contact_btn"
                                >
                                    Request a Quote
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="eng_img_content">
                                <img
                                    src="/assets/images/models_img.webp"
                                    alt="Best Poker Software Provider"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="asked_question  position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div
                                className="sub_title_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">POKER</span>{" "}
                                    <span className="black">Software FAQS</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bs-example">
                                <div className="accordion" id="accordionExample">
                                    <div
                                        className="card"
                                        style={{
                                            border: "none!important",
                                            background: "#f7f7f7!important"
                                        }}
                                    >
                                        <div className="card-header" id="headingOne">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link text-dark collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapseOne"
                                                >
                                                    <i className="fa fa-plus" />
                                                    How do I start my own poker website in India?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseOne"
                                            className="collapse"
                                            aria-labelledby="headingOne"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    Mobzway allows you to kick-start your own poker website in
                                                    India by providing you with the best customized poker
                                                    website that is duly tested and ready to use. The experts
                                                    at Mobzway provide you consultation in setting up your
                                                    poker live.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card"
                                        style={{
                                            border: "none!important",
                                            background: "#f7f7f7!important"
                                        }}
                                    >
                                        <div className="card-header" id="headingTwo">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link collapsed text-dark"
                                                    data-toggle="collapse"
                                                    data-target="#collapseFive"
                                                >
                                                    <i className="fa fa-plus" />
                                                    What are the variations of poker games you are offering?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseFive"
                                            className="collapse"
                                            aria-labelledby="headingTwo"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    We offer different variants of poker games which include
                                                    Holdem Poker, 5 Card Omaha, PLO, Sit &amp; Go.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card"
                                        style={{
                                            border: "none!important",
                                            background: "#f7f7f7!important"
                                        }}
                                    >
                                        <div className="card-header" id="headingThree">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link collapsed text-dark"
                                                    data-toggle="collapse"
                                                    data-target="#collapseTwo"
                                                >
                                                    <i className="fa fa-plus" />
                                                    What are all the legal permissions required to start a
                                                    poker website in India?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseTwo"
                                            className="collapse"
                                            aria-labelledby="headingThree"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    For detailed guidance on legal permissions required to
                                                    start a poker website in India, get in touch with the
                                                    iGaming consultants at Mobzway. They will help you in
                                                    setting up your dedicated website right at the beginning
                                                    and will handover a ready-to-use website to kick-start
                                                    your iGaming business. Our experts will also guide you in
                                                    getting your website duly registered along with all legal
                                                    formalities.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card"
                                        style={{
                                            border: "none!important",
                                            background: "#f7f7f7!important"
                                        }}
                                    >
                                        <div className="card-header" id="headingFour">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link collapsed text-dark"
                                                    data-toggle="collapse"
                                                    data-target="#collapseThree"
                                                >
                                                    <i className="fa fa-plus" />
                                                    What is the procedure to get a license for an online poker
                                                    software in India?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseThree"
                                            className="collapse"
                                            aria-labelledby="headingFour"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    Connect with poker website experts at Mobzway to get
                                                    detailed guidance on getting a license to run an online
                                                    poker website in India.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card"
                                        style={{
                                            border: "none!important",
                                            background: "#f7f7f7!important"
                                        }}
                                    >
                                        <div className="card-header" id="headingFive">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link text-dark collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapseFour"
                                                >
                                                    <i className="fa fa-plus" />
                                                    How much money can be earned through an online poker
                                                    website?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseFour"
                                            className="collapse"
                                            aria-labelledby="headingFive"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    The earnings through online poker may vary website to
                                                    website depending on the number of subscribed/paid
                                                    players, features offered, quality of the games, audience
                                                    regions and a lot more factors. However, to ascertain
                                                    estimates on tentative earnings that you make by setting
                                                    up your own online poker website, get in touch with us for
                                                    a detailed business consultation.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bs-example">
                                <div className="accordion" id="accordionExample1">
                                    <div
                                        className="card"
                                        style={{
                                            border: "none!important",
                                            background: "#f7f7f7!important"
                                        }}
                                    >
                                        <div className="card-header" id="headingSix">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link text-dark collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapse1"
                                                >
                                                    <i className="fa fa-plus" />
                                                    Will you provide a poker website or also mobile apps?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapse1"
                                            className="collapse"
                                            aria-labelledby="headingSix"
                                            data-parent="#accordionExample1"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    We offer poker solutions both in the form of websites as
                                                    well as native mobile apps. Our websites are created using
                                                    HTML 5 technology which makes them responsive and adaptive
                                                    to varied screen sizes and web browsers. Likewise, using
                                                    similar advanced technology, we create poker mobile
                                                    applications that are compatible with Android, iOS, and
                                                    Windows mobile devices.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card"
                                        style={{
                                            border: "none!important",
                                            background: "#f7f7f7!important"
                                        }}
                                    >
                                        <div className="card-header" id="headingSeven">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link collapsed text-dark"
                                                    data-toggle="collapse"
                                                    data-target="#collapseten"
                                                >
                                                    <i className="fa fa-plus" />
                                                    Will you take care of payment gateway integration or I
                                                    have to take care of it?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseten"
                                            className="collapse"
                                            aria-labelledby="headingSeven"
                                            data-parent="#accordionExample1"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    You need not worry about the payment gateway integration
                                                    as we provide complete integration of the payment gateway.
                                                    We offer payment gateway integration that can accept
                                                    payments through net banking, cards, wallets, UPI &amp;
                                                    more.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card"
                                        style={{
                                            border: "none!important",
                                            background: "#f7f7f7!important"
                                        }}
                                    >
                                        <div className="card-header" id="headingEight">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link collapsed text-dark"
                                                    data-toggle="collapse"
                                                    data-target="#collapseSeven"
                                                >
                                                    <i className="fa fa-plus" />
                                                    What kind of server do I need to have to run an online
                                                    poker game?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseSeven"
                                            className="collapse"
                                            aria-labelledby="headingEight"
                                            data-parent="#accordionExample1"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    You must have a secured server that doesn’t allow frauds,
                                                    ensures data privacy, and most importantly runs your
                                                    website seamlessly. With us, you don’t have to worry about
                                                    servers and other technical installations as we ensure the
                                                    incorporation of robust servers and systems while setting
                                                    up your online poker game.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card"
                                        style={{
                                            border: "none!important",
                                            background: "#f7f7f7!important"
                                        }}
                                    >
                                        <div className="card-header" id="headingNine">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link collapsed text-dark"
                                                    data-toggle="collapse"
                                                    data-target="#collapse5"
                                                >
                                                    <i className="fa fa-plus" />
                                                    Will you also provide an admin panel to manage the poker's
                                                    website?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapse5"
                                            className="collapse"
                                            aria-labelledby="headingNine"
                                            data-parent="#accordionExample1"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    Yes, we do provide a customized admin dashboard as per
                                                    your requirements to help you manage your poker website.
                                                    Using the admin panel you can assign different roles to
                                                    your staff and manage other business tasks efficiently.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="card"
                                        style={{
                                            border: "none!important",
                                            background: "#f7f7f7!important"
                                        }}
                                    >
                                        <div className="card-header" id="headingTen">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link collapsed text-dark"
                                                    data-toggle="collapse"
                                                    data-target="#collapse7"
                                                >
                                                    <i className="fa fa-plus" />
                                                    Is your poker website secure enough to handle the frauds
                                                    or hacking?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapse7"
                                            className="collapse"
                                            aria-labelledby="headingTen"
                                            data-parent="#accordionExample1"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    Yes! Our poker website providers ensure that robust and
                                                    secure systems are in place so that the site owners do not
                                                    have to worry about fraud or hacking.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn_outer text-center mt-3 mt-md-5">
                        <center>
                            {" "}
                            <a
                                data-toggle="modal"
                                data-target="#requestQoute"
                                id="requestPokersoftware6"
                                className="contact_btn"
                            >
                                Ask a question
                            </a>
                        </center>
                    </div>
                </div>
            </section>
            {/*---------product you may like------------*/}
            <section
                className="product_may"
                style={{
                    backgroundImage: 'url("/assets/images/comman_bg.png")'
                }}
            >
                <div className="container ">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="sub_title ft_40">
                                <span className="yellow">Product</span>{" "}
                                <span className="black">You Also may like</span>
                            </h3>
                        </div>
                        <div className="col-md-4">
                            <div className="pr_wrp text-center">
                                <div className="pro_itemth">
                                    <a href="/rummy-software/">
                                        <div className="item_inner position-relative">
                                            <img
                                                alt="Rummy Game"
                                                src="/assets/images/Product_Rummy.png"
                                            />
                                        </div>
                                        <div className="title_pltfm">Rummy Software</div>
                                        <p className="content">
                                            The highly talented team of rummy software Experts at Mobzway
                                            ensures that very engaging and customized solutions of this
                                            “game of skill” are offered to the gaming clients. All the
                                            popular versions of Rummy are provided by Mobzway as per
                                            client’s requirements.
                                        </p>
                                    </a>
                                </div>
                                {/* <div class="btn_outer mt-3">
                  <a href="/rummy-software/" class="contact_btn">Read More</a>
              </div> */}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pr_wrp text-center">
                                <div className="pro_itemth">
                                    <a href="/casino-software/">
                                        <div className="item_inner position-relative">
                                            <img
                                                alt="Casino Game"
                                                src="/assets/images/Product_Casino.png"
                                            />
                                        </div>
                                        <div className="title_pltfm">Casino Software</div>
                                        <p className="content">
                                            For the online casino game entrepreneurs and businesses,
                                            Mobzway offers customized casino game solutions. All the
                                            popular casino games like Roulette, Blackjack, Slot, Baccarat,
                                            etc. are designed at our gaming studio as per your business
                                            needs.
                                        </p>
                                    </a>
                                </div>
                                {/* <div class="btn_outer mt-3">
                   <a href="/casino-software/" class="contact_btn">Read More</a>
               </div> */}
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="pr_wrp text-center">
                                <div className="pro_itemth">
                                    <a href="/teen-patti-software/">
                                        <div className="item_inner position-relative">
                                            <img
                                                alt="Teen Patti Game"
                                                src="/assets/images/Product_Teenpatti.png"
                                            />
                                        </div>
                                        <div className="title_pltfm">Teen Patti Software</div>
                                        <p className="content">
                                            Start your own online teen patti business with our customized
                                            teen patti solution which offers all variations of the Indian
                                            poker. Enjoy feature-rich teen patti software designed to let
                                            your players enjoy the game same as the real one along with
                                            allowing you an easy business operation.
                                        </p>
                                    </a>
                                </div>
                                {/* <div class="btn_outer mt-3">
                   <a href="/teen-patti-software/" class="contact_btn">Read More</a>
               </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
