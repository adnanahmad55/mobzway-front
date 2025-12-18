import Script from 'next/script';
import React from 'react'

export const metadata = {
    title: "Blackjack Game Development Company - Hire Blackjack Developer",
    description: "Mobzway is a leading Blackjack game development company in India, USA & UK. Hire top dedicated Blackjack Game Developers. Call us: 7878044044.",
    keywords: "baccarat game development company, baccarat game developer",
    alternates: { canonical: "https://www.mobzway.com/blackjack-game-development/" },
    openGraph: {
        title: "Blackjack Game Development Company | Hire Blackjack Game Developers",
        description: "Mobzway is a leading Blackjack game development company in India, USA & UK. Hire top dedicated Blackjack Game Developers. Call us: 7878044044.",
        url: "https://www.mobzway.com/blackjack-game-development/",
        siteName: "Mobzway Technologies",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://www.mobzway.com/assets/images/blackjack_banner.avif",
                width: 815,
                height: 821,
                alt: "blackjack_game",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blackjack Game Development Company | Hire Blackjack Game Developers",
        description: "Mobzway is a leading Blackjack game development company in India, USA & UK. Hire top dedicated Blackjack Game Developers. Call us: 7878044044.",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com/assets/images/blackjack_banner.avif"],
    },
};

export default function BlackjackGameDevelopment() {
    return (
        <>

            {/* JSON-LD for Product */}
            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "Product",
                        name: "Blackjack Game Development",
                        brand: "Mobzway",
                        aggregateRating: { "@type": "AggregateRating", ratingValue: "5", ratingCount: "439" },
                    }),
                }}
            />

            {/* Banner */}
            <section
                className="banner pokers position-relative banner-jack"
                style={{
                    backgroundImage:
                        'url("/assets/images/blackjack_banner.jpg")'
                }}
            >
                <div className="overlay" />
                <div className="wel_come_container">
                    <h1 className="welcome_text wel">Blackjack Game development Company</h1>
                    <p className="sml_text">
                        Do you need the best blackjack game software for your business? Connect
                        with Mobzway, the popular blackjack game development company. Get
                        customized as well as ready-to-use online blackjack game solutions,
                        developed by our talented game development experts. Reach out to us for
                        best quotes!
                    </p>
                    <div className="btn_outer">
                        <a
                            id="requestaquoteblackjack1"
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
                                        We Provide Best Game Development Solutions
                                    </div>
                                    <div className="bottom_text">
                                        If you’re in search for a perfect blackjack game software that
                                        gives a blasting boost to your online gaming business, reach out
                                        to us. We’ll provide you with the best native mobile app,
                                        desktop and web solutions.
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
                                <span className="black">OF BLACKJACK GAME DEVELOPED BY US</span>
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
                                            alt="Single Player"
                                            src="/assets/images/blackjack01.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Single Player</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        For those who wish to play solo blackjack casino games, our
                                        solution offers the feature to play the game at the single
                                        player mode.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Multi Player"
                                            src="/assets/images/blackjack02.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Multi Player</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        For group game lovers of blackjack, Mobzway offers blackjack
                                        software solutions with multi-player gaming features.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            alt="Tournament"
                                            src="/assets/images/blackjack03.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Tournament</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        The tournament feature provided with our blackjack solutions
                                        allows the online casino operators to host their own dedicated
                                        tournaments.
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
                                            src="/assets/images/blackjack04.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Payment System</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        To let the monetary things happen on your platform very
                                        conveniently, we integrate the blackjack software with advanced
                                        payment gateways.
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
                                            src="/assets/images/blackjack05.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>RNG Certified Games</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        All our blackjack solutions are RNG certified and promote fair
                                        play with random number generations.{" "}
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
                                            src="/assets/images/blackjack06.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Risk Management</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Our robust systems never keep the operators worry-free as it
                                        comes with advanced risk management features that protects
                                        frauds.
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
                                            src="/assets/images/blackjack07.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Multi-Language</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        For engaging the players from specific regions, we also design
                                        blackjack game/apps/websites in multiple languages.
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
                                            src="/assets/images/blackjack08.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Back Office &amp; CRM</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Mobzway’s blackjack game solutions offer distinct and most
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
                                            src="/assets/images/blackjack09.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Rewards &amp; Loyalty</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Our rewards and loyalty feature allows blackjack game businesses
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
                                            src="/assets/images/blackjack10.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Anti Fraud System</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        To restrict any kind of frauds in the games, our blackjack game
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
                                            src="/assets/images/blackjack11.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Responsible Gaming</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Our blackjack game solutions strictly ensure user privacy and
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
                                            src="/assets/images/blackjack12.png"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>World Class Security</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Our blackjack game solutions are hosted on the world’s most
                                        secured hosting platforms to keep the hackers away.
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
                                <span className="black">BLACKJACK GAME DEVELOPMENT SOLUTIONS</span>
                                {/*2*/}
                            </h2>
                        </div>
                    </div>
                    <div className="row row1">
                        <div className="col-md-6 col1">
                            <img
                                src="/assets/images/blackjack_hire_new.png"
                                className="wow bounceInLeft my-image"
                                data-wow-duration="2s"
                            />
                        </div>
                        <div className="col-md-6 col1 wow bounceInUp" data-wow-duration="2s">
                            <p className="para-1">
                                Blackjack Game is one of the most widely played casino game in the
                                world. To bring the same gaming experience for online players,
                                Mobzway has the dedicated team of the qualified, talented and young
                                workforce for the Blackjack game development. The young workforce of
                                Mobzway ensures the high enthusiasm of game architects that turns
                                your business idea into game business which could attract high-end
                                revenue.
                                <br />
                                <br />
                                Artificial intelligence experts know every possible move of the
                                gamblers of the nation, hence are ready to beat their experience by
                                incorporating general tactics and strategies into the Black Jack
                                game making it more fun and more interesting.
                                <br />
                                <br />
                                Mobzway Blackjack game developers are working day and night to
                                design realistic module, giving high-quality video, better channel
                                audio output, smooth performance on all possible devices and last
                                but not the least a satisfactory gaming experience. Facebook, Apple
                                ID, Blackjack ID can be used to play multiplayer games with friends
                                and family making it more authentic. A unique feature of In-Game
                                Chat allows the user in multi-player mode to chat with the opponent.
                                <br />
                                <br />
                                The most important challenge that Mobzway Blackjack game development
                                <span>...</span>
                                <span>
                                    team has overcome is the security of data and the encryption of
                                    game modules. Mobzway is highly expertise of installing payment
                                    portals in the blackjack game to accept the purchase of premium
                                    products via various payment method.
                                    <br />
                                    <br />
                                    Mobzway optimizes a strict bug-free blackjack game for the
                                    satisfactory global clientele and quality checks the game
                                    application enormous times to give our clients a perfect on-time
                                    project delivery. Also, Mobzway seeks forward to build an eternal
                                    customer relationship with game entrepreneurs. Feel free to
                                    discuss your ideas with us. We are glad to help you!
                                </span>
                            </p>
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
                            Need expert advice on blackjack game development? Get in touch with us
                            now and let our seasoned game developers answer all your questions.
                        </h4>
                    </div>
                    <div className="text-center">
                        <a
                            id="requestaquoteblackjack2"
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
                                    BUILD THE BLACKJACK GAME FOR ALL PLATFORMS{/*</span*/}
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
                                                Get blackjack game that is compatible with Mac and Windows
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
                                                Get a customized and flexible blackjack solution that can
                                                run seamlessly on any mobile device be it Android, iOS or
                                                Windows. Our blackjack game mobile apps are responsive and
                                                can adapt to varied mobile and tablet screen sizes.
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
                                                Take your blackjack game business on the web with our
                                                cross-browser and cross-platform compatible blackjack games.
                                                Connect with the web-savvy blackjack game lovers right away!
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
                                <span className="black">BLACKJACK GAME DEVELOPER</span>
                                {/*2*/}
                            </h2>
                        </div>
                    </div>
                    <div className="row row1">
                        <div className="col-md-6 col1">
                            <p className="wow bounceInUp hire-para" data-wow-duration="2s">
                                Do you wish to kick-start your own online blackjack gaming business?
                                Hire blackjack game developer, Mobzway! We have a highly experienced
                                and talented team of blackjack game developers and are considered as
                                a trusted blackjack game development company in India, USA &amp; UK.{" "}
                                <br />
                                <br />
                                Our brilliant game development experts build blackjack games for
                                native mobile apps, PCs and web. Using highly advanced technology
                                such as Unity3D, HTML 5, Java, C++ etc., our game developers create
                                the most engaging as well as most secured solutions so that you can
                                easily manage and operate the niche blackjack casino game
                                tension-free. <br />
                                <br />
                                Our team of game developers works dedicatedly on the client project
                                and discusses and consults with you continuously so that the best
                                solution, as per your requirement, is developed. During the course
                                building online blackjack game solution, our team keeps you in loop
                                and does a thorough test, so that post implementation, your business
                                doesn’t face any technical glitch. Besides this, we also offer 24 X
                                7 technical assistance along with timely maintenance and upkeep so
                                that the solution stays ultra-modern, always.
                                <br />
                                <br />
                                At Mobzway’s gaming studio, we build customized blackjack game
                                software solutions for mobile devices, desktops and web browsers. In
                                addition, we also offer white label solutions for the blackjack
                                casino game variant so that your online casino business goes live in
                                no time. Our developers also provide you with the backend admin
                                panel so that you can manage the day-to-day business tasks and
                                analyze the progress very easily.
                            </p>
                            <div className="btn_outer">
                                <a
                                    id="requestaquoteblackjack3"
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
                                alt="blackjac"
                                src="/assets/images/blackjack_sol_1.png"
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
                                        WE DESIGN &amp; DEVELOP BEST BLACKJACK GAMES?
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
                                alt="blackjack"
                                src="/assets/images/Blackjack_design.png"
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
                                        Blackjack games developed by experts are available in highly
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
                                alt="Online Blackjack Game Developers"
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
                                            style={{ padding: '"20px 0 10px 0!important' }}
                                        >
                                            <span className="yellow">WHY</span>{" "}
                                            <span className="black">
                                                CHOOSE MOBZWAY AS YOUR BLACKJACK GAME DEVELOPMENT COMPANY?
                                            </span>
                                            {/*2*/}
                                        </h2>
                                    </div>
                                </div>
                                <p>
                                    Mobzway brings to you the best of gaming artwork, technology,
                                    platform compatibility, security and post-sales so that your
                                    blackjack gaming business always stays on top.
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
                                        Blackjack games available for desktop and mobile devices. Also
                                        get responsible blackjack game development done for web
                                        browsers.
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
                            id="requestaquoteblackjack4"
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
