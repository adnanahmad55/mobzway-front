"use client";
//import { getCountryName } from '@/app/lib/country';
import React from 'react'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


const COUNTRY_CODE_TO_NAME = {
    FR: "France",
    DE: "Germany",
    IT: "Italy",
    ES: "Spain",
    AT: "Austria",
    GR: "Greece",
    PT: "Portugal",
    NL: "Netherlands",
    SE: "Sweden",
    MT: "Malta",
    GB: "United Kingdom"
};
const COUNTRY_CODE_TO_SLUG = {
    FR: "fr",
    DE: "de",
    IT: "it",
    ES: "es",
    AT: "at",
    GR: "gr",
    PT: "pt",
    NL: "nl",
    SE: "se",
    MT: "mt",
    GB: "uk" // 👈 important (SEO friendly)
};

 /*export const metadata = {
     title: "Sportsbook software development company Europe | Mobzway",
     description:
         "Mobzway is top sportsbook software development company in Europe delivering secure betting platforms with real-time odds and risk management tools.",
     keywords: ["Sportsbook software development company in Europe"],
     alternates: {
         canonical: "https://www.mobzway.com/eu/",
         languages: {
             "en-eu": "https://www.mobzway.com/eu/",
         },
     },
 };*/

/*export async function generateMetadata() {
    const country = getCountryName();

    return {
        title: `Sportsbook software development company ${country} | Mobzway`,
        description: `Mobzway is top sportsbook software development company in ${country} delivering secure betting platforms with real-time odds and risk management tools.`,
        keywords: [`Sportsbook software development company in ${country}`],
    };
}*/

