"use client";
import { useEffect, useState } from "react";
import BannerForm from "../components/BannerForm"; 
// import Image from "next/image"; // Agar Image component use nahi kar rahe toh hata do, <img> tag chalega

export default function EuContent() {
    const [country, setCountry] = useState("Europe"); 
    const [debugInfo, setDebugInfo] = useState("Initializing..."); // Debugging status

    // European Countries List
    const validEuCountries = [
        "Malta", "Germany", "France", "Italy", "Spain", "Netherlands", "Belgium", 
        "Sweden", "Norway", "Denmark", "Finland", "Poland", "Ireland", 
        "Switzerland", "Austria", "Portugal", "Russia", "Ukraine", 
        "Greece", "Czech Republic", "Romania", "Hungary", "United Kingdom"
    ];

    useEffect(() => {
        const getCountryByIP = async () => {
            try {
                setDebugInfo("Fetching IP...");
                console.log("📡 Fetching IP...");

                // 1. API Call
                const res = await fetch("https://ipapi.co/json/");
                
                if (!res.ok) {
                    throw new Error(`API Error: ${res.status}`);
                }

                const data = await res.json();
                console.log("📍 API Response:", data);

                // Screen par dikhane ke liye debug info update karo
                setDebugInfo(`Success! IP: ${data.country_name} (${data.country_code})`);

                // 2. Redirect Logic (Safety Check)
                if (data.continent_code === 'AS' || data.country_code === 'IN') {
                      console.log("Redirecting to Asia...");
                      if(data.country_code === 'IN') window.location.href = "/in";
                      else window.location.href = "/asia/thailand";
                      return;
                }

                if (data.continent_code === 'AF') {
                    console.log("Redirecting to Africa...");
                    window.location.href = "/af";
                    return;
                }

                // 3. Content Update Logic
                // Check karo kya ye country list mein hai?
                if (validEuCountries.includes(data.country_name)) {
                    console.log(`✅ Match Found: Setting country to ${data.country_name}`);
                    setCountry(data.country_name);
                } else {
                    console.log(`❌ No Match in List. API gave: "${data.country_name}". Keeping default: Europe.`);
                    setDebugInfo(`Match Failed! Got: ${data.country_name}`);
                }

            } catch (err) {
                console.error("⚠️ IP Check Failed:", err);
                setDebugInfo(`Failed: ${err.message}`);
                // Fallback: Agar IPAPI fail ho jaye toh default Europe hi rahega
            }
        };

        getCountryByIP();
    }, []);

    return (
        <>
            {/* 🔴 DEBUG BOX: Isko dekho screen par kya likha aa raha hai */}
            <div style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100%', 
                background: 'black', 
                color: '#0f0', 
                padding: '10px', 
                zIndex: 99999, 
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: 'bold'
            }}>
                🛠️ DEBUGGER: {debugInfo} <br/>
                CURRENT STATE: {country}
            </div>
            {/* 🔴 DEBUG BOX END */}

            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    .banner {\n        background-position: bottom center;\n    }\n\n    img {\n        width: 100%;\n        height: auto;\n    }\n\n    .product-sec .pro_item .product_page_link {\n        pointer-events: none;\n    }\n\n    .product-sec .pro_item .product_page_link p {\n        pointer-events: auto;\n    }\n\n    @media (max-width: 797px) {\n\n        .why_choose_home .col-md-6.whyus,\n        .why_choose_home .col-md-6.whyus img#whyy {\n            position: static !important;\n            width: 100% !important;\n        }\n\n        .why_choose_home #manuals {\n            position: static;\n            margin-top: -25px !important;\n        }\n\n        .why_choose_home .col-md-6.whyus {\n            margin-top: 0 !important;\n            position: relative !important;\n            top: 0 !important;\n        }\n\n        #manuals .sub_title {\n            padding-top: 0;\n        }\n\n        .why_choose_home #manuals {\n            order: 1;\n        }\n\n        .why_content {\n            padding-top: 0px;\n        }\n\n        body .banner {\n            height: calc(100vh - 110px) !important;\n        }\n\n        .gameplushmb {\n            display: block !important;\n        }\n    }\n\n    .wel_come_container {\n        top: 45%;\n    }\n"
                }}
            />
            
            {/* Main Content Starts Here */}
            <div
                className="heroSlider container-fluid"
                style={{
                    backgroundImage: 'url("/assets/images/homepage_banner.avif")',
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
                                <div id="heroSlide4_1" className="carousel w-100 slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x" data-ride="carousel" data-pause="hover" data-interval={5000} data-duration={2000}>
                                    <div className="carousel-inner">
                                        
                                        {/* Slide 1 */}
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <h2 data-hk="s40-1-12" className="hero__title">
                                                        Casino Software in {country}
                                                    </h2>
                                                    <img className="d-block d-md-none mb-3 w-100" src="/assets/images/Poker.webp" alt="Poker Game" />
                                                    <div className="hero__description">
                                                        {country}-ready Casino Software Built for Global iGaming Operators.
                                                        Scalable platforms with secure architecture, rich game libraries, and seamless integrations.
                                                    </div>
                                                </div>
                                                <div className="col-md-5 d-none d-md-block">
                                                    <img src="/assets/images/Poker.webp" alt="Poker Game" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Slide 2 */}
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <h2 data-hk="s40-1-12" className="hero__title">
                                                        Sportsbook Software in {country}
                                                    </h2>
                                                    <img className="d-block d-md-none mb-3 w-100" src="/assets/images/rummy-1.webp" alt="Rummy Game" />
                                                    <div className="hero__description">
                                                        Advanced Sportsbook Software Solutions for the {country} market.
                                                        Real-time odds, multi-sport coverage, and robust risk management systems.
                                                    </div>
                                                </div>
                                                <div className="col-md-5 d-none d-md-block">
                                                    <img src="/assets/images/rummy-1.webp" alt="Rummy Game" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    
                                    {/* Arrows and Dots */}
                                    {/* (Ye code same rahega jo tumne bheja tha, maine bas {country} check kiya hai upar) */}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hero_cta_block pmb-0">
                        <div className="hero-submit__description">Fill in the form to contact us and expand your product offering.</div>
                        <BannerForm />
                    </div>
                </div>
            </div>

            {/* SECTIONS */}
            {/* Stats Section same as before... */}
            {/* Maine tumhara stats section skip kiya hai taaki code lamba na ho, par wo same rahega */}

            <section className="py-md-4 py-3" style={{ background: "#f8f9fa", borderTop: "1px solid #d2d2d2", marginTop: "50px" }}>
                <div className="container">
                    <h1 className="sub_title text-center">
                        <span className="yellow">Mobzway – Online Gaming Software </span>{" "}
                        <span className="black">Development Company in {country}</span>
                    </h1>
                    <p style={{ marginBottom: 15, color: "#000", fontSize: 17 }} className="content">
                        Mobzway has its place among global gaming software development companies. The company holds ample experience in bespoke iGaming solution development to cater to the {country} and European markets.
                    </p>
                </div>
            </section>

            {/* Products Section (skipped standard HTML, assume same) */}

            {/* Why Choose Us */}
            <section className="why_choose why_choose_home position-relative" style={{ backgroundImage: 'url("/assets/images/help_banner.avif")', marginTop: "50px" }}>
                <div className="overlay_help" />
                <div className="container-fluid px-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 whyus whyusImage">
                                <img src="/assets/images/why-chhose-banner3.webp" width={1600} height={900} className="why-ch img-lazy" id="whyy" alt="why-chhose-banner" />
                            </div>
                            <div className="col-md-6 offset-md-6 manual_pad" id="manuals" style={{ backgroundColor: "rgba(0, 0, 0, 0.32)", marginTop: "-394px" }}>
                                <div className="sub_title_outer">
                                    <h2 className="sub_title">
                                        <span className="yellow">Why Should </span>{" "}
                                        <span className="black">You Choose Us in {country}?</span>
                                    </h2>
                                </div>
                                <ul className="why_content">
                                    <li>Products developed by iGaming professionals who have the knowledge and experience of the industry for several years in the {country} market.</li>
                                    <li>Easy integration with EU-compliant and {country}-friendly payment gateways</li>
                                    <li>Cost-effective and quick-to-market iGaming solutions for businesses in {country}</li>
                                    <li>Free business consultation for {country} iGaming operators and startups</li>
                                </ul>
                                <div className="btn_outer">
                                    <button className="contact_btn btn" data-toggle="modal" data-target="#requestQoute">request a quote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}