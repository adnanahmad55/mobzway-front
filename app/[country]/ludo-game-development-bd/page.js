import { getCountryName } from '@/app/lib/country';
import React from 'react'

export async function generateMetadata() {
    const countryName = getCountryName(); // e.g., "India" or "Bangladesh"

    // 1. Country Name ko Code mein badalne ka map
    const countryMap = {
        "Bangladesh": "bd",
        "India": "in",
        "United States": "us",
        "United Kingdom": "uk"
    };

    // Default 'bd' agar country nahi mile
    const code = countryMap[countryName] || "bd"; 

    // 2. Dynamic URL Create karna (Jo tumhare URL pattern se match kare)
    // Pattern: /bd/ludo-game-development-bd ya /in/ludo-game-development-in
    const baseUrl = "https://www.mobzway.com";
    const currentPath = `${code}/ludo-game-development-${code}`;
    const fullUrl = `${baseUrl}/${currentPath}`;

    return {
        title: `Ludo game development company in ${countryName} | Ludo Services`,
        description: `Mobzway is Best Ludo game development company in ${countryName} offering multiplayer Ludo apps with real-time gameplay, secure wallets, and custom features.`,
        keywords: [`Ludo game development company in ${countryName}`, `Ludo game development service in ${countryName}`],
        
        // 3. SEO Tags (Canonical + Hreflang)
        alternates: {
            canonical: fullUrl,
            languages: {
                [`en-${code}`]: fullUrl, // Ye khud banayega: "en-in": ".../in/ludo-game-development-in"
            },
        },
    };
}

// export const metadata = {
//     title: "Ludo game development company in {country} | Ludo Services",
//     description:
//         "Mobzway is Best Ludo game development company in {country} offering multiplayer Ludo apps with real-time gameplay, secure wallets, and custom features.",
//     keywords: ["Ludo game development company in {country}, Ludo game development service in {country}"],
//     alternates: {
//         canonical: "https://www.mobzway.com/bd/",
//         languages: {
//             "en-IN": "https://www.mobzway.com/bd/",
//         },
//     },
// };

