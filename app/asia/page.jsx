"use client";
import Image from "next/image";
import BannerForm from "../components/BannerForm";
// import { headers } from "next/headers";
import { useEffect, useState } from "react";

// export const metadata = {
//     title: "Mobzway - Online Gaming Software Development Company",
//     description: "Mobzway is one of the top gaming software development company in India. We are custom poker, casino, rummy, Ludo, and Teen Patti gaming software providers.",
//     keywords: "Gaming Software Development, Gaming Software Developers, Gaming Software Providers",
//     openGraph: {
//         title: "Mobzway - Online Gaming Software Development Company | Gaming Software Provider",
//         description: "Mobzway is one of the top gaming software development company in India. We are custom poker, casino, rummy, Ludo, and Teen Patti gaming software providers.",
//         url: "https://www.mobzway.com/",
//         siteName: "Mobzway Technologies",
//         images: [
//             {
//                 url: "https://www.mobzway.com/assets/images/homepage_banner.avif",
//                 width: 815,
//                 height: 821,
//                 alt: "mobzway",
//                 type: "image/jpg",
//             },
//         ],
//     },
//     twitter: {
//         card: "summary_large_image",
//         title: "Mobzway - Online Gaming Software Development Company | Gaming Software Provider",
//         description: "Mobzway is one of the top gaming software development company in India. We are custom poker, casino, rummy, Ludo, and Teen Patti gaming software providers.",
//         site: "@mobzway",
//         creator: "@mobzway",
//         images: ["https://www.mobzway.com/assets/images/homepage_banner.avif"],
//     },
//     alternates: {
//         canonical: "https://www.mobzway.com/",
//     },
// };

