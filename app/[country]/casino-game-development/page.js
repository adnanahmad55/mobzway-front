import React from 'react'

export const metadata = {
    title: "Casino Game Development Company",
    description: "Casino Game Development Company specializing in creating engaging and unique gaming experiences. Transform your vision into reality with us!",
    keywords: "casino game developers, casino game development company, casino game development services, casino app development, casino development",
    alternates: { canonical: "https://www.mobzway.com/casino-game-development/" },
    openGraph: {
        title: "Casino Game Development Company",
        description: "Casino Game Development Company specializing in creating engaging and unique gaming experiences. Transform your vision into reality with us!",
        url: "https://www.mobzway.com/casino-game-development/",
        siteName: "Mobzway Technologies",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "https://www.mobzway.com/assets/images/casino_banner.png",
                width: 815,
                height: 821,
                alt: "casino_game",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Casino Game Development Company",
        description: "Casino Game Development Company specializing in creating engaging and unique gaming experiences. Transform your vision into reality with us!",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com/assets/images/casino_banner.png"],
    },
};

export default function CasinoGameDevelopment() {
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n   .card-new {\n  height: 100% !important;\n}\n    .features .row1 .col1 .image_area img {\n  width: 88%;\n  margin-top: 0;\n}\n.features .row1 .col1 .image_area {\n  padding: 0;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.card-tit::after {\n    display: none;\n}\n.card-img-top.rewards {\n  position: static;\n  margin-top: 26px !important;\n}\n\n"
                }}
            />
            {/* Banner */}
            <section
                alt="Poker Game Development"
                className="banner pokers position-relative  banner-pok"
                style={{
                    backgroundImage:
                        'url("/assets/images/casino-game-development/casino-game-development-company-1.webp")'
                }}
            >
                <div className="overlay" />
                <div className="wel_come_container">
                    <h1 className="welcome_text wel">Casino Game Development Company</h1>
                    <p className="sml_text mb-2">
                        Welcome to Mobzway, the ultimate casino game development company ! We
                        are not just any ordinary company but an award-winning powerhouse based
                        in India. With a whopping years of experience, our casino game
                        developers are masters at their craft and are renowned for delivering
                        top-notch services to our esteemed clients.
                    </p>
                    <p className="sml_text">
                        Our dedicated team strives for perfection, ensuring every line of code
                        is of the highest standard. We believe in adding a touch of uniqueness
                        and personalization to our apps, setting us apart as India's premier
                        provider of casino game development services.
                    </p>
                    <div className="btn_outer">
                        <a
                            className="contact_btn"
                            id="requestaquotepoker1"
                            data-toggle="modal"
                            data-target="#requestQoute"
                        >
                            Request a quote
                        </a>
                    </div>
                </div>
                {/* <div class="banner_bottom_info" style="background-color: rgba(15, 16, 15, 0.8);">
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
      </div> */}
            </section>
            <section
                className="solutions solutions-casiongamedev-block p-0 p-md-5 pb-0"
                style={{ background: "#fffcef", borderBottom: "1px solid #f0ecec" }}
            >
                <div className="container" style={{ maxWidth: "100%" }}>
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="w-100 d-none d-md-block">
                                <h2 className="sub_title text-left">
                                    <span className="yellow">Best Casino </span>{" "}
                                    <span className="black">
                                        Game Development Solutions &amp; Services in India
                                    </span>
                                </h2>
                                <p className="para-1 text-left m-0 mb-4">
                                    {" "}
                                    At Mobzway, we always strive for excellence. Our highly skilled
                                    team of developers is committed to delivering flawless results.
                                    Whether you have a groundbreaking vision for an innovative casino
                                    app or one packed with immersive features, our casino game
                                    development company has the knowledge and experience to bring it
                                    to life.
                                </p>
                                <div className="btn_outer text-left">
                                    <a
                                        data-toggle="modal"
                                        data-target="#requestQoute"
                                        id=""
                                        className="contact_btn"
                                    >
                                        GET IN TOUCH
                                    </a>
                                </div>
                            </div>
                            <div className="owl-carousel casinoGameimage-slide owl-theme mt-5">
                                <div className="item">
                                    <img
                                        className="w-100"
                                        src="/assets/images/casino-game-development/casino-game-development-company.webp"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        className="w-100"
                                        src="/assets/images/casino-game-development/casino-game-development-services.webp"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        className="w-100"
                                        src="/assets/images/casino-game-development/casino-app-development-services.webp"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="w-100 d-block d-md-none">
                                <h2 className="sub_title text-left">
                                    <span className="yellow">Best Casino </span>{" "}
                                    <span className="black">
                                        Game Development Solutions &amp; Services in India
                                    </span>
                                </h2>
                                <p className="para-1 text-left m-0 mb-4">
                                    {" "}
                                    At Mobzway, we always strive for excellence. Our highly skilled
                                    team of developers is committed to delivering flawless results.
                                    Whether you have a groundbreaking vision for an innovative casino
                                    app or one packed with immersive features, our casino game
                                    development company has the knowledge and experience to bring it
                                    to life.
                                </p>
                                <div className="btn_outer text-left">
                                    <a
                                        data-toggle="modal"
                                        data-target="#requestQoute"
                                        id=""
                                        className="contact_btn"
                                    >
                                        GET IN TOUCH
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mt-4 mb-4">
                                    <div className="casinogame-box">
                                        <div className="casinogame-box-icon">
                                            <img src="/assets/images/game-console.png" />
                                        </div>
                                        <h4>Engaging and Immersive Casino Game Development</h4>
                                        <p>
                                            Boost your casino game experience by hiring the finest
                                            developers in India! We take pride in offering various
                                            captivating casino game development services to engage users
                                            and immerse them in a virtual gaming world. With over 8+ years
                                            of industry experience, with team of 200+ trained
                                            professionals.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="casinogame-box">
                                        <div className="casinogame-box-icon">
                                            <img src="/assets/images/customization.png" />
                                        </div>
                                        <h4>Complete Customization</h4>
                                        <p>
                                            Experience the power of customization with our custom game
                                            development services. We acknowledge that every client
                                            possesses distinct needs and corporate goals. Our casino
                                            software development goes above and beyond to create 100%
                                            tailor-made solutions with advanced modules and eye-catching
                                            layouts that will captivate your audience.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5 mb-md-0">
                                    <div className="casinogame-box">
                                        <div className="casinogame-box-icon">
                                            <img src="/assets/images/technology-integration.png" />
                                        </div>
                                        <h4>Third-Party API Integration</h4>
                                        <p>
                                            Take your game to the next level with seamless third-party API
                                            integration. By integrating and configuring third-party APIs,
                                            we enhance the attractiveness and security of your game. Trust
                                            our casino game development company to bring your game to life
                                            with enhanced functionalities and a superior gaming
                                            experience.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6" style={{ marginTop: "-25px" }}>
                                    <div className="casinogame-box">
                                        <div className="casinogame-box-icon">
                                            <img src="/assets/images/banking.png" />
                                        </div>
                                        <h4>Secure Monetary Transactions</h4>
                                        <p>
                                            Ensure smooth and secure monetary transactions with our
                                            payment gateway integration expertise. To play real money
                                            casino games, a reliable and secure payment gateway is
                                            crucial. Our team excels at integrating standard payment
                                            gateways, ensuring the highest level of security for your
                                            players' peace of mind.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features">
                <div className="container c-1">
                    <div className="col-md-12 text-center">
                        <div
                            className="aos-init"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <h2 className="sub_title">
                                <span className="yellow">Our</span>{" "}
                                <span className="black"> Casino Game Software Solutions</span>
                                {/*2*/}
                            </h2>
                        </div>
                    </div>
                    <div
                        className="col-md-12 col1 wow animated"
                        data-wow-duration="2s"
                        style={{ visibility: "visible", animationDuration: "2s" }}
                    >
                        <p className="hire-para col-md-12 text-center">
                            Experience the thrill of real money casino games with Mobzway, where
                            we specialize in creating captivating and seamless gaming experiences
                            for your smartphones. Our expert team is committed to delivering
                            top-tier casino game development services that distinguish you from
                            your rivals.
                        </p>
                    </div>
                    <div className="row row1 row1add">
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            width={1600}
                                            height={900}
                                            alt="Poker app development"
                                            data-original="/assets/images/casino-game-development/01_poker.webp"
                                            className="img-lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Poker</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Introduce a real-money{" "}
                                        <a href="https://www.mobzway.com/poker-game-development/">
                                            poker game app
                                        </a>{" "}
                                        and let players test their skills to earn big. With our rich
                                        features and functions, you can create various variations of
                                        poker games that keep players engaged and returning for more.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            width={1600}
                                            height={900}
                                            alt="Teen Patti Game Development"
                                            data-original="/assets/images/casino-game-development/01_teen patti.webp"
                                            className="img-lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Teen Patti</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Engage millions of players worldwide with Teen Patti, the card
                                        game that demands your highest-ranking cards and bluffin g
                                        tactics. With Mobzway, you can create a{" "}
                                        <a href="https://www.mobzway.com/teen-patti-game-development/">
                                            Teen Patti game
                                        </a>
                                        , enabling players to win real money by testing their luck and
                                        skills.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            width={1600}
                                            height={900}
                                            alt="Spin a wheel development"
                                            data-original="/assets/images/casino-game-development/01_spin wheel.webp"
                                            className="img-lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Spin a Wheel</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Our advanced technology and RNG-driven wheel rotation intensify
                                        the excitement of the Spin a Wheel game, enabling players to
                                        spin the wheel and secure prizes determined by its final
                                        position. Mobzway ensures a fair and exhilarating gaming
                                        experience.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            width={1600}
                                            height={900}
                                            alt="Roulette app development"
                                            data-original="/assets/images/casino-game-development/01_roulette.webp"
                                            className="img-lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Roulette</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Build a feature-rich platform for the classic{" "}
                                        <a href="https://www.mobzway.com/roulette-game-development/">
                                            game of Roulette
                                        </a>
                                        . Players can choose numbers, colours, odds, evens, and more.
                                        With Mobzway's skilled professionals, you can deliver an
                                        exceptional and immersive Roulette experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            width={1600}
                                            height={900}
                                            alt="Baccarat game development"
                                            data-original="/assets/images/casino-game-development/01_baccarat.webp"
                                            className="img-lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Baccarat</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Create a captivating{" "}
                                        <a href="https://www.mobzway.com/baccarat-game-development/">
                                            Baccarat game
                                        </a>{" "}
                                        that captivates players and offers three potential outcomes:
                                        player wins, banker wins, or ties. Our one-step-ahead features
                                        and solutions will ensure you attract a broad user base.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            width={1600}
                                            height={900}
                                            alt="Blackjack game development"
                                            data-original="/assets/images/casino-game-development/01_black jack.webp"
                                            className="img-lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Blackjack</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Engage players in the strategic and thrilling world of
                                        Blackjack. Develop a platform where players can test their luck
                                        and skills to beat the dealer. With Mobzway, you can access a{" "}
                                        <a href="https://www.mobzway.com/blackjack-game-development/">
                                            Blackjack game
                                        </a>{" "}
                                        that keeps players returning for more.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            width={1600}
                                            height={900}
                                            alt="Slot Machine game development"
                                            data-original="/assets/images/casino-game-development/01_slot machine.webp"
                                            className="img-lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Slot Machine</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Deliver a simple yet engaging gameplay experience with our slot
                                        machine casino games. Players will love spinning the reels and
                                        watching as the symbols align to reveal exciting rewards. Join
                                        hands with Mobzway for the best{" "}
                                        <a href="https://www.mobzway.com/slot-game-development/">
                                            slot machine
                                        </a>{" "}
                                        experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            width={1600}
                                            height={900}
                                            alt="Bingo game development"
                                            data-original="/assets/images/casino-game-development/01_bingo.webp"
                                            className="img-lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Bingo</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Launch a multiplayer{" "}
                                        <a href="https://www.mobzway.com/bingo-software/">
                                            Bingo casino game
                                        </a>{" "}
                                        that captures the essence of this beloved classic. Create
                                        multiple winning combinations and offer real money rewards with
                                        our key specifications. Mobzway ensures an unforgettable Bingo
                                        experience.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-6">
                                    <div className="image_area">
                                        <img
                                            width={1600}
                                            height={900}
                                            alt="Rummy game development"
                                            data-original="/assets/images/casino-game-development/01_Rummy.webp"
                                            className="img-lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-6">
                                    <h3>Rummy</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Introduce a thrilling{" "}
                                        <a href="https://www.mobzway.com/rummy-game-development/">
                                            Rummy card game
                                        </a>{" "}
                                        with Mobzway. Players can showcase their skills and make valid
                                        winning sequences. This entertaining game presents the perfect
                                        opportunity to make money while enjoying the gameplay. Unleash
                                        your unique ideas with Mobzway's support.
                                    </p>
                                </div>
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
                            With Mobzway, you can unlock the potential of casino game development
                            services that will captivate players and drive your success. Contact
                            us now to take your gaming experience to new heights.
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
            {/*Poker software*/}
            <section
                className="product_offer"
                style={{
                    backgroundImage: 'url("/assets/images/comman_bg.png")'
                }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <div
                                className="sub_title_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">Control with User Control </span>{" "}
                                    <span className="black">
                                        Mobzway's Total Features for Casino Game Development
                                    </span>
                                </h2>
                                <p className="hire-para col-md-12 text-center">
                                    Experience the power to manage and customize your real money
                                    casino game with seamless user control features. Mobzway offers a
                                    range of user-friendly tools and settings that allow you to take
                                    charge of your game. From analyzing game performance to managing
                                    user interactions, here are some essential user control features
                                    that you should incorporate into your casino game:
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mt-5">
                            <div
                                className="card card-new mx-auto mx-md-auto"
                                id=""
                                style={{ width: "18rem" }}
                            >
                                <center>
                                    <img
                                        className="card-img-top"
                                        src="/assets/images/casino-game-development/Dashboard-AnalyzeandOptimize.webp"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center tou">
                                        Dashboard: Analyze and Optimize
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        {" "}
                                        Gain valuable insights into your game's performance with our
                                        intuitive dashboard. Slice and dice the information to
                                        understand player behaviour, track progress, and make
                                        data-driven decisions to optimize your game for success.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div
                                className="card card-new mx-auto mx-md-auto"
                                id=""
                                style={{ width: "18rem" }}
                            >
                                <center>
                                    <img
                                        className="card-img-top rewards"
                                        src="/assets/images/casino-game-development/GameSettingsandManagement.webp"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">
                                        Game Settings and Management
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        {" "}
                                        Tailor the game experience to your preferences with our
                                        comprehensive game settings. From language selection and audio
                                        options to two-factor authentication and game tutorials, ensure
                                        every player feels right at home.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div
                                className="card card-new mx-auto mx-md-auto"
                                id=""
                                style={{ width: "18rem" }}
                            >
                                <center>
                                    <img
                                        className="card-img-top back"
                                        src="/assets/images/casino-game-development/UserManagement-Secure.webp"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">
                                        User Management: Secure
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        {" "}
                                        Effectively manage all users of your game with our user
                                        management feature. Protect the integrity of your competition by
                                        quickly blocking hackers and cheaters, fostering a safe and
                                        secure playing environment for all.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div
                                className="card card-new mx-auto mx-md-auto"
                                id=""
                                style={{ width: "18rem" }}
                            >
                                <center>
                                    <img
                                        className="card-img-top world"
                                        src="/assets/images/casino-game-development/TableManagement-CustomizeField.webp"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">
                                        Table Management: Customize Field
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        {" "}
                                        Create a unique playing atmosphere with our table management
                                        feature. Adjust the table colour, size, and number of players
                                        that can sit on a table, offering a personalized gameplay
                                        experience like no other.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div
                                className="card card-new mx-auto mx-md-auto"
                                id=""
                                style={{ width: "18rem" }}
                            >
                                <center>
                                    <img
                                        className="card-img-top "
                                        id="anti"
                                        src="/assets/images/casino-game-development/PaymentManagement-Flexibility.webp"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center" id="anti-head">
                                        Payment Management : Flexibility
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        {" "}
                                        Streamline in-game payments with our payment management system.
                                        Seamlessly handle all transactions and have the flexibility to
                                        adjust chip rates to meet your evolving needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div
                                className="card card-new mx-auto mx-md-auto"
                                id=""
                                style={{ width: "18rem" }}
                            >
                                <center>
                                    <img
                                        className="card-img-top back"
                                        src="/assets/images/casino-game-development/ChipsManagement-Fine-TuneGame.webp"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">
                                        Chips Management: Fine-Tune Game
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        {" "}
                                        Take control of your game's economy with our chip management
                                        feature. Manage the distribution and rate of chips, ensuring a
                                        balanced and engaging gameplay experience for your users.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div
                                className="card card-new mx-auto mx-md-auto"
                                id=""
                                style={{ width: "18rem" }}
                            >
                                <center>
                                    <img
                                        className="card-img-top back"
                                        src="/assets/images/casino-game-development/SmartNotifications-StayConnected.webp"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">
                                        Smart Notifications: Stay Connected
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        {" "}
                                        Engage and motivate your players with targeted push
                                        notifications using our smart notifications feature. Keep them
                                        updated with exciting promotions, bonuses, and gaming events,
                                        driving increased engagement and retention.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div
                                className="card card-new mx-auto mx-md-auto"
                                id=""
                                style={{ width: "18rem" }}
                            >
                                <center>
                                    <img
                                        className="card-img-top back"
                                        src="/assets/images/casino-game-development/TournamentManagement.webp"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <h5 className="card-title card-tit text-center">
                                        Tournament Management
                                    </h5>
                                    <p className="text-dark text-center paragra">
                                        {" "}
                                        Fuel excitement with our tournament management feature. From
                                        altering boot values to adjusting winning rewards, create
                                        thrilling tournaments that captivate your audience and keep them
                                        returning for more.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-lg-3 col-md-3  mt-5">
          <div class="card card-new" id="" style="width: 18rem;">
              <center><img class="card-img-top back" src="/assets/images/r06.png" alt="Tournaments"
                      class="ico"></center>
              <div class="card-body">
                  <h5 class="card-title card-tit text-center">Agent Management: Choose Your Dealers</h5>
                  <p class="text-dark text-center paragra"> Influence the atmosphere of your game by selecting and managing your dealers. With our agent management feature, you quickly change dealers, providing a fresh and engaging experience for your players.</p>
              </div>
          </div>
      </div> */}
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
                                    <span className="yellow">How Much</span>{" "}
                                    <span className="black">
                                        {" "}
                                        Does it Cost to Develop Casino Game in India
                                    </span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div className="card card-new" id="card3">
                                <h5 className="card-title card-tit2 text-center text-wrap pl-5">
                                    <span className="boxes">1</span>Game Conceptualization and Design
                                </h5>
                                <center>
                                    <img
                                        className="card-img-top"
                                        src="/assets/images/CONCEPTUALIZING.png"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <p className="text-dark text-center paragraphs">
                                        Our seasoned team will closely partner with you to fully
                                        understand your vision and craft an immersive casino game. The
                                        pricing for this essential development phase starts at $X.
                                    </p>
                                    <i className="fa fa-arrow-right" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mt-5">
                            <div className="card card-new" id="card3">
                                <h5 className="card-title card-tit2 text-center text-wrap pl-5">
                                    <span className="boxes">2</span>Game Development and Programming
                                </h5>
                                <center>
                                    <img
                                        className="card-img-top"
                                        src="/assets/images/MARKET.png"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <p className="text-dark text-center paragraphs">
                                        Our skilled casino game software developer will bring your game
                                        to life, ensuring seamless functionality and an engaging user
                                        experience.
                                    </p>
                                    <i className="fa fa-arrow-right" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div className="card card-new" id="card3">
                                <h5 className="card-title card-tit2 text-center text-wrap pl-5">
                                    <span className="boxes">3</span>Graphic Design and Animation
                                </h5>
                                <center>
                                    <img
                                        className="card-img-top"
                                        src="/assets/images/USER.png"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <p className="text-dark text-center paragraphs">
                                        Captivate your players with stunning visuals and captivating
                                        animations. Our talented graphic designers will create
                                        eye-catching graphics that enhance the gaming experience.
                                    </p>
                                    <i
                                        className="fa fa-arrow-right third-arrow"
                                        style={{ position: "relative", top: "-118px" }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5">
                            <div className="card card-new" id="card3">
                                <h5 className="card-title card-tit2 text-center text-wrap pl-5">
                                    <span className="boxes">4</span>Sound Design and <br />
                                    Music
                                </h5>
                                <center>
                                    <img
                                        className="card-img-top"
                                        src="/assets/images/AGILE.png"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <p className="text-dark text-center paragraphs">
                                        Immerse your players in the casino atmosphere with expertly
                                        crafted sound effects and captivating music. Our team will
                                        create a unique soundscape that complements the gameplay.
                                    </p>
                                    {/* <i class="fa fa-arrow-right four-sec" id="gm"></i> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-3 mt-5">
                            <div className="card card-new" id="card3">
                                <h5 className="card-title card-tit2 text-center text-wrap pl-5">
                                    <span className="boxes">5</span>Testing and Quality Assurance
                                </h5>
                                <center>
                                    <img
                                        className="card-img-top"
                                        src="/assets/images/BETA.png"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <p className="text-dark text-center paragraphs">
                                        Guarantee a seamless gaming experience through comprehensive
                                        testing and quality assurance. Our committed team will conduct
                                        exhaustive game testing to detect and rectify any bugs or
                                        issues.
                                    </p>
                                    <i className="fa fa-arrow-right last" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3  mt-5 ">
                            <div className="card card-new" id="card3">
                                <h5 className="card-title card-tit2 text-center text-wrap pl-5">
                                    <span className="boxes">6</span>Platform Compatibility and
                                    Integration
                                </h5>
                                <center>
                                    <img
                                        className="card-img-top"
                                        src="/assets/images/ENHANCEMENT.png"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <p className="text-dark text-center paragraphs">
                                        Expand your audience's reach by ensuring the compatibility of
                                        your casino game across diverse platforms and devices. We'll
                                        seamlessly integrate the game into the preferred media, whether
                                        web or mobile.
                                    </p>
                                    <i className="fa fa-arrow-right last" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mt-5">
                            <div className="card card-new" id="card3">
                                <h5 className="card-title card-tit2 text-center text-wrap pl-5">
                                    <span className="boxes">7</span>App Store Submission and Marketing
                                </h5>
                                <center>
                                    <img
                                        className="card-img-top"
                                        src="/assets/images/SUPPORT.png"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <p className="text-dark text-center paragraphs">
                                        Let us handle the submission process to major app stores to
                                        ensure your game reaches the right audience. We can also assist
                                        with strategic marketing to generate buzz and increase
                                        downloads.
                                    </p>
                                    <i
                                        className="fa fa-arrow-right third-arrow"
                                        style={{ position: "relative", top: "-118px" }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 mt-5">
                            <div className="card card-new" id="card3">
                                <h5 className="card-title card-tit2 text-center text-wrap pl-5">
                                    <span className="boxes">8</span>Ongoing Support and Maintenance
                                </h5>
                                <center>
                                    <img
                                        className="card-img-top"
                                        src="/assets/images/SUPPORT.png"
                                        alt="Tournaments"
                                    />
                                </center>
                                <div className="card-body">
                                    <p className="text-dark text-center paragraphs">
                                        Rest easy knowing that our support doesn't end after launching
                                        the game. We provide continuous support and maintenance to
                                        ensure the continued excellence of your game.
                                    </p>
                                </div>
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
                            Choose us for unparalleled casino game development services. Let's
                            bring your vision to life.
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
            {/*-------------why choose poker us------------------*/}
            <section className="why_choose pokermobzway pt-0">
                <div className="container c-1">
                    <div className="row">
                        <div className="col-md-12 text-center mb-4">
                            <div
                                className="sub_title_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h3 className="sub_title ft_40">
                                    <span className="yellow">India's</span>{" "}
                                    <span className="black"> Leading Casino Game Developers</span>
                                </h3>
                                {/* <p class="sub_paragraph mt-2">
                  Mobzway brings to you the best of gaming artwork, technology, platform compatibility, security,
                  and post-sales so that your gaming business always stays on top.
              </p> */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img
                                src="/assets/images/casino-game-development/01_INDIA'S-LEADING.webp"
                                className="why-c"
                                alt="Online Casino Game App Development"
                            />
                        </div>
                        <div className="col-md-6 wow bounceInUp" data-wow-duration="1s">
                            <p className="mb-3 position-relative pl-4">
                                <svg
                                    className="position-absolute"
                                    style={{ left: 0, top: 3 }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>{" "}
                                <strong className="mb-2">Expertise in Advanced Technologies</strong>
                                Our in-house casino game developers are skilled in cutting-edge
                                technologies like AR/VR, AI, Metaverse, and more. By incorporating
                                these advancements, we create immersive gaming experiences that
                                captivate players.
                            </p>
                            <p className="mb-3 position-relative pl-4">
                                <svg
                                    className="position-absolute"
                                    style={{ left: 0, top: 3 }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>{" "}
                                <strong className="">Customer-Centric Approach</strong> Driven by a
                                commitment to customer satisfaction, our developers prioritize
                                understanding the needs of our Indian clientele. We tailor our
                                solutions to meet their requirements, ensuring a personalized and
                                engaging gaming experience.
                            </p>
                            <p className="mb-3 position-relative pl-4">
                                <svg
                                    className="position-absolute"
                                    style={{ left: 0, top: 3 }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>{" "}
                                <strong className="mb-2 d-block">
                                    Responsive and High-Quality Products
                                </strong>{" "}
                                With a focus on delivering excellence, our casino game software
                                developer strives to create highly responsive and top-grade casino
                                game platforms. Our products are designed to meet global standards,
                                establishing our clients as industry leaders within India and
                                beyond.
                            </p>
                            <p className="mb-3 position-relative pl-4">
                                <svg
                                    className="position-absolute"
                                    style={{ left: 0, top: 3 }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>{" "}
                                <strong className="mb-2 d-block">
                                    Transparent Development Process
                                </strong>{" "}
                                We believe in maintaining transparency throughout the development
                                journey. Our clients receive regular updates on every milestone,
                                guaranteeing their active involvement and comprehensive information.
                                You can rely on us to ensure that you are always kept informed and
                                included every step of the way.
                            </p>
                            <p className="mb-4 position-relative pl-4">
                                <svg
                                    className="position-absolute"
                                    style={{ left: 0, top: 3 }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>{" "}
                                <strong className="mb-2 d-block">Gain a Competitive Edge</strong> By
                                leveraging our casino game development solutions, you can stand out
                                in the competitive Indian gaming industry. Our expertise and
                                innovative approach will help you create unique and captivating
                                games that set you apart.
                            </p>
                            {/* <ul class="why_content wow bounceInUp" data-wow-duration="1s">
              <li>Highly-advanced technology.</li>
              <li>Hassle-free and timely maintenance.</li>
              <li>High-performance gaming experience.</li>
              <li>Support most of the payment gateways integration.</li>
              <li>Free business consultation to help casino game operators.</li>
              <li>Satisfied customer base in America, Europe, Africa, and Asia.</li>
              <li>24x7 monitoring & support team to ensure 99.99% game uptime.</li>
              <li>Online casino solutions are available on all Web, Mobile, PC & Mac platforms.</li>
          </ul> */}
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
            <section className="why_choose pokermobzway pt-0">
                <div className="container c-1">
                    <div className="row align-items-center casinochoose-block">
                        <div className="col-md-12 text-center">
                            <div
                                className="sub_title_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h3 className="sub_title ft_40 pt-1">
                                    <span className="yellow">Why</span>{" "}
                                    <span className="black">
                                        {" "}
                                        Choose Mobzway's Casino Game Development Services?
                                    </span>
                                </h3>
                                <p className="sub_paragraph mt-2 mb-2">
                                    Gaming enthusiasts seek challenging and exciting casino games that
                                    offer a seamless experience. Mobzway understands the need for
                                    effective gaming solutions for its clients and specializes in
                                    delivering such solutions.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 wow bounceInUp mt-4" data-wow-duration="1s">
                            <p className="mb-3 position-relative pl-4">
                                <svg
                                    className="position-absolute"
                                    style={{ left: 0, top: 3 }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>{" "}
                                <strong>Ideation and brainstorming</strong>A casino game is not just
                                about a deck of cards or a wheel with numbers. It requires an
                                innovative idea to create a world-class gaming experience that
                                engages players and offers excellent rewards. At Mobzway, our
                                experts brainstorm and ideate creative gaming ideas to create a
                                unique gaming experience for your players.
                            </p>
                            <p className="mb-3 position-relative pl-4">
                                <svg
                                    className="position-absolute"
                                    style={{ left: 0, top: 3 }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>{" "}
                                <strong>Prototyping</strong> Our experienced developers and
                                designers collaborate to create a functional prototype for your game
                                concept. We integrate the game's user interface, graphics,
                                animations, and other elements to provide a visually captivating and
                                immersive gaming experience.
                            </p>
                            <p className="mb-3 position-relative pl-4">
                                <svg
                                    className="position-absolute"
                                    style={{ left: 0, top: 3 }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>{" "}
                                <strong>Developing a secure and efficient platform</strong> Mobzway
                                understands the importance of delivering secure and efficient gaming
                                platforms. Our developers and engineers adapt to the latest
                                technologies to provide top-notch gaming experiences with advanced
                                features. We aim to satisfy your audience by delivering a
                                glitch-free and seamless gaming experience.
                            </p>
                            <p className="mb-3 position-relative pl-4">
                                <svg
                                    className="position-absolute"
                                    style={{ left: 0, top: 3 }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>{" "}
                                <strong>Testing and Quality assurance</strong> Testing plays a
                                crucial role in game development, as it serves to pinpoint and
                                rectify issues and bugs that could impact the gameplay. At Mobzway,
                                we use advanced testing methods and tools to ensure that your casino
                                game is error-free and offers uninterrupted gameplay. Our quality
                                assurance team is dedicated to providing you with the best gaming
                                experience.
                            </p>
                            <p className="mb-3 position-relative pl-4">
                                <svg
                                    className="position-absolute"
                                    style={{ left: 0, top: 3 }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>{" "}
                                <strong>Launch Management</strong> The launch of your casino game is
                                an essential event. Our team of launch experts prepares the right
                                strategies and plans, ensuring the launch is smooth and successful.
                                We also support post-launch activities and ensure your game is
                                updated regularly to meet the latest gaming trends.
                            </p>
                            <p className="mb-4 position-relative pl-4">
                                <svg
                                    className="position-absolute"
                                    style={{ left: 0, top: 3 }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="1em"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>{" "}
                                <strong>Ongoing support</strong> Building a game and launching it
                                successfully is just the first step of the journey. At the best
                                casino game development company Mobzway, we believe in providing
                                ongoing support to our clients. Our team of experts offers multiple
                                support services like user engagement activities, updates, technical
                                support, and more. We believe in building a long-term relationship
                                with our clients.
                            </p>
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
                        <div className="col-md-6">
                            <img
                                src="/assets/images/casino-game-development/WHYCHOOSE.webp"
                                className="why-c"
                                alt="Casino Game Development Services"
                            />
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
                                                    Can Casino games be developed in blockchain?
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
                                                    Absolutely! Mobzway empowers you to develop casino games
                                                    using the revolutionary Blockchain Technology. Harness the
                                                    power of blockchain to facilitate seamless transfer of
                                                    in-game items and enjoy the support for various
                                                    cryptocurrencies and NFTs, opening up a world of
                                                    possibilities for in-game usage.
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
                                                    What will be the cost estimation for developing a casino
                                                    game?
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
                                                    The cost of developing a casino game depends on multiple
                                                    factors such as the game type, complexity, number of
                                                    modules/functionalities required, the expertise of our
                                                    experienced casino game developers, and more. To provide
                                                    you with an accurate estimate, we would love to discuss
                                                    your ideas and understand your specific requirements.
                                                    Contact us today for prompt and detailed information about
                                                    the cost of your game development.
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
                                        <div className="card-header" id="headingEleven">
                                            <p className="mb-0">
                                                <button
                                                    type="button"
                                                    className="btn btn-link collapsed text-dark"
                                                    data-toggle="collapse"
                                                    data-target="#collapseEleven"
                                                >
                                                    <i className="fa fa-plus" />
                                                    Where can I get a customized casino gaming platform?
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
                                                    Look no further than Mobzway! We are your trusted source
                                                    for building your own customized casino gaming platform.
                                                    Our team at Mobzway specializes in catering to your unique
                                                    needs and providing extensive knowledge and expertise in
                                                    customization. Whether you require online casino solutions
                                                    or any other gaming solutions, our highly skilled
                                                    professionals are committed to fulfilling your
                                                    requirements.
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
                                                    className="btn btn-link text-dark collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapseTwelve"
                                                >
                                                    <i className="fa fa-plus" />
                                                    What are the unique features of developing casino games
                                                    with Mobzway?
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
                                                    At Mobzway, we pride ourselves on our unique and
                                                    captivating casino game development process. Our casino
                                                    gaming platform is built entirely on various blockchain
                                                    technologies, providing unrivalled flexibility and
                                                    customization options tailored to your needs. These
                                                    exceptional specifications set our casino gaming platform
                                                    apart and ensure a truly one-of-a-kind gaming experience
                                                    for your players.
                                                    {/* <a
                                      href="https://www.mobzway.com/blog/how-much-would-it-cost-to-set-up-own-online-casino/">Click
                                      here</a> */}
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
                                                    Can I integrate multiple payment gateways in my casino
                                                    game developed by Mobzway?
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
                                                    Yes, you can! At Mobzway, we offer a range of integrated
                                                    payment gateways to simplify transactions for your
                                                    players. From credit/debit cards to eWallets and
                                                    cryptocurrencies, we provide secure, seamless, and
                                                    efficient payment integration to give your players a
                                                    smooth gaming experience.
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
                                                    Can Mobzway Develop VR-Enabled Casino Games?
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
                                                    Yes, we can! Mobzway has a team of experienced game
                                                    developers skilled in creating captivating virtual reality
                                                    casino games. With VR technology, we can bring your casino
                                                    games to life and offer an immersive and engaging gaming
                                                    experience to your players, providing them with a new
                                                    level of gaming excitement.
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
                                                    Can Mobzway provide Casino Game API Integration?
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
                                                    Yes, we can! We at Mobzway specialize in various API
                                                    integrations and offer seamless integration of casino game
                                                    API with your existing systems. Our API integration
                                                    service provides faster performance and reliability, quick
                                                    user validations, and intelligent error handling, making
                                                    it easier to manage and track your gaming activity.
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
                                                    Does Mobzway offer Cross-Platform Casino Gaming Solutions?
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
                                                    Yes, we do! Mobzway offers cross-platform casino gaming
                                                    solutions, including mobile, web, and desktop
                                                    applications. It allows you to expand your reach to a
                                                    broader audience, delivering your players effortless
                                                    access to your games on various platforms and devices,
                                                    giving them greater flexibility and user-friendliness.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn_outer text-center mt-5 col-12">
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
                </div>
            </section>
        </>

    )
}