export default function SportsbookSoftwareDevelopment() {

    const [country, setCountry] = useState("Europe");
   const router = useRouter();
    useEffect(() => {
    const getCountryByIP = async () => {
        try {
            console.log("📡 Checking IP Location...");

            const res = await fetch("https://ipapi.co/json/");
            if (!res.ok) throw new Error("API Limit or Error");

            const data = await res.json();

            console.log("📍 Detected:", data.country_name, data.country);

            const detectedCode = data.country;

            if (COUNTRY_CODE_TO_SLUG[detectedCode]) {

                const slug = COUNTRY_CODE_TO_SLUG[detectedCode];

                console.log("✅ Redirecting to:", slug);

                router.push(`/${slug}/sportsbook-software-development/`);
            } else {
                console.log("🛑 Not EU country → staying on default EU page");
            }

        } catch (err) {
            console.log("⚠️ IP detection failed → staying default");
        }
    };

    getCountryByIP();
}, []);

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
                        Sportsbook software development company in {country} | Mobzway
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
            <span className="black">Development Company in Bangladesh</span>
          </h1> */}
                    <p
                        style={{ marginBottom: 15, color: "#000", fontSize: 17 }}
                        className="content"
                    >
                        Mobzway is a notable slot game development company in {country} that has been drawing attention to its aesthetically pleasing, RNG-certified, and robustly performing slot games for the online casinos, the iGaming newcomers and the gaming platforms. Our slot gaming solutions are crafted to provide not only high player engagement but also a long-term retention and monetization while keeping fairness, scalability, and technical stability in the picture.
                    </p>
                    <p className="content" style={{ color: "#000", fontSize: 17 }}>
                        We can provide a wide range of custom and white-label slot games that would be suitable for both regional {country}ese operators and the companies that are targeting the international gaming market.
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
                                <span className="yellow">Why Choose Mobzway as  </span>{" "}
                                <span className="black">Slot Game Development Company in {country}?</span>
                            </h2>
                        </div>
                    </div>

                    <div className="col-md-12 col1 wow" data-wow-duration="1s">
                        <p className="hire-para col-md-12 para-plateform text-center">
                            The slot games that we create are the result of a combination of creative game design, mathematical precision, and modern development technologies that are capable of meeting global iGaming standards and evolving player expectations.

                            <br />
                            <br />
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
                                                Custom Slot Game Development
                                            </h5>
                                            {/* <p className="card-text text-center text-dark">
                                                It is well-known to us what the gamers in Bangladesh like to play and we bring to the customers the following:
                                            </p> */}
                                            <ul className='why_content why_content_dark p-0 my-2'>
                                                <li className='text-dark'>Classic, video, and modern slots design</li>
                                                <li className='text-dark'>Offering different themes, symbols and visuals style</li>
                                                <li className='text-dark'>Adjustable RTP, volatility, paylines and reels</li>
                                                <li className='text-dark'>Accommodating mechanics that match operator needs</li>
                                            </ul>
                                            {/* <p className="card-text text-center text-dark">Our slot games are made to pull and keep the players.</p> */}
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
                                                РNG-Certified & Fair Play Systems
                                            </h5>
                                            {/* <p className="card-text text-center text-dark">
                                                All slot games includes:
                                            </p> */}
                                            <ul className='why_content why_content_dark p-0 my-2'>
                                                <li className='text-dark'>Random Number Generation (RNG) algorithms that have received a certificate</li>
                                                <li className='text-dark'>Easily understood payout mechanics</li>
                                                <li className='text-dark'>Gaming restrictions for minors included in the game play</li>
                                                {/* <li className='text-dark'>Math-based outcomes</li> */}
                                            </ul>
                                            {/* <p className="card-text text-center text-dark">
                                                This provides the players with a calm atmosphere through the presence of fairness, transparency, and long-term profits.
                                            </p> */}
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
                                            <h5 className="card-title cards text-center">Multi-Platform Slot Games</h5>
                                            {/* <p className="card-text text-center text-dark">
                                                We create slot games for:
                                            </p> */}

                                            <ul className='why_content why_content_dark p-0 my-2'>
                                                <li className='text-dark'>Operating on web and mobile browsers</li>
                                                <li className='text-dark'>Compatible with Android and iOS devices</li>
                                                <li className='text-dark'>Performance that is optimized for both desktop and tablet users</li>
                                                {/* <li className='text-dark'>PWA experiences</li> */}
                                            </ul>

                                            {/* <p className="card-text text-center text-dark">
                                                Every player has a consistent experience across devices.
                                            </p> */}

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
                                            <h5 className="card-title cards text-center">White-Label Slot Game Solutions</h5>
                                            {/* <p className="card-text text-center text-dark">
                                                Artists at our company apply:
                                            </p> */}

                                            <ul className='why_content why_content_dark p-0 my-2'>
                                                <li className='text-dark'>Faster time-to-market deployment</li>
                                                <li className='text-dark'>Custom branding, themes, and symbols</li>
                                                <li className='text-dark'>Seamless integration with casino platforms and aggregators</li>
                                                {/* <li className='text-dark'>Smooth transitions of reels</li>
                                                <li className='text-dark'>We Engineer Future-Proof Slot Games</li> */}
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
                                            <h5 className="card-title cards text-center">Responsive Slot Game Performance</h5>
                                            <p className="card-text text-center text-dark">
                                                Optimized Responsiveness For Low Latency Game Play Fast Spin Results Lightweight Mobile Play High Concurrency Optimized For The Mobile Market In Bangladesh
                                            </p>


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
                                <span className="yellow">Slot Game </span>{" "}
                                <span className="black">
                                    Development in {country}
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
                            {/* We give different hiring structures depending on your business needs: */}
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
                                    <h3 className='text-center'>HTML5 Development of Slot Games</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Creating lightweight/optimized slot games for Performance,
                                        Slot Games are built for Modern Web Browsers,
                                        Slot Games offer Smooth Animation and Responsive Game Play
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
                                    <h3 className='text-center'>3D Development of Slot Games</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Slot Games offer High-quality Graphics and Animation,
                                        Interactive bonus rounds/Free Spins, Offer Engaging Player Experiences
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
                                    <h3 className='text-center'>Creating Progressive Jackpot Slot Games</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Designing single and multi-level progressive jackpots,
                                        Providing Real-time updates of jackpot pools,
                                        improve engagement/retention of players
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
                                    <h3 className='text-center'>Developing slot Game API Integrations</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Integrating with Online Casino Platforms,
                                        Integrating Wallets/Payment Systems,
                                        Compatibility with sportsbooks and game aggregators
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
                                    <h3 className='text-center'>Slot Games offer the following Key Features</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        Bonus Rounds/Free Spins/Triggers,
                                        Wilds/Scatters/Multipliers,
                                        Multi-currency/Multi-Language Support,
                                        Secure Wallet Integration,
                                        Real-Time Analytics/Game Performance Reports
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
                                    <h3 className='text-center'>Slot Gaming Market Potential in {country}</h3>
                                </div>
                                <div className="col-md-12">
                                    <p>
                                        {country} is a highly developed digital gaming market propelled by the following factors:
                                        High mobile and Internet penetration, High interest in digital entertainment and interactive gaming,
                                        Demand for high-quality slot content with a high visual polish
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>


            {/* <section className="mb-5 why">
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
                                    <span className="yellow">THE KEY FEATURES </span>{" "}
                                    <span className="black">
                                        OF OUR SLOT GAMES
                                    </span>
                                </h2>
                            </div>
                            <p className="text-justify">
                                
                            </p> 
                        </div>
                        <div className="col-md-7">
                            <div className='row'>
                                <div class="col-md-4">


                                    <br />
                                    <br />
                                    <h4 className="new-head">
                                        Gameplay Features
                                    </h4>
                                    <ul
                                        style={{ listStyleType: "disc", lineHeight: '25px', margin: "0 18px" }}
                                    >
                                        <li><b>Free Spinning</b>
                                        </li>
                                        <li>
                                            <b>Bonus Rounds</b>
                                        </li>
                                        <li>
                                            <b>Mega Wins & Big Wins</b>
                                        </li>
                                        <li>
                                            <b>Gamble Feature</b>
                                        </li>
                                        <li><b>Payline Customization</b> </li>
                                        <li>
                                            <b>Buy Feature</b>
                                        </li>

                                        <li>
                                            <b>RTP (Return to Player) Settings</b>
                                        </li>
                                        <li>
                                            <b>Volatility Levels</b>
                                        </li>
                                        <li>
                                            <b>Reward System</b>
                                        </li>

                                    </ul>
                                </div>
                                <div class="col-md-4">


                                    <br />
                                    <br />
                                    <h4 className="new-head">
                                        Admin Panel Features:
                                    </h4>

                                    <ul
                                        style={{ listStyleType: "disc", lineHeight: '25px', margin: "0 18px" }}
                                    >
                                        <li><b>RTP Control</b>
                                        </li>
                                        <li>
                                            <b>Player Management</b>
                                        </li>
                                        <li>
                                            <b>Transaction Tracking</b>
                                        </li>
                                        <li>
                                            <b>Game Performance Analytics</b>
                                        </li>
                                        <li><b>Bonus Configuration</b> </li>
                                        <li>
                                            <b>PI Key Management</b>
                                        </li>

                                        <li>
                                            <b>Multi-Currency Wallet</b>
                                        </li>
                                        <li>
                                            <b>Agent Hierarchy</b>
                                        </li>


                                    </ul>

                                </div>

                                <div class="col-md-4">


                                    <br />
                                    <br />
                                    <h4 className="new-head">
                                        Security Layer:
                                    </h4>

                                    <ul
                                        style={{ listStyleType: "disc", lineHeight: '25px', margin: "0 18px" }}
                                    >
                                        <li><b>Anti-Fraud Protection</b>
                                        </li>
                                        <li>
                                            <b>RNG Verification</b>
                                        </li>
                                        <li>
                                            <b>Encrypted Wallets</b>
                                        </li>
                                        <li>
                                            <b>Secure Login</b>
                                        </li>
                                        <li><b>SSL (Secure Socket Layer) Encryption</b> </li>
                                        <li>
                                            <b>Anti-Bot Shields</b>
                                        </li>



                                    </ul>

                                </div>

                            </div>

                        </div>
                        <div className="col-md-5 mtp pt-md-0 mt-2">
                            <div className="px-md-0">
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
            </section> */}




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
                                <span className="yellow">Technology Stack Used in  </span>{" "}
                                <span className="black">
                                    {" "}
                                    Slot Game Development
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-12 col1 wow" data-wow-duration="1s">
                        <p className="hire-para col-md-12 para-plateform text-center">
                            For developing a slot game. Our slot machines are created using the latest technologies:

                            <br />
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
                                                Unity 3D
                                            </h5>
                                            {/* <p className="card-text text-center text-dark">
                                                Unity, Cocos2d, HTML5
                                            </p> */}
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
                                                HTML5 & JavaScript
                                            </h5>
                                            {/* <p className="card-text text-center text-dark">
                                                {" "}
                                                Node.js, Java, PHP
                                            </p> */}
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
                                            <h5 className="card-title cards text-center">C# and Java</h5>
                                            {/* <p className="card-text text-center text-dark">
                                                {" "}
                                                MongoDB, MySQL
                                            </p> */}
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
                                            <h5 className="card-title cards text-center">Node.js</h5>
                                            {/* <p className="card-text text-center text-dark">
                                                {" "}
                                                Spine, After Effects, Blender
                                            </p> */}
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
                                            <h5 className="card-title cards text-center">Cloud hosting setup</h5>
                                            {/* <p className="card-text text-center text-dark">
                                                {" "}
                                                SSL, JWT, encryption layer
                                            </p> */}
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
                                                src="/assets/images/3-01.png"
                                                className="wow bounceInRight new-one "
                                                data-wow-duration="2s"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title cards text-center">Supported Platforms</h5>
                                            <p className="card-text text-center text-dark">
                                                {" "}
                                                Android, iOS, Web, Desktop
                                            </p>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="solutions">
                <div className="container c-1">
                 
                    <div className="col-md-12 text-center">
                        <div
                            className="aos-init"
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <h2 className="sub_title">
                                <span className="yellow">Reasons to Trust Mobzway</span>{" "}
                                <span className="black"> for Hire Game Developers in India</span>
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
                                1. Over a decade of experience in Game Development.
                                <br />
                                <br />
                                2. More than 1,500 projects successfully delivered across the globe.
                                <br />
                                <br />
                                3. Developers assigned full time to your project and working together with you.
                                <br />
                                <br />
                                4. A research team that consists of an R&D (Research & Development) team and an innovation team.
                                <br />
                                <br />
                                5. Mobzway offer their clients scalable, secure, and future-proof solutions.
                                <br />
                                <br />
                                6. Mobzway offers 24/7 assistance to its international clients.
                                <br />
                                <br />
                                Our Developers collaborate with you as if they are part of your internal team to guarantee a seamless workflow and high-quality output.
                            </p>

                        </div>
                    </div>
                </div>
            </section> */}

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
                                <span className="black_bg_head_yellow">Collaboration for {country} </span>{" "}
                                <span className="black_bg_head_white">
                                    Slot Game Development - Mobzway
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
                            Team-up with the reliable slot game development company in {country}, Mobzway, based in {country}, to develop interesting slot games that will promote the acquisition, engagement, and retention of players.
                        </h3>
                    </div>
                    <div className="text-center">
                        <button className="btn" data-toggle="modal" data-target="#requestQoute">
                            <p>Schedule a Free Demo and Consultation Today</p>
                        </button>
                    </div>
                </div>
            </section>

        </>
    )
}