export default function AfHomepage() {

    // let country = "Unknown";

    // try {
    //     const headersList = headers();
    //     country =
    //         headersList.get("x-vercel-ip-country") ||
    //         headersList.get("cf-ipcountry") ||
    //         "Unknown";
    // } catch (e) {
    //     console.log("Headers not available in dev");
    // }

    const [country, setCountry] = useState("India");

    const getCountryByIP = async () => {
        try {
            const res = await fetch("https://ipapi.co/json/");
            const data = await res.json();
            setCountry(data.country_name || "Unknown");
        } catch (err) {
            setCountry("Unknown");
        }
    };

    useEffect(() => {
        if (!navigator.geolocation) {
            getCountryByIP();
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                    const res = await fetch(
                        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
                    );
                    const data = await res.json();
                    setCountry(data.countryName || "Unknown");
                } catch {
                    getCountryByIP();
                }
            },
            () => {

                getCountryByIP();
            }
        );
    }, []);


    return (
        <>

            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    .banner {\n        background-position: bottom center;\n    }\n\n    img {\n        width: 100%;\n        height: auto;\n    }\n\n    .product-sec .pro_item .product_page_link {\n        pointer-events: none;\n    }\n\n    .product-sec .pro_item .product_page_link p {\n        pointer-events: auto;\n    }\n\n    @media (max-width: 797px) {\n\n        .why_choose_home .col-md-6.whyus,\n        .why_choose_home .col-md-6.whyus img#whyy {\n            position: static !important;\n            width: 100% !important;\n        }\n\n        .why_choose_home #manuals {\n            position: static;\n            margin-top: -25px !important;\n        }\n\n        .why_choose_home .col-md-6.whyus {\n            margin-top: 0 !important;\n            position: relative !important;\n            top: 0 !important;\n        }\n\n        #manuals .sub_title {\n            padding-top: 0;\n        }\n\n        .why_choose_home #manuals {\n            order: 1;\n        }\n\n        .why_content {\n            padding-top: 0px;\n        }\n\n        body .banner {\n            height: calc(100vh - 110px) !important;\n        }\n\n        .gameplushmb {\n            display: block !important;\n        }\n    }\n\n    .wel_come_container {\n        top: 45%;\n    }\n"
                }}
            />
            <div
                className="heroSlider container-fluid"
                style={{
                    backgroundImage:
                        'url("/assets/images/homepage_banner.avif")',
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
                                <div
                                    id="heroSlide4_1"
                                    className="carousel w-100 slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
                                    data-ride="carousel"
                                    data-pause="hover"
                                    data-interval={5000}
                                    data-duration={2000}
                                >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <h2 data-hk="s40-1-12" className="hero__title">
                                                        SportsBook in {country}
                                                    </h2>
                                                    <img
                                                        className="d-block d-md-none mb-3 w-100"
                                                        src="/assets/images/Poker.webp"
                                                        alt="Poker Game"
                                                    />
                                                    <div className="hero__description">
                                                        In {country}, we provide the most sophisticated sportsbook solutions with up-to-the-minute odds, extensive coverage of various sports, and safe and secure integration of wallets.
                                                        Our sportsbooks are very adaptable and can be used for different purposes; they are also very powerful, always ready to comply with regulations, and provide a very smooth user experience.

                                                    </div>
                                                </div>
                                                <div className="col-md-5 d-none d-md-block">
                                                    <img
                                                        src="/assets/images/Poker.webp"
                                                        alt="Poker Game"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <h2 data-hk="s40-1-12" className="hero__title">
                                                        Casino Platform in {country}
                                                    </h2>
                                                    <img
                                                        className="d-block d-md-none mb-3 w-100"
                                                        src="/assets/images/rummy-1.webp"
                                                        alt="Rummy Game"
                                                    />
                                                    <div className="hero__description">
                                                        We present our casino platforms in {country} as the most feature-rich solutions that include live casinos, table games, and RNG-based systems.
                                                        Our platforms are designed for scalability and security so that they can integrate multi-currency, multilingual, and payment gateway.

                                                    </div>
                                                </div>
                                                <div className="col-md-5 d-none d-md-block">
                                                    <img
                                                        src="/assets/images/rummy-1.webp"
                                                        alt="Rummy Game"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <div className="row">
                                                <div className="col-md-7">
                                                    <h2 data-hk="s40-1-12" className="hero__title">
                                                        Slot Games in {country}
                                                    </h2>
                                                    <img
                                                        className="d-block d-md-none mb-3 w-100"
                                                        src="/assets/images/ludo.webp"
                                                        alt="Ludo Game"
                                                    />
                                                    <div className="hero__description">
                                                        With top-notch graphics, flawless gameplay, and honest RNG systems, we make attractive slot games for players in {country}.
                                                        Our slot solutions allow for both web and mobile usage with themes that can be changed to fit the client's needs and monetization options included.
                                                    </div>
                                                </div>
                                                <div className="col-md-5 d-none d-md-block">
                                                    <img
                                                        src="/assets/images/ludo.webp"
                                                        alt="Ludo Game"
                                                    />
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div
                                        className="row justify-content-between align-items-center d-md-flex d-none pt-0 pt-md-3"
                                        style={{ padding: "0 15px" }}
                                    >
                                        <div className="heroSliderarrow">
                                            <a
                                                className="carousel-control-prev carousel-control-prev-1"
                                                href="#heroSlide4_1"
                                                aria-label="prev"
                                                rel="noopener"
                                                data-slide="prev"
                                            >
                                                <span className="carousel-control-prev-icon">
                                                    <i className="fas fa-angle-left" />
                                                </span>
                                            </a>
                                            <a
                                                className="carousel-control-next carousel-control-next-1"
                                                href="#heroSlide4_1"
                                                aria-label="next"
                                                rel="noopener"
                                                data-slide="next"
                                            >
                                                <span className="carousel-control-next-icon">
                                                    <i className="fas fa-angle-right" />
                                                </span>
                                            </a>
                                        </div>
                                        <div className="hero-carousel-indicators position-relative">
                                            <div className="carousel-indicators">
                                                <button
                                                    className="heroSlide-dots active"
                                                    type="button"
                                                    data-target="#heroSlide4_1"
                                                    data-slide-to={0}
                                                    aria-current="true"
                                                    aria-label="Slide 1"
                                                />
                                                <button
                                                    className="heroSlide-dots"
                                                    type="button"
                                                    data-target="#heroSlide4_1"
                                                    data-slide-to={1}
                                                    aria-label="Slide 2"
                                                />
                                                <button
                                                    className="heroSlide-dots"
                                                    type="button"
                                                    data-target="#heroSlide4_1"
                                                    data-slide-to={2}
                                                    aria-label="Slide 3"
                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="heroSliderarrow d-block d-md-none mt-4 w-100 d-flex justify-content-between align-items-center">
                            <a
                                className="carousel-control-prev"
                                style={{ position: "static" }}
                                href="#heroSlide4_1"
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
                                style={{ position: "static" }}
                                href="#heroSlide4_1"
                                aria-label="next"
                                rel="noopener"
                                data-slide="next"
                            >
                                <span className="carousel-control-next-icon">
                                    <i className="fas fa-angle-right" />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="hero_cta_block pmb-0">
                        <div className="hero-submit__description">
                            Fill in the form to contact us and expand your product offering.
                        </div>
                        {/*?php include 'banner-form.php' ?*/}
                        <BannerForm />

                    </div>
                </div>
            </div>
            {/* <section class="banner position-relative pokers"
    style="background-image: url('/assets/images/homepage_banner.avif');background-color: rgba(0, 0, 0, 0.3);background-blend-mode: overlay;">
    
    <div class="wel_come_container">
  <h1 class="welcome_text">
      Best Poker, Rummy, Casino Gaming Solution
  </h1>
  <p class="sml_text">
      Mobzway offers all sorts of white label and customized solutions and possible variations of Poker, Rummy,
      Casino, Teen Patti, Ludo, Roulette, Blackjack, Baccarat, and many more for Android and iOS and HTML5.
  </p>
  <div class="btn_outer">
      <button class="contact_btn btn" data-toggle="modal" data-target="#requestQoute">Request A Quote</button>
  </div>
    </div>
    <div class="banner_bottom_info gameplushmb" style="background-color: rgba(15, 16, 15, 0.8);">
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-11">
              <div class="bottom_header">
                  <div class="bottom_text">
                      Planning to start an Online Poker, Rummy and Casino game? Or need to improve your
                      existing gaming platform, then you have landed at the right place!
                  </div>
              </div>
          </div>
      </div>
  </div>
    </div>
</section> */}
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
                    <h1 className="sub_title text-center">
                        <span className="yellow">Mobzway – Online Gaming Software  </span>{" "}
                        <span className="black">Development Company in {country}</span>
                    </h1>
                    <p
                        style={{ marginBottom: 15, color: "#000", fontSize: 17 }}
                        className="content"
                    >
                        Mobzway is a worldwide gaming software development company providing tailor-made gaming solutions for the {country} market. Our team of gaming professionals is experienced and provides fun games such as Ludo, card and board games, Poker-like, Rummy-like, Teen Patti, Roulette, Blackjack, and casinos games for Android, iOS, and HTML5 platforms.
                        Mobzway Technologies’ commitment to quality, security, and scalability has helped it to launch over 500 games, win over 300 satisfied clients worldwide, and obtain a 97% client retention rate, thus establishing us as a technology partner that businesses can rely on.


                    </p>
                    {/* <p className="content" style={{ color: "#000", fontSize: 17 }}>
            With a successful history and experience in the gaming industry, Mobzway Technologies has accomplished the feat of rolling out more than 500 games, catering to the needs of over 300 happy clients worldwide, and maintaining a client retention rate of 97%, which is the reason why we are a technology partner UK and international iGaming operators can rely ‍‌‍‍‌‍‌‍‍‌on.
          </p> */}
                </div>
            </section>
            <section className="product-sec">
                <div className="container">
                    <h2 className="sub_title" style={{ textAlign: "center" }}>
                        <span className="yellow">Products</span>{" "}
                        <span className="black">We Offer</span>
                    </h2>
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6 mb-3">
                            <div className="overflow-hidden w-100 game_icon_sec">
                                <a href="javascript:void(0)" className="d-block">
                                    <div className="overflow-hidden w-100">
                                        {/* <div class="overlay_item"></div>
                      <div class="ofr_title">
                          <p>Poker</p>
                      </div> */}
                                        <img
                                            src="/assets/images/Products/af/game-3.png"
                                            width={1600}
                                            height={900}
                                            className=""
                                            alt="poker bg"
                                        />
                                        {/* <img src="/assets/images/poker_bg.avif" width="1600" height="900"
                          class="img-lazy" alt="poker bg"> */}
                                        {/* <div class="game_icons">
                          <div class="anim_one"><img src="/assets/images/poker_icon.png"
                                  class="img-lazy" width="1600" height="900" alt="poker icon"></div>
                      </div> */}
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* <div class="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6 mb-3">
          <div class="pro_item">

              <a href="<?= $baseurl ?>rummy-software/" class="product_page_link">
                  <div class="pro_inner">
                      <div class="overlay_item"></div>
                      <div class="ofr_title">
                          <p>Rummy</p>
                      </div>
                      <img src="/assets/images/rummy_background.avif" width="1600"
                          height="900" class="img-lazy" alt="rummy bg">
                      <div class="game_icons">
                          <div class="anim_five"><img src="/assets/images/rummy_icon.png"
                                  class="img-lazy" width="1600" class="img-lazy" height="900" alt="rummy icon">
                          </div>
                      </div>
                  </div>
              </a>
          </div>
      </div> */}
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6 mb-3">
                            <div className="overflow-hidden w-100 game_icon_sec">
                                <a href="javascript:void(0)" className="d-block">
                                    <div className="overflow-hidden w-100">
                                        <img
                                            src="/assets/images/Products/bd/game-5.webp"
                                            width={1600}
                                            height={900}
                                            className=""
                                            alt="poker bg"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6 mb-3">
                            <div className="overflow-hidden w-100 game_icon_sec">
                                <a href="javascript:void(0)" className="d-block">
                                    <div className="overflow-hidden w-100">
                                        <img
                                            src="/assets/images/Products/bd/game-4.webp"
                                            width={1600}
                                            height={900}
                                            className=""
                                            alt="poker bg"
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* About Gaming Platfrom */}
            <section
                className="gaming_platform gaming_platformAdd gaming_platform_block"
                style={{
                    backgroundImage: 'url("/assets/images/about_bg.avif")'
                }}
            >
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
                                    <span className="yellow">About</span>{" "}
                                    <span className="black">Our Gaming Platform</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-6 mb-0 col-xl-3 col-lg-3 mb-3 mb-md-0">
                            <div
                                className="circle_one_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <div className="circle_outer position-relative aftes">
                                    <span className="fea_imgbox real_cash aos-init">
                                        <img
                                            className="img-lazy"
                                            src="/assets/images/vector_one.png"
                                            width={1600}
                                            height={900}
                                            alt="Rapid Launch"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Rapid Launch</div>
                                <p className="content">
                                    You will get a complete online gaming platform ready for launch
                                    within integrated payment systems and back office.
                                </p>
                            </div>
                        </div>
                        <div className="col-6 mb-0 col-xl-3 col-lg-3 mb-3 mb-md-0">
                            <div
                                className="circle_one_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <div className="circle_outer position-relative aftes">
                                    <span className="fea_imgbox real_cash aos-init">
                                        <img
                                            className="img-lazy"
                                            src="/assets/images/vector_two.png"
                                            width={1600}
                                            height={900}
                                            alt="Exclusive Branding"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Exclusive Branding</div>
                                <p className="content">
                                    Products are customized with exclusive design to fulfill the
                                    business's branding requirements.
                                </p>
                            </div>
                        </div>
                        <div className="col-6 col-xl-3 col-lg-3 mb-3 mb-md-0">
                            <div
                                className="circle_one_outer"
                                data-aos="fade-left"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <div className="circle_outer position-relative aftes">
                                    <span className="fea_imgbox real_cash aos-init">
                                        <img
                                            className="img-lazy"
                                            src="/assets/images/vector_three.png"
                                            width={1600}
                                            height={900}
                                            alt="Minimal Investment"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Minimal Investment</div>
                                <p className="content">
                                    Spend most of your budget on marketing &amp; player acquisition to
                                    generate more revenue as product setup is less expensive.
                                </p>
                            </div>
                        </div>
                        <div className="col-6  col-xl-3 col-lg-3">
                            <div
                                className="circle_one_outer"
                                data-aos="fade-left"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <div className="circle_outer position-relative">
                                    <span className="fea_imgbox real_cash aos-init">
                                        <img
                                            className="img-lazy"
                                            src="/assets/images/vector_four.png"
                                            width={1600}
                                            height={900}
                                            alt="Security & Reliability"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Security &amp; Reliability</div>
                                <p className="content">
                                    All products of the platform comply with the industry-standard
                                    security recommendations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------How We Can Help------------------*/}
            <section
                className="how_we_canhelp"
                style={{
                    backgroundImage: 'url("/assets/images/help_banner.avif")'
                }}
            >
                <div className="overlay_help" />
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
                                    <span className="yellow">Find</span>{" "}
                                    <span className="black">Out how we can help</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <div
                                className="help_cotnent text-center"
                                style={{ paddingBottom: 15 }}
                            >
                                Mobzway's know-how in providing customized gaming solutions has put them on the stage of one of the top gaming software developers in the world.

                            </div>
                            <div
                                className="help_cotnent text-center"
                                style={{ paddingBottom: 15 }}
                            >
                                We take care of every single detail of the game production process from start to finish including the in-house development, content integration, and even the technical issues, leaving you with the marketing and player base expansion to do.
                            </div>
                            <div
                                className="help_cotnent text-center"
                                style={{ paddingBottom: 35 }}
                            >
                                Our team of experts is versed in the making of in-demand games like Ludo, Poker-style games, Rummy-style games, Teen Patti, and others that fall into the category of skill and entertainment games for the web, Android, iOS, and HTML5 platforms.

                            </div>
                            <div
                                className="help_cotnent text-center"
                                style={{ paddingBottom: 15 }}
                            >
                                We only ask for the game concept and basic specifications from the clients. Our professionals then innovate your imagination into a fully functional and ready-to-market game within the stipulated period.

                            </div>

                            <div
                                className="help_cotnent text-center"
                                style={{ paddingBottom: 15 }}
                            >
                                Wondering how Mobzway would be able to assist you in your game design, business establishment, and player growth in {country} and other countries?

                            </div>

                            <div className="btn_outer">
                                <button
                                    className="contact_btn btn"
                                    data-toggle="modal"
                                    data-target="#requestQoute"
                                >
                                    Let's Talk
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------How We Can Help------------------*/}
            <section
                className="engagement_models"
                style={{
                    backgroundImage: 'url("/assets/images/about_bg.avif")'
                }}
            >
                <div className="container">
                    <div className="row"></div>
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <div
                                className="sub_title_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">Engagement</span>{" "}
                                    <span className="black">Model</span>
                                </h2>
                            </div>
                            <div className="engage_left">
                                <p className="eng_content">
                                    Mobzway offers the best comprehensive engagement model of its
                                    gaming platform, which is suitable for many operators according to
                                    their different business needs.
                                </p>
                                <div className="sub_title_eng">Buy a White Label Solution</div>
                                <p className="sub_content_eng">
                                    Ready to Use iGaming Solution with your branding with minimum
                                    investment and focus on your business.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="engegment_img">
                                <img
                                    src="/assets/images/enagagement-model.png"
                                    width={1600}
                                    height={900}
                                    alt="engagement model"
                                    className="engegment_img_mar img-lazy"
                                    style={{ marginTop: 50 }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------why choose us------------------*/}
            <section
                className="why_choose why_choose_home position-relative"
                style={{
                    backgroundImage: 'url("/assets/images/help_banner.avif")'
                }}
            >
                <div className="overlay_help" />
                <div className="container-fluid px-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 whyus whyusImage">
                                <img
                                    src="/assets/images/why-chhose-banner3.webp"
                                    width={1600}
                                    height={900}
                                    className="why-ch img-lazy"
                                    id="whyy"
                                    alt="why-chhose-banner"
                                />
                            </div>
                            <div
                                className="col-md-6 offset-md-6 manual_pad"
                                id="manuals"
                                style={{
                                    backgroundColor: "rgba(0, 0, 0, 0.32)",
                                    marginTop: "-394px"
                                }}
                            >
                                <div
                                    className="sub_title_outer"
                                    data-aos="fade-right"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <h2 className="sub_title">
                                        <span className="yellow">Why </span>{" "}
                                        <span className="black">Choose Us?</span>
                                    </h2>
                                </div>
                                <ul
                                    className="why_content aos-init aos-animate"
                                    data-aos="fade-up"
                                    data-aos-duration={1000}
                                >
                                    <li>
                                        Product designed by experienced gaming professionals who know the industry well.

                                    </li>
                                    <li>
                                        Experienced programmers aimed at developing high-quality games that are reliable and engaging.

                                    </li>
                                    <li>
                                        Cross-platform solutions supporting Web, Mobile, PC, and Mac

                                    </li>
                                    <li>Easy integration with popular and {country}-supporting payment systems

                                    </li>
                                    <li>Products with support in English and {country}n languages offered to {country}n players
                                    </li>
                                    <li>
                                        Monitoring and Support Services 24×7 for availability of up to 99.99 percent

                                    </li>
                                    <li>Cost-effective and time-efficient gaming development solutions

                                    </li>
                                    <li>Enhanced safety features to prevent fraud, hacking, and cyber attacks

                                    </li>
                                    <li>Free Business Consultation to enhance {country}n gamblers and startups
                                    </li>

                                </ul>
                                <div className="btn_outer">
                                    <button
                                        className="contact_btn btn"
                                        data-toggle="modal"
                                        data-target="#requestQoute"
                                    >
                                        request a quote
                                    </button>
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
