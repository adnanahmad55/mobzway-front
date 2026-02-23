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
export default function portfolio() {
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
                                    
                                Partner With Us
                                </h2>
                                {/* Mobile Image */}
                                <img
                                    className="d-block d-md-none mb-3 w-100"
                                    src="/assets/images/Poker.webp"
                                    alt="Poker Game"
                                />
                                <div className="hero__description">
                                  At Mobzway, we believe strong partnerships create stronger platforms. We collaborate with entrepreneurs, agencies, platform operators, technology providers, and strategic investors to build scalable and high-performance gaming solutions.  </div>
                                <div className="hero__description">
                                 Whether you’re looking to resell, integrate, co-develop, or expand your service portfolio — we provide the technology backbone to help you grow.   </div>
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
                                    <span className="yellow">Why Partner  </span>{" "}
                                    <span className="black">
                                        With Mobzway?
                                    </span>
                                </h2>
                            </div>
                        </div>
                        
                        <div className="col-md-6 mt-4">
                            
                            
                            <ul style={{ listStyleType: "disc", lineHeight: '25px', margin: "0 18px", marginBottom: "20px" }}>
                                <li>Proven expertise in skill gaming & multiplayer systems</li>
                                <li>Modular and scalable architecture</li>
                                <li>White-label & customizable solutions</li>
                                <li>Dedicated technical support</li>
                                <li>Transparent collaboration model</li>
                                <li>Long-term growth partnership approach</li>
                            </ul>

                            

                            <p className="description mt-3" style={{ fontSize: "15px", fontWeight: "500" }}>
                            We focus on sustainable, mutually beneficial partnerships — not short-term transactions.    </p>
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
                                    <span className="yellow">Partnership </span>{" "}
                                    <span className="black">Opportunities</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row row1 align-items-center mt-4">
                        <div className="col-md-6 col1">
                           <img
                                width={1600}
                                height={900}
                                data-original="partnership opportunities"
                                src="/assets/images/rummy-game-development/rummy-game-development-solutions 1.webp"
                                className="wow bounceInLeft my-image img-lazy w-100"
                                data-wow-duration="2s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "2s",
                                    animationName: "none",
                                    borderRadius: "10px"
                                }}
                                alt="Partnership Opportunities"
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
                                <h4 className="font-weight-bold mb-3" style={{ color: "#333" }}>1) White-Label & Reseller Partners</h4>
                                <p className="description mb-3" style={{ fontSize: "16px", lineHeight: "1.6", color: "#444" }}>
                                    If you are an agency, consultant, or entrepreneur looking to offer gaming platforms under your own brand, our white-label solutions allow you to:
                                </p>

                                <ul style={{ listStyleType: "disc", lineHeight: '28px', margin: "0 18px", marginBottom: "20px", color: "#444" }}>
                                    <li>Launch branded skill gaming platforms</li>
                                    <li>Customize UI/UX & features</li>
                                    <li>Access ready backend systems</li>
                                    <li>Scale without building from scratch</li>
                                </ul>

                                <h5 className="font-weight-bold mt-4 mb-2" style={{ color: "#333" }}>Ideal for:</h5>
                                <ul style={{ listStyleType: "disc", lineHeight: '28px', margin: "0 18px", marginBottom: "20px", color: "#444" }}>
                                    <li>Digital marketing agencies</li>
                                    <li>IT solution providers</li>
                                    <li>Gaming consultants</li>
                                    <li>Startup founders</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         <section className="mb-5 why">
                <div className="container c-1">
          
                    
                    {/* --- SECOND BLOCK (NEW): Technology & Integration Partners --- */}
                    <div className="row align-items-center mt-5 pt-4">
                        
                        {/* Text On the Left for Desktop, Top for Mobile */}
                        <div className="col-md-6 mt-4">
                            <div className="px-md-3">
                                <h4 className="font-weight-bold mb-3" style={{ color: "#333" }}>2) Technology & Integration Partners</h4>
                                <p className="description mb-3" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                                    We collaborate with technology companies to enhance platform capabilities.
                                </p>
                                
                                <h5 className="font-weight-bold mt-4 mb-2" style={{ color: "#333" }}>We welcome partnerships with:</h5>
                                <ul style={{ listStyleType: "square", lineHeight: '28px', margin: "0 18px", marginBottom: "20px" }}>
                                    <li>Payment gateway providers</li>
                                    <li>Game studios</li>
                                    <li>API service providers</li>
                                    <li>CRM & analytics providers</li>
                                    <li>Cloud infrastructure companies</li>
                                </ul>

                                <p className="description mt-3" style={{ fontSize: "15px", fontWeight: "500", color: "#333" }}>
                                    Together, we create more powerful and integrated gaming ecosystems.
                                </p>
                            </div>
                        </div>

                        {/* Image On the Right for Desktop, Bottom for Mobile */}
                        <div className="col-md-6 mtp pt-md-0 mt-4 text-center">
                            <div className="px-md-2">
                                {/* Note: Aap is image ko Technology Partnership wali image se replace kar sakte hain */}
                                <img
                                    alt="Technology & Integration Partners"
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
           
          <section className="solutions">
                <div className="container c-1">
                    
                    {/* --- FIRST BLOCK: Game Developers & Studios --- */}
                   
                    <div className="row row1 mb-5">
                        <div className="col-md-6 col1">
                            <img
                                width={1600}
                                height={900}
                                data-original="game developers and studios"
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
                        ><h4 className="font-weight-bold mb-3" style={{ color: "#333" }}>3) Game Developers & Studios</h4>
                            <p className="para-1">
                                If you develop HTML5 or multiplayer games, we can help distribute and integrate your games into broader platforms.
                                <br />
                                <br />
                                <strong>Benefits:</strong>
                                <br />
                                <br />
                                1. API-based integration
                                <br />
                                <br />
                                2. Aggregation opportunities
                                <br />
                                <br />
                                3. Revenue-sharing models
                                <br />
                                <br />
                                4. Access to operator networks
                                <br />
                                <br />
                                We help expand your game reach while ensuring smooth backend compatibility.
                            </p>
                        </div>
                    </div>
                    
      

                </div>
                <section className="mb-5 why">
                <div className="container c-1">
                    
                    {/* --- REPLACED BLOCK: Strategic & Growth Partners --- */}
                    <div className="row align-items-center mt-5 pt-4">
                        
                        {/* Text On the Left for Desktop, Top for Mobile */}
                        <div className="col-md-6 mt-4">
                            <div className="px-md-3">
                                <h4 className="font-weight-bold mb-3" style={{ color: "#333" }}>4) Strategic & Growth Partners</h4>
                                <p className="description mb-3" style={{ fontSize: "16px", lineHeight: "1.6" }}>
                                    For investors, incubators, and business development professionals, we offer collaboration models that support:
                                </p>
                                
                                <ul style={{ listStyleType: "square", lineHeight: '28px', margin: "0 18px", marginBottom: "20px" }}>
                                    <li>Co-developed gaming platforms</li>
                                    <li>Market expansion strategies</li>
                                    <li>Technology licensing</li>
                                    <li>Joint ventures</li>
                                </ul>

                                <p className="description mt-3" style={{ fontSize: "15px", fontWeight: "500", color: "#333" }}>
                                    Our modular system allows rapid deployment into new regions and verticals.
                                </p>
                            </div>
                        </div>

                        {/* Image On the Right for Desktop, Bottom for Mobile */}
                        <div className="col-md-6 mtp pt-md-0 mt-4 text-center">
                            <div className="px-md-2">
                                {/* Note: Aap is image ko Strategic Partnership wali image se replace kar sakte hain */}
                                <img
                                    alt="Strategic & Growth Partners"
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
                                    <span className="yellow">Who Should </span>{" "}
                                    <span className="black">Partner With Us?</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row row1 align-items-center mt-4">
                        <div className="col-md-6 col1">
                           <img
                                width={1600}
                                height={900}
                                data-original="who should partner with us"
                                src="/assets/images/rummy-game-development/rummy-game-development-solutions 1.webp"
                                className="wow bounceInLeft my-image img-lazy w-100"
                                data-wow-duration="2s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "2s",
                                    animationName: "none",
                                    borderRadius: "10px"
                                }}
                                alt="Who Should Partner With Us"
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
                                <h5 className="font-weight-bold mt-4 mb-3" style={{ color: "#333" }}>You’re a great fit if you:</h5>
                                <ul style={{ listStyleType: "disc", lineHeight: '28px', margin: "0 18px", marginBottom: "20px", color: "#444" }}>
                                    <li>Want to enter the skill gaming industry</li>
                                    <li>Serve clients in the digital entertainment space</li>
                                    <li>Have an existing user base to monetize</li>
                                    <li>Offer complementary tech solutions</li>
                                    <li>Are building a gaming-focused startup</li>
                                </ul>

                                <p className="description mt-4" style={{ fontSize: "16px", fontWeight: "600", color: "#333" }}>
                                    We provide the technical infrastructure — you focus on growth.
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
                                    <span className="yellow">Our Collaboration </span>{" "}
                                    <span className="black">Process</span>
                                </h2>
                            </div>
                        </div>
                        
                        {/* Image On the Left for Desktop, Bottom for Mobile */}
                        <div className="col-md-6 mtp pt-md-0 mt-4 text-center order-2 order-md-1">
                            <div className="px-md-2">
                                {/* Note: Yahan collaboration/process wali image lagaiye */}
                                <img
                                    alt="Our Collaboration Process"
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
                            <ul style={{ listStyleType: "none", paddingLeft: "0", lineHeight: '35px', margin: "0 18px", marginBottom: "20px", fontSize: "16px", color: "#333", fontWeight: "500" }}>
                                <li>1. Initial Consultation</li>
                                <li>2. Requirement Analysis</li>
                                <li>3. Custom Partnership Model Proposal</li>
                                <li>4. Technical Setup & Integration</li>
                                <li>5. Ongoing Support & Optimization</li>
                            </ul>

                            <p className="description mt-4" style={{ fontSize: "16px", fontWeight: "600", color: "#444" }}>
                                We maintain transparent communication at every stage.
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
