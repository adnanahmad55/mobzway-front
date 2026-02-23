import React from 'react'

export const metadata = {
    title: "Our Poker & Casino Game Products Portfolio | Mobzway Tech.",
    description: "Mobzway completed the work on time and excellently. Deliver recent projects of game development, unity, game art, poker, Texas and many more.",
    keywords: "Our Portfolio, try demo, try our products",
    alternates: { canonical: "https://www.mobzway.com/portfolio/" },
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    openGraph: {
        title: "Our Poker & Casino Game Products Portfolio | Mobzway Technologies",
        description: "Mobzway completed the work on time and excellently. Deliver recent projects of game development, unity, game art, poker, Texas and many more.",
        url: "https://www.mobzway.com/portfolio/",
        siteName: "Mobzway Technologies",
        images: [
            {
                url: "https://www.mobzway.com//assets/images/banner02portfolio.png",
                width: 815,
                height: 821,
                alt: "our_portfolio",
                type: "image/png",
            },
        ],
        locale: "en_US",
        type: "website",
        articlePublisher: "https://www.facebook.com/mobzwaygamedevelopment/",
        updatedTime: "2022-03-22T16:00:38+05:30",
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Poker & Casino Game Products Portfolio | Mobzway Technologies",
        description: "Mobzway completed the work on time and excellently. Deliver recent projects of game development, unity, game art, poker, Texas and many more.",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com//assets/images/banner02portfolio.png"],
    },
};

