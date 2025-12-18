import React from 'react'

export const metadata = {
  title: "Bingo Software | Buy Bingo Software | Online Bingo Program",
  description: "Mobzway is the best Bingo Software Provider Company in India, having professional bingo software developers to develop bingo game software.",
  keywords: "bingo game development, bingo game software, bingo game app, online custom bingo software, bingo card game, bingo card game online",
  alternates: { canonical: "https://www.mobzway.com/bingo-software/" },
  openGraph: {
    title: "Bingo Software | Buy Bingo Software | Online Bingo Program",
    description: "Mobzway is the best Bingo Software Provider Company in India, having professional bingo software developers to develop bingo game software.",
    url: "https://www.mobzway.com/bingo-software/",
    siteName: "Mobzway Technologies",
    images: [
      {
        url: "https://www.mobzway.com//assets/images/bingo_banner.png",
        width: 815,
        height: 821,
        alt: "bingo_game_software",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bingo Software | Buy Bingo Software | Online Bingo Program",
    description: "Mobzway is the best Bingo Software Provider Company in India, having professional bingo software developers to develop bingo game software.",
    site: "@mobzway",
    creator: "@mobzway",
    images: ["https://www.mobzway.com//assets/images/bingo_banner.png"],
  },
};

export default function BingoSoftware() {
    return (
        <>
            {/*?php include 'header.php' ?*/}
            {/* Banner */}
            <section
                className="banner pokers position-relative banner-bingo"
                style={{
                    backgroundImage: 'url("/assets/images/bingo_banner.png")'
                }}
            >
                <div className="overlay" />
                <div className="wel_come_container">
                    <h1 className="welcome_text wel">
                        Best Bingo Software development Company
                    </h1>
                    <p className="sml_text">
                        Get the most innovative online bingo software solution built by the
                        trusted bingo software provider — Mobzway! We develop high-quality
                        software at the most competitive and attractive rates. Whether you want
                        to launch a mobile app, offer easy-to-download bingo computer software
                        or host your own website, we build bingo game solutions for all!
                    </p>
                    <div className="btn_outer">
                        <a
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
                                        We Provide Best Bingo Software Development Solution
                                    </div>
                                    <div className="bottom_text">
                                        Unlock the whole new world of success in the online casino niche
                                        with Mobzway’s very engaging and interactive bingo software
                                        services, customized to run seamlessly on all the virtual gaming
                                        platforms such as smartphones and PCs.
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
                                <span className="black">
                                    OF READYMADE BINGO SOFTWARE DEVELOPED BY US
                                </span>
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
                                            alt="Single Ticket"
                                            src="/assets/images/1_single-ticket.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Single Ticket</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Our bingo{" "}
                                        <a href="<?=  $baseurl ?>casino-software/">casino software</a>{" "}
                                        solution features single ticket choice and provides a complete
                                        joy of this casino variant.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Multi Ticket"
                                            src="/assets/images/1_multi-ticket-bingo.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Multi Ticket</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        With our online bingo game software, players can raise multiple
                                        tickets and continue experiencing enriched gaming.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Group Play"
                                            src="/assets/images/1_group-play.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Group Play</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Mobzway’s bingo software services offer group gaming choice to
                                        the bingo players, thus adding more excitement.
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
                                            src="/assets/images/baccarat04.png"
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
                                            src="/assets/images/baccarat05.png"
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
                                            src="/assets/images/baccarat06.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Risk Management</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Bingo software that we develop have advanced security systems
                                        that act as a shield and prevent any kind of fraud.
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
                                            src="/assets/images/baccarat07.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Multi-Language</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        For engaging the players from specific regions, we also design
                                        bingo games/apps/websites in multiple languages.
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
                                            src="/assets/images/baccarat08.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Back Office &amp; CRM</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Mobzway’s developers offer distinct and most user-friendly
                                        backend management systems and CRM access so that managing the
                                        gaming business becomes easy for operators.
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
                                            src="/assets/images/baccarat09.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Rewards &amp; Loyalty</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Our rewards and loyalty feature allows online bingo software
                                        businesses to launch their dedicated rewards and loyalty
                                        campaigns and increase engagement.
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
                                            src="/assets/images/baccarat10.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Anti Fraud System</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        To restrict any kind of fraud in the games, our services come
                                        with the best anti-fraud systems to ensure peace to both the
                                        players and operators.
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
                                            src="/assets/images/baccarat11.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Responsible Gaming</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Our readymade bingo software strictly ensures user privacy and
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
                                            src="/assets/images/baccarat12.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>World Class Security</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Buy bingo software that is hosted on the world’s most secure
                                        hosting platforms.
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
                                <span className="black">BINGO SOFTWARE DEVELOPMENT SOLUTIONS</span>
                                {/*2*/}
                            </h2>
                        </div>
                    </div>
                    <div className="row row1">
                        <div className="col-md-6 col1">
                            <img
                                alt="electronic Bingo software"
                                src="/assets/images/bingo_sol_1.png"
                                className="wow bounceInLeft my-image"
                                data-wow-duration="2s"
                            />
                        </div>
                        <div className="col-md-6 col1 wow bounceInUp" data-wow-duration="2s">
                            <span className="font-weight-bold f-left">
                                Best Bingo Game Platform Solution
                            </span>
                            <br />
                            <p className="para-1">
                                Casino games are considered as the most popular among all the games.
                                These games are ruling the entire world of the online gaming
                                industry. Online Bingo game software is also a casino game that is
                                very popular and has caught the attention of the world over the past
                                few decades. We at Mobzway provide our clients with the best bingo
                                game development solutions.
                                <br />
                                <br />
                                <span className="font-weight-bold">
                                    Most intuitive, easy and world-class bingo gaming experience
                                </span>
                                <br />
                                Our firm is the one-stop Bingo software provider and develops gaming
                                products with the most advanced features and tools and user-friendly
                                interface to keep the players engaged all the time. Our company has
                                already carved a niche in the custom bingo development of highly
                                customized and automatic casino games. We also offer a full suite of
                                advanced features and tools to the customers to operate and maintain
                                their bingo computer software game websites and mobile apps
                                successfully.
                                <br />
                                <br />
                                <span className="font-weight-bold">
                                    Online Bingo gaming products with exceptional quality
                                </span>
                                <br />
                                We focus on the creation of bingo gaming products with unexceptional
                                quality and also combine the readymade bingo software
                                <span className="moretext1">
                                    mechanics with various social gaming elements like gifting,
                                    playing with friends, tournaments and even leaderboards. Our firm
                                    is recognized as one of the most creative and competent online
                                    bingo game development companies and we design gaming websites
                                    with realistic sounds, heightened simulations, perfect graphics
                                    and visuals, and everything is supported in one perfect game idea.
                                    <br />
                                    <br />
                                    <span className="font-weight-bold">
                                        Customized Online Bingo software products at the most affordable
                                        cost
                                    </span>
                                    <br />
                                    The high-quality interface and micro gaming impact the players
                                    with the most intuitive, easy, flexible and world-class gaming
                                    experience to the users. The player can choose their favorite
                                    casino game and can play online. They can also download the bingo
                                    game app that we design and develop on their mobile phones and can
                                    have the real fun of playing the casino games by sitting at their
                                    homes.
                                    <br />
                                    <br />
                                    <span className="font-weight-bold">
                                        Bring your creative ideas to life with customized gaming
                                        solutions
                                    </span>
                                    <br />
                                    Mobzway develops industry-leading and licensed bingo software
                                    products that empower the client’s ability to attract, engage,
                                    entertain and retain their online customers and various social
                                    communities.
                                    <br />
                                    <br />
                                    <span className="font-weight-bold">
                                        Expand your existing online gaming operations
                                    </span>
                                    <br />
                                    Businesses can expand their existing online gaming operations or
                                    can establish a new interactive bingo software community by
                                    leveraging our software suites of bingo games and advanced gaming
                                    tools. More than just providing gaming software, we assist our
                                    clients in the custom bingo game development of customized bingo
                                    software solutions which will bring all their creative and unique
                                    ideas to life.
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
                            Need expert advice on buying bingo software? Get in touch with us now
                            and let our seasoned bingo software developers answer all your
                            questions.
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
                                    BUILD THE BINGO SOFTWARE FOR ALL PLATFORMS
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
                                                Buy bingo software that is compatible with Mac and Windows
                                                devices and give your desktop players to easily download and
                                                bet on their favorite games.
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
                                                Get a customized and flexible solution that can run
                                                seamlessly on any mobile device be it Android, iOS or
                                                Windows. Our bingo mobile game apps are responsive and can
                                                adapt to varied mobile and tablet screen sizes.
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
                                                Take your online bingo software business on the web with our
                                                cross-browser and cross-platform compatible bingo games.
                                                Connect with the web-savvy bingo software lovers right away!
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
                                <span className="black">BINGO SOFTWARE DEVELOPER</span>
                                {/*2*/}
                            </h2>
                        </div>
                    </div>
                    <div className="row row1">
                        <div className="col-md-6 col1">
                            <p className="wow bounceInUp hire-para" data-wow-duration="2s">
                                Want to hire a bingo software developer? Connect with Mobzway and
                                get bingo game software developed for your business from our
                                experienced team of developers. Our skilled developers create the
                                most fascinating and engaging software solution for all sorts of
                                devices, including mobiles and PCs. Also, we offer dedicated bingo
                                game websites to run online casino business. These sites are
                                compatible with all the popular browsers such Google Chrome,
                                Microsoft Edge, Firefox, etc.
                                <br />
                                <br />
                                Our bingo software solution comes with the ultra-secure payment
                                systems that restrict payment frauds and also ensures multi-channel
                                payment functionality through different modes such as net banking,
                                cryptocurrencies, wallet payments, debit/credit cards and more. Our
                                developers also offer you the backend admin dashboard, using which
                                you can easily manage your business activities, assign tasks and
                                analyze growth.
                                <br />
                                <br />
                                Mobzway, with its team of brilliant bingo software developers, has
                                served its clientele across the globe. Today, we are a trusted bingo
                                game development company in India, USA &amp; UK and are also growing
                                our footprints in other parts of the world.
                                <br />
                                <br />
                                As bingo software providers, we also take the responsibility of
                                serving our clients with excellent post sales. Our dedicated support
                                staff helps you with technical assistance round the clock and our
                                developers always keep you informed about the forthcoming upgrades
                                and take care of the maintenance.
                                <br />
                                <br />
                                Get in touch with us to build an all-new bingo game software for
                                your business or to power your existing solution with our
                                cutting-edge casino games.
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
                                alt="Bingo Software Program"
                                src="/assets/images/bingo_hire_1.png"
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
                      <h1><span>HOW</span> WE DESIGN & DEVELOP BEST BINGO SOFTWARE GAMES?</h1>
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
                                        WE DESIGN &amp; DEVELOP BEST BINGO SOFTWARE GAMES?
                                    </span>
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
                                alt="Custom Bingo Development"
                                src="/assets/images/Bingo_Design.png"
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
                                        Bingo software developed by experts are available in highly
                                        advanced 2D and 3D graphics to create an impressive visual
                                        appeal.
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
                                alt="Online Bingo Software Developers"
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
                                                CHOOSE MOBZWAY AS YOUR BINGO SOFTWARE DEVELOPMENT COMPANY?
                                            </span>
                                            {/*2*/}
                                        </h2>
                                    </div>
                                </div>
                                <p>
                                    Mobzway brings to you the best of gaming artwork, technology,
                                    platform compatibility, security and post-sales so that your bingo
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
                                        Online bingo software is available for desktop and mobile
                                        devices. Also get responsible bingo game development done for
                                        web browsers.
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
            {/*-------------Blogs------------------*/}
            <section className="Blogs">
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
                                    <span className="yellow">Featured</span>{" "}
                                    <span className="black">Blog posts</span>
                                    {/*2*/}
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="carousel_container">
                                <div className="blog owl-carousel owl-theme">
                                    {/*?php foreach($someposts as $somepost): ?*/}
                                    <div className="pro_item">
                                        <div className="pro_inner">
                                            <div className="overlay_item" />
                                            <img src="<?php echo $somepost->post_image; ?>" alt="" />
                                        </div>
                                        <div className="title_pltfm">
                                            {/*?php echo $somepost-*/}post_title;?&gt;
                                        </div>
                                        {/* <div class="blog_info">
                              <ul class="d-flex">
                                  <li><?php echo  $somepost->display_name;?></li>
                                  <li>
                                      <?php echo  $somepost->post_modified;?>
                                  </li>
                                 
                          </div> */}
                                        <p className="content">
                                            {/*?php $content = $somepost-*/}post_content; echo
                                            mb_strimwidth($content, 0, 200, '...');?&gt;
                                        </p>
                                        <div className="btn_outer">
                                            <a
                                                href="<?php echo $somepost-> guid;?>"
                                                className="contact_btn"
                                            >
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                    {/*?php endforeach;?*/}
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
            {/*?php include 'footer.php' ?*/}
        </>

    )
}
