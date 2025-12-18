import React from 'react'
import BannerForm from '../components/BannerForm'
import Script from 'next/script';


export const metadata = {
    title: "Casino Software Development Company in India | Hire Casino Game Developers",
    description:
        "Are you looking for a casino software development company in India? Buy the best casino game app solutions from our dedicated casino software developers.",
    keywords:
        "casino software development company, casino game software development, casino software developers, buy online casino software, online casino software providers India",
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    alternates: { canonical: "https://www.mobzway.com/casino-software/" },

    openGraph: {
        locale: "en_US",
        type: "website",
        title: "Casino Software Development Company in India | Hire Casino Game Developers",
        description:
            "Are you looking for a casino software development company in India? Buy the best casino game app solutions from our dedicated casino game developers.",
        url: "https://www.mobzway.com/casino-software/",
        siteName: "Mobzway Technologies",
        images: [
            {
                url: "https://www.mobzway.com/assets/images/casino_hire_1.png",
                width: 815,
                height: 821,
                alt: "casino_software",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Casino Software Development Company in India | Hire Casino Game Developers",
        description:
            "Are you looking for a casino software development company in India? Buy the best casino game app solutions from our dedicated casino game developers.",
        site: "@mobzway",
        creator: "@mobzway",
        images: "https://www.mobzway.com/assets/images/casino_hire_1.png",
    },
};

export default function CasinoSoftware() {
    return (
        <>

            {/* Google Tag Manager */}
            {/* <Script id="gtm-casino" strategy="afterInteractive">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id=GTM-MJ6ZG9R'+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MJ6ZG9R');`}
            </Script> */}

            {/* JSON-LD Schema */}
            <Script type="application/ld+json" id="casino-schema">
                {JSON.stringify({
                    "@context": "http://schema.org",
                    "@type": "Product",
                    "name": "Casino Software",
                    "brand": "Mobzway",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "5",
                        "ratingCount": "569",
                    },
                })}
            </Script>

            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n.desktopversion .imgminheight {\n    margin-top: 25px;\n    min-height: 62px;\n}\n\n.new-one {\n    width: 80px;\n}\n\n.plateform-card {\n    height: 100%;\n}\n\n.banner-forms {\n    top: 55%;\n}\n\n.backoffice .card img,\n#game,\n#tournament,\n#game-history,\n#pro,\n#ana,\n#reports,\n#notification {\n    width: 60px !important;\n}\n\n.card-new img {\n    width: 60px !important;\n}\n\n.rewards {\n    margin-top: 30px !important;\n    position: relative;\n    top: 0;\n}\n\n#anti {\n    width: 60px !important;\n}\n\n#card2 {\n    height: 100% !important;\n}\n\n.nav_content {\n    color: #000;\n}\n\n.tabos_outer .nav-tabs .nav-link {\n    background: #fff;\n    color: #202020;\n    border-radius: 0;\n    border-right-width: 0;\n}\n\n.tabos_outer .nav-tabs .nav-link:last-child {\n    border-right-width: 2px;\n    border-radius: 0px 10px 0px 0;\n}\n\n.tabos_outer .nav-tabs .nav-link:first-child {\n    border-radius: 10px 0px 0px 0;\n}\n\n.item_outer_block li {\n    width: calc(100% / 3);\n    margin-bottom: 0px;\n}\n\n.pro_inner .ofr_title+img {\n    height: 300px;\n    object-fit: cover;\n}\n\n.featureGamesonlineBox {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    grid-gap: 2rem;\n}\n\n.featureGamesonlineBox>li {\n    height: auto;\n    padding: 1% 0;\n    display: flex;\n}\n\n.featureGamesonlineBox>li>div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n}\n\n.featureGamesonlineBox .col3 {\n    width: 30%;\n}\n\n.featureGamesonlineBox .col7 {\n    width: 70%;\n}\n\n.matterBox {\n    width: 100%;\n    padding-left: 5%;\n}\n\n.featureGamesonlineBox h4 {\n    color: #000;\n    font-size: 1.8rem;\n    font-weight: 400;\n    margin-bottom: 3%;\n    font-weight: 700;\n}\n\n.featureGamesonlineBox p {\n    width: 100%;\n}\n\n.featureGamesonlineBox .featureGamesonlineIcon {\n    border: 1px solid rgba(0, 0, 0, .125) !important;\n    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;\n    width: 126px;\n    height: 126px;\n    border-radius: 50%;\n    background: #fff;\n    padding: 25px;\n}\n\n.overlay_item,\n.pro_inner::after,\n.ofr_title p {\n    display: none;\n}\n\n.pro_inner .ofr_title+img {\n    height: 100%;\n    object-fit: cover;\n}\n\n.liveGameIcon {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 80%;\n    left: 15px;\n    right: 0;\n    margin: auto;\n}\n\n.liveGameIcon {\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    width: 85%;\n    left: 32px;\n    right: 0;\n    margin: auto;\n}\n\n.live-spin-block {\n    position: absolute;\n    top: 42%;\n    left: -32px;\n    z-index: 3;\n}\n\n.live-spin-block img {\n    width: 130px;\n}\n\n.live-spin-block img:last-child {\n    width: 254px;\n    position: absolute;\n    top: 87%;\n    left: 0;\n}\n\n.shadow-img {\n    position: absolute;\n    top: -22px;\n    width: 130%;\n    z-index: 1;\n    left: -41px;\n}\n\n.anim_one {\n    position: relative;\n    z-index: 2;\n}\n\n.liveGameIcon-inner {\n    left: 0;\n    width: 100%;\n    top: 0;\n    bottom: 0;\n    transform: inherit;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n\n@media (min-width: 767px) {\n    .wel_come_container {\n        width: 70%;\n    }\n\n}\n\n@media (max-width: 767px) {\n\n    .featureGamesonlineBox {\n        grid-template-columns: repeat(1, 1fr);\n        grid-template-rows: repeat(6, 1fr);\n        padding: 0 15px;\n    }\n\n    .featureGamesonlineBox .featureGamesonlineIcon {\n        width: 96px;\n        height: 96px;\n        padding: 10px;\n    }\n}\n\n@media (min-width: 767px) {\n\n\n    .heroSlider {\n        padding-top: 150px;\n        padding-bottom: 50px;\n    }\n\n    .hero_cta_block {\n        bottom: 24%;\n    }\n\n    .heroSlider img {\n        height: auto;\n    }\n\n    .heroSlider .col-md-7 {\n        padding-top: 3rem;\n    }\n\n    /* .hero__title {\npadding-top: 50px;\n} */\n\n    /* .heroSlider .col-md-7 {\n            padding-bottom: 140px;\n        } */\n}\n"
                }}
            />
            {/*Banner*/}
            <div
                className="heroSlider container-fluid"
                style={{
                    backgroundImage: 'url("/assets/images/banner_c01.jpg")',
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
                                                        Casino Game Development Company
                                                    </h1>
                                                    <img
                                                        className="d-block d-md-none mb-3 w-100"
                                                        src="/assets/images/casino-software/casinoGameDevelopmentCompany.webp"
                                                        alt="Casino Game Development Company"
                                                    />
                                                    <div className="hero__description">
                                                        For casino gambling, do you need a top engineer? Select
                                                        Mobzway. We provide advanced mobile and online casino
                                                        settings that guarantee benefit, and customized casino
                                                        games.
                                                    </div>
                                                </div>
                                                <div className="col-md-5 d-none d-md-block">
                                                    <img
                                                        src="/assets/images/casino-software/casinoGameDevelopmentCompany.webp"
                                                        alt="Casino Game Development Company"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <h2 data-hk="s40-1-12" className="hero__title">
                                                        Roulette
                                                    </h2>
                                                    <img
                                                        className="d-block d-md-none mb-3 w-100"
                                                        src="/assets/images/casino-software/roulette.webp"
                                                        alt="Rummy software app development company"
                                                    />
                                                    <div className="hero__description">
                                                        Are you interested in making a roulette game similar to
                                                        those seen at high-end casinos? No need to search any
                                                        further! Together with Mobzway game providers, create an
                                                        engaging and user-friendly interface. Our years of
                                                        experience allow us to provide the best casino game
                                                        creation.
                                                    </div>
                                                </div>
                                                <div className="col-md-5 d-none d-md-block">
                                                    <img
                                                        src="/assets/images/casino-software/roulette.webp"
                                                        alt="Rummy software app development company"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <h2 data-hk="s40-1-12" className="hero__title">
                                                        Baccarat
                                                    </h2>
                                                    <img
                                                        className="d-block d-md-none mb-3 w-100"
                                                        src="/assets/images/casino-software/baccarat.webp"
                                                        alt="A23 Rummy game software app development"
                                                    />
                                                    <div className="hero__description">
                                                        Want to create a Baccarat game that can compete with the
                                                        best in upscale casinos? This is the place where your
                                                        search stops! Work with our knowledgeable staff to
                                                        create an engaging and simple-to-use gaming experience.
                                                    </div>
                                                </div>
                                                <div className="col-md-5 d-none d-md-block">
                                                    <img
                                                        src="/assets/images/casino-software/baccarat.webp"
                                                        alt="A23 Rummy software app development"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <h2 data-hk="s40-1-12" className="hero__title">
                                                        Andar Bahar
                                                    </h2>
                                                    <img
                                                        className="d-block d-md-none mb-3 w-100"
                                                        src="/assets/images/casino-software/andar-bahar.webp"
                                                        alt="Rummy Circle software app development"
                                                    />
                                                    <div className="hero__description">
                                                        The popular Indian card game Andar Bahar provides
                                                        players of all skill levels with fast-paced excitement.
                                                        Place a wager on whether the joker card will show up on
                                                        the outside (Bahar) or inside (Andar).
                                                    </div>
                                                </div>
                                                <div className="col-md-5 d-none d-md-block">
                                                    <img
                                                        src="/assets/images/casino-software/andar-bahar.webp"
                                                        alt="Junglee Rummy software app development"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <h2 data-hk="s40-1-12" className="hero__title">
                                                        Slot Frozen
                                                    </h2>
                                                    <img
                                                        className="d-block d-md-none mb-3 w-100"
                                                        src="/assets/images/casino-software/7-up-down.webp"
                                                        alt="Rummy circle software app development"
                                                    />
                                                    <div className="hero__description">
                                                        Take advantage of exciting details like bonus rounds,
                                                        wilds, scatters, and free spins, all of which are
                                                        intended to improve gameplay and increase your chances
                                                        of hitting it rich. Take in the breathtaking visuals and
                                                        engage audio as they carry you away to an amazing frozen
                                                        world.
                                                    </div>
                                                </div>
                                                <div className="col-md-5 d-none d-md-block">
                                                    <img
                                                        src="/assets/images/casino-software/7-up-down.webp"
                                                        alt="Rummy circle software app development"
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
                                                <button
                                                    className="heroSlide-dots"
                                                    type="button"
                                                    data-target="#heroSlide4_1"
                                                    data-slide-to={2}
                                                    aria-label="Slide 3"
                                                />
                                                <button
                                                    className="heroSlide-dots"
                                                    type="button"
                                                    data-target="#heroSlide4_1"
                                                    data-slide-to={3}
                                                    aria-label="Slide 4"
                                                />
                                                {/* 
    <button class="heroSlide-dots" type="button" data-target="#heroSlide4_1" data-slide-to="6" aria-label="Slide 7"></button> */}
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
                        {/*?php include 'banner-form.php' ?*/}
                        <BannerForm />
                    </div>
                </div>
            </div>
            {/* <section class="banner pokers position-relative"
    style="background-image: url('/assets/images/banner_c01.jpg');">
    <div class="overlay"></div>
    <div class="wel_come_container">
  <h1 class="welcome_text">
      CASINO SOFTWARE<br> DEVELOPMENT COMPANY
  </h1>
  <p class="sml_text">
      Are you searching for the best online casino software development company? If yes, your search for the top
      casino software provider comes to a halt here! We’re Mobzway, one of the leading online casino game
      developers in India and across the globe. Our online casino software solution gives you an excellent
      opportunity to expand your casino business. We’re recognized for casino software development in India, USA & UK.
      Hire talented casino app developers to upgrade or build game solutions. Connect with us for expert
      consultation and request quotes right away.
  </p>
  <div class="btn_outer">
      <a data-toggle="modal" data-target="#requestQoute" id="requestCasinosoftware1" class="contact_btn">Request a
          Demo</a>
  </div>

    </div>
    
</section> */}
            <section className="bg-light pb-2 bg-lightnew">
                <div className="container c-1">
                    <div className="row justify-content-center">
                        <div className="col-md-3 mt-3 text-center">
                            <h4 className="plus">500+</h4>
                            <h3 className="counters">
                                <img
                                    alt="best online rummy game app"
                                    src="/assets/images/game-launched1.png"
                                    className="games-launched"
                                />
                                Game Launched
                            </h3>
                        </div>
                        <div className="col-md-3 mt-3 text-center">
                            <h4 className="plus">300+</h4>
                            <h3 className="counters">
                                <img
                                    alt="best online rummy game app"
                                    src="/assets/images/satisfied-customers1.png"
                                    className="satisfied-customers"
                                />
                                Satisfied customers
                            </h3>
                        </div>
                        <div className="col-md-3 mt-3 text-center client">
                            <h4 className="plus">97%</h4>
                            <h3 className="counters">
                                <img
                                    alt="best online rummy game app"
                                    src="/assets/images/client-retension1.png"
                                    className="client-retension"
                                />
                                Client retention
                            </h3>
                        </div>
                        <div className="col-md-3 mt-3 text-center play">
                            <h4 className="plus">100k+</h4>
                            <h3 className="counters">
                                <img
                                    alt="best online rummy game app"
                                    src="/assets/images/players1.png"
                                    className="players"
                                />
                                Players
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            {/* Games We Provide */}
            <section className="games_weprovide">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div
                                className="sub_title_outer aos-init aos-animate"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">Games</span>
                                    <span className="black">We provide</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="tabos_outer">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a
                                            className="nav-item nav-link active"
                                            id="nav-home-tab"
                                            data-toggle="tab"
                                            href="#nav-home"
                                            role="tab"
                                            aria-controls="nav-home"
                                            aria-selected="true"
                                        >
                                            Live Dealer
                                        </a>
                                        <a
                                            className="nav-item nav-link"
                                            id="nav-profile-tab"
                                            data-toggle="tab"
                                            href="#nav-profile"
                                            role="tab"
                                            aria-controls="nav-profile"
                                            aria-selected="false"
                                        >
                                            Board Games
                                        </a>
                                        <a
                                            className="nav-item nav-link"
                                            id="nav-contact-tab"
                                            data-toggle="tab"
                                            href="#nav-contact"
                                            role="tab"
                                            aria-controls="nav-contact"
                                            aria-selected="false"
                                        >
                                            Table Games
                                        </a>
                                        <a
                                            className="nav-item nav-link"
                                            id="nav-profile-tab"
                                            data-toggle="tab"
                                            href="#nav-profileOne"
                                            role="tab"
                                            aria-controls="nav-profile"
                                            aria-selected="false"
                                        >
                                            Slot Games
                                        </a>
                                        <a
                                            className="nav-item nav-link"
                                            id="nav-contact-tab"
                                            data-toggle="tab"
                                            href="#nav-contactTwo"
                                            role="tab"
                                            aria-controls="nav-contact"
                                            aria-selected="false"
                                        >
                                            Wheel Games
                                        </a>
                                    </div>
                                </nav>
                                <div
                                    className="tab-content"
                                    id="nav-tabContent"
                                    style={{
                                        background: "#fff",
                                        border: "2px solid #fcd10a",
                                        borderTop: 0,
                                        borderRadius: "0px 0px 10px 10px",
                                        marginBottom: 35
                                    }}
                                >
                                    <div
                                        className="tab-pane fade show active text-center"
                                        id="nav-home"
                                        role="tabpanel"
                                        aria-labelledby="nav-home-tab"
                                    >
                                        <h3 className="tb_title position-relative ft_40">
                                            Live Dealer
                                        </h3>
                                        <p className="nav_content">
                                            Let your online live dealer casino game players enjoy the most
                                            impressive live dealer games created by our online casino
                                            software developers. We build famous live dealer games using
                                            the most advanced gaming technology.
                                        </p>
                                        <ul className="item_outer_block d-flex justify-content-center w-100 flex-wrap">
                                            <li>
                                                <a
                                                    href="/roulette-game-development/"
                                                    className="product_page_link"
                                                >
                                                    <div className="pro_item">
                                                        <div className="pro_inner">
                                                            <div className="overlay_item" />
                                                            <div className="ofr_title">
                                                                <p>Live Roulette</p>
                                                            </div>
                                                            <img
                                                                src="/assets/images/animation/1_live Roulette.png"
                                                                alt="Live Roulette"
                                                            />
                                                            <div className="liveGameIcon liveGameIcon-inner">
                                                                <div className="anim_one">
                                                                    <img
                                                                        src="/assets/images/live-dealer/filess_live-02.webp"
                                                                        alt="Live Roulette"
                                                                        className="rouleteSpinImg"
                                                                    />
                                                                </div>
                                                                {/* <div class="shadow-img">
                                                  <img src="/assets/images/live-dealer/filess_live-02.webp"
                                                      alt="Live Roulette" class="w-100" />
                                              </div> */}
                                                                {/* <div class="live-spin-block">
                                                  <img src="/assets/images/1a-02 (4).png"
                                                      data-aos="fade-right" data-aos-duration="1500"
                                                      data-aos-once="true" alt="Live Roulette" />
                                                  <img src="/assets/images/1a-03 (2).png"
                                                      data-aos="fade-left" data-aos-duration="1500"
                                                      data-aos-once="true" alt="Live Roulette">
                                              </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/blackjack-game-development/"
                                                    className="product_page_link"
                                                >
                                                    <div className="pro_item">
                                                        <div className="pro_inner">
                                                            <div className="overlay_item" />
                                                            <div className="ofr_title">
                                                                <p>Live Blackjack</p>
                                                            </div>
                                                            <img
                                                                src="/assets/images/live-dealer/filess_live-11.webp"
                                                                alt="Live Blackjack"
                                                            />
                                                            <div className="liveGameIcon liveGameIcon-inner">
                                                                <div className="anim_two">
                                                                    <img
                                                                        src="/assets/images/live-dealer/filess_live-01.webp"
                                                                        alt="Live Roulette"
                                                                        className="rouleteSpinImg"
                                                                    />
                                                                </div>
                                                            </div>
                                                            {/* <div class="game_icons">
                                              <div class="anim_two"><img
                                                      src="/assets/images/live_blackjack_icon.png"
                                                      alt="Live Blackjack"></div>
                                          </div> */}
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/baccarat-game-development/"
                                                    className="product_page_link"
                                                >
                                                    <div className="pro_item">
                                                        <div className="pro_inner">
                                                            <div className="overlay_item" />
                                                            <div className="ofr_title">
                                                                <p>Live Baccarat</p>
                                                            </div>
                                                            <img
                                                                src="/assets/images/live-dealer/filess_live-09.webp"
                                                                alt="Live Blackjack"
                                                            />
                                                            <div className="liveGameIcon liveGameIcon-inner">
                                                                <div className="anim_three">
                                                                    <img
                                                                        src="/assets/images/live-dealer/filess_live-03.webp"
                                                                        alt="Live Roulette"
                                                                        className="rouleteSpinImg"
                                                                    />
                                                                </div>
                                                            </div>
                                                            {/* <div class="game_icons">
                                              <div class="anim_three"><img
                                                      src="/assets/images/animation/21-15.png"
                                                      alt="Live  Baccarat"></div>
                                          </div> */}
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Dragon Tiger</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/live-dealer/filess_live-10.webp"
                                                            alt="Live Blackjack"
                                                        />
                                                        <div className="liveGameIcon liveGameIcon-inner">
                                                            <div className="anim_one">
                                                                <img
                                                                    src="/assets/images/live-dealer/filess_live-04.webp"
                                                                    alt="Live Roulette"
                                                                    className="rouleteSpinImg"
                                                                />
                                                            </div>
                                                        </div>
                                                        {/* <div class="game_icons">
                                          <div class="anim_one"><img
                                                  src="/assets/images/animation/21-16.png"
                                                  alt="Dragon Tiger"></div>
                                      </div> */}
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Three Card</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/live-dealer/filess_live-12.webp"
                                                            alt="Live Blackjack"
                                                        />
                                                        <div className="liveGameIcon liveGameIcon-inner">
                                                            <div className="anim_two">
                                                                <img
                                                                    src="/assets/images/live-dealer/filess_live-06.webp"
                                                                    alt="Live Roulette"
                                                                    className="rouleteSpinImg"
                                                                />
                                                            </div>
                                                        </div>
                                                        {/* <div class="game_icons">
                                          <div class="anim_two"><img
                                                  src="/assets/images/animation/21-18.png"
                                                  alt="Three Card"></div>
                                      </div> */}
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a
                                                    href="/andar-bahar-game-development/"
                                                    className="product_page_link"
                                                >
                                                    <div className="pro_item">
                                                        <div className="pro_inner">
                                                            <div className="overlay_item" />
                                                            <div className="ofr_title">
                                                                <p>Andar Bahar</p>
                                                            </div>
                                                            <img
                                                                src="/assets/images/live-dealer/filess_live-11.webp"
                                                                alt="Live Blackjack"
                                                            />
                                                            <div className="liveGameIcon liveGameIcon-inner">
                                                                <div className="anim_three">
                                                                    <img
                                                                        src="/assets/images/live-dealer/filess_live-05.webp"
                                                                        alt="Live Roulette"
                                                                        className="rouleteSpinImg"
                                                                    />
                                                                </div>
                                                            </div>
                                                            {/* <div class="game_icons">
                                              <div class="anim_three"><img
                                                      src="/assets/images/animation/21-12.png"
                                                      alt="Andar Bahar"></div>
                                          </div> */}
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="tab-pane fade text-center"
                                        id="nav-profile"
                                        role="tabpanel"
                                        aria-labelledby="nav-contact-tab"
                                    >
                                        <h3 className="tb_title position-relative ft_40">
                                            Board Games
                                        </h3>
                                        <p className="nav_content">
                                            Our talented developers create various impeccable board games
                                            that can keep the casino enthusiasts engaged for a longer
                                            tenure and let you earn more money in the casino business.
                                        </p>
                                        <ul className="item_outer_block d-flex justify-content-center w-100 flex-wrap">
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Sicbo</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/sicbo_bg.png"
                                                            alt="Sicbo"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_one">
                                                                <img
                                                                    src="/assets/images/sicbo_icon.png"
                                                                    alt="Sicbo"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>12 Cards</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/12-card_bg.png"
                                                            alt="12 Cards"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_two">
                                                                <img
                                                                    src="/assets/images/12-card_icon.png"
                                                                    alt="12 Cards"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>16 Cards</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/16-card_bg.png"
                                                            alt="16 Cards"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_three">
                                                                <img
                                                                    src="/assets/images/16-card_icon.png"
                                                                    alt="16 Cards"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Lucky Horse</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/virtual-horse_bg.png"
                                                            alt="Lucky Horse"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_one">
                                                                <img
                                                                    src="/assets/images/virtual-horse_icon.png"
                                                                    alt="Lucky Horse"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a
                                                    href="/ludo-game-development/"
                                                    className="product_page_link"
                                                >
                                                    <div className="pro_item">
                                                        <div className="pro_inner">
                                                            <div className="overlay_item" />
                                                            <div className="ofr_title">
                                                                <p>Ludo</p>
                                                            </div>
                                                            <img
                                                                src="/assets/images/ludo_bg.png"
                                                                alt="Ludo"
                                                            />
                                                            <div className="game_icons">
                                                                <div className="anim_two">
                                                                    <img
                                                                        src="/assets/images/ludo_icon.png"
                                                                        alt="Ludo"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/bingo-software/"
                                                    className="product_page_link"
                                                >
                                                    <div className="pro_item">
                                                        <div className="pro_inner">
                                                            <div className="overlay_item" />
                                                            <div className="ofr_title">
                                                                <p>Bingo</p>
                                                            </div>
                                                            <img
                                                                src="/assets/images/bingo-bg.png"
                                                                alt="Bingo"
                                                            />
                                                            <div className="game_icons">
                                                                <div className="anim_three">
                                                                    <img
                                                                        src="/assets/images/bingo-icon.png"
                                                                        alt="Bingo"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/pool-game-development/"
                                                    className="product_page_link"
                                                >
                                                    <div className="pro_item">
                                                        <div className="pro_inner">
                                                            <div className="overlay_item" />
                                                            <div className="ofr_title">
                                                                <p>8 Ball Pool</p>
                                                            </div>
                                                            <img
                                                                src="/assets/images/8_ball_bg.png"
                                                                alt="8 Ball Pool"
                                                            />
                                                            <div className="game_icons">
                                                                <div className="anim_one">
                                                                    <img
                                                                        src="/assets/images/8_ball_icon.png"
                                                                        alt="8 Ball Pool"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="tab-pane fade text-center"
                                        id="nav-contact"
                                        role="tabpanel"
                                        aria-labelledby="nav-profile-tab"
                                    >
                                        <h3 className="tb_title position-relative ft_40">
                                            Table Games
                                        </h3>
                                        <p className="nav_content">
                                            At our gaming studio, our online casino experts create all
                                            popular casino table games like Baccarat, Three Card Poker,
                                            Craps, Roulette, Blackjack, etc., using the next-generation
                                            iGaming technology.
                                        </p>
                                        <ul className="item_outer_block d-flex justify-content-center w-100 flex-wrap">
                                            <li>
                                                <a
                                                    href="/rummy-software/"
                                                    className="product_page_link"
                                                >
                                                    <div className="pro_item">
                                                        <div className="pro_inner">
                                                            <div className="overlay_item" />
                                                            <div className="ofr_title">
                                                                <p>Rummy</p>
                                                            </div>
                                                            <img
                                                                src="/assets/images/rummy_bg.png"
                                                                alt="Rummy"
                                                            />
                                                            <div className="game_icons">
                                                                <div className="anim_one">
                                                                    <img
                                                                        src="/assets/images/rummy_icon.png"
                                                                        alt="Rummy"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/poker-software/"
                                                    className="product_page_link"
                                                >
                                                    <div className="pro_item">
                                                        <div className="pro_inner">
                                                            <div className="overlay_item" />
                                                            <div className="ofr_title">
                                                                <p>Poker</p>
                                                            </div>
                                                            <img
                                                                src="/assets/images/poker_bg.png"
                                                                alt="Poker"
                                                            />
                                                            <div className="game_icons">
                                                                <div className="anim_two">
                                                                    <img
                                                                        src="/assets/images/poker_icon.png"
                                                                        alt="Poker"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/teen-patti-software/"
                                                    className="product_page_link"
                                                >
                                                    <div className="pro_item">
                                                        <div className="pro_inner">
                                                            <div className="overlay_item" />
                                                            <div className="ofr_title">
                                                                <p>Teen Patti</p>
                                                            </div>
                                                            <img
                                                                src="/assets/images/3patti_bg.png"
                                                                alt="Teen Patti"
                                                            />
                                                            <div className="game_icons">
                                                                <div className="anim_three">
                                                                    <img
                                                                        src="/assets/images/3patti_icon.png"
                                                                        alt="Teen Patti"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/andar-bahar-game-development/"
                                                    className="product_page_link"
                                                >
                                                    <div className="pro_item">
                                                        <div className="pro_inner">
                                                            <div className="overlay_item" />
                                                            <div className="ofr_title">
                                                                <p>Andar Bahar</p>
                                                            </div>
                                                            <img
                                                                src="/assets/images/andar_bg.png"
                                                                alt="Andar Bahar"
                                                            />
                                                            <div className="game_icons">
                                                                <div className="anim_one">
                                                                    <img
                                                                        src="/assets/images/andar-bahar_icon.png"
                                                                        alt="Andar Bahar"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/blackjack-game-development/"
                                                    className="product_page_link"
                                                >
                                                    <div className="pro_item">
                                                        <div className="pro_inner">
                                                            <div className="overlay_item" />
                                                            <div className="ofr_title">
                                                                <p>Blackjack</p>
                                                            </div>
                                                            <img
                                                                src="/assets/images/blackjack_bg.png"
                                                                alt="Blackjack"
                                                            />
                                                            <div className="game_icons">
                                                                <div className="anim_two">
                                                                    <img
                                                                        src="/assets/images/blacjack_icon.png"
                                                                        alt="Blackjack"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Dragon Tiger</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/dragon_bg.png"
                                                            alt="Dragon Tiger"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_three">
                                                                <img
                                                                    src="/assets/images/dragon_icon.png"
                                                                    alt="Dragon Tiger"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a
                                                    href="/baccarat-game-development/"
                                                    className="product_page_link"
                                                >
                                                    <div className="pro_item">
                                                        <div className="pro_inner">
                                                            <div className="overlay_item" />
                                                            <div className="ofr_title">
                                                                <p>Baccarat</p>
                                                            </div>
                                                            <img
                                                                src="/assets/images/baccarat_bg.png"
                                                                alt="Baccarat"
                                                            />
                                                            <div className="game_icons">
                                                                <div className="anim_one">
                                                                    <img
                                                                        src="/assets/images/baccarat_icon.png"
                                                                        alt="Baccarat"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Shan</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/shan_bg.png"
                                                            alt="Shan"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_two">
                                                                <img
                                                                    src="/assets/images/shan_icon.png"
                                                                    alt="Shan"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="tab-pane fade text-center"
                                        id="nav-profileOne"
                                        role="tabpanel"
                                        aria-labelledby="nav-profile-tab"
                                    >
                                        <h3 className="tb_title position-relative ft_40">Slot Games</h3>
                                        <p className="nav_content">
                                            We create the most engaging and realistic slot games such as
                                            Arabian Slot, Frozen Treasure, and Jungle Quest to provide
                                            your customers with a delightful gaming experience.
                                        </p>
                                        <ul className="item_outer_block d-flex justify-content-center w-100 flex-wrap">
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Slot Frozen</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/frozen_bg.png"
                                                            alt="Slot Frozen"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_one">
                                                                <img
                                                                    src="/assets/images/frozen_icon.png"
                                                                    alt="Slot Frozen"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Slot Royal</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/royal-slot_bg.png"
                                                            alt="Slot Royal"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_two">
                                                                <img
                                                                    src="/assets/images/royal-slot_icon.png"
                                                                    alt="Slot Royal"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Slot Barbanian</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/barbarian_bg.png"
                                                            alt="Slot Barbanian"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_three">
                                                                <img
                                                                    src="/assets/images/barbarian_icon.png"
                                                                    alt="Slot Barbanian"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Slot Wild Wickets</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/wild-wicket_bg.png"
                                                            alt="Slot Wild Wickets"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_one">
                                                                <img
                                                                    src="/assets/images/wild-wicket_icon.png"
                                                                    alt="Slot Wild Wickets"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Slot Russia 18</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/russia-18_bg.png"
                                                            alt="Slot Russia 18"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_two">
                                                                <img
                                                                    src="/assets/images/russia-18_icon.png"
                                                                    alt="Slot Russia 18"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Slot Pirates</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/slot-pirates_bg.png"
                                                            alt="Slot Pirates"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_three">
                                                                <img
                                                                    src="/assets/images/slot-pirates_icon.png"
                                                                    alt="Slot Pirates"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Slot Jungle Quest</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/jungle_bg.png"
                                                            alt="Slot Jungle Quest"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_one">
                                                                <img
                                                                    src="/assets/images/jungle_icon.png"
                                                                    alt="Slot Jungle Quest"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Slot Era of Thar</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/era_bg.png"
                                                            alt="Slot Era of Thar"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_two">
                                                                <img
                                                                    src="/assets/images/era_icon.png"
                                                                    alt="Slot Era of Thar"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Slot Arabian Nights</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/arabian_bg.png"
                                                            alt="Slot Arabian Nights"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_three">
                                                                <img
                                                                    src="/assets/images/arabian_icon.png"
                                                                    alt="Slot Arabian Nights"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Slot Panda</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/sloat-panda_bg.png"
                                                            alt="Slot Panda"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_one">
                                                                <img
                                                                    src="/assets/images/sloat-panda_icon.png"
                                                                    alt="Slot Panda"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Slot Rise of Devils</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/Rise_bg.png"
                                                            alt="Slot Rise of Devils"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_two">
                                                                <img
                                                                    src="/assets/images/rise_icon.png"
                                                                    alt="Slot Rise of Devils"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Slot Fruit</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/fruit_bg.png"
                                                            alt="Slot Fruit"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_three">
                                                                <img
                                                                    src="/assets/images/fruit_icon.png"
                                                                    alt="Slot Fruit"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Slot Underwater</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/underwater_bg.png"
                                                            alt="Slot Underwater"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_one">
                                                                <img
                                                                    src="/assets/images/underwater_icon.png"
                                                                    alt="Slot Underwater"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Slot Goldmine</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/goldmine_bg.png"
                                                            alt="Slot Goldmine"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_two">
                                                                <img
                                                                    src="/assets/images/goldmine_icon.png"
                                                                    alt="Slot Goldmine"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Slot Eat Street</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/eat-street_bg.png"
                                                            alt="Slot Eat Street"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_three">
                                                                <img
                                                                    src="/assets/images/eat-street_icon.png"
                                                                    alt="Slot Eat Street"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="tab-pane fade text-center"
                                        id="nav-contactTwo"
                                        role="tabpanel"
                                        aria-labelledby="nav-contact-tab"
                                    >
                                        <h3 className="tb_title position-relative ft_40">
                                            Wheel Games
                                        </h3>
                                        <p className="nav_content">
                                            Earn more in your online gaming business with our highly
                                            impressive casino wheel games that let the players bet more in
                                            the games. These games are built using advanced technology and
                                            are hosted on secured online casino platforms.
                                        </p>
                                        <ul className="item_outer_block d-flex justify-content-center w-100 flex-wrap">
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>American Roulette</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/american-roulette_bg.png"
                                                            alt="American Roulette"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_one">
                                                                <img
                                                                    src="/assets/images/american-roulette_icon.png"
                                                                    alt="American Roulette"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>European Roulette</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/europian-roulette_bg.png"
                                                            alt="European Roulette"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_two">
                                                                <img
                                                                    src="/assets/images/europian-roulette_icon.png"
                                                                    alt="European Roulette"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Mini Roulette</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/mini-roulette_bg.png"
                                                            alt="Mini Roulette"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_three">
                                                                <img
                                                                    src="/assets/images/mini-roulette_icon.png"
                                                                    alt="Mini Roulette"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Single Chance</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/single-chance_bg.png"
                                                            alt="Single Chance"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_one">
                                                                <img
                                                                    src="/assets/images/single-chance_icon.png"
                                                                    alt="Single Chance"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Single Chance Dark </p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/single-chance_bg.png"
                                                            alt="Single Chance Dark"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_two">
                                                                <img
                                                                    src="/assets/images/single-chance-dark_icon.png"
                                                                    alt="Single Chance Dark"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <a
                                                    href="/triple-chance-game-development/"
                                                    className="product_page_link"
                                                >
                                                    <div className="pro_item">
                                                        <div className="pro_inner">
                                                            <div className="overlay_item" />
                                                            <div className="ofr_title">
                                                                <p>Triple Chance</p>
                                                            </div>
                                                            <img
                                                                src="/assets/images/triple_bg.png"
                                                                alt="Triple Chance"
                                                            />
                                                            <div className="game_icons">
                                                                <div className="anim_three">
                                                                    <img
                                                                        src="/assets/images/triple_icon.png"
                                                                        alt="Triple Chance"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="pro_item">
                                                    <div className="pro_inner">
                                                        <div className="overlay_item" />
                                                        <div className="ofr_title">
                                                            <p>Mega Wheel</p>
                                                        </div>
                                                        <img
                                                            src="/assets/images/mega-wheel_bg.png"
                                                            alt="Mega Wheel"
                                                        />
                                                        <div className="game_icons">
                                                            <div className="anim_one">
                                                                <img
                                                                    src="/assets/images/mega-wheel_icon.png"
                                                                    alt="Mega Wheel"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Poker software*/}
            <section
                className="product_offer"
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
                                    <span className="yellow">Features </span>{" "}
                                    <span className="black">Of Our Casino Software</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        className="card-img-top"
                                        src="/assets/images/casino-software/features-icon/tornmament.webp"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center tou">
                                        Tournaments
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        The tournaments options of our products enable one to
                                        participate in various intriguing matches and win big prizes.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        className="card-img-top rewards"
                                        src="/assets/images/casino-software/features-icon/reward-loyality.webp"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">
                                        Rewards &amp; Loyalty
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        All of our products are laced with reward and loyalty features,
                                        and this provides impetus to the gaming experience and increases
                                        one’s span of engagement.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        className="card-img-top back"
                                        src="/assets/images/casino-software/features-icon/back-office-CRM.webp"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">
                                        Back Office &amp; CRM
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        We are focused on easing the user’s experience and providing a
                                        dedicated team of back-office and CRM, who are always ready to
                                        guide you through the process.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        className="card-img-top world"
                                        src="/assets/images/casino-software/features-icon/world-class-secuirty.webp"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">
                                        World-Class Security
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        Casino software development company, i.e., Mobzway, is
                                        determined to make any of our products secure and safe from any
                                        potential threat. Our products are safe to use.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        className="card-img-top "
                                        id="anti"
                                        src="/assets/images/casino-software/features-icon/anti-fraude-system.webp"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center" id="anti-head">
                                        Anti Fraud System
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        Our products boast of the state of the art security tools to
                                        ensure that all our games are safe and secure from any potential
                                        online frauds.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        className="card-img-top back"
                                        src="/assets/images/casino-software/features-icon/responsible-gaming.webp"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">
                                        Responsible Gaming
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        At Mobzway, we are dedicated to promoting responsible gaming by
                                        initiating various checkpoints on one’s deposits and spending.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        className="card-img-top back"
                                        src="/assets/images/casino-software/features-icon/payment.webp"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">
                                        Payment Security
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        Our products offer a range of payment securities like Razorpay,
                                        Pay-U, Paytm, Neteller, Paypal, Bitcoin, Stripe, and Skrill
                                        which enable deposit and withdrawal using wallets and cards.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        className="card-img-top back"
                                        src="/assets/images/casino-software/features-icon/multi-payment.webp"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">
                                        Multi-Language
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        The websites and apps that we offer are custom casino game
                                        development and come with various language options. It enables
                                        one to enrich one’s playing experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="solutions">
                <div className="container c-1">
                    {/* <div class="heading_title text-center">
   <h1><span>ONLINE</span> POKER GAME DEVELOPMENT SOLUTIONS</h1>
   </div> */}
                    <div className="col-md-12 text-center">
                        <div
                            className="sub_title_outer"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <h2 className="sub_title">
                                <span className="yellow">CASINO </span>{" "}
                                <span className="black">GAME DEVELOPMENT SERVICES</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row row1 align-items-center">
                        <div className="col-md-6 col1 pr-md-5">
                            <img
                                alt="rummy game app development company"
                                src="/assets/images/casino-software/casino_game-sevices11.webp"
                                className="wow bounceInLeft  my-image pr-md-5"
                                style={{ width: "100%" }}
                                data-wow-duration="2s"
                            />
                        </div>
                        <div className="col-md-6 col1 wow bounceInUp" data-wow-duration="2s">
                            <p className="para-1 m-0">
                                You don't need to search further if you're passionate about starting
                                your own game company or improving your current one. When it comes
                                to anything casino software development-related, we are your best
                                option. Our group of expert developers of casino software is
                                committed to providing products of unmatched quality by carefully
                                combining state-of-the-art graphics with innovative technology. This
                                guarantees the highest level of fun from our virtual casino tables.
                                <br />
                                <br />
                                Mobile devices are a major part of today's gaming environment, and
                                we know how important it is to keep desktop enjoyment at the same
                                quality on smaller screens.{" "}
                                <a href="https://www.mobzway.com/casino-game-development/">
                                    Casino game Development
                                </a>{" "}
                                at our firm isn't limited by hardware. We offer custom casino gaming
                                solutions that work with all major browsers and operating systems,
                                including Windows, Mac, iOS, and Android. Our game developers
                                provide HTML 5-based casino software with the best vector graphics
                                possible to further improve the gaming experience.
                                <br />
                                <br />
                                Our online casino solutions are built around strong mechanisms that
                                ensure players are playing in a safe, secure, and fraud-free
                                environment. We put your peace of mind first by providing ongoing
                                technical assistance and making sure updates and upgrades are made
                                on schedule so your games never seem out of current. In addition, we
                                guarantee compatibility with digital currency, make it simple to
                                sign in with Facebook and Google, and effortlessly integrate many
                                payment gateways—all of which are components of our dedication to
                                providing the greatest casino software.
                                <br />
                                <br />
                                At Mobzway, our skilled online casino software developers take the
                                time to learn your particular needs and provide tailored online
                                casino software solutions by prearranged schedules and budgets.
                                <br />
                                <br />
                                {/* <span class="moretext1">While we take responsibility for building your casino games to power your
                  business, rest assured that our dedicated gaming experts never compromise on safety and
                  security. Our casino game applications and gaming websites are securely hosted with the most
                  trusted hosting providers in the industry.</br></br>
                  Over time, our casino software company has successfully crafted a multitude of casino
                  games in various popular variations, including
                  <a href="/blackjack-game-development/">Blackjack</a>,
                  <a href="/baccarat-game-development/">Baccarat</a>, <a
                      href="/roulette-game-development/">Roulette</a>, <a
                      href="/slot-game-development/"> Slot</a>, <a
                      href="/andar-bahar-game-development/"> Andar Bahar</a>, <a
                      href="/bingo-software/">Bingo</a>, <a
                      href="/keno-game-development/">Keno</a>, <a
                      href="/triple-chance-game-development/">Triple Chance</a>, etc. We thoroughly
                  plan, conceptualize, design mocks, and keep our clients in sync so that their aspirations and
                  gaming expertise bring the best results. Also, post the game delivered to our clients. We ensure
                  responsible client 24*7 support, maintenance, and timely patches and updates.<br><br>
                  Partner with us, the leading casino software developers, and turn your gaming aspirations
                  into
                  reality. Elevate your gaming business to new heights with our top-notch casino game software
                  development and app development services. Discover the future with one of the best online casino
                  software providers in India.<br><br>
              </span>

          </p>
          <div>
              <p class="moreless-button1 moreless-button">Read more</p>
          </div> */}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="get_in-touch">
                <div className="container">
                    {/* <div class="heading_title text-center">
   <h1 class="text-white"><span>GET</span> IN TOUCH, ASK US ANYTHING</h1>
   </div> */}
                    <div className="col-md-12 text-center">
                        <div
                            className=""
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <h2 className="sub_title">
                                <span className="black_bg_head_yellow">GET</span>{" "}
                                <span className="black_bg_head_white">
                                    IN TOUCH, ASK US ANYTHING
                                </span>
                                {/*2*/}
                            </h2>
                        </div>
                    </div>
                    <div className="sub_head text-center">
                        <h4 className="text-white">
                            Need expert advice on best online casino game software development?
                            Get in touch with us now and let our seasoned online casino software
                            developers answer all your questions.
                        </h4>
                    </div>
                    <div className="text-center">
                        <a data-toggle="modal" data-target="#requestQoute">
                            <p>LET'S TALK</p>
                        </a>
                    </div>
                </div>
            </section>
            <section>
                <div className="container c-1">
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
                                <span className="black"> Casino Software Platforms</span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-12 col1 wow" data-wow-duration="1s">
                        <p className="hire-para col-md-12 para-plateform ">
                            <br />
                            Our Online Casino Game is compatible with all Android, web, desktop,
                            mobile, iOS platforms. We provide casino games suitable for both
                            Android and iOS operating systems, and you can play without any hassle
                            on any online casino platform.
                        </p>
                    </div>
                    <div className="row row1 desktopversion">
                        <div className="col-md-12 col2">
                            <div className="row">
                                <div
                                    className="col-lg-4 col-md-6 col21 mt-5 wow bounceInRight"
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
                                                Get a highly responsive HTML 5 based online casino software
                                                developed for your casino business. Our HTML 5 coded games
                                                are adaptive to different screen sizes and can also be
                                                enjoyed on popular browsers. So now, no matter which device
                                                or web browser your customers use, they will thoroughly
                                                enjoy playing online casino game software with our advanced
                                                HTML 5 technology.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-md-6 col21 mt-5  wow bounceInRight"
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
                                                Keep your casino players engaged on mobile devices with our
                                                advanced native mobile apps compatible with both Android and
                                                iOS platforms. Our best casino game for android comes with
                                                various exciting features like social logins, multi-player
                                                gaming, secured payment gateways, etc., so that mobile
                                                gaming enthusiasts enjoy the games uninterruptedly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-md-6 col21 mt-5  wow bounceInRight"
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
                                                Now provide access to casino software for MAC/PC users with
                                                our easy-to-download online casino game software. Our
                                                talented software experts design casino online software for
                                                computer devices for both Mac and Windows. The casino
                                                software for PCs comes with amazing visual effects, superior
                                                quality sound effects, various payment options, and many
                                                other unique features.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*backoffice & CRM*/}
            <section
                className="gaming_platform backoffice mt-5"
                style={{
                    backgroundImage: 'url("/assets/images/comman_bg.png")'
                }}
            >
                <div className="container c-1">
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
                                    With our best casino software solutions, we offer the best
                                    BackOffice and CRM tools which make game management easy. You can
                                    enjoy a user-friendly dashboard along with all the essential &amp;
                                    valuable features to manage the game rooms in real-time.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        src="/assets/images/backoffice-crm-icon/dashboard.png"
                                        alt="Dashboard"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">Dashboard</h5>
                                    <p className="text-dark text-center paragra">
                                        Our dashboard enables one to maneuver through the game analysis
                                        easily. Our featured dashboard allows one to see one’s
                                        performance and progress.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        src="/assets/images/backoffice-crm-icon/game-management.png"
                                        id="game"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">Game Rooms</h5>
                                    <p className="text-dark text-center paragra">
                                        The online gaming solutions that Mobzway provides come with an
                                        impeccable game room with detailed options of the gaming
                                        solutions, which your players can choose from.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        src="/assets/images/backoffice-crm-icon/tournament-management.png"
                                        id="tournament"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">Tournaments</h5>
                                    <p className="text-dark text-center paragra">
                                        We provide a lot of tournament options, which shall enable your
                                        players to engage with your online casino platform and add to
                                        the traffic of your casino business.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        src="/assets/images/backoffice-crm-icon/game-history.png"
                                        id="game-history"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">Hand history</h5>
                                    <p className="text-dark text-center paragra">
                                        The hand history feature of our gaming products enables the
                                        gamers to revisit their moves in any game, thus enabling them to
                                        analyze their gaming pattern.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        src="/assets/images/backoffice-crm-icon/player-management.png"
                                        id="player"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">
                                        Player Management
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        The gaming solutions that we provide will enable you to manage
                                        the players' statistics, and it shall allow you to better
                                        analyze the progress and scope of your game.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        src="/assets/images/backoffice-crm-icon/user-management.png"
                                        id="user-sub"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">
                                        Users &amp; Sub Admins
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        Since you are the admin of the gaming website, with this
                                        feature, you shall be able to choose and personalize both the
                                        users and the sub-admins to enhance the playing experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        src="/assets/images/backoffice-crm-icon/affiliate-management.png"
                                        id="aff"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">Affiliates</h5>
                                    <p className="text-dark text-center paragra">
                                        Our affiliate networks shall enable you to promote
                                        gambling-related offers, and increase the engagement of your
                                        website, thus enhancing the scope of your business.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        src="/assets/images/backoffice-crm-icon/finance-management.png"
                                        id="fin"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">Finance</h5>
                                    <p className="text-dark text-center paragra">
                                        The finance feature of our products maintains a strict record of
                                        all the transactions of the players engaged in the gaming
                                        platform, making it easier for them to review their investments
                                        and earnings.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        src="/assets/images/backoffice-crm-icon/notificstion-management.png"
                                        id="notification"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">Notifications</h5>
                                    <p className="text-dark text-center paragra">
                                        Our online casino software is enabled to send notifications to
                                        all the users. It can use these notifications to entice players
                                        to spend more hours playing your game.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        src="/assets/images/backoffice-crm-icon/promotion-management.png"
                                        id="pro"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">Promotions</h5>
                                    <p className="text-dark text-center paragra">
                                        Our online gaming software solutions enable you to promote the
                                        websites, thus increasing the chance of increasing the same
                                        engagement.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        src="/assets/images/backoffice-crm-icon/analytics.png"
                                        id="ana"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">Analytics</h5>
                                    <p className="text-dark text-center paragra">
                                        Our gaming solutions are laced with intelligent analytics, which
                                        will enable you to identify your potential customers, their
                                        needs, and preferences, thus adding to the success of your
                                        business.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mt-5">
                            <div className="card card-new" id="card2" style={{ width: "18rem" }}>
                                <center>
                                    <img
                                        src="/assets/images/backoffice-crm-icon/reports.png"
                                        id="reports"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">Reports</h5>
                                    <p className="text-dark text-center paragra">
                                        The reports feature of the software that we provide shall enable
                                        you to analyze the statistical data and the overall performance
                                        of your business.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------online casino software------------------*/}
            <section className="developer">
                <div className="container c-1">
                    {/* <div class="heading_title text-center">
   <h1><span>HIRE</span> POKER GAME DEVELOPER</h1>
   </div> */}
                    <div className="col-md-12 text-center">
                        <div
                            className=""
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <h2 className="sub_title">
                                <span className="yellow">Online</span>{" "}
                                <span className="black"> Casino Software Solutions</span>
                                {/*2*/}
                            </h2>
                        </div>
                    </div>
                    <div className="row row1">
                        <div className="col-md-6 col1 wow bounceInUp" data-wow-duration="2s">
                            <h3 className="mb-3 solution">SOLUTIONS WE HAVE</h3>
                            <h4>Whitelabel Casino Solution</h4>
                            <p>
                                We provide white-label software solutions for all online gaming
                                solutions. It implies that we provide you with all the prerequisites
                                of an online casino software solution, thus enabling you to launch
                                your gaming website.
                            </p>
                            <br />
                            <h4>Turnkey Casino Solution</h4>
                            <p>
                                At Mobzway, we have ready turnkey casino software solutions. You can
                                choose from the solutions available on our website and begin your
                                business. It saves time and effort and is best suitable for
                                inexperienced business owners.
                            </p>
                            <br />
                            <h4>SWARM API Integration</h4>
                            <p>
                                We also offer SWARM API integrations. It allows different
                                development teams to collaborate and work on a single project, which
                                enhances the quality of our products. For better customizations,
                                management of games, and to let you cost-effectively host multiple
                                games.
                            </p>
                        </div>
                        <div className="col-md-6 col1">
                            <img
                                alt="Casino Software Developers"
                                src="/assets/images/casino-software/online_casino-softwere_solotion.webp"
                                className="wow bounceInRight hire-image"
                                data-wow-duration="2s"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="how_we_canhelp"
                style={{
                    backgroundImage: 'url("/assets/images/help_banner.png")'
                }}
            >
                <div className="overlay_help" />
                <div className="container c-1">
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
                                    <span className="black"> ARE ALWAYS HERE TO HELP YOU</span>
                                </h3>
                            </div>
                        </div>
                        <div className="col-md-8 text-center">
                            <div className="help_cotnent text-center">
                                Let our casino game experts advise you on building &amp; launching
                                the online casino software that meets your business objectives.
                                Connect with us now to get a free expert consultation for your
                                casino business.
                            </div>
                            <div className="btn_outer">
                                <a
                                    data-toggle="modal"
                                    data-target="#requestQoute"
                                    id="requestCasinosoftware2"
                                    className="contact_btn"
                                >
                                    Request a Call Back
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="product_offer"
                style={{
                    backgroundImage: 'url("/assets/images/comman_bg.png")'
                }}
            >
                <div className="container c-1">
                    <div className="row ">
                        <div className="col-md-12 text-center">
                            <div
                                className="sub_title_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">HOW </span>{" "}
                                    <span className="black">
                                        WE DESIGN &amp; DEVELOP BEST CASINO GAMES?
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <ul className="featureGamesonlineBox innerWrapper">
                        <li
                            className="animation-element slide-left in-view"
                            style={{ transitionDelay: "400ms" }}
                        >
                            <div className="col3">
                                <div className="featureGamesonlineIcon">
                                    <img
                                        src="/assets/images/casino-software/conceptualizing.webp"
                                        alt="Multiplayer Games"
                                    />
                                </div>
                            </div>
                            <div className="col7">
                                <div className="matterBox">
                                    <h4>Conceptualizing </h4>
                                    <p>
                                        Mobzway assists in conceptualizing the gaming solutions
                                        according to your ideas. This shall add to the uniqueness of
                                        your casino games.{" "}
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li
                            className="animation-element slide-right in-view"
                            style={{ transitionDelay: "800ms" }}
                        >
                            <div className="col3">
                                <div className="featureGamesonlineIcon">
                                    <img
                                        src="/assets/images/casino-software/marketResearchAnalysis.webp"
                                        alt="Tournament"
                                    />
                                </div>
                            </div>
                            <div className="col7">
                                <div className="matterBox">
                                    <h4>Market Research &amp; Analysis</h4>
                                    <p>
                                        To ensure the best experience for our clients, we engage in
                                        market research and analysis, enabling us to provide our clients
                                        with the best products.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li
                            className="animation-element slide-right in-view"
                            style={{ transitionDelay: "800ms" }}
                        >
                            <div className="col3">
                                <div className="featureGamesonlineIcon">
                                    <img
                                        src="/assets/images/casino-software/userInterfaceCreation.webp"
                                        alt="Multi-Language Support including hindi"
                                    />
                                </div>
                            </div>
                            <div className="col7">
                                <div className="matterBox">
                                    <h4> User Interface Creation</h4>
                                    <p>
                                        We provide a functional interface for our users, increasing the
                                        traffic at one’s gaming websites.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li
                            className="animation-element slide-left in-view"
                            style={{ transitionDelay: "400ms" }}
                        >
                            <div className="col3">
                                <div className="featureGamesonlineIcon">
                                    <img
                                        src="/assets/images/casino-software/agileDevelopment.webp"
                                        alt="Immersive Graphics"
                                    />
                                </div>
                            </div>
                            <div className="col7">
                                <div className="matterBox">
                                    <h4>Agile Development</h4>
                                    <p>
                                        Finally, our cross-functional casino game development team takes
                                        it from here. We build a robust casino game application that
                                        stands the test of time.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li
                            className="animation-element slide-left in-view"
                            style={{ transitionDelay: "400ms" }}
                        >
                            <div className="col3">
                                <div className="featureGamesonlineIcon">
                                    <img
                                        src="/assets/images/casino-software/betaRelease.webp"
                                        alt="Multi-Platform Compatibility"
                                    />
                                </div>
                            </div>
                            <div className="col7">
                                <div className="matterBox">
                                    <h4>Beta Release</h4>
                                    <p>
                                        Once the initial stages are completed, we go for the beta
                                        release of your product. It is the initial release of the casino
                                        game software, which can be further improvised.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li
                            className="animation-element slide-right in-view"
                            style={{ transitionDelay: "800ms" }}
                        >
                            <div className="col3">
                                <div className="featureGamesonlineIcon">
                                    <img
                                        src="/assets/images/casino-software/enhancementOptimization.webp"
                                        alt="Casino Game Providers"
                                    />
                                </div>
                            </div>
                            <div className="col7">
                                <div className="matterBox">
                                    <h4>Enhancement &amp; Optimization</h4>
                                    <p>
                                        After the beta release, we ensure to ensure and optimize the
                                        products that our clients have chosen. This results in increased
                                        traffic at our clients’ gaming websites.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li
                            className="animation-element slide-right in-view"
                            style={{ transitionDelay: "800ms" }}
                        >
                            <div className="col3">
                                <div className="featureGamesonlineIcon">
                                    <img
                                        src="/assets/images/casino-software/supportmaintenance.webp"
                                        alt="Casino Game Providers"
                                    />
                                </div>
                            </div>
                            <div className="col7">
                                <div className="matterBox">
                                    <h4>Support &amp; Maintenance</h4>
                                    <p>
                                        {" "}
                                        At Mobzway, we have a dedicated support team. They are committed
                                        to providing the best maintenance and are always ready to guide
                                        one through any issues.{" "}
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    {/* <div class="row ">
      <div class="col-lg-3 col-md-3  mt-5">
          <div class="card card-new" id="card3">
              <h5 class="card-title card-tit2 text-center "><span class="boxes">1</span> CONCEPTUALIZING</h5>
              <center><img class="card-img-top" src="/assets/images/CONCEPTUALIZING.png"
                      alt="Tournaments" class="ico"></center>
              <div class="card-body">
                  <p class="text-dark text-center paragraphs">Mobzway assists in conceptualizing the gaming
                      solutions according to your ideas. This shall add to the uniqueness of your casino games.
                  </p>
                  <i class="fa fa-arrow-right"></i>
              </div>
          </div>
      </div>
      <div class="col-lg-3 col-md-3 mt-5">
          <div class="card card-new" id="card3">
              <h5 class="card-title card-tit2 text-center"><span class="boxes">2</span>&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp; &nbsp;&nbsp; MARKET RESEARCH & ANALYSIS</h5>
              <center><img class="card-img-top" src="/assets/images/MARKET.png" alt="Tournaments"
                      class="ico"></center>
              <div class="card-body">
                  <p class="text-dark text-center paragraphs">To ensure the best experience for our clients, we
                      engage in market research and analysis, enabling us to provide our clients with the best
                      products.</p>
                  <i class="fa fa-arrow-right"></i>
              </div>
          </div>
      </div>
      <div class="col-lg-3 col-md-3  mt-5">
          <div class="card card-new" id="card3">
              <h5 class="card-title card-tit2 text-center"><span class="boxes">3</span> &nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp; &nbsp;&nbsp; USER INTERFACE CREATION</h5>
              <center><img class="card-img-top" src="/assets/images/USER.png" alt="Tournaments"
                      class="ico"></center>
              <div class="card-body">
                  <p class="text-dark text-center paragraphs">We provide a functional interface for our users,
                      increasing the traffic at one’s gaming websites.</p>
                  <i class="fa fa-arrow-right third-arrow" style="    position: relative;
    top: -118px;"></i>
              </div>
          </div>
      </div>
      <div class="col-lg-3 col-md-3  mt-5">
          <div class="card card-new" id="card3">
              <h5 class="card-title card-tit2 text-center"><span class="boxes">4</span> AGILE DEVELOPMENT</h5>
              <center><img class="card-img-top" src="/assets/images/AGILE.png" alt="Tournaments"
                      class="ico"></center>
              <div class="card-body">
                  <p class="text-dark text-center paragraphs">Finally, our cross-functional casino game
                      development team takes it from here. We build a robust casino game application that stands
                      the test of time.</p>
                  <i class="fa fa-arrow-right four-sec" id="gm"></i>
              </div>
          </div>
      </div>
  </div> */}
                    {/* <div class="row">
      <div class="col-lg-4 col-md-4 mt-5 beta">
          <div class="card card-new" id="card3">
              <h5 class="card-title card-tit2 text-center"><span class="boxes">5</span> BETA RELEASE</h5>
              <center><img class="card-img-top" src="/assets/images/BETA.png" alt="Tournaments"
                      class="ico"></center>
              <div class="card-body">
                  <p class="text-dark text-center paragraphs">Once the initial stages are completed, we go for the
                      beta release of your product. It is the initial release of the casino game software, which
                      can be further improvised.</p>
                  <i class="fa fa-arrow-right last"></i>
              </div>
          </div>
      </div>
      <div class="col-lg-4 col-md-4  mt-5 enhance ">
          <div class="card card-new" id="card3">
              <h5 class="card-title card-tit2 text-center"><span class="boxes">6</span>&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp; &nbsp;&nbsp; ENHANCEMENT & OPTIMIZATION</h5>
              <center><img class="card-img-top" src="/assets/images/ENHANCEMENT.png"
                      alt="Tournaments" class="ico"></center>
              <div class="card-body">
                  <p class="text-dark text-center paragraphs">After the beta release, we ensure to ensure and
                      optimize the products that our clients have chosen. This results in increased traffic at our
                      clients’ gaming websites.</p>
                  <i class="fa fa-arrow-right last"></i>
              </div>
          </div>
      </div>
      <div class="col-lg-4 col-md-4 mt-5 supports">
          <div class="card card-new" id="card3">
              <h5 class="card-title card-tit2 text-center"><span class="boxes">7</span> &nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp; &nbsp;&nbsp;SUPPORT & MAINTENANCE</h5>
              <center><img class="card-img-top" src="/assets/images/SUPPORT.png" alt="Tournaments"
                      class="ico"></center>
              <div class="card-body">
                  <p class="text-dark text-center paragraphs">At Mobzway, we have a dedicated support team. They
                      are committed to providing the best maintenance and are always ready to guide one through
                      any issues.</p>
              </div>
          </div>
      </div>
  </div> */}
                </div>
            </section>
            {/*-------------hire casino------------------*/}
            <section className="developer">
                <div className="container c-1">
                    {/* <div class="heading_title text-center">
   <h1><span>HIRE</span> POKER GAME DEVELOPER</h1>
   </div> */}
                    <div className="col-md-12 text-center">
                        <div
                            className=""
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <h2 className="sub_title">
                                <span className="yellow">HIRE</span>{" "}
                                <span className="black">CASINO GAME DEVELOPERS</span>
                                {/*2*/}
                            </h2>
                        </div>
                    </div>
                    <div className="row row1">
                        <div className="col-md-6 col1 wow bounceInUp" data-wow-duration="2s">
                            <p className="hire-para">
                                Why Choose Our Software Development Services for Casinos?
                                <br />
                                <br />
                            </p>
                            <ul style={{ paddingLeft: 15, listStyle: "disc" }}>
                                <li>
                                    Skilled Developers: We have a team of knowledgeable developers who
                                    have designed and developed casino game software specifically to
                                    match your needs. They are aware of your unique requirements.
                                    <br />
                                    <br />
                                </li>
                                <li>
                                    On-time Project Delivery: We commit to wrapping up projects on
                                    schedule, so your online casino business may get up and running
                                    right away.
                                    <br />
                                    <br />
                                </li>
                                <li>
                                    Client-Focused Approach: To make sure your business operates well,
                                    we offer premium products, complete guidance, technical support,
                                    and prompt maintenance
                                    <br />
                                    <br />
                                </li>
                                <li>
                                    Player-Centric Features: With its modern graphics, engrossing
                                    animations, and simple payment methods, our program offers a
                                    remarkable user experience.
                                    <br />
                                    <br />
                                </li>
                                <li>
                                    Transparent Communication: Take advantage of frequent reporting
                                    and project reviews, which will keep you updated and guarantee
                                    transparency through the development process.
                                    <br />
                                    <br />
                                </li>
                                <li>
                                    Specialized Development: To construct and modify games to your
                                    liking, work with a specialist online casino software developer.
                                    <br />
                                    <br />
                                </li>
                            </ul>
                            <p className="hire-para">
                                Act instantly.
                                <br />
                                Take action now. Get in touch with us right now to employ the top
                                developer of casino games and establish a strong online presence!
                                <br />
                            </p>
                            <div className="btn_outer">
                                <a
                                    data-toggle="modal"
                                    data-target="#requestQoute"
                                    id="requestCasinosoftware3"
                                    className="contact_btn requst"
                                >
                                    Hire Casino Developers
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col1">
                            <img
                                alt="Casino software Developers"
                                src="/assets/images/casino-software/hire_casino-game_dev.webp"
                                className="wow bounceInRight hire-image"
                                data-wow-duration="2s"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------why choose poker us------------------*/}
            <section className="why_choose pokermobzway">
                <div className="container c-1">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div
                                className="sub_title_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h3 className="sub_title ft_40">
                                    <span className="yellow">Why </span>{" "}
                                    <span className="black">
                                        Choose Mobzway As Your Casino Software Development Company?
                                    </span>
                                </h3>
                                <p className="sub_paragraph mt-2">
                                    Mobzway brings to you the best of gaming artwork, technology,
                                    platform compatibility, security, and post-sales so that your
                                    gaming business always stays on top.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <img
                                src="/assets/images/casino-software/why-choose.webp"
                                className="why-c"
                                alt="Online Casino Gaming Software"
                            />
                        </div>
                        <div className="col-md-5 ">
                            <ul className="why_content wow bounceInUp" data-wow-duration="1s">
                                <li>Highly-advanced technology.</li>
                                <li>Hassle-free and timely maintenance.</li>
                                <li>High-performance gaming experience.</li>
                                <li>Support most of the payment gateways integration.</li>
                                <li>Free business consultation to help casino game operators.</li>
                                <li>
                                    Satisfied customer base in America, Europe, Africa, and Asia.
                                </li>
                                <li>
                                    24x7 monitoring &amp; support team to ensure 99.99% game uptime.
                                </li>
                                <li>
                                    Online casino solutions are available on all Web, Mobile, PC &amp;
                                    Mac platforms.
                                </li>
                            </ul>
                            <div className="btn_outer">
                                <a
                                    data-toggle="modal"
                                    data-target="#requestQoute"
                                    id="requestCasinosoftware4"
                                    className="contact_btn"
                                >
                                    request a quote
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="asked_question  position-relative">
                <div className="container c-1">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div
                                className="sub_title_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">CASINO</span>{" "}
                                    <span className="black">SOFTWARE DEVELOPMENT FAQS</span>
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
                                                    How do I start an online casino business?
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
                                                    Mobzway allows you to kick-start your casino business by
                                                    providing you with the best custom casino website that is
                                                    duly tested and ready to use. We provide you with
                                                    consultation in setting up your casino live.
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
                                                    data-target="#collapseTwo"
                                                >
                                                    <i className="fa fa-plus" /> Are casino games profitable?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseTwo"
                                            className="collapse"
                                            aria-labelledby="headingTwo"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    Yes, backed by technological advancement, the online
                                                    gaming industry is booming, and casino games assure a
                                                    great return on investment.
                                                    {/* <a
                                      href="https://www.mobzway.com/blog/7-things-that-make-the-online-casino-a-profitable-business/">Click
                                      here</a> */}
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
                                                    data-target="#collapseThree"
                                                >
                                                    <i className="fa fa-plus" />
                                                    What is the most profitable game in a casino?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseThree"
                                            className="collapse"
                                            aria-labelledby="headingThree"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    The most profitable games in a casino are blackjack,
                                                    dragon tiger, roulette, baccarat, and slot.
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
                                                    className="btn btn-link text-dark collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapseFour"
                                                >
                                                    <i className="fa fa-plus" />
                                                    How much does Casino Software Development cost?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseFour"
                                            className="collapse"
                                            aria-labelledby="headingFour"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    It costs around 2000 USD for{" "}
                                                    <a href="https://www.mobzway.com/blog/how-much-would-it-cost-to-set-up-own-online-casino/">
                                                        online casino software.
                                                    </a>{" "}
                                                    With customized solutions with more advanced features, the
                                                    cost increases.
                                                    {/* <a
                                      href="https://www.mobzway.com/blog/how-much-would-it-cost-to-set-up-own-online-casino/">Click
                                      here</a> */}
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
                                                    className="btn btn-link collapsed text-dark"
                                                    data-toggle="collapse"
                                                    data-target="#collapseFive"
                                                >
                                                    <i className="fa fa-plus" />
                                                    How to choose an online casino software provider?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseFive"
                                            className="collapse"
                                            aria-labelledby="headingFive"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    Choose an online casino software provider who can
                                                    understand your needs and work accordingly. Your casino
                                                    software developer should be experienced enough to deal
                                                    with this. Besides, look at the cost-effectiveness of your
                                                    casino software provider.
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
                                        <div className="card-header" id="headingSix">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link collapsed text-dark"
                                                    data-toggle="collapse"
                                                    data-target="#collapseSix"
                                                >
                                                    <i className="fa fa-plus" />
                                                    How long does it take to make a casino game app?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseSix"
                                            className="collapse"
                                            aria-labelledby="headingSix"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    Usually, it takes around seven days to make a casino game
                                                    app.
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
                                                    data-target="#collapseSeven"
                                                >
                                                    <i className="fa fa-plus" />
                                                    Will you also provide an admin panel to manage the casino
                                                    website?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseSeven"
                                            className="collapse"
                                            aria-labelledby="headingSeven"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    Yes, we provide a customized admin dashboard as per your
                                                    requirements to help you manage your casino website. Using
                                                    the admin panel, you can assign different roles to your
                                                    staff and manage other business tasks efficiently.
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
                                                    data-target="#collapseEight"
                                                >
                                                    <i className="fa fa-plus" />
                                                    How much money can you earn through an online casino
                                                    business?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseEight"
                                            className="collapse"
                                            aria-labelledby="headingEight"
                                            data-parent="#accordionExample"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    The earnings through online casinos may vary from website
                                                    to website depending on the number of subscribed/paid
                                                    players, features offered, quality of the games, audience
                                                    regions, and a lot more factors.
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
                                        <div className="card-header" id="headingnine">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link text-dark collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapsenine"
                                                >
                                                    <i className="fa fa-plus" />
                                                    Will you provide a casino website and mobile app?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapsenine"
                                            className="collapse"
                                            aria-labelledby="headingnine"
                                            data-parent="#accordionExample1"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    Yes, We provide casino websites as well as native mobile
                                                    apps.
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
                                        <div className="card-header" id="headingten">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link collapsed text-dark"
                                                    data-toggle="collapse"
                                                    data-target="#collapseten"
                                                >
                                                    <i className="fa fa-plus" />
                                                    What are the variations of casino games you are offering?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseten"
                                            className="collapse"
                                            aria-labelledby="headingten"
                                            data-parent="#accordionExample1"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    We offer different variants of casino games, including
                                                    Roulette, Slot, Blackjack, Baccarat, Keno, Bingo, Andar
                                                    Bahar, and Triple Chance.
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
                                        <div className="card-header" id="headingEleven">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link collapsed text-dark"
                                                    data-toggle="collapse"
                                                    data-target="#collapseEleven"
                                                >
                                                    <i className="fa fa-plus" />
                                                    How to get a license for an online casino business in
                                                    India?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseEleven"
                                            className="collapse"
                                            aria-labelledby="headingEleven"
                                            data-parent="#accordionExample1"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    It depends on the business models of your casino business,
                                                    combined with the location and the nature of licenses.
                                                    Connect with the best online casino software developers
                                                    team, i.e., Mobzway, to get more guidance on obtaining a
                                                    license to run an online casino business in India..
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
                                        <div className="card-header" id="headingTwelve">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link collapsed text-dark"
                                                    data-toggle="collapse"
                                                    data-target="#collapseTwelve"
                                                >
                                                    <i className="fa fa-plus" />
                                                    What kind of server will I need to run an online casino
                                                    game?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseTwelve"
                                            className="collapse"
                                            aria-labelledby="headingTwelve"
                                            data-parent="#accordionExample1"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    You must have a secured server that doesn’t allow frauds,
                                                    ensures data privacy, and, most importantly, runs your
                                                    website seamlessly. With us, you don’t have to worry about
                                                    servers and other technical installations as we ensure the
                                                    incorporation of robust servers and systems while setting
                                                    up your online casino game.
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
                                        <div className="card-header" id="headingThirteen">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link collapsed text-dark"
                                                    data-toggle="collapse"
                                                    data-target="#collapseThirteen"
                                                >
                                                    <i className="fa fa-plus" />
                                                    Is your casino software secure enough to handle fraud?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseThirteen"
                                            className="collapse"
                                            aria-labelledby="headingThirteen"
                                            data-parent="#accordionExample1"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    Yes! Our casino software developers ensure that robust and
                                                    secure systems are in place so that the site owners do not
                                                    have to worry about fraud.
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
                                        <div className="card-header" id="headingFourteen">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link collapsed text-dark"
                                                    data-toggle="collapse"
                                                    data-target="#collapseFourteen"
                                                >
                                                    <i className="fa fa-plus" />
                                                    Which technology do you use to develop casino games?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseFourteen"
                                            className="collapse"
                                            aria-labelledby="headingFourteen"
                                            data-parent="#accordionExample1"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    We develop the best casino game apps using advanced and
                                                    secure gaming technologies.
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
                                        <div className="card-header" id="headingFifteen">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link text-dark collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapseFifteen"
                                                >
                                                    <i className="fa fa-plus" />
                                                    Will you take care of the payment gateway integration, or
                                                    do I have to take care of it?
                                                </button>
                                            </p>
                                        </div>
                                        <div
                                            id="collapseFifteen"
                                            className="collapse"
                                            aria-labelledby="headingFifteen"
                                            data-parent="#accordionExample1"
                                        >
                                            <div className="card-body">
                                                <p className="text-dark faq-para">
                                                    Yes, we do take care of the payment gateways. Our products
                                                    come with the latest payment systems like Razorpay, Pay-U,
                                                    Paytm, Neteller, Paypal, Bitcoin, Stripe, and Skrill .
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn_outer text-center mt-5">
                        <center>
                            {" "}
                            <a
                                data-toggle="modal"
                                data-target="#requestQoute"
                                id="requestCasinosoftware5"
                                className="contact_btn"
                            >
                                Ask a question
                            </a>
                        </center>
                    </div>
                </div>
            </section>
            <section className="testimonial text-center bg-light">
                <div className="container c-1">
                    <div className="col-md-12 text-center">
                        <h3 className="sub_title ft_40">
                            <span className="yellow">What</span>{" "}
                            <span className="black"> do clients say about us?</span>
                        </h3>
                    </div>
                    <div
                        id="testimonial4"
                        className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
                        data-ride="carousel"
                        data-pause="hover"
                        data-interval={5000}
                        data-duration={2000}
                    >
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <div className="testimonial4_slide">
                                    <p className="text-dark">
                                        One of the best online casino solution providers. One can choose
                                        from their range of products, and their products are also
                                        customizable. I want to recommend Mobzway without any
                                        reservations.
                                    </p>
                                    <h4 className="text-dark">SAUL Smiket</h4>
                                    <p
                                        className="text-center text-dark"
                                        style={{ marginTop: 10, fontWeight: 700 }}
                                    >
                                        USA
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial4_slide">
                                    <p className="text-dark">
                                        Right from the level of conceptualization to the ending of my
                                        casino software development work, they have always coordinated
                                        and communicated everything with me. It has enabled me to guide
                                        them towards an infallible casino product.
                                    </p>
                                    <h4 className="text-dark">Bernad jones</h4>
                                    <p
                                        className="text-center text-dark"
                                        style={{ marginTop: 10, fontWeight: 700 }}
                                    >
                                        Germany
                                    </p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testimonial4_slide">
                                    <p className="text-dark">
                                        Their professional casino app developers were friendly, and
                                        really helpful. They worked with utmost dedication and that
                                        impressed me. Although I was doubtful at the beginning, they
                                        finished and handed over my casino game software within the
                                        stipulated time.
                                    </p>
                                    <h4 className="text-dark">Piter</h4>
                                    <p
                                        className="text-center text-dark"
                                        style={{ marginTop: 10, fontWeight: 700 }}
                                    >
                                        Australia
                                    </p>
                                </div>
                            </div>
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#testimonial4"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon">
                                <i className="fas fa-angle-left" />
                            </span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#testimonial4"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon">
                                <i className="fas fa-angle-right" />
                            </span>
                        </a>
                    </div>
                    <div className="row upwork">
                        <div className="col-md-3 col-6 mt-5"> </div>
                        <div className="col-md-3 col-6 mt-5"> </div>
                        <div className="col-md-3 col-6 mt-5"> </div>
                        <div className="col-md-3 col-6 mt-5"> </div>
                    </div>
                    <div className="row other-icon">
                        <div className="col-md-4 col-4 mt-5">
                            {" "}
                            <img
                                src="/assets/images/softwaresuggest.png"
                                className=" hire-image icons"
                            />{" "}
                        </div>
                        <div className="col-md-4 col-4 mt-5">
                            {" "}
                            <img
                                src="/assets/images/topmobileappdevelopers.png"
                                className=" hire-image icons"
                            />{" "}
                        </div>
                        <div className="col-md-4 col-4 mt-5">
                            {" "}
                            <img
                                src="/assets/images/capterra.png"
                                className=" hire-image icons"
                            />{" "}
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container c-1 mb-5 gateway-integration">
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
                                <span className="black"> Payment gateway integration</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row text-center justify-content-center">
                        <div className="col-md-2 col-6 mt-2">
                            <img
                                src="/assets/images/CashfreePayments.png"
                                className="icons icons2"
                            />
                        </div>
                        <div className="col-md-2 col-6 mt-2">
                            <img
                                src="/assets/images/Razorpay.png"
                                className="icons"
                            />
                        </div>
                        <div className="col-md-2 col-6 mt-2">
                            <img src="/assets/images/Payu.png" className="icons" />
                        </div>
                        <div className="col-md-2 col-6 mt-2">
                            <img src="/assets/images/Paytm.png" className="icons" />
                        </div>
                        <div className="col-md-2 col-6 mt-2">
                            <img
                                src="/assets/images/Neteller.png"
                                className="icons"
                            />
                        </div>
                        <div className="col-md-2 col-6 mt-2">
                            <img
                                src="/assets/images/PayPal.png"
                                className="icons"
                            />
                        </div>
                    </div>
                    <div
                        className="row text-center justify-content-center"
                        style={{ marginLeft: 100 }}
                    >
                        <div className="col-md-4 col-6 mt-4">
                            <img
                                src="/assets/images/Bitcoin.png"
                                className=" icons bit"
                            />
                        </div>
                        <div className="col-md-4 col-6 mt-4">
                            <img
                                src="/assets/images/Stripe.png"
                                className="  icons"
                            />
                        </div>
                        <div className="col-md-4 col-6 mt-4">
                            <img
                                src="/assets/images/Skrill.png"
                                className=" icons skrill"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/*---------product you may like------------*/}
            <section className="like_product">
                <div className="container">
                    {/* <div class="heading_title text-center">
              <h1><span>PRODUCT</span> YOU MAY LIKE</h1>
          </div> */}
                    <div className="col-md-12 text-center">
                        <div
                            className=""
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <h2 className="sub_title prd">
                                <span className="yellow">PRODUCT</span>{" "}
                                <span className="black">YOU MAY LIKE</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row row1">
                        <div
                            className="col-lg-3 col-md-6 col1 wow bounceInLeft"
                            data-wow-duration="2s"
                        >
                            <div className="pr_wrp text-center">
                                <div className="pro_itemth">
                                    <a href="/poker-game-development/">
                                        <div className="item_inner development-shadow-section position-relative">
                                            <img
                                                alt="Poker Game"
                                                src="/assets/images/Product_Poker.png"
                                            />
                                        </div>
                                        <div className="title_pltfm">Poker Game Development</div>
                                        <p className="content">
                                            Mobzway provides poker game development for all the popular
                                            poker games like Texas Hold’em, Omaha, Seven Stud, OFC Poker,
                                            and more. Our seasoned game developers utilize cutting-edge
                                            gaming technology to offer the player's best poker gaming
                                            experience.
                                        </p>
                                    </a>
                                </div>
                                {/* <div class="btn_outer mt-3">
                          <a href="/poker-game-development/" class="contact_btn">View More</a>
                      </div> */}
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col1 wow bounceInLeft"
                            data-wow-duration="2s"
                        >
                            <div className="pr_wrp text-center">
                                <div className="pro_itemth">
                                    <a href="/rummy-game-development/">
                                        <div className="item_inner development-shadow-section position-relative">
                                            <img
                                                alt="Rummy"
                                                src="/assets/images/Product_Rummy.png"
                                            />
                                        </div>
                                        <div className="title_pltfm">Rummy Game Development</div>
                                        <p className="content">
                                            The highly talented team of rummy software developers ensures
                                            that very engaging and customized solutions of this “game of
                                            skill” are offered to the gaming clients. All the popular
                                            versions of rummy are developed as per the client’s
                                            requirements.
                                        </p>
                                    </a>
                                </div>
                                {/* <div class="btn_outer mt-3">
                           <a href="/rummy-game-development/" class="contact_btn">View More</a>
                       </div> */}
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col1 wow bounceInRight"
                            data-wow-duration="2s"
                        >
                            <div className="pr_wrp text-center">
                                <div className="pro_itemth">
                                    <a href="/teen-patti-game-development/">
                                        <div className="item_inner development-shadow-section position-relative">
                                            <img
                                                alt="Teen Patti Game"
                                                src="/assets/images/Product_Teenpatti.png"
                                            />
                                        </div>
                                        <div className="title_pltfm">Teen Patti Game Development</div>
                                        <p className="content">
                                            Mobzway offers ready-to-use Teen Patti solutions for business
                                            ventures. We build customized solutions for all the variants
                                            like Fox,Vintage, and Teen Patti Plus. We provide solutions
                                            for all desktop &amp; mobile devices, and web browsers at the
                                            best prices.
                                        </p>
                                    </a>
                                </div>
                                {/* <div class="btn_outer mt-3">
                           <a href="/teen-patti-game-development/" class="contact_btn">View More</a>
                       </div> */}
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col1 wow bounceInRight"
                            data-wow-duration="2s"
                        >
                            <div className="pr_wrp text-center">
                                <div className="pro_itemth">
                                    <a href="/teen-patti-software/">
                                        <div className="item_inner development-shadow-section position-relative">
                                            <img
                                                alt="Casino"
                                                src="/assets/images/product_ludo.png"
                                            />
                                        </div>
                                        <div className="title_pltfm">Ludo Game Development</div>
                                        <p className="content">
                                            If you are looking forward to acquiring online ludo game
                                            solutions, Mobzway Technologies is among the most famous ludo
                                            app development companies. We offer both ready-to-live and
                                            customized gaming solutions for Android, iOS, Web, and Desktop
                                            using HTML 5.
                                        </p>
                                    </a>
                                </div>
                                {/* <div class="btn_outer mt-3">
                           <a href="/casino-game-development/" class="contact_btn">View More</a>
                       </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="get_in-touch get ">
                <div className="container c-1">
                    {/* <div class="heading_title text-center">
   <h1 class="text-white"><span>GET</span> IN TOUCH, ASK US ANYTHING</h1>
   </div> */}
                    <div className="col-md-12 text-center">
                        <div
                            className=""
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <h2 className="sub_title">
                                <span className="black_bg_head_yellow">Start </span>{" "}
                                <span className="black_bg_head_white">
                                    Your Casino Business Journey with Mobzway
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="sub_head text-center">
                        <h4 className="text-white">
                            Try Our Casino Games, and explore all the features and solutions you
                            need to start, run, and grow your business.
                        </h4>
                    </div>
                    <div className="text-center">
                        <a data-toggle="modal" data-target="#requestQoute">
                            <p>Try Demo</p>
                        </a>
                    </div>
                </div>
            </section>
        </>

    )
}
