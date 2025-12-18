import React from 'react'

export const metadata = {
    title: "OFC Poker Game Development Company | OFC Poker Software",
    description: "Mobzway leading poker game development company in India. We have dedicated poker software developers to provide top poker game app, website at affordable price.",
    keywords: "OFC Poker game development company india, OFC poker game developers, OFC Poker Software",
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    alternates: {
        canonical: "https://www.mobzway.com/ofc-poker-game-development/",
    },
    openGraph: {
        title: "OFC Poker Game Development Company | OFC Poker Software Providers",
        url: "https://www.mobzway.com/ofc-poker-game-development/",
        siteName: "Mobzway Technologies",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://www.mobzway.com/assets/images/pineapple_banner.png",
                width: 815,
                height: 821,
                alt: "ofc_poker_game",
                type: "image/png",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "OFC Poker Game Development Company | OFC Poker Software Providers",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com/assets/images/pineapple_banner.png"],
    },
};

export default function OfcPokerGameDevelopment() {
    return (
        <>
            {/* Banner */}
            <section
                className="banner pokers banner_lth position-relative"
                style={{
                    backgroundImage:
                        'url("/assets/images/pineapple_banner.png")'
                }}
            >
                <div className="overlay" />
                <div className="wel_come_container">
                    <h1 className="welcome_text wel">OFC POKER GAME DEVELOPMENT COMPANY</h1>
                    <p className="sml_text">
                        Do you wish to start your own niche poker business? Let Mobzway offer
                        you the best OFC poker game development services. Our highly talented
                        developers do pineapple poker development for varied devices and
                        platforms and that too at very reasonable prices. Request for quotes
                        now!
                    </p>
                    <div className="btn_outer">
                        <a
                            data-toggle="modal"
                            data-target="#requestQoute"
                            className="contact_btn"
                        >
                            Request A Quote
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
                                        We Provide Best OFC Poker Game Development
                                    </div>
                                    <div className="bottom_text">
                                        Get ultimate online OFC Poker game solution developed from the
                                        trusted pineapple game development company Mobzway. Amplify your
                                        business in the poker niche with us!
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
                                <span className="black">OF OFC POKER GAME DEVELOPED BY US</span>
                                {/*2*/}
                            </h2>
                        </div>
                    </div>
                    <div className="row row1 row1add">
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Single Table Game Play"
                                            src="/assets/images/omaha01.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Single Table Game Play</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        One of the leading feature of our poker game is Simple table
                                        game play that let online players enjoy the simplicity of OFC
                                        poker.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Multi Table Game Play"
                                            src="/assets/images/omaha02.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Multi Table Game Play</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        To take things to next level, we also include multi table game
                                        play feature that let players engage of multiple tables in poker
                                        game.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Tournaments"
                                            src="/assets/images/omaha03.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Tournaments</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Tournament feature in poker game development ensures that feel
                                        of competitiveness driving players to push forward and win.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Payment System"
                                            src="/assets/images/omaha04.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Payment System</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Mobzway integrates the best payment gateways that allow the
                                        players to bet via multiple payment modes.
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
                                            src="/assets/images/omaha05.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>RNG Certified Games</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        The games developed by our gaming experts are RNG certified and
                                        promote random number generation for transparent gaming.
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
                                            src="/assets/images/omaha06.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Risk Management</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        OFC poker games that we develop have advanced security systems
                                        that act as a shield and prevent any kind of frauds.
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
                                            src="/assets/images/omaha07.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Multi-Language</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        For engaging the players from specific regions, we also design
                                        OFC poker game/apps/websites in multiple languages.
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
                                            src="/assets/images/omaha08.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Back Office &amp; CRM</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Mobzway’s OFC poker game solutions offer distinct and most
                                        user-friendly backend management systems and CRM access so that
                                        managing the gaming business becomes easy for operators.
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
                                            src="/assets/images/omaha09.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Rewards &amp; Loyalty</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Our rewards and loyalty feature allows OFC poker game businesses
                                        to launch their dedicated rewards and loyalty campaigns and
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
                                            src="/assets/images/omaha10.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Anti Fraud System</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        To restrict any kind of frauds in the games, our OFC poker game
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
                                            src="/assets/images/omaha11.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Responsible Gaming</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Our OFC poker game solutions strictly ensure user privacy and
                                        data safety so that customers can enjoy the games worry-free.
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
                                            src="/assets/images/omaha12.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>World Class Security</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Our OFC poker game solutions are hosted on the world’s most
                                        secured hosting platforms.{" "}
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
                                <span className="black">OFC POKER GAME DEVELOPMENT SOLUTIONS</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row row1">
                        <div className="col-md-6 col1">
                            <img
                                src="/assets/images/sol_1.png"
                                className="wow bounceInLeft my-image"
                                data-wow-duration="2s"
                            />
                        </div>
                        <div className="col-md-6 col1 wow bounceInUp" data-wow-duration="2s">
                            <p className="para-1 ">
                                The Gameplay of Open Face Chinese Poker is based on Rules Similar To
                                Texas Hold’em poker is just a regular variant of the poker game. The
                                gameplay of pineapple poker is based on the rules similar to the one
                                in Texas Hold’em. But the set up of OFC poker is slightly different
                                from the Texas Hold’em. Players who are familiar with the rules of
                                Texas Hold’em will understand how to play OFC poker with their
                                similarities and differences.
                                <br />
                                <br />
                                The Online Version of OFC Poker is Becoming Increasingly Popular
                                Worldwide The online version of pineapple poker is becoming
                                increasingly popular in regular online poker rooms throughout the
                                world. Mobzway offers the best poker gaming platform to the clients
                                to start their online poker business. All our expert developers are
                                dedicated and committed to delivering high-quality OFC poker
                                interface which includes stunning graphics, calculative techniques,
                                sophisticated programming system and architecture that ensures a
                                high level of player engagement in the game. Our poker game
                                solutions support all browsers and are capable of running on iOS,
                                Android and all other platforms.
                                <br />
                                <br />
                                <span className="moretext1">
                                    Earn Huge Profits from Your Online Poker Gaming Platform We create
                                    an amazingly enjoyable world of entertainment for the OFC poker
                                    fans and enable casino operators to earn huge profits from their
                                    online poker platforms. At Mobzway, the iGaming experts ensure
                                    that the business of the game operators reach to the unrivaled
                                    position and can set a new level of success.
                                    <br />
                                    <br />
                                    Get Ready To Roll Out The Poker Game That Can Set New Level Of
                                    Success If you are a casino gaming operator and you are looking
                                    for the pineapple game development services, you can hire our team
                                    of proficient game developers who have high expertise in the
                                    development and implementation of online poker rooms. We will
                                    leave no single stone unturned for the development of highly
                                    successful poker gaming solutions. So get ready to roll out the
                                    online OFC poker game for starting your online poker business
                                    within a short period of time.
                                </span>
                            </p>
                            <p className="moreless-button1 moreless-button">Read more</p>
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
                            Need expert advice on OFC poker game development? Get in touch with us
                            now and let our seasoned game developers answer all your questions.
                        </h4>
                    </div>
                    <div className="text-center">
                        <a data-toggle="modal" data-target="#requestQoute">
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
                                    BUILD THE OFC POKER GAME FOR ALL PLATFORMS
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
                                                Get Open Face Chinese Poker game that is compatible with Mac
                                                and Windows devices and give your desktop players to easily
                                                download and bet on their favorite games.
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
                                                Get a customized and flexible OFC poker game solution that
                                                can run seamlessly on any mobile device be it Android, iOS
                                                or Windows. Our OFC poker game mobile apps are responsive
                                                and can adapt to varied mobile and tablet screen sizes.{" "}
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
                                                Take your OFC poker game business on the web with our
                                                cross-browser and cross-platform compatible OFC poker games.
                                                Connect with the web-savvy OFC poker game lovers right away!
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
                                <span className="black">OFC POKER GAME DEVELOPER</span>
                                {/*2*/}
                            </h2>
                        </div>
                    </div>
                    <div className="row row1">
                        <div className="col-md-6 col1">
                            <p className="wow bounceInUp hire-para " data-wow-duration="2s">
                                Start your niche online OFC poker gaming business with Mobzway! We
                                are a renowned Open Face Chinese Poker game development company that
                                has successfully developed OFC poker solutions for esteemed gaming
                                ventures in America, Asia, Africa and Europe. <br />
                                <br />
                                Our game development experts build online OFC poker game solutions
                                that can seamlessly run on platforms such as Android, iOS, Mac &amp;
                                Windows. For gaming on all popular browsers, we also build
                                customized and responsive (HTML 5 coded) solutions, compatible with
                                the likes of Chrome, Safari, Mozilla and various others.
                                <br />
                                <br />
                                At our gaming studio, we take care of all your requirements related
                                to pineapple and other poker games. We also do OFC poker development
                                and help you in completely setting your online poker business. In
                                addition to OFC poker game software development, our game
                                development veterans also build other niche poker games and help you
                                to start your own game development business at the earliest.
                                <br />
                                <br />
                                For a quick set up of your niche online poker business, we also
                                offer ready to use whitelabel OFC poker solution. Our poker game
                                developers can easily alter the software and help you to easily
                                commence your online poker business. Furthermore, if you’ve an
                                existing online poker venture, you can hire our OFC poker software
                                developer and upgrade your existing solution.
                                <br />
                                <br />
                                We have commendable post sales records and we provide 24 X 7
                                technical assistance to our clients so that their business never
                                suffers due to technical glitches. In addition, we also take care of
                                timely maintenance and the necessary upgrades.
                            </p>
                            <div className="btn_outer">
                                <a
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
                                src="/assets/images/developer.png"
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
                                        WE DESIGN &amp; DEVELOP BEST OFC POKER GAME?
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
                                src="/assets/images/ofc_poker-design.png"
                                className="m-left"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* our users */}
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
                                        OFC Poker Games developed by experts are available in highly
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
                                        Robust systems ensure complete data privacy of the players,
                                        avoid frauds and aid in safer online payments.
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
                                                CHOOSE MOBZWAY AS YOUR TEXAS PINEAPPLE GAME DEVELOPMENT
                                                COMPANY?
                                            </span>
                                            {/*2*/}
                                        </h2>
                                    </div>
                                </div>
                                <p>
                                    Mobzway brings to you the best of gaming artwork, technology,
                                    platform compatibility, security and post-sales so that your OFC
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
                                        OFC Poker Games available for desktop and mobile devices. Also
                                        get responsible OFC poker game development done for web
                                        browsers.{" "}
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
                                        programming levels, superior artwork and sound engineering.
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
                        <div className="col-md-3 col-6 mt-5"></div>
                        <div className="col-md-3 col-6 mt-5"></div>
                        <div className="col-md-3 col-6 mt-5"></div>
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
                                    <a href="<?=  $baseurl ?>rummy-game-development/">
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
                        <a data-toggle="modal" data-target="#requestQoute">
                            <p>Try Demo</p>
                        </a>
                    </div>
                </div>
            </section>
        </>

    )
}
