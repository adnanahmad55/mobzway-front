import React from 'react'
import BannerForm from '../components/BannerForm'
import Script from 'next/script';

export const metadata = {
    title: "Poker Game Development Company in India | Poker Game App Devs",
    description:
        "Mobzway leading poker game development company in India. We have dedicated poker software developers & designer to provide top poker game app, website at affordable price.",
    keywords:
        "poker game development company, poker software development, poker app development, poker game development, poker software development company, poker game software development",
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    alternates: { canonical: "https://www.mobzway.com/poker-game-development/" },

    openGraph: {
        locale: "en_US",
        type: "website",
        title: "Poker Game Development Company in India | Poker Game App Developers",
        description:
            "Mobzway leading poker game development company in India. We have dedicated poker software developers & designer to provide top poker game app, website at affordable price.",
        url: "https://www.mobzway.com/poker-game-development/",
        siteName: "Mobzway Technologies",
        images: [
            {
                url: "https://www.mobzway.com/assets/images/poker-game-development.png",
                width: 815,
                height: 821,
                alt: "poker_game",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Poker Game Development Company in India | Poker Game App Developers",
        description:
            "Mobzway leading poker game development company in India. We have dedicated poker software developers & designer to provide top poker game app, website at affordable price.",
        site: "@mobzway",
        creator: "@mobzway",
        images: "https://www.mobzway.com/assets/images/poker-game-development.png",
    },
};

export default function PokerGameDevelopment() {
    return (
        <>

            {/* Google Tag Manager */}
            {/* <Script id="gtm-poker" strategy="afterInteractive">
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":
        new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=
        "https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,"script","dataLayer","GTM-N2RT4NX");`}
            </Script> */}

            {/* JSON-LD Schema */}
            <Script type="application/ld+json" id="poker-schema">
                {JSON.stringify({
                    "@context": "http://schema.org",
                    "@type": "Product",
                    name: "Poker Game Development Company",
                    brand: "Mobzway",
                    aggregateRating: {
                        "@type": "AggregateRating",
                        ratingValue: "5",
                        ratingCount: "475",
                    },
                })}
            </Script>

            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n@media (min-width: 767px) {\n\n\n    .heroSlider {\n        padding-top: 150px;\n        padding-bottom: 50px;\n    }\n\n    .hero_cta_block {\n        bottom: 24%;\n    }\n\n    .heroSlider img {\n        height: auto;\n    }\n\n    .heroSlider .col-md-7 {\n        padding-top: 2rem;\n        min-height: 386px;\n    }\n}\n"
                }}
            />
            {/* Banner */}
            <div
                className="heroSlider container-fluid"
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
                                                        Poker game development Company
                                                    </h1>
                                                    <img
                                                        className="d-block d-md-none mb-3 w-100"
                                                        src="/assets/images/pokerSlide.webp"
                                                        alt="Rummy software app development company"
                                                    />
                                                    <div className="hero__description">
                                                        Get the best Online Poker Game App &amp; website
                                                        solution developed by Mobzway! With the leading Poker
                                                        Game Development Company we ensure the top-end delivery
                                                        of our Poker products in the gaming industry.
                                                    </div>
                                                </div>
                                                <div className="col-md-5 d-none d-md-block">
                                                    <img
                                                        src="/assets/images/pokerSlide.webp"
                                                        alt="Rummy software app development company"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <h2 data-hk="s40-1-12" className="hero__title">
                                                        Hire #1 Poker Game Developers
                                                    </h2>
                                                    <img
                                                        className="d-block d-md-none mb-3 w-100"
                                                        src="/assets/images/pokerSlide1.webp"
                                                        alt="A23 Rummy game software app development"
                                                    />
                                                    <div className="hero__description">
                                                        With the trust of over 300+ clients worldwide. We offer
                                                        a choice for gaming businesses to hire #1 Poker Game
                                                        Developers in industry, and help them to build an
                                                        engaging game from scratch or upgrade their existing
                                                        games.
                                                    </div>
                                                </div>
                                                <div className="col-md-5 d-none d-md-block">
                                                    <img
                                                        src="/assets/images/pokerSlide1.webp"
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
                        {/*?php include 'banner-form.php' ?*/}
                        <BannerForm />
                    </div>
                </div>
            </div>
            {/* <section alt="Poker Game Development" class="banner pokers position-relative  banner-pok" style="background-image: url('/images/poker-game-development.png');">
  <div class="overlay"></div>
    <div class="wel_come_container">
        <h1 class="welcome_text wel" > 
          Poker game
          development Company
        </h1>
        <p class="sml_text">
          Get the best online poker game app & website solution developed by Mobzway! We are a trusted game provider worldwide and offer a choice to businesses to either hire poker game developers to upgrade their existing games or help them build an engaging game from scratch.      
        </p>
        <div class="btn_outer">
 
              <a class="contact_btn" id="requestaquotepoker1"  data-toggle="modal" data-target="#requestQoute">Request a quote</a>

        </div>
    </div>
    <div class="banner_bottom_info" style="background-color: rgba(15, 16, 15, 0.8);">
      <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-11">
              <div class="bottom_header">
                  <div class="bottom_head">
                      We Provide the Best Poker Game App Development Solution
                  </div>
                  <div class="bottom_text">
                    With a team of qualified developers, designers, and sound engineers, we stand as a reputed poker game development company. We have expertise in building the best game solutions for desktop, web, and mobile devices.                        
                  </div>
              </div>
            </div>
        </div>
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
                                    src="/assets/images/poker-game-development/game-launched1.webp"
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
                                    src="/assets/images/poker-game-development/satisfied-customers1.webp"
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
                                    src="/assets/images/poker-game-development/client-retension1.webp"
                                    className="client-retension"
                                />
                                Client retension
                            </h3>
                        </div>
                        <div className="col-md-3 mt-3 text-center play">
                            <h4 className="plus">100k+</h4>
                            <h3 className="counters">
                                <img
                                    alt="best online rummy game app"
                                    src="/assets/images/poker-game-development/players1.webp"
                                    className="players"
                                />
                                Players
                            </h3>
                        </div>
                    </div>
                </div>
            </section>
            {/* features */}
            <section className="features">
                <div className="container">
                    {/* <div class="heading_title text-center">
              <h1><span>FEATURES</span> OF POKER GAME DEVELOPED BY US</h1>
          </div> */}
                    <div className="col-md-12 text-center">
                        <div
                            className=""
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <h2 className="sub_title">
                                <span className="yellow">FEATURES</span>{" "}
                                <span className="black">OF POKER GAME DEVELOPED BY US</span>
                                {/*2*/}
                            </h2>
                        </div>
                    </div>
                    <div className="row row1add feature-poker-gmae-block">
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="feature-poker-gmae-inner">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="image_area">
                                            <img
                                                alt="Holdem Poker"
                                                src="/assets/images/poker-game-development/01-11.webp"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <h3>Holdem Poker</h3>
                                    </div>
                                    <div className="col-md-12">
                                        <p>
                                            Our online game solution features the{" "}
                                            <a href="/texas-holdem-poker/">
                                                Texas Hold’em poker
                                            </a>{" "}
                                            variation to help you engage with those who love to play
                                            Hold’em poker.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="feature-poker-gmae-inner">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="image_area">
                                            <img
                                                alt="5 Card Omaha"
                                                src="/assets/images/poker-game-development/02.webp"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <h3>5 Card Omaha</h3>
                                    </div>
                                    <div className="col-md-12">
                                        <p>
                                            We also provide dedicated solutions for{" "}
                                            <a href="/omaha-poker-game-development/">
                                                {" "}
                                                5 Card Omaha
                                            </a>{" "}
                                            players compatible with all kinds of virtual devices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="feature-poker-gmae-inner">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="image_area">
                                            <img
                                                alt="PLO"
                                                src="/assets/images/poker-game-development/omaha02.webp"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <h3>PLO</h3>
                                    </div>
                                    <div className="col-md-12">
                                        <p>
                                            Customized and flexible Pot-Limit Omaha solutions are also
                                            developed by our gaming experts at Mobzway to let you earn PLO
                                            lovers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="feature-poker-gmae-inner">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="image_area">
                                            <img
                                                alt="Sit & Go"
                                                src="/assets/images/poker-game-development/04.webp"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <h3>Sit &amp; Go</h3>
                                    </div>
                                    <div className="col-md-12">
                                        <p>
                                            Mobzway also provides the most advanced-tech solutions for the
                                            Sit &amp; Go variation of poker games for all virtual gaming
                                            devices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="feature-poker-gmae-inner">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="image_area">
                                            <img
                                                alt="Poker Tournaments"
                                                src="/assets/images/poker-game-development/05.webp"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <h3>Poker Tournaments</h3>
                                    </div>
                                    <div className="col-md-12">
                                        <p>
                                            Online poker game app solutions offered by Mobzway come with
                                            tournaments feature to let the operators organize their
                                            dedicated tournaments.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="feature-poker-gmae-inner">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="image_area">
                                            <img
                                                alt="OFC Poker"
                                                src="/assets/images/poker-game-development/06.webp"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <h3>OFC</h3>
                                    </div>
                                    <div className="col-md-12">
                                        <p>
                                            At Mobzway, we also offer{" "}
                                            <a href="/ofc-poker-game-development/">OFC</a>,
                                            aka Open Face Chinese Poker solution for mobile, web, and
                                            desktop devices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="feature-poker-gmae-inner">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="image_area">
                                            <img
                                                alt="Payment Security"
                                                src="/assets/images/poker-game-development/07.webp"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <h3>Payment Security</h3>
                                    </div>
                                    <div className="col-md-12">
                                        <p>
                                            Poker game app solutions provided by us are built using the
                                            best payment security technologies so that the players never
                                            have to worry about their wager money.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="feature-poker-gmae-inner">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="image_area">
                                            <img
                                                alt="Anti Fraud System"
                                                src="/assets/images/poker-game-development/08.webp"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <h3>Anti Fraud System</h3>
                                    </div>
                                    <div className="col-md-12">
                                        <p>
                                            To restrict any frauds in the games, our game comes with the
                                            best anti-fraud systems to ensure peace to both the players
                                            and operators.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="feature-poker-gmae-inner">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="image_area">
                                            <img
                                                alt="Rewards & Loyalty"
                                                src="/assets/images/poker-game-development/09.webp"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <h3>Rewards &amp; Loyalty</h3>
                                    </div>
                                    <div className="col-md-12">
                                        <p>
                                            {" "}
                                            Our rewards and loyalty feature allows game businesses to
                                            launch their dedicated rewards and loyalty campaigns and
                                            increase engagement.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="feature-poker-gmae-inner">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="image_area">
                                            <img
                                                alt="RNG Certified Games"
                                                src="/assets/images/poker-game-development/r111.webp"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <h3>RNG Certified Games</h3>
                                    </div>
                                    <div className="col-md-12">
                                        <p>
                                            The games developed by our gaming experts are RNG certified
                                            and promote random number generation for transparent gaming.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="feature-poker-gmae-inner">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="image_area">
                                            <img
                                                alt="Responsible Gaming"
                                                src="/assets/images/poker-game-development/11.webp"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <h3>Responsible Gaming</h3>
                                    </div>
                                    <div className="col-md-12">
                                        <p>
                                            Our poker solutions strictly ensure user privacy and data
                                            safety so that customers can enjoy the games worry-free.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="feature-poker-gmae-inner">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="image_area">
                                            <img
                                                alt="Back Office & CRM"
                                                src="/assets/images/poker-game-development/12.webp"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <h3>Back Office &amp; CRM</h3>
                                    </div>
                                    <div className="col-md-12">
                                        <p>
                                            Mobzway’s poker solutions offer distinct and most
                                            user-friendly backend management systems and CRM access so
                                            that managing the gaming business becomes easy for operators.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* solutions */}
            <section className="solutions">
                <div className="container">
                    {/* <div class="heading_title text-center">
              <h1><span>ONLINE</span> POKER GAME DEVELOPMENT SOLUTIONS</h1>
          </div> */}
                    <div className="col-md-12 text-center">
                        <div
                            className=""
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <h2 className="sub_title">
                                <span className="yellow">ONLINE</span>{" "}
                                <span className="black">POKER GAME DEVELOPMENT SOLUTIONS</span>
                                {/*2*/}
                            </h2>
                        </div>
                    </div>
                    <div className="row row1 align-items-center">
                        <div className="col-md-6 col1">
                            <img
                                alt="Poker Game Development Company"
                                src="/assets/images/poker-game-development-company.webp"
                                className="wow bounceInLeft my-image"
                                data-wow-duration="2s"
                            />
                        </div>
                        <div className="col-md-6 col1 wow bounceInUp" data-wow-duration="2s">
                            <p className="para-1">
                                Mobzway is a leading poker game development company in India, USA
                                &amp; UK, which offers a superior class of game development
                                services. Our highly experienced poker game developers go the extra
                                mile to give the poker lovers a different and top-notch gaming
                                experience.
                                <br />
                                <br />
                                As the best poker game for android, iOS, or web platforms and our
                                game designers, make sure that a realistic experience is delivered
                                on all sorts of virtual platforms. We also offer customized{" "}
                                <a href="/poker-software/">poker software</a>{" "}
                                development services for the game operators who wish to run their
                                online poker rooms.
                                <br />
                                <br />
                                Our games exhibit the best modern graphics that induce the players
                                to play and utilize their gaming skills and leave them thoroughly
                                entertained. Using artificial intelligence, eye-popping visual
                                effects, and advanced technology, our team creates games that look
                                very premium and run seamlessly on multiple platforms.
                                <br />
                                <br />
                                <strong>
                                    To ensure that our clients gain players’ trust, we always offer
                                    reliable and secure game solutions.
                                </strong>
                            </p>
                            <br />
                            <span className="moretext1">
                                <p className="lefts">
                                    Our seasoned game developers know the art of creating the best
                                    poker game apps. They leave no stone unturned to incorporate the
                                    best visuals, sound effects, technology, and design aesthetics to
                                    deliver a world-class gaming experience. Moreover, the excellent
                                    quality HTML5 based games developed by us are adaptable to
                                    different screen resolutions, screen sizes, and aspect ratios.
                                </p>
                                <p>
                                    <br />
                                    <br />
                                    <strong className="lefts">
                                        {" "}
                                        We are committed to brilliance, and that’s why we offer:
                                    </strong>
                                    <br />
                                    <br />
                                </p>
                                <ul className="lefts">
                                    <li> 1). A poker game that are secure and encrypted.</li>
                                    <li> 2). Top-rated assistance to our clients.</li>
                                    <li> 3). Games which are adaptable to multiple platforms.</li>
                                    <li>
                                        {" "}
                                        4). Games that have appealing graphics and easy-to-use UI.
                                    </li>
                                </ul>
                            </span>
                            <div>
                                <p className="moreless-button1 moreless-button">Read more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* get in touch */}
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
                            </h2>
                        </div>
                    </div>
                    <div className="sub_head text-center">
                        <h4 className="text-white">
                            Are you looking for an expert consultation on starting your online
                            gaming business? Or want advice on getting the best game to engage
                            poker players? Connect with us now, and let’s make things happen for
                            you.
                        </h4>
                    </div>
                    <div className="text-center">
                        <a
                            className="contact_btn"
                            id="requestaquotepoker2"
                            data-toggle="modal"
                            data-target="#requestQoute"
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>
            </section>
            {/* platforms */}
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
                                <span className="yellow">WE</span>{" "}
                                <span className="black">
                                    {" "}
                                    BUILD THE POKER GAME FOR ALL PLATFORMS
                                </span>
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
                                    className="col-lg-4 col-md-6 col21 mb-5 wow bounceInRight"
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
                                                {" "}
                                                Our poker game development company offers gaming solutions
                                                for all desktop devices. Be it Mac or Windows operating
                                                systems. We provide poker games for all.{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-lg-4 col-md-6 col21 mb-5  wow bounceInRight"
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
                                                {" "}
                                                Mobzway offers game app development services for all mobile
                                                devices, compatible with all platforms, our best poker game
                                                for android, iOS, or windows.
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
                                                className="wow bounceInRight new-one "
                                                data-wow-duration="2s"
                                                style={{
                                                    width: 150,
                                                    visibility: "visible",
                                                    animationDuration: "2s"
                                                }}
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title cards text-center">MAC / PC</h5>
                                            <p className="card-text text-center text-dark">
                                                {" "}
                                                We offer game solutions for popular web browsers like
                                                Chrome, Internet Explorer, etc. Our cutting-edge technology
                                                ensures better streaming and low data consumption on web
                                                browsers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* developer */}
            <section className="developer">
                <div className="container">
                    {/* <div class="heading_title text-center">
              <h1><span>HIRE</span> POKER GAME DEVELOPERS</h1>
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
                                <span className="black">POKER GAME DEVELOPERS</span>
                                {/*2*/}
                            </h2>
                        </div>
                    </div>
                    <div className="row row1">
                        <div className="col-md-6 col1 wow bounceInUp" data-wow-duration="2s">
                            <p className="hire-para">
                                Pave the way to a successful journey in the gaming business. Let our
                                qualified team of game developers take the burden of developing an
                                exceptional poker game app for you.
                                <br />
                                <br />
                                Our poker game programmers ensure that your needs are efficiently
                                transformed into an entertaining game, which can attract game
                                fanatics and provide you with more business.
                                <br />
                                <br />
                                As we understand and value our fellow clients' needs, we provide
                                them with an open and transparent discussion with our gaming
                                experts, which allows them to discuss their requirements in detail
                                and get personalized Solutions.
                                <br />
                                <br />
                                Our core lies in poker game development, which features striking
                                visual effects, artificial intelligence, multi-currency support,
                                peer-to-peer gaming experience, elite technology, and compatibility
                                with multiple operating systems and devices.
                                <br />
                                <br />
                                We aim to benefit our clients. Therefore, while creating games, we
                                make sure that maximum audience retention is achieved and fabulous
                                entertainment is delivered. Our gaming connoisseurs also ensure that
                                our game offers a very realistic and seamless gaming experience.
                                <br />
                                <br />
                                We serve as a dedicated poker game developer to our clients to
                                better insight into gaming solutions to suit the best as per their
                                development needs. Mobzway gives the superior class of poker game
                                development services, which delight the game lovers. Our company
                                understands the requirement of game admirers and, according to their
                                requirement, provides reliable, secure, precise, and realistic game
                                service. Our proficient team of developers will help you get the
                                best live poker game apps ever as per your requirement.
                            </p>
                            <div className="btn_outer">
                                <a
                                    data-toggle="modal"
                                    id="requestaquotepoker3"
                                    data-target="#requestQoute"
                                    className="contact_btn requst"
                                >
                                    Request A Quote
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col1">
                            <img
                                alt="Poker Game Developer"
                                src="/assets/images/poker-game-development/poker-game-developer.webp"
                                className="wow bounceInRight hire-image"
                                data-wow-duration="2s"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* design_develop */}
            <section className="design_develop">
                <div className="container">
                    <div className="row row1">
                        <div className="col-md-6 col1">
                            {/* <div class="heading_title">
                      <h1><span>HOW</span> WE DESIGN & DEVELOP BEST POKER GAMES?</h1>
                  </div> */}
                            <div
                                className=""
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">HOW</span>{" "}
                                    <span className="black">
                                        WE DESIGN &amp; DEVELOP BEST POKER GAMES?
                                    </span>
                                    {/*2*/}
                                </h2>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="how wow bounceInUp" data-wow-duration="2s">
                                        <h3>
                                            1.<span> Pre-Production</span>
                                        </h3>
                                        <ul>
                                            <li>Concept Document</li>
                                            <li>Game Design Document</li>
                                            <li>Project Plane</li>
                                            <li>Prototype</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div
                                        className="how wow bounceInUp"
                                        data-wow-duration="2s"
                                        data-wow-delay=".2s"
                                    >
                                        <h3>
                                            2.<span> Production</span>
                                        </h3>
                                        <ul>
                                            <li>Art Production</li>
                                            <li>Programing</li>
                                            <li>Audio Production</li>
                                            <li>Quality Control</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                                <div className="col-md-6">
                                    <div
                                        className="how wow bounceInUp"
                                        data-wow-duration="2s"
                                        data-wow-delay=".4s"
                                    >
                                        <h3>
                                            3.<span> Post-Production</span>
                                        </h3>
                                        <ul>
                                            <li>Patches &amp; Updates</li>
                                            <li>Maintenance</li>
                                            <li>Customer Service</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                        <div className="col-md-6 col1">
                            <img
                                alt="Poker Game Software"
                                src="/assets/images/poker-game-development/poker-game-software.webp"
                                className="m-left"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/*

  <section class="our_users">
      <div class="container">
           <div class="heading_title text-center">
              <h1 class="text-white"><span>OUR</span> USERS ALL OVER WORLD</h1>
          </div> 
          <div class="col-md-12 text-center">
              <div class="" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                  <h2 class="sub_title"><span class="black_bg_head_yellow">OUR</span> <span class="black_bg_head_white">USERS ALL OVER WORLD</span></2>
              </div>
          </div>

          <div class="row row1">
              <div class="col-md-1">
              </div>

              <div class="col-md-10">
                  <div class="row">
                  <div class="col-md-4 col1 text-center">
                      <p>50+</p>
                      <h3>CUSTOMERS</h3>
                  </div>

                  <div class="col-md-4 col1 text-center">
                      <p>600k+</p>
                      <h3>USERS</h3>
                  </div>

                  <div class="col-md-4 col1 text-center border-0">
                      <p>20+</p>
                      <h3>COUNTRIES</h3>
                  </div>
              </div>

              <div class="col-md-1">
              </div>
          </div>
      </div>
  </section>
  //*/}
            {/* why choose */}
            <section className="why_choose">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-4 col-md-12 col-sm-12 col-12 col1 wow bounceInLeft"
                            data-wow-duration="2s"
                            data-wow-delay=".2s"
                        >
                            <div className="row">
                                <div className="col-md-6">
                                    <img
                                        alt="Architecture"
                                        src="/assets/images/poker-game-development/choose1.webp"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <h4 className="arc">Architecture</h4>
                                    <p>
                                        Poker Games developed by experts are available in highly
                                        advanced 2D and 3D graphics to create an impressive visual
                                        appeal.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12"></div>
                        <div
                            className="col-lg-4 col-md-12 col-sm-12 col-12 col1 wow bounceInRight"
                            data-wow-duration="2s"
                            data-wow-delay=".2s"
                        >
                            <div className="row">
                                <div className="col-md-6 text-right">
                                    <h4 className="sec">Security</h4>
                                    <p className="sec-para">
                                        Robust systems ensure the players' complete data privacy, avoid
                                        fraud and aid in safer online payments.{" "}
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <img
                                        alt="Security"
                                        src="/assets/images/poker-game-development/choose2.webp"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-2"></div>
                        <div className="col-lg-4 col-md-6 col-sm-8 col2">
                            <img
                                alt="Buy Best Poker Game App"
                                src="/assets/images/poker-game-development/why_choose_bg.webp"
                                className="w-100"
                            />
                            <div className="all_circle_why_choose">
                                {/* <div class="heading_title text-center">
                      <h1 class="text-white"><span>WHY</span> CHOOSE MOBZWAY AS YOUR POKER GAME DEVELOPMENT COMPANY?</h1>
                  </div> */}
                                <div className="col-md-12 text-center">
                                    <div
                                        className=""
                                        data-aos="fade-right"
                                        data-aos-duration={1500}
                                        data-aos-once="true"
                                    >
                                        <h2
                                            className="sub_title"
                                            style={{ padding: "20px 0 10px 0!important" }}
                                        >
                                            <span className="yellow">WHY</span>{" "}
                                            <span className="black">
                                                CHOOSE MOBZWAY AS YOUR POKER GAME DEVELOPMENT COMPANY?
                                            </span>
                                            {/*2*/}
                                        </h2>
                                    </div>
                                </div>
                                <p>
                                    Mobzway brings to you the best of gaming artwork, technology,
                                    platform compatibility, security, and post-sales so that your
                                    gaming business always stays on top.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-2"></div>
                        <div
                            className="col-lg-4 col-md-12 col-sm-12 col-12 col1 wow bounceInLeft"
                            data-wow-duration="2s"
                            data-wow-delay=".4s"
                        >
                            <div className="row">
                                <div className="col-md-6">
                                    <img
                                        alt="Platforms"
                                        src="/assets/images/poker-game-development/choose3.webp"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <h4 className="pla">Platforms</h4>
                                    <p>
                                        Our Games are available for desktop and mobile devices. Also,
                                        get responsible poker game development done for web browsers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 col-12"></div>
                        <div
                            className="col-lg-4 col-md-12 col-sm-12 col-12 col1 wow bounceInRight"
                            data-wow-duration="2s"
                            data-wow-delay=".4s"
                        >
                            <div className="row">
                                <div className="col-md-6 text-right">
                                    <h4 className="tech">Technology</h4>
                                    <p className="tech-para">
                                        The next-gen gaming technology utilizes advanced programming
                                        levels, fine artwork, and sound engineering.
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <img
                                        alt="Technology"
                                        src="/assets/images/poker-game-development/choose4.webp"
                                    />
                                </div>
                            </div>
                        </div>
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
                                        One of the best online gaming solution providers. One can choose
                                        from their range of products and their products are customizable
                                        as well. I would like to recommend Mobzway without any
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
                                        Right from the level of conceptualisation to the ending of my
                                        work, they have always coordinated and communicated everything
                                        with me. This has enabled me to guide them towards an infallible
                                        product.
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
                                        Their professional designers were friendly, and really helpful.
                                        They worked with utmost dedication and that impressed me.
                                        Although I was doubtful at the beginning, they finished and
                                        handed over my project within the stipulated time.
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
                                src="/assets/images/poker-game-development/softwaresuggest.webp"
                                className=" hire-image icons"
                            />{" "}
                        </div>
                        <div className="col-md-4 col-4 mt-5">
                            {" "}
                            <img
                                alt="poker game"
                                src="/assets/images/poker-game-development/topmobileappdevelopers.webp"
                                className=" hire-image icons"
                            />{" "}
                        </div>
                        <div className="col-md-4 col-4 mt-5">
                            {" "}
                            <img
                                alt="poker game"
                                src="/assets/images/poker-game-development/capterra.webp"
                                className=" hire-image icons"
                            />
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
                                alt="poker game"
                                src="/assets/images/rummy-game-development/CashfreePayments.webp"
                                className="icons icons2"
                            />
                        </div>
                        <div className="col-md-2 col-6 mt-2">
                            <img
                                alt="Razorpay"
                                src="/assets/images/rummy-game-development/Razorpay.webp"
                                className="icons"
                            />
                        </div>
                        <div className="col-md-2 col-6 mt-2">
                            <img
                                alt="rummy game"
                                src="/assets/images/rummy-game-development/Payu.webp"
                                className="icons"
                            />
                        </div>
                        <div className="col-md-2 col-6 mt-2">
                            <img
                                src="/assets/images/rummy-game-development/Paytm.webp"
                                className="icons"
                            />
                        </div>
                        <div className="col-md-2 col-6 mt-2">
                            <img
                                alt="poker"
                                src="/assets/images/rummy-game-development/Neteller.webp"
                                className="icons"
                            />
                        </div>
                        <div className="col-md-2 col-6 mt-2">
                            <img
                                src="/assets/images/rummy-game-development/PayPal.webp"
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
                                alt="poker game"
                                src="/assets/images/rummy-game-development/Bitcoin.webp"
                                className=" icons bit"
                            />
                        </div>
                        <div className="col-md-4 col-6 mt-4">
                            <img
                                src="/assets/images/rummy-game-development/Stripe.webp"
                                className="  icons"
                            />
                        </div>
                        <div className="col-md-4 col-6 mt-4">
                            <img
                                src="/assets/images/rummy-game-development/Skrill.webp"
                                className=" icons skrill"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* like product */}
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
                                                src="/assets/images/rummy-game-development/Product_Poker.webp"
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
                                                src="/assets/images/poker-game-development/Product_Rummy.webp"
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
                                                src="/assets/images/poker-game-development/Product_Teenpatti.webp"
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
                                                src="/assets/images/poker-game-development/product_ludo.webp"
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
                                    <span className="yellow" /> <span className="black">FAQ's</span>
                                </h2>
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
                                                    Can you integrate multiplayer functionality into my poker
                                                    game?
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
                                                    Yes, Mobzway specializes in multiplayer integration to
                                                    enhance your poker game's interactive features and
                                                    engagement.
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
                                                    Is poker game illegal in India?
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
                                                    The legal status of poker varies in India by state.
                                                    Mobzway can help ensure compliance with local gaming
                                                    regulations and laws.
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
                                                    How much does it cost to build a solid Poker Software?
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
                                                    The cost of developing poker software depends on your
                                                    specific requirements and features. Mobzway offers
                                                    customized solutions to fit your budget.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                        <div className="card-header" id="headingFive">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link collapsed text-dark"
                                                    data-toggle="collapse"
                                                    data-target="#collapseFive"
                                                >
                                                    <i className="fa fa-plus" />
                                                    How to ensure security in a Poker Game App?
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
                                                    Mobzway ensures security through encryption, secure
                                                    payment gateways, and regular audits, safeguarding user
                                                    data and transactions.
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
                                                    How long will it take to build a poker game?
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
                                                    The development time for a poker game varies based on
                                                    complexity and features, but Mobzway provides efficient
                                                    and timely development services.
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
                                                    Which is the best online poker game software development
                                                    company?
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
                                                    Mobzway is a leading online poker software development
                                                    company, offering high-quality, customizable solutions to
                                                    meet your gaming business needs.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="btn_outer text-center mt-5 col-12">
      <center> <a data-toggle="modal" data-target="#requestQoute" id="requestCasinosoftware5"
              class="contact_btn">Ask a question</a></center>
  </div> */}
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
                                    your business journey with Mobzway
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="sub_head text-center">
                        <h4 className="text-white">
                            Try Our Games, and explore all the features and solutions you need to
                            start, run, and grow your business.
                        </h4>
                    </div>
                    <div className="text-center">
                        <a
                            id="requestaquotepoker4"
                            data-toggle="modal"
                            data-target="#requestQoute"
                        >
                            <p>Try Demo</p>
                        </a>
                    </div>
                </div>
            </section>
        </>

    )
}