export default function Portfolio() {
    return (
        <>
            {/*?php include 'header.php' ?*/}
            {/* page name */}
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        "\n            .portfolio-img-sec{\n                overflow: hidden;\n                border: 5px solid #fcd10a;\n                border-radius: 15px;\n            }\n            .portfolio-img-sec:hover img{\n                transform: scale(1.2);\n            }\n            .portfolio-img-sec img{\n                transition: all 0.3s ease;\n            }\n            .portfolio_game_tab{\n                padding-top: 0px !important;\n                background-color: #100e0e !important;\n                background-image: none;\n            }\n            .portfolio_game_tab .portfolio_game_tab_header{\n                margin-bottom: 0px !important;\n            }\n             .overlay .contact_btn {\n    background: #fcd10a !important;\n    padding: 8px 18px;\n    border-radius: 50px;\n    line-height: 15px;\n    color: #202020;\n    position: relative;\n    z-index: 0;\n    font-size: 20px;\n    font-family: 'Bebas Neue';\n    margin-top: 10px;\n    font-weight: 400;\n}\n.overlay .contact_btn:active, .overlay .contact_btn:focus{\n    outline: none;\n}\n.portfolio_game_tab .tab-content .col1 .overlay{\n    padding-top: 70px;\n}\n@media(max-width:480px){\n    .overlay .contact_btn {\n    background: #fcd10a !important;\n    padding: 5px 18px;\n    border-radius: 50px;\n    line-height: 15px;\n    color: #202020;\n    position: relative;\n    z-index: 0;\n    font-size: 16px;\n    font-family: 'Bebas Neue';\n    font-weight: 400;\n    margin-top: 10px;\n}\n\n}\n\n@media(max-width:400px){\n    .portfolio_game_tab .tab-content .col1 .overlay{\n    padding-top: 5px;\n}\n}\n        "
                }}
            />
            <section
                className="portfolio_page_name"
                style={{
                    backgroundImage:
                        'url("/assets/images/banner02portfolio.png")',
                    backgroundSize: "cover"
                }}
            >
                <div className="container">
                    <div className="col-md-12">
                        <div
                            className=""
                            data-aos="fade-right"
                            data-aos-duration={1500}
                            data-aos-once="true"
                        >
                            <h1 className="sub_title">
                                <span className="black_bg_head_yellow">WE DELIVER</span>
                                <br />{" "}
                                <span
                                    className="black_bg_head_white"
                                    style={{ borderRight: "3px solid #c7c7c7", paddingRight: 10 }}
                                >
                                    THE BEST GAMES
                                </span>
                            </h1>
                            <p>
                                Really curious to know how our games appear and perform?
                                <br /> Why not have a glimpse at some of our games and try out
                                <br /> yourself playing them? Check out our portfolio now.{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* game tab */}
            <section className="portfolio_game_tab" style={{ backgroundColor: "#000" }}>
                <div className="portfolio_game_tab_header">
                    <div className="container">
                        <ul id="myTab" className="nav nav-pills">
                            <li className="nav-item">
                                <a href="#all" className="nav-link active">
                                    <img
                                        alt="all"
                                        src="/assets/images/casino_small_icon.png"
                                    />{" "}
                                    ALL
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#table" className="nav-link">
                                    <img
                                        alt="table"
                                        src="/assets/images/casino_small_icon.png"
                                    />{" "}
                                    TABLE
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#draw" className="nav-link">
                                    <img
                                        alt="draw"
                                        src="/assets/images/casino_small_icon.png"
                                    />{" "}
                                    DRAW
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#roulette" className="nav-link">
                                    <img
                                        alt="ROULETTE"
                                        src="/assets/images/casino_small_icon.png"
                                    />{" "}
                                    ROULETTE
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#slot" className="nav-link">
                                    <img
                                        alt="SLOT"
                                        src="/assets/images/casino_small_icon.png"
                                    />{" "}
                                    SLOT
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container">
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="all">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="3 Patti Classic"
                                            src="/assets/images/3-patti-classic.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>3 Patti Classic</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="3 Patti Variation"
                                            src="/assets/images/3-patti-variation.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>3 Patti Variation</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Poker"
                                            src="/assets/images/Poker.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Poker</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Rummy"
                                            src="/assets/images/Rummy.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Rummy</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img alt="Ludo" src="/assets/images/Ludo.jpg" />
                                        <div className="overlay">
                                            <h3>Ludo</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Dragon Tiger"
                                            src="/assets/images/Dragon-Tiger.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Dragon Tiger</h3>
                                            {/*  <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="BlackJack"
                                            src="/assets/images/Blackjack.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>BlackJack</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Baccart"
                                            src="/assets/images/baccarat.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Baccart</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Andar Bahar"
                                            src="/assets/images/table-andar-bahar.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Andar Bahar</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Andar Bahar Pro"
                                            src="/assets/images/table-andar-bahar-pro.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Andar Bahar Pro</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Sic Bo"
                                            src="/assets/images/table-sic-bo.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Sic Bo</h3>
                                            {/*  <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Table Shan"
                                            src="/assets/images/table-shan.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Table Shan</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="12 Card Joker"
                                            src="/assets/images/Draw-12-card-joker.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>12 Card Joker</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="16 Card Joker"
                                            src="/assets/images/Draw-16-card-joker.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>16 Card Joker</h3>
                                            {/*  <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Keno"
                                            src="/assets/images/Draw-Keno.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Keno</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Lucky Horse"
                                            src="/assets/images/Draw-lucky-horse.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Lucky Horse</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Mega Wheel"
                                            src="/assets/images/Draw-Mega-wheel.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Mega Wheel</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Single Chance Dark Theme"
                                            src="/assets/images/Draw-Single-chance-dark theme.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Single Chance Dark Theme</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Single Chance Mobile"
                                            src="/assets/images/Draw-single-chance-mobile.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Single Chance Mobile</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Single Chance Spin"
                                            src="/assets/images/Draw-single-chance-spin.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Single Chance Spin</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Sorat"
                                            src="/assets/images/Draw-sorat.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Sorat</h3>
                                            {/*  <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Triple Chance"
                                            src="/assets/images/Draw-triple-chance.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Triple Chance</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="European Roulette"
                                            src="/assets/images/european-roulette.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>European Roulette</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="American Roulette"
                                            src="/assets/images/american-roulette.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>American Roulette</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Mini Roulette"
                                            src="/assets/images/mini-roulette.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Mini Roulette</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Arabian Nights"
                                            src="/assets/images/Slot-Arabian-Night.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Arabian Nights</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Barbarian Slot"
                                            src="/assets/images/Slot-barbarian.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Barbarian Slot</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Wild Wickets"
                                            src="/assets/images/Slot-Wild-Wickets.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Wild Wickets</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Eat Street"
                                            src="/assets/images/Slot-Eat-Street.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Eat Street</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Era Of Thar"
                                            src="/assets/images/Slot-era-of-thar.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Era Of Thar</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Russia 2018"
                                            src="/assets/images/Slot-russia-2018.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Russia 2018</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Frozen Treasure"
                                            src="/assets/images/Slot-frozen-treasure.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Frozen Treasure</h3>
                                            {/*  <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Spin The Fruits"
                                            src="/assets/images/Slot-spin-the-fruits.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Spin The Fruits</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Goldmine"
                                            src="/assets/images/Slot-goldmine.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Goldmine</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Jungle Quest"
                                            src="/assets/images/Slot-jungle-quest.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Jungle Quest</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Panda"
                                            src="/assets/images/Slot-panda.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Panda</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Pirates"
                                            src="/assets/images/Slot-pirates.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Pirates</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Rise Of Devil"
                                            src="/assets/images/Slot-rise-of-devil.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Rise Of Devil</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Royal Slot"
                                            src="/assets/images/Slot-royal.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Royal Slot</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Under Water"
                                            src="/assets/images/Slot-under-water.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Under Water</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade show" id="table">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="3 Patti Classic"
                                            src="/assets/images/3-patti-classic.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>3 Patti Classic</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="3 Patti Variation"
                                            src="/assets/images/3-patti-variation.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>3 Patti Variation</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Poker"
                                            src="/assets/images/Poker.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Poker</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Rummy"
                                            src="/assets/images/Rummy.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Rummy</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img alt="Ludo" src="/assets/images/Ludo.jpg" />
                                        <div className="overlay">
                                            <h3>Ludo</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Dragon Tiger"
                                            src="/assets/images/Dragon-Tiger.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Dragon Tiger</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="BlackJack"
                                            src="/assets/images/Blackjack.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>BlackJack</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Baccart"
                                            src="/assets/images/baccarat.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Baccart</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Andar Bahar"
                                            src="/assets/images/table-andar-bahar.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Andar Bahar</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Andar Bahar Pro"
                                            src="/assets/images/table-andar-bahar-pro.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Andar Bahar Pro</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Sic Bo"
                                            src="/assets/images/table-sic-bo.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Sic Bo</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Table Shan"
                                            src="/assets/images/table-shan.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Table Shan</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="draw">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="12 Card Joker"
                                            src="/assets/images/Draw-12-card-joker.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>12 Card Joker</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="16 Card Joker"
                                            src="/assets/images/Draw-16-card-joker.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>16 Card Joker</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Keno"
                                            src="/assets/images/Draw-Keno.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Keno</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Lucky Horse"
                                            src="/assets/images/Draw-lucky-horse.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Lucky Horse</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Mega Wheel"
                                            src="/assets/images/Draw-Mega-wheel.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Mega Wheel</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Single Chance Dark Theme"
                                            src="/assets/images/Draw-Single-chance-dark theme.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Single Chance Dark Theme</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Single Chance Mobile"
                                            src="/assets/images/Draw-single-chance-mobile.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Single Chance Mobile</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Single Chance Spin"
                                            src="/assets/images/Draw-single-chance-spin.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Single Chance Spin</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Sorat"
                                            src="/assets/images/Draw-sorat.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Sorat</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Triple Chance"
                                            src="/assets/images/Draw-triple-chance.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Triple Chance</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="roulette">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="European Roulette"
                                            src="/assets/images/european-roulette.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>European Roulette</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="American Roulette"
                                            src="/assets/images/american-roulette.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>American Roulette</h3>
                                            {/*  <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Mini Roulette"
                                            src="/assets/images/mini-roulette.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Mini Roulette</h3>
                                            {/*  <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="slot">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Arabian Nights"
                                            src="/assets/images/Slot-Arabian-Night.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Arabian Nights</h3>
                                            {/*  <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Barbarian Slot"
                                            src="/assets/images/Slot-barbarian.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Barbarian Slot</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Wild Wickets"
                                            src="/assets/images/Slot-Wild-Wickets.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Wild Wickets</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Eat Street"
                                            src="/assets/images/Slot-Eat-Street.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Eat Street</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Era Of Thar"
                                            src="/assets/images/Slot-era-of-thar.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Era Of Thar</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Russia 2018"
                                            src="/assets/images/Slot-russia-2018.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Russia 2018</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Frozen Treasure"
                                            src="/assets/images/Slot-frozen-treasure.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Frozen Treasure</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Spin The Fruits"
                                            src="/assets/images/Slot-spin-the-fruits.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Spin The Fruits</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Goldmine"
                                            src="/assets/images/Slot-goldmine.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Goldmine</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Jungle Quest"
                                            src="/assets/images/Slot-jungle-quest.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Jungle Quest</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Panda"
                                            src="/assets/images/Slot-panda.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Panda</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Pirates"
                                            src="/assets/images/Slot-pirates.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Pirates</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Rise Of Devil"
                                            src="/assets/images/Slot-rise-of-devil.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Rise Of Devil</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Royal Slot"
                                            src="/assets/images/Slot-royal.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Royal Slot</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                    <div className="col1 portfolio-img-sec">
                                        <img
                                            alt="Under Water"
                                            src="/assets/images/Slot-under-water.jpg"
                                        />
                                        <div className="overlay">
                                            <h3>Under Water</h3>
                                            {/* <p>Vestibulum nec erat eu nulla rhoncus fringilla ut non neque.</p> */}
                                            <a href="http://demo.mobzway.com/" target="_blank">
                                                <button className="contact_btn">Try Demo</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* speak expert */}
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
                                <span className="black_bg_head_yellow">SPEAK</span>{" "}
                                <span className="black_bg_head_white">TO AN EXPERT</span>
                                {/*2*/}
                            </h2>
                        </div>
                    </div>
                    <div className="sub_head text-center">
                        <h5 className="text-white">
                            Need advice on developing the best gaming solutions for your business?
                            Get in touch with Mobzway’s highly qualified game developers and get
                            answers to all your queries.
                        </h5>
                    </div>
                    <div className="text-center">
                        <a data-toggle="modal" data-target="#requestQoute">
                            <p>LET'S TALK</p>
                        </a>
                    </div>
                </div>
            </section>
            {/*?php include 'footer.php' ?*/}
        </>

    )
}