export default function LudoGameDevelopment() {
    const country = getCountryName();
    return (
        <>

            <section
                className="banner pokers banner_lth position-relative banner-texas"
                style={{
                    backgroundImage: 'url("/assets/images/banner.png")'
                }}
            >
                <div className="overlay" />
                <div className="wel_come_container">
                    <h1 className="welcome_text wel">
                        Ludo game development company in {country} | Ludo Services
                    </h1>

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

            </section>

            <section className="bg-light pb-2 bg-lightnew gameplushmb">
                <div className="container c-1">
                    <div className="row justify-content-center">
                        <div className="col-5 col-md-3 mt-3 text-center">
                            <h2 className="plus">500+</h2>
                            <h3 className="counters">
                                <img
                                    width={40}
                                    height={40}
                                    alt="best online rummy game app"
                                    src="/assets/images/game-launched1.avif"
                                    className="games-launched"
                                />
                                Game Launched
                            </h3>
                        </div>
                        <div className="col-6 col-md-3 mt-3 text-center">
                            <h2 className="plus">300+</h2>
                            <h3 className="counters" style={{ whiteSpace: "nowrap" }}>
                                <img
                                    width={40}
                                    height={40}
                                    alt="best online rummy game app"
                                    src="/assets/images/satisfied-customers1.avif"
                                    className="satisfied-customers"
                                />
                                Satisfied customers
                            </h3>
                        </div>
                        <div className="col-5 col-md-3 mt-3 text-center client">
                            <h2 className="plus">97%</h2>
                            <h3 className="counters">
                                <img
                                    width={40}
                                    height={40}
                                    alt="best online rummy game app"
                                    src="/assets/images/client-retension1.avif"
                                    className="client-retension"
                                />
                                Client retention
                            </h3>
                        </div>
                        <div className="col-6 col-md-3 mt-3 text-center play">
                            <h2 className="plus">100k+</h2>
                            <h3 className="counters">
                                <img
                                    width={40}
                                    height={40}
                                    alt="best online rummy game app"
                                    src="/assets/images/players1.avif"
                                    className="players img-lazy"
                                />
                                Players
                            </h3>
                        </div>
                    </div>
                </div>
            </section>


            <section
                className="py-md-4 py-3"
                style={{ background: "#f8f9fa", borderTop: "1px solid #d2d2d2" }}
            >
                <div className="container">
                    {/* <h1 className="sub_title text-center">
            <span className="yellow">Mobzway – Online Gaming Software </span>{" "}
            <span className="black">Development Company in {country}</span>
          </h1> */}
                    <p
                        style={{ marginBottom: 15, color: "#000", fontSize: 17 }}
                        className="content"
                    >
                        Mobzway is a highly regarded Ludo game development company in {country} that offers innovative, tailored, and multiplayer Ludo game solutions for startups, businessmen, and even large firms. With a decade-long experience in the real-time gaming industry, we are now able to create cutting-edge Ludo applications and Ludo board games that not only maintain the high performance but also provide the users with smooth gameplay, scalability, and lots of fun interacting with the system.
                    </p>
                    <p className="content" style={{ color: "#000", fontSize: 17 }}>
                        Whether you are looking for a custom Ludo game development company in {country}, a white-label Ludo solution, or a real-money Ludo platform, the group of our professional developers works according to the specific needs of the rapidly evolving mobile gaming market in {country}.
                    </p>
                </div>
            </section>

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
                                <span className="yellow">Reasons Why Mobzway is the Leading Ludo </span>{" "}
                                <span className="black"> Game Development Company in {country}</span>
                            </h2>
                        </div>
                    </div>

                    {/* <div className="col-md-12 col1 wow" data-wow-duration="1s">
                        <p className="hire-para col-md-12 para-plateform text-center">
                            Hiring dedicated game developers in India offers you the following benefits:

                            <br />
                            <br />
                            <br />
                        </p>
                    </div> */}
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
                                                Local User {country}-Centric UI/UX
                                            </h5>
                                            <p className="card-text text-center text-dark">
                                                The Ludo games we develop are the ones that the {country} players would love most:
                                            </p>
                                            <ul className='why_content why_content_dark p-0 my-2'>
                                                <li className='text-dark'>Support in Bangla/English languages</li>
                                                <li className='text-dark'>The themes are culture-based and appealing</li>
                                                <li className='text-dark'>Very smooth animations and user-friendliness</li>
                                                <li className='text-dark'>Designs that are mobile-optimized</li>
                                            </ul>
                                            {/* <p className="card-text text-center text-dark">These qualities make India the best choice for companies seeking to outsource their game development.</p> */}
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
                                                Real-Time Multiplayer Engine
                                            </h5>
                                            <p className="card-text text-center text-dark">
                                                The Ludo platforms have the following features:
                                            </p>
                                            <ul className='why_content why_content_dark p-0 my-2'>
                                                <li className='text-dark'>1 vs 1 mode</li>
                                                <li className='text-dark'>Multiplayer room for 2–4 players</li>
                                                <li className='text-dark'>Private table & friends mode</li>
                                                <li className='text-dark'>Tournament play</li>
                                                <li className='text-dark'>AI-enabled bots in case there are empty seats</li>
                                                <li className='text-dark'>The system can support thousands of users playing concurrently in real-time</li>
                                            </ul>
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
                                            <h5 className="card-title cards text-center">Very Secure & Just Gameplay</h5>
                                            <p className="card-text text-center text-dark">
                                                We ensure to have:
                                            </p>
                                            <ul className='why_content why_content_dark p-0 my-2'>
                                                <li className='text-dark'>Fraud prevention systems in operation</li>
                                                <li className='text-dark'>RNG-backed dice rolling</li>
                                                <li className='text-dark'>Cheating prevention system</li>
                                                <li className='text-dark'>OTP / mobile authentication</li>
                                                <li className='text-dark'>Secure handling of payments and wallets</li>
                                                <li className='text-dark'>Your Ludo platform is fair, open, and safe for the participants.</li>
                                            </ul>
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
                                            <h5 className="card-title cards text-center">White Label Ludo Game Solution</h5>
                                            <p className="card-text text-center text-dark">
                                                Make it happen with a quick launch of your Ludo game:
                                            </p>
                                            <ul className='why_content why_content_dark p-0 my-2'>
                                                <li className='text-dark'>Customized Branding</li>
                                                <li className='text-dark'>Distinctive Themes</li>
                                                <li className='text-dark'>Rapid Deployment</li>
                                                <li className='text-dark'>Ready-to-Use Ludo Features</li>
                                                <li className='text-dark'>Integrated Payment Options</li>
                                                <li className='text-dark'>Ideal for {country} Startups!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* <div
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
                                            <h5 className="card-title cards text-center">Expertise in All Game Genres</h5>
                                            <p className="card-text text-center text-dark">
                                                Get the right developers for your projects:
                                            </p>

                                            <ul className='why_content why_content_dark p-0 my-2'>
                                                <li className='text-dark'>2D and 3D games</li>
                                                <li className='text-dark'>Casual and hyper-casual games</li>
                                                <li className='text-dark'>Real-time multiplayer games</li>
                                                <li className='text-dark'>Fantasy sports and sports games </li>
                                                <li className='text-dark'>Educational and simulation games</li>
                                                <li className='text-dark'>AR/VR games</li>
                                            </ul>

                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="container c-1">
                    {/* <div class="heading_title text-center">
   <h1><span>FEATURES</span> OF POKER GAME DEVELOPED BY US</h1>
   </div> */}
                    <div className="col-md-12 text-center">
                        <div
                            className="aos-init"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <h2 className="sub_title">
                                <span className="yellow">Custom Ludo Game </span>{" "}
                                <span className="black">
                                    Development Services
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div
                        className="col-md-12 col1 wow animated"
                        data-wow-duration="2s"
                        style={{ visibility: "visible", animationDuration: "2s" }}
                    >
                        <p className="hire-para col-md-12 text-center">
                            We create Ludo games from scratch that are fully customized to your vision:
                        </p>
                    </div>
                    <div className="row row1 row1add">
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                                    <div className="image_area">
                                        <img
                                            width={1600}
                                            height={900}
                                            alt="Tournaments"
                                            src="/assets/images/rummy-game-development/r04.webp"
                                            className="img-lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-12">
                                    <h3 className='text-center'>Ludo Classic</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Regular game play with 2-4 players.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                                    <div className="image_area">
                                        <img
                                            width={1600}
                                            height={900}
                                            alt="Private Table"
                                            src="/assets/images/rummy-game-development/r05.webp"
                                            className="img-lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-12">
                                    <h3 className='text-center'>Ludo Master</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Enhanced features, rapid modes, rewards, and premium skins.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                                    <div className="image_area">
                                        <img
                                            width={1600}
                                            height={900}
                                            alt="Multi-Language"
                                            src="/assets/images/rummy-game-development/r06.webp"
                                            className="img-lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-12">
                                    <h3 className='text-center'>Ludo Supreme / Ludo Tournament</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Custom made for competitive play and leaderboard tournaments.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                                    <div className="image_area">
                                        <img
                                            width={1600}
                                            height={900}
                                            alt="Multi-Language"
                                            src="/assets/images/rummy-game-development/r06.webp"
                                            className="img-lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-12">
                                    <h3 className='text-center'>Ludo Real Money / Token Based</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Incorporate wallet, deposits, withdrawals, and secure transactions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                                    <div className="image_area">
                                        <img
                                            width={1600}
                                            height={900}
                                            alt="Multi-Language"
                                            src="/assets/images/rummy-game-development/r06.webp"
                                            className="img-lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-12">
                                    <h3 className='text-center'>Ludo with Voice Chat</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        A voice and chat system installed in real-time for enhanced social gaming.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col1">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                                    <div className="image_area">
                                        <img
                                            width={1600}
                                            height={900}
                                            alt="Multi-Language"
                                            src="/assets/images/rummy-game-development/r06.webp"
                                            className="img-lazy"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-12">
                                    <h3 className='text-center'>Ludo for iOS, Android & Web</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Initiate-shared platform builds with effortless syncing across devices.
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>


            <section className="mb-5 why">
                <div className="container c-1">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div
                                className="aos-init"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">Key Features of Our </span>{" "}
                                    <span className="black">
                                        Ludo Game Development
                                    </span>
                                </h2>
                            </div>
                            <p className="text-justify">
                                Our Ludo Game offers the following Gameplay features:
                            </p>
                        </div>
                        <div className="col-md-6">
                            <br />
                            <br />
                            <h4 className="new-head">
                                Gameplay Features
                            </h4>
                            <ul
                                style={{ listStyleType: "disc", lineHeight: '25px', margin: "0 18px" }}
                            >
                                <li><b>Multiplayer Real-Time</b> </li>
                                <li>
                                    <b>Invitation only table creation</b> 
                                </li>
                                <li>
                                    <b>Guests Can Play as Guests & Players Login with Social Media</b>
                                </li>
                                <li>
                                    <b>In-Game Store Purchases and Offerings</b>
                                </li>
                                <li><b>Daily login offers & bonuses</b> </li>
                                <li>
                                    <b>Leaderboard and Tournament Mode Areas</b>
                                </li>
                                <li><b>Avatar Design Options For Each Player</b></li>

                            </ul>
                            <br />
                            <h4 className="new-head">
                                Our Admin Panel features
                            </h4>

                            <ul
                                style={{ listStyleType: "disc", lineHeight: '25px', margin: "0 18px" }}
                            >
                                <li><b>Admin User Management</b> </li>
                                <li>
                                    <b>Game Settings/Control Management</b> 
                                </li>
                                <li>
                                    <b>Transaction Management via Wallet Management</b>
                                </li>
                                <li>
                                    <b>Bonus & Reward Credit/Management Area</b>
                                </li>
                                <li><b>Agent/Sub-Agent Hierarchy Management</b> </li>
                                <li>
                                    <b>Analytics Reporting on Game Activity</b>
                                </li>
                                

                            </ul>

                        </div>
                        <div className="col-md-6 mtp pt-md-0 mt-2">
                            <div className="px-md-2">
                                <img
                                    alt="best online rummy game app"
                                    src="/assets/images/rummy-game-development/why_choose_us_rummy.webp"
                                    className="wow bounceInRight hire-image img-lazy px-md-5"
                                    data-wow-duration="2s"
                                    style={{ visibility: "visible", animationDuration: "2s" }}
                                    width={1600}
                                    height={900}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="developer">
                <div className="container c-1">
                    {/* <div class="heading_title text-center">
   <h1><span>HIRE</span> POKER GAME DEVELOPER</h1>
   </div> */}
                    <div className="col-md-12 text-center">
                        <div
                            className="aos-init"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <h2 className="sub_title">
                                <span className="yellow">Our Security  </span>{" "}
                                <span className="black">features include the following</span>
                                {/*2*/}
                            </h2>
                            {/* <p>The way we hire is as easy as it is transparent!</p> */}
                        </div>
                    </div>
                    <div className="row row1">
                        <div
                            className="col-md-6 col1 wow bounceInUp"
                            data-wow-duration="2s"
                            style={{
                                visibility: "visible",
                                animationDuration: "2s",
                                animationName: "none"
                            }}
                        >
                            <p className="hire-para">
                                <b>RNG Certified</b>
                                <br />
                                <br />
                                <b>Cheating Prevention Algorithm</b>
                                <br />
                                <br />
                                <b>Restricted SSL Data</b> 
                                <br />
                                <br />
                                <b>Bot Protected Environment:</b> 
                                <br />
                                <br />
                                <b>Security Features That Secure Players From Fraudulent Transactions:</b> 

                            </p>
                            <div className="btn_outer my-bt">
                                <a
                                    id="requestaquoterummy3"
                                    data-toggle="modal"
                                    data-target="#requestQoute"
                                    className="contact_btn requst"
                                >
                                    Request A Quote
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col1 pt-md-0">
                            <img
                                width={1600}
                                height={900}
                                alt="best online rummy game app"
                                src="/assets/images/rummy-game-development/hire-rummy-game-developer.webp"
                                className="wow bounceInRight hire-image img-lazy m-0 px-md-5"
                                data-wow-duration="2s"
                                style={{ visibility: "visible", animationDuration: "2s" }}
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container ">
                    <div className="col-md-12 text-center">
                        <div
                            className=""
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <h2 className="sub_title">
                                <span className="yellow">A Complete Technology Stack To </span>{" "}
                                <span className="black">
                                    {" "}
                                    Create Our Ludo Game includes
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-12 col1 wow" data-wow-duration="1s">
                        <p className="hire-para col-md-12 para-plateform text-center">
                            {/* The following are the technologies our developers utilize to develop games:

                            <br />
                            <br /> */}
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
                                                Front End Development   
                                            </h5>
                                            <p className="card-text text-center text-dark">
                                                Unity3D & Cocos2D & HTML5
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
                                                Back End Development
                                            </h5>
                                            <p className="card-text text-center text-dark">
                                                {" "}
                                                 Node.js, PHP & Java
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
                                            <h5 className="card-title cards text-center">Database Development</h5>
                                            <p className="card-text text-center text-dark">
                                                {" "}
                                                MongoDB & MySQL
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
                                            <h5 className="card-title cards text-center">Real-Time Engine</h5>
                                            <p className="card-text text-center text-dark">
                                                {" "}
                                                Socket.io & Photon & WebRTC
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
                                            <h5 className="card-title cards text-center">For Development on Platforms Android & iOS & Web & PWA</h5>
                                            {/* <p className="card-text text-center text-dark">
                                                {" "}
                                                Photon, SmartFox, Mirror, and WebRTC
                                            </p> */}
                                        </div>
                                    </div>
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
                            className="aos-init"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <h2 className="sub_title">
                                <span className="yellow">Mobile-Friendly </span>{" "}
                                <span className="black"> Ludo Games for {country}</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row row1">
                        <div className="col-md-6 col1">
                            <img
                                width={1600}
                                height={900}
                                data-original="rummy game app development company"
                                src="/assets/images/rummy-game-development/rummy-game-development-solutions 1.webp"
                                className="wow bounceInLeft  my-image img-lazy"
                                data-wow-duration="2s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "2s",
                                    animationName: "none"
                                }}
                            />
                        </div>
                        <div
                            className="col-md-6 col1 wow bounceInUp"
                            data-wow-duration="2s"
                            style={{
                                visibility: "visible",
                                animationDuration: "2s",
                                animationName: "none"
                            }}
                        >
                            <p className="para-1">
                                The majority of gamers in {country} access their games through mobile devices; therefore, our Ludo applications introduce:
                                <br />
                                <br />
                                Super fast load time

                                <br />
                                <br />
                                Minimized architecture
                                <br />
                                <br />
                                Uniform operations on all devices
                                <br />
                                <br />
                                Nice themes & animations
                                <br />
                                <br />
                                User-friendly interface
                                <br />
                                <br />
                                Our games work perfectly even on slow internet connections.
                            </p>

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
                            <div className="carousel-item">
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
                            <div className="carousel-item active">
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
                                width={1600}
                                height={900}
                                src="/assets/images/rummy-game-development/softwaresuggest.webp"
                                className=" hire-image icons img-lazy"
                            />{" "}
                        </div>
                        <div className="col-md-4 col-4 mt-5">
                            {" "}
                            <img
                                width={1600}
                                height={900}
                                src="/assets/images/rummy-game-development/topmobileappdevelopers.webp"
                                className=" hire-image icons img-lazy"
                            />{" "}
                        </div>
                        <div className="col-md-4 col-4 mt-5">
                            {" "}
                            <img
                                width={1600}
                                height={900}
                                src="/assets/images/rummy-game-development/capterra.webp"
                                className=" hire-image icons img-lazy"
                            />{" "}
                        </div>
                    </div>
                </div>
            </section>


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
                                <span className="yellow">Hire Dedicated </span>{" "}
                                <span className="black">Ludo Game Developers in {country}</span>
                                {/*2*/}
                            </h2>
                        </div>
                    </div>
                    <div className="row row1">
                        <div className="col-md-6 col1 wow bounceInUp" data-wow-duration="2s">
                            <p className="hire-para">
                                Do you need qualified developers for a long-term project?
                                <br />
                                <br />
                                Our dedicated Ludo developers are assigned to you who will be working solely according to your needs. 
                                <br />
                                <br />
                                {/* <b> Here’s why our clients love hiring Mobzway’s Ludo game developers:</b><br><br> */}
                                <b>Advantages:</b>
                                <br />
                                <br />
                                <b>Total allocation of the developer </b>
                                <br />
                                <br />
                                <b>Direct communication</b>
                                <br/>
                                <br/>
                                <b>Faster development cycle</b>
                                <br/>
                                <br/>
                                <b>Engagement patterns of monthly or hourly basi</b>
                            </p>
                            <div className="btn_outer">
                                <a
                                    id="requestaquoteludo3"
                                    data-toggle="modal"
                                    data-target="#requestQoute"
                                    className="contact_btn requst"
                                >
                                    Hire Developer
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col1">
                            <img
                                alt="Ludo Game Software Development"
                                src="/assets/images/l_hire_1.png"
                                className="wow bounceInRight hire-image"
                                data-wow-duration="2s"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="get_in-touch get ">
                <div className="container c-1">
                    <div className="col-md-12 text-center">
                        <div
                            className=""
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <h2 className="sub_title">
                                <span className="black_bg_head_yellow">Start your Ludo  </span>{" "}
                                <span className="black_bg_head_white">
                                    game in {country} today!
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="sub_head text-center">
                        <h3
                            className="text-white"
                            style={{
                                fontFamily: '"Dosis-SemiBold"',
                                paddingBottom: 50,
                                width: "80%",
                                margin: "auto",
                                fontSize: "1.30rem !important"
                            }}
                        >
                            Mobzway provides not only the best but also the most secure and tailored Ludo game solutions that would trigger your quick scaling and maximize ROI whether you are creating a basic Ludo app or a full-blown multiplayer Ludo gaming universe.
                        </h3>

                        {/* <span className='text-white bg-transparent p-0 d-block'>Click to get demo access</span>
                        <span className='text-white bg-transparent p-0 d-block' style={{fontSize:'18px'}}>Request pricing
                        </span>
                        <span className='text-white bg-transparent p-0 d-block' style={{fontSize:'18px'}}>Hire Ludo developers</span>
                        <span className='text-white bg-transparent p-0 d-block' style={{fontSize:'18px'}}>Get a free consultation </span> */}

                    </div>
                    <div className="text-center">
                        <button className="btn" data-toggle="modal" data-target="#requestQoute">
                            <p>Contact us</p>
                        </button>
                    </div>
                </div>
            </section>

        </>
    )
}
