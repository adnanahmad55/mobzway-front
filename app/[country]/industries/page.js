import Image from "next/image";
import BannerForm from "../components/BannerForm";

export const metadata = {
    title: "Mobzway - Online Gaming Software Development Company",
    description: "Mobzway is one of the top gaming software development company in India. We are custom poker, casino, rummy, Ludo, and Teen Patti gaming software providers.",
    keywords: "Gaming Software Development, Gaming Software Developers, Gaming Software Providers",
    openGraph: {
        title: "Mobzway - Online Gaming Software Development Company | Gaming Software Provider",
        description: "Mobzway is one of the top gaming software development company in India. We are custom poker, casino, rummy, Ludo, and Teen Patti gaming software providers.",
        url: "https://www.mobzway.com/",
        siteName: "Mobzway Technologies",
        images: [
            {
                url: "https://www.mobzway.com/assets/images/homepage_banner.avif",
                width: 815,
                height: 821,
                alt: "mobzway",
                type: "image/jpg",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mobzway - Online Gaming Software Development Company | Gaming Software Provider",
        description: "Mobzway is one of the top gaming software development company in India. We are custom poker, casino, rummy, Ludo, and Teen Patti gaming software providers.",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com/assets/images/homepage_banner.avif"],
    },
    alternates: {
        canonical: "https://www.mobzway.com/",
    },
};
export default function Industry() {
    return (
        <>
            {/* <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":
          new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src=
          "https://www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,"script","dataLayer","GTM-TNKJQBP");`,
        }}
      /> */}
            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-B3GVZ3J32T"></script>
            {/* <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", "G-B3GVZ3J32T");
        `,
        }}
      /> */}
           <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    .banner {\n        background-position: bottom center;\n    }\n\n    img {\n        width: 100%;\n        height: auto;\n    }\n\n    .product-sec .pro_item .product_page_link {\n        pointer-events: none;\n    }\n\n    .product-sec .pro_item .product_page_link p {\n        pointer-events: auto;\n    }\n\n    @media (max-width: 797px) {\n\n        .why_choose_home .col-md-6.whyus,\n        .why_choose_home .col-md-6.whyus img#whyy {\n            position: static !important;\n            width: 100% !important;\n        }\n\n        .why_choose_home #manuals {\n            position: static;\n            margin-top: -25px !important;\n        }\n\n        .why_choose_home .col-md-6.whyus {\n            margin-top: 0 !important;\n            position: relative !important;\n            top: 0 !important;\n        }\n\n        #manuals .sub_title {\n            padding-top: 0;\n        }\n\n        .why_choose_home #manuals {\n            order: 1;\n        }\n\n        .why_content {\n            padding-top: 0px;\n        }\n\n        body .banner {\n            height: calc(100vh - 110px) !important;\n        }\n\n        .gameplushmb {\n            display: block !important;\n        }\n    }\n\n    .wel_come_container {\n        top: 45%;\n    }\n"
                }}
            />
            <div
                className="heroSlider container-fluid"
                style={{
                    backgroundImage: 'url("/assets/images/homepage_banner.avif")',
                    backgroundColor: "rgba(0, 0, 0, 0.80)",
                    backgroundBlendMode: "overlay",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    paddingTop: "80px", // Thoda top padding add kiya taaki clean lage
                    paddingBottom: "80px" // Thoda bottom padding add kiya taaki clean lage
                }}
            >
                <div className="container position-relative">
                    <div className="w-100 position-relative heroslidebg-mb">
                        <div className="row align-items-center">
                            {/* Left Side: Content */}
                            <div className="col-md-7">
                                <h2 data-hk="s40-1-12" className="hero__title">
                                    Industries We Serve
                                </h2>
                                {/* Mobile Image */}
                                <img
                                    className="d-block d-md-none mb-3 w-100"
                                    src="/assets/images/Poker.webp"
                                    alt="Poker Game"
                                />
                                <div className="hero__description">
                                   Mobzway is a B2B gaming technology company delivering scalable, secure, and customizable gaming platforms for startups, entrepreneurs, and enterprises across all markets.
                                </div>
                                <div className="hero__description">
                                  We specialize in skill-based gaming platforms, multiplayer card games, sports gaming solutions, and HTML5 web games — built with robust backend architecture, seamless integrations, and growth-ready infrastructure.
                                </div>
                            </div>

                            {/* Right Side: Card Image (Desktop) */}
                            <div className="col-md-5 d-none d-md-block">
                                <img
                                    src="/assets/images/Poker.webp"
                                    alt="Poker Game"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                    <span className="yellow">Skill-Based Card </span>{" "}
                                    <span className="black">
                                        Game Platforms
                                    </span>
                                </h2>
                            </div>
                        </div>
                        
                        <div className="col-md-6 mt-4">
                            <div className="description mb-3" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                                Skill gaming has a fast growing market. We help businesses launch competitive and real-time multiplayer card platforms designed for performance and fairness.
                            </div>
                            
                            <h5 className="font-weight-bold mt-3 mb-2" style={{ color: "#333" }}>We Develop:</h5>
                            <ul style={{ listStyleType: "disc", lineHeight: '25px', margin: "0 18px", marginBottom: "20px" }}>
                                <li>Rummy platforms</li>
                                <li>Poker platforms</li>
                                <li>Teen Patti software</li>
                                <li>Custom multiplayer card games</li>
                            </ul>

                            <h5 className="font-weight-bold mt-3 mb-2" style={{ color: "#333" }}>Key Features:</h5>
                            <ul style={{ listStyleType: "disc", lineHeight: '25px', margin: "0 18px", marginBottom: "20px" }}>
                                <li>Real-time multiplayer engine</li>
                                <li>RNG-based secure gameplay</li>
                                <li>Tournament & leaderboard systems</li>
                                <li>Anti-collusion detection</li>
                                <li>Wallet & bonus management</li>
                                <li>Scalable backend infrastructure</li>
                            </ul>

                            <p className="description mt-3" style={{ fontSize: "15px", fontWeight: "500" }}>
                                Our systems are optimized for high concurrency, low latency, and secure transactions — essential for competitive gaming market.
                            </p>
                        </div>

                        <div className="col-md-6 mtp pt-md-0 mt-4 text-center">
                            <div className="px-md-2">
                                <img
                                    alt="Skill-Based Card Game Platforms"
                                    src="/assets/images/rummy-game-development/why_choose_us_rummy.webp"
                                    className="wow bounceInRight hire-image img-lazy px-md-5 w-100"
                                    data-wow-duration="2s"
                                    style={{ visibility: "visible", animationDuration: "2s", borderRadius: "10px" }}
                                    width={1600}
                                    height={900}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="solutions mb-5">
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
                                    <span className="yellow">Sports Gaming & </span>{" "}
                                    <span className="black">Prediction Platforms</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row row1 align-items-center mt-4">
                        <div className="col-md-6 col1">
                           <img
    width={1600}
    height={900}
    data-original="sports gaming platform development"
    src="/assets/images/rummy-game-development/rummy-game-development-solutions 1.webp"
    className="wow bounceInLeft my-image img-lazy w-100"
    data-wow-duration="2s"
    style={{
        visibility: "visible",
        animationDuration: "2s",
        animationName: "none",
        borderRadius: "10px"
    }}
    alt="Sports Gaming Solutions"
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
                            <div className="px-md-3">
                                <p className="description mb-3" style={{ fontSize: "16px", lineHeight: "1.6", color: "#444" }}>
                                    With the rapid growth of digital sports engagement, we provide technology solutions for sports gaming and interactive prediction platforms.
                                </p>

                                <h5 className="font-weight-bold mt-4 mb-2" style={{ color: "#333" }}>Solutions Include:</h5>
                                <ul style={{ listStyleType: "disc", lineHeight: '28px', margin: "0 18px", marginBottom: "20px", color: "#444" }}>
                                    <li>Sports gaming software development</li>
                                    <li>Live data feed integrations</li>
                                    <li>Player wallet systems</li>
                                    <li>Admin dashboards & reporting</li>
                                    <li>Risk & analytics tools</li>
                                </ul>

                                

                                <p className="description mt-3" style={{ fontSize: "15px", fontWeight: "500", color: "#333" }}>
                                    Our modular architecture allows operators to customize features while maintaining operational control and data transparency.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-5 why">
                <div className="container c-1">
                    <div className="row align-items-center mt-5 pt-4">
                        <div className="col-md-12 text-center mb-4">
                            <div
                                className="aos-init"
                                data-aos="fade-left"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">Social & HTML5 </span>{" "}
                                    <span className="black">
                                        Game Publishers
                                    </span>
                                </h2>
                            </div>
                        </div>
                        
                       
                        <div className="col-md-6 mtp pt-md-0 mt-4 text-center order-2 order-md-1">
                            <div className="px-md-2">
                               
                                <img
                                    alt="Social & HTML5 Game Publishers"
                                    src="/assets/images/rummy-game-development/why_choose_us_rummy.webp" 
                                    className="wow bounceInLeft hire-image img-lazy px-md-5 w-100"
                                    data-wow-duration="2s"
                                    style={{ visibility: "visible", animationDuration: "2s", borderRadius: "10px" }}
                                    width={1600}
                                    height={900}
                                />
                            </div>
                        </div>

                       
                        <div className="col-md-6 mt-4 order-1 order-md-2">
                            <div className="description mb-3" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                                We build lightweight HTML5 games that work seamlessly across web and mobile browsers — perfect for mobile-first audience.
                            </div>
                            
                            <h5 className="font-weight-bold mt-3 mb-2" style={{ color: "#333" }}>Ideal For:</h5>
                            <ul style={{ listStyleType: "disc", lineHeight: '25px', margin: "0 18px", marginBottom: "20px" }}>
                                <li>Social gaming platforms</li>
                                <li>Instant play web portals</li>
                                <li>Entertainment platforms</li>
                                <li>Reward-based game ecosystems</li>
                            </ul>

                            <h5 className="font-weight-bold mt-3 mb-2" style={{ color: "#333" }}>What We Deliver:</h5>
                            <ul style={{ listStyleType: "disc", lineHeight: '25px', margin: "0 18px", marginBottom: "20px" }}>
                                <li>HTML5 slot & arcade games</li>
                                <li>Multiplayer web games</li>
                                <li>Leaderboards & reward mechanics</li>
                                <li>Cross-platform compatibility</li>
                                <li>API-ready integration</li>
                            </ul>

                            <p className="description mt-3" style={{ fontSize: "15px", fontWeight: "500" }}>
                                Our HTML5 games are optimized for performance, accessibility, and fast loading on low-bandwidth networks.
                            </p>
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
                                <span className="yellow">Gaming Startups & </span>{" "}
                                <span className="black">Entrepreneurs</span>
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
                                Startup ecosystem is rapidly embracing digital gaming. We support founders at every stage — from concept to launch.
                                <br />
                                <br />
                                <strong>Our Startup Services:</strong>
                                <br />
                                <br />
                                1. White-label gaming platforms
                                <br />
                                <br />
                                2. MVP development packages
                                <br />
                                <br />
                                3. Custom feature development
                                <br />
                                <br />
                                4. UI/UX design customization
                                <br />
                                <br />
                                5. Technical consulting & roadmap planning
                                <br />
                                <br />
                                We help reduce time-to-market with ready-to-deploy modules while allowing full customization flexibility.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-5 why">
                <div className="container c-1">
                    

                    {/* --- SECOND BLOCK (NEW): Aggregators & Platform Providers --- */}
                    <div className="row align-items-center mt-5 pt-4">
                        <div className="col-md-12 text-center mb-4">
                            <div
                                className="aos-init"
                                data-aos="fade-left"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">Aggregators & </span>{" "}
                                    <span className="black">
                                        Platform Providers
                                    </span>
                                </h2>
                            </div>
                        </div>
                        
                        {/* Image On the Left for Desktop, Bottom for Mobile */}
                        <div className="col-md-6 mtp pt-md-0 mt-4 text-center order-2 order-md-1">
                            <div className="px-md-2">
                                {/* Note: Yahan aap apni pasand ki koi nayi image laga sakte hain */}
                                <img
                                    alt="Aggregators & Platform Providers"
                                    src="/assets/images/rummy-game-development/why_choose_us_rummy.webp" 
                                    className="wow bounceInLeft hire-image img-lazy px-md-5 w-100"
                                    data-wow-duration="2s"
                                    style={{ visibility: "visible", animationDuration: "2s", borderRadius: "10px" }}
                                    width={1600}
                                    height={900}
                                />
                            </div>
                        </div>

                        {/* Text On the Right for Desktop, Top for Mobile */}
                        <div className="col-md-6 mt-4 order-1 order-md-2">
                            <div className="description mb-3" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                                For businesses building multi-game platforms or aggregation systems, Mobzway offers powerful backend integration solutions.
                            </div>
                            
                            <h5 className="font-weight-bold mt-3 mb-2" style={{ color: "#333" }}>Services Include:</h5>
                            <ul style={{ listStyleType: "disc", lineHeight: '25px', margin: "0 18px", marginBottom: "20px" }}>
                                <li>Game aggregation engine</li>
                                <li>Multi-provider API integration</li>
                                <li>Unified wallet systems</li>
                                <li>Centralized content management</li>
                                <li>Operator-level reporting tools</li>
                            </ul>

                            <p className="description mt-3" style={{ fontSize: "15px", fontWeight: "500" }}>
                                Our systems are built for scalability, allowing businesses to expand into multiple gaming categories efficiently.
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
                        <div className="carousel-inner">
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
                            href="#testimonial4"
                            aria-label="next"
                            rel="noopener"
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
                                width={1600}
                                height={900}
                                className=" hire-image img-lazy icons"
                                alt="Game Software Development Company"
                            />{" "}
                        </div>
                        <div className="col-md-4 col-4 mt-5">
                            {" "}
                            <img
                                src="/assets/images/topmobileappdevelopers.png"
                                width={1600}
                                height={900}
                                className=" hire-image icons img-lazy"
                                alt="Gaming App Developers"
                            />{" "}
                        </div>
                        <div className="col-md-4 col-4 mt-5">
                            {" "}
                            <img
                                src="/assets/images/capterra.png"
                                width={1600}
                                height={900}
                                className=" hire-image icons img-lazy"
                                alt="Capterra"
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
                                <span className="black_bg_head_yellow">Start </span>{" "}
                                <span className="black_bg_head_white">
                                    your business journey with Mobzway
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
                            Try Our Games, and explore all the features and solutions you need to
                            start, run,and grow your business.
                        </h3>
                    </div>
                    <div className="text-center">
                        <button className="btn" data-toggle="modal" data-target="#requestQoute">
                            <p>Try Demo</p>
                        </button>
                    </div>
                </div>
            </section>
        </>

    );
}
