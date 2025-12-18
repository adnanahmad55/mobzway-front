import React from 'react'

export const metadata = {
    title: "Card Game Development Company | Card Game App Developers",
    description: "Mobzway is one of the best card game development company in India. We have experienced game developers to develop card games like teen patti, rummy, poker, etc.",
    keywords: "Card game development, card game app development, card game development company, card game developers",
    alternates: { canonical: "https://www.mobzway.com/card-game-development/" },
    openGraph: {
        title: "Card Game Development Company | Card Game App Developers India",
        url: "https://www.mobzway.com/card-game-development/",
        siteName: "Mobzway Technologies",
        images: [
            {
                url: "https://www.mobzway.com//assets/images/card_banner.jpg",
                width: 815,
                height: 821,
                alt: "card_game",
                type: "image/jpg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Card Game Development Company | Card Game App Developers India",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com//assets/images/card_banner.jpg"],
    },
};

export default function page() {
    return (
        <>
            {/*?php include 'header.php' ?*/}
            {/* Banner */}
            <section
                className="banner pokers position-relative"
                style={{
                    backgroundImage: 'url("/assets/images/card_banner.jpg")'
                }}
            >
                <div className="overlay" />
                <div className="wel_come_container">
                    <h1 className="welcome_text wel">Card Game development Company</h1>
                    <p className="sml_text">
                        Are you looking to establish a strong online presence in the card game
                        business? Look no further than Mobzway for a comprehensive card game app
                        development solution that will captivate your online casino players.
                        Hire our skilled card game developers at Mobzway and discover the
                        perfect solution for mobile, desktop, and web platforms. Elevate your
                        card game development with us.
                    </p>
                    <div className="btn_outer">
                        <a
                            id="requestaquotecard1"
                            data-toggle="modal"
                            data-target="#requestQoute"
                            className="contact_btn"
                        >
                            Request a quote
                        </a>
                    </div>
                </div>
                <div
                    className="banner_bottom_info"
                    style={{ backgroundColor: "rgba(15, 16, 15, 0.8)" }}
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-11">
                                <div className="bottom_header">
                                    <div className="bottom_head">
                                        We Provide the Best Card Game Development Solution
                                    </div>
                                    <div className="bottom_text">
                                        Mobzway is a leading card game development company that has
                                        expertise in building next-gen applications for android, iOS,
                                        mac, windows, and all the popular web browsers.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                <span className="black">OF CARD GAME DEVELOPED BY US</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row row1 row1add">
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Multiplayer Game"
                                            src="/assets/images/c03.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Multiplayer Game</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Our card game software solution offers the players a choice of
                                        enjoying multiplayer games in just a few clicks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Casino Card Game"
                                            src="/assets/images/c01.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Casino Card Game</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        {" "}
                                        Players can enjoy the casino card game from the comfort of their
                                        places using our online casino solution.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Skill Based Card Games"
                                            src="/assets/images/c02.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Skill Based Card Games</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        For those who love to play skill-based card games, our casino
                                        card game solution offers multiple games to challenge the
                                        skills.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Payment Security"
                                            src="/assets/images/07.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Payment Security</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Our card game developers ensure that all of our solutions are
                                        integrated with robust payment security systems to avoid fraud.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="RNG Certified Games"
                                            src="/assets/images/c05.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>RNG Certified Games</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        {" "}
                                        To promote fair play on the platform, all our games are RNG
                                        certified so that random numbers are generated.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Risk Management"
                                            src="/assets/images/c06.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Risk Management</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        To counter risks during play, our platform is integrated with
                                        risk management systems to keep the gaming environment safe and
                                        secured.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Multi-Language"
                                            src="/assets/images/c07.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Multi-Language</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        For engaging the players from specific regions, we also design
                                        card games/apps/websites in multiple languages.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Back Office & CRM"
                                            src="/assets/images/c08.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Back Office &amp; CRM</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Our game solutions offer distinct and most user-friendly backend
                                        management systems and CRM access so that managing the gaming
                                        business becomes easy for operators.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Rewards & Loyalty"
                                            src="/assets/images/c09.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Rewards &amp; Loyalty</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Our rewards and loyalty feature allows card game businesses to
                                        launch their dedicated rewards and loyalty campaigns and
                                        increase engagement.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Anti Fraud System"
                                            src="/assets/images/c10.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Anti Fraud System</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        To restrict any kind of fraud in the games, our card game
                                        software comes with the best anti-fraud systems to ensure peace
                                        to both the players and operators.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Responsible Gaming"
                                            src="/assets/images/c11.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Responsible Gaming</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Our card game solutions strictly ensure user privacy and data
                                        safety so that customers can enjoy the games worry-free.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="World Class Security"
                                            src="/assets/images/c12.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>World Class Security</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Our card game app solutions are hosted on the world’s most
                                        secure hosting platforms.
                                    </p>
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
                                <span className="black">CARD GAME APP DEVELOPMENT SOLUTIONS</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row row1">
                        <div className="col-md-6 col1">
                            <img
                                src="/assets/images/c_sol_1.jpg"
                                className="wow bounceInLeft my-image"
                                data-wow-duration="2s"
                                alt="Card Game Development Software "
                            />
                        </div>
                        <div className="col-md-6 col1 wow bounceInUp" data-wow-duration="2s">
                            <h3 className="h3-size">
                                {" "}
                                <span className="font-weight-bold f-left m-0">
                                    Experience Rich Online Gaming with Our Card Game Development
                                    Services
                                </span>
                            </h3>
                            <p className="para-1 m-0">
                                Unlock a world of card game possibilities with our game development
                                company. At Mobzway, we empower businesses to create unique card
                                games, fostering innovation and creativity with every project. Our
                                team of skilled online gaming developers combines technical
                                expertise with creativity to craft immersive online gaming
                                experiences. We specialize in developing amazing online card games
                                for all platforms. Businesses can easily leverage our pool of highly
                                experienced card game app development to bring their innovative
                                gaming projects to life at affordable rates.
                                <br />
                                <br />
                            </p>
                            <h3 className="h3-size">
                                {" "}
                                <span className="font-weight-bold">
                                    Comprehensive Card Game Development Services
                                </span>
                            </h3>
                            Mobzway is your full-service card game app development company,
                            dedicated to interactive design and cutting-edge mobile app and web
                            page development. We prioritize user-centered design and offer custom
                            web applications tailored to a variety of card games, including rummy,
                            casino, poker, and more. Our card gaming websites and mobile apps are
                            designed to meet the unique requirements of our clients. Our success
                            is measured by the satisfaction of our global client base.
                            <br />
                            <br />
                            <span className="moretext1">
                                <h3 className="h3-size">
                                    <span className="font-weight-bold">
                                        Expertise in the Online Card Gaming Industry
                                    </span>
                                </h3>
                                At Mobzway, our developers boast extensive experience and unmatched
                                expertise, delivering top-tier online gaming solutions on time. With
                                a track record of developing premium gaming websites and mobile
                                applications, we ensure that our clients' online card gaming
                                products stand out from the competition. Clients can expect
                                high-quality websites and apps at competitive rates. We cover all
                                aspects of a card game development company, including web design,
                                development, testing, maintenance, and support.
                                <br />
                                <br />
                                <h3 className="h3-size">
                                    <span className="font-weight-bold">
                                        Tap into the Growing Online Card Gaming Market
                                    </span>
                                </h3>
                                Leverage the burgeoning popularity of online card gaming by
                                launching your own Rummy or Teen Patti game app and website. Our
                                gaming experts have invested substantial time and effort to
                                understand the online card game market, enabling you to attract and
                                retain a large user base and achieve substantial business growth.
                                <br />
                                <br />
                                <h3 className="h3-size">
                                    <span className="font-weight-bold">
                                        Foster Innovation and Growth
                                    </span>
                                </h3>
                                From customized web-based applications to card game mobile apps,
                                Mobzway is an industry-leading, full-service online game development
                                company. If you're interested in developing your own card game
                                website, contact us anytime for expert guidance and support.
                            </span>
                            <p />
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
                                {/*2*/}
                            </h2>
                        </div>
                    </div>
                    <div className="sub_head text-center">
                        <h4 className="text-white">
                            Need expert advice on card game development? Get in touch with us now
                            and let our seasoned game developers answer all your questions.
                        </h4>
                    </div>
                    <div className="text-center">
                        <a
                            id="requestaquotecard2"
                            data-toggle="modal"
                            data-target="#requestQoute"
                        >
                            <p>LET'S TALK</p>
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
                                    BUILD THE CARD GAME FOR ALL PLATFORMS{/*< /span*/}
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
                                                src="/assets/images/1-01.png"
                                                className="wow bounceInRight new-one "
                                                data-wow-duration="2s"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title cards text-center">
                                                HTML 5 Browser
                                            </h5>
                                            <p className="card-text text-center text-dark">
                                                Our card game development company offers gaming solutions
                                                for all the desktop devices. Be it Mac or Windows operating
                                                systems, we provide card games for all.
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
                                                src="/assets/images/02-01.png"
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
                                                Mobzway offers mobile game app development services for all
                                                mobile devices, compatible with all platforms, our best card
                                                game app for android, iOS or windows.
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
                                                src="/assets/images/3-01.png"
                                                className="wow bounceInRight new-one "
                                                data-wow-duration="2s"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title cards text-center">MAC / PC</h5>
                                            <p className="card-text text-center text-dark">
                                                {" "}
                                                Take your card gaming business on the web with our
                                                cross-browser and cross-platform compatible games. Connect
                                                with the web-savvy card game lovers right away!
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
                                <span className="black">CARD GAME DEVELOPER</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row row1">
                        <div className="col-md-6 col1">
                            <p className="wow bounceInUp hire-para " data-wow-duration="2s">
                                Are you looking to kickstart your card game business or elevate an
                                existing one? Mobzway provides tailor-made, white-label solutions
                                for online card games. As a prominent card game development company
                                based in India, we boast a global clientele spanning America, Asia,
                                Europe, and Africa.
                                <br />
                                <br />
                                When you need to hire a card game provider, we offer top-notch
                                online solutions that seamlessly run on iOS, Android, Mac, and
                                Windows platforms. Moreover, we deliver HTML 5-based virtual casino
                                games, fully compatible with popular browsers such as Chrome, Edge,
                                Firefox, and more. If you're seeking to enhance an existing
                                solution, our team of card game developers is at your service, ready
                                to modernize and enrich your offering.
                                <br />
                                <br />
                                Our highly experienced card game app developers meticulously
                                understand your requirements and collaborate with our panel of
                                gaming experts to create an impressively tailored application for
                                your business. After completing the development process, our team
                                provides continuous technical assistance and support to ensure
                                uninterrupted operations. Rest assured, we prioritize the safety and
                                security of your solution, hosting it on world-class providers and
                                integrating robust anti-fraud systems to safeguard your platform.
                                <br />
                                <br />
                                Looking to launch a dedicated casino game variation like Blackjack,
                                Slot, Roulette, Baccarat, Bingo, or Keno? Our developers will guide
                                you to establish your presence in the competitive casino niche.
                            </p>
                            <div className="btn_outer">
                                <a
                                    id="requestaquotecard3"
                                    data-toggle="modal"
                                    data-target="#requestQoute"
                                    className="contact_btn requst"
                                >
                                    Request A Quote
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col1">
                            <img
                                src="/assets/images/c_hire_1.jpg"
                                className="wow bounceInRight hire-image"
                                data-wow-duration="2s"
                                alt="Multiplayer Card Game Development "
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
                                        WE DESIGN &amp; DEVELOP BEST CARD GAME?
                                    </span>
                                    {/*2*/}
                                </h2>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="how wow bounceInUp" data-wow-duration="2s">
                                        <h4>
                                            1.<span> Pre-Production</span>
                                        </h4>
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
                                        <h4>
                                            2.<span> Production</span>
                                        </h4>
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
                                        <h4>
                                            3.<span> Post-Production</span>
                                        </h4>
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
                                src="/assets/images/card_game_design.png"
                                className="m-left"
                                alt="Card Game Software Development"
                            />
                        </div>
                    </div>
                </div>
            </section>
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
                                        src="/assets/images/choose1.png"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <h4 className="arc">Architecture</h4>
                                    <p>
                                        Card Games developed by experts are available in highly advanced
                                        2D and 3D graphics to create an impressive visual appeal.
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
                                        Robust systems ensure complete data privacy of the players,
                                        avoid fraud and aid in safer online payments.
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <img
                                        alt="Security"
                                        src="/assets/images/choose2.png"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-3 col-sm-2"></div>
                        <div className="col-lg-4 col-md-6 col-sm-8 col2">
                            <img
                                src="/assets/images/why_choose_bg.png"
                                className="w-100"
                                alt="Card Game Software For Mac "
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
                                                CHOOSE MOBZWAY AS YOUR CARD GAME DEVELOPMENT COMPANY?
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                                <p>
                                    Mobzway brings to you the best of gaming artwork, technology,
                                    platform compatibility, security, and post-sales so that your cad
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
                                        src="/assets/images/choose3.png"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <h4 className="pla">Platforms</h4>
                                    <p>
                                        Card Games available for desktop and mobile devices. Also, get
                                        responsible Card game development done for web browsers.
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
                                        The next-gen gaming technology that utilizes advanced
                                        programming levels, superior artwork, and sound engineering.
                                    </p>
                                </div>
                                <div className="col-md-6">
                                    <img
                                        alt="Technology"
                                        src="/assets/images/choose4.png"
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
                            <img
                                src="/assets/images/Paytm.png"
                                className="icons"
                            />
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
                                    <a href="<?=  $baseurl ?>poker-game-development/">
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
                          <a href="<?=  $baseurl ?>poker-game-development/" class="contact_btn">View More</a>
                      </div> */}
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col1 wow bounceInLeft"
                            data-wow-duration="2s"
                        >
                            <div className="pr_wrp text-center">
                                <div className="pro_itemth">
                                    <a href="<?=  $baseurl ?>casino-software/">
                                        <div className="item_inner development-shadow-section position-relative">
                                            <img
                                                alt="Rummy"
                                                src="/assets/images/Product_Casino.png"
                                            />
                                        </div>
                                        <div className="title_pltfm">Casino Software</div>
                                        <p className="content">
                                            For the online casino game entrepreneurs and businesses,
                                            Mobzway offers customized casino game solutions. All the
                                            popular casino games like Roulette, Blackjack, Slott,
                                            Baccarat, etc. are designed and developed at our gaming studio
                                            as per your business needs.
                                        </p>
                                    </a>
                                </div>
                                {/* <div class="btn_outer mt-3">
                           <a href="<?=  $baseurl ?>rummy-game-development/" class="contact_btn">View More</a>
                       </div> */}
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col1 wow bounceInRight"
                            data-wow-duration="2s"
                        >
                            <div className="pr_wrp text-center">
                                <div className="pro_itemth">
                                    <a href="<?=  $baseurl ?>teen-patti-game-development/">
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
                           <a href="<?=  $baseurl ?>teen-patti-game-development/" class="contact_btn">View More</a>
                       </div> */}
                            </div>
                        </div>
                        <div
                            className="col-lg-3 col-md-6 col1 wow bounceInRight"
                            data-wow-duration="2s"
                        >
                            <div className="pr_wrp text-center">
                                <div className="pro_itemth">
                                    <a href="<?=  $baseurl ?>teen-patti-software/">
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
                           <a href="<?=  $baseurl ?>casino-game-development/" class="contact_btn">View More</a>
                       </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------Blogs------------------*/}
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
                            id="requestaquotecard4"
                            data-toggle="modal"
                            data-target="#requestQoute"
                        >
                            <p>Try Demo</p>
                        </a>
                    </div>
                </div>
            </section>
            {/*?php include 'footer.php' ?*/}
        </>

    )
}
