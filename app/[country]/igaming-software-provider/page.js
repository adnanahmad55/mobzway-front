import React from 'react'

export const metadata = {
  title: "iGaming Software Provider Company | Online iGaming Software",
  description: "Mobzway is one of the famous iGaming Software provider company. We have professional game developers to provide the best iGaming solution.",
  keywords: "White Label Poker Software provider, White Label Poker Software providers, buy white label poker software",
  alternates: { canonical: "https://www.mobzway.com/igaming-software-provider/" },
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  openGraph: {
    title: "iGaming Software Provider Company | Online iGaming Software Solutions",
    description: "Mobzway is one of the famous iGaming Software provider company. We have professional game developers to provide the best iGaming solution.",
    url: "https://www.mobzway.com/igaming-software-provider/",
    siteName: "Mobzway Technologies",
    images: [
      {
        url: "https://www.mobzway.com//assets/images/igaming_banner.png",
        width: 815,
        height: 821,
        alt: "igaming_software",
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
    title: "iGaming Software Provider Company | Online iGaming Software Solutions",
    description: "Mobzway is one of the famous iGaming Software provider company. We have professional game developers to provide the best iGaming solution.",
    site: "@mobzway",
    creator: "@mobzway",
    images: ["https://www.mobzway.com//assets/images/igaming_banner.png"],
  },
};

export default function IgamingSoftwareProvider() {
  return (
    <>
  {/*?php include 'header.php' ?*/}
  {/* Banner */}
  <section
    className="banner pokers position-relative"
    style={{
      backgroundImage: 'url("/assets/images/igaming_banner.png")'
    }}
  >
    <div className="overlay" />
    <div className="wel_come_container">
      <h1 className="welcome_text">iGaming Software PROVIDER Company</h1>
      <p className="sml_text">
        Want to start your own iGaming business? Let Mobzway provide you with
        the best iGaming software solution. Mobzway is a globally trusted
        iGaming software provider company that caters to the needs of budding
        entrepreneurs and bigger gaming ventures by providing them with the best
        customized iGaming solutions. Reach out to us for attractive quotes!
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
              <div className="bottom_head">We Build Best Game Development</div>
              <div className="bottom_text">
                If you’re eyeing for a success in the iGaming space, get our
                ready to use iGaming software solution that comes with many
                remarkable gaming and safety features and offers a wide variety
                of payment options.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Games We Provide */}
  <section className="games_weprovide">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <div
            className="sub_title_outer aos-init aos-animate"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-once="true"
          >
            <h2 className="sub_title">
              <span className="yellow">Games</span>
              <span className="black">We provide</span>
            </h2>
          </div>
        </div>
        <div className="col-md-12">
          <div className="tabos_outer">
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  className="nav-item nav-link white_lebel_casino_nav_link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  <img
                    alt="casino icon"
                    src="/assets/images/casino_small_icon.png"
                    style={{
                      width: 28,
                      backgroundColor: "black",
                      borderRadius: "50%"
                    }}
                  />{" "}
                  CASINO SOFTWARE
                </a>
                <a
                  className="nav-item nav-link white_lebel_casino_nav_link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  <img
                    alt="live dealer icon"
                    src="/assets/images/live_small_icon.png"
                    style={{
                      width: 28,
                      backgroundColor: "black",
                      borderRadius: "50%"
                    }}
                  />{" "}
                  LIVE DEALER
                </a>
                <a
                  className="nav-item nav-link white_lebel_casino_nav_link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  <img
                    alt="Sportsbook icon"
                    src="/assets/images/sportsbook_live_icon.png"
                    style={{
                      width: 28,
                      backgroundColor: "black",
                      borderRadius: "50%"
                    }}
                  />{" "}
                  SPORTSBOOK
                </a>
              </div>
            </nav>
            <div
              className="tab-content"
              id="nav-tabContent"
              style={{ background: "#0d0e0e" }}
            >
              <div
                className="tab-pane fade show active text-center"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <div className="tb_title position-relative">
                  {" "}
                  <img
                    alt="casino icon"
                    src="/assets/images/casino_small_icon.png"
                    style={{ width: 30, paddingBottom: 8 }}
                  />{" "}
                  Casino Software
                </div>
                <p className="nav_content">
                  We provide{" "}
                  <a href="<?=  $baseurl ?>white-label-casino-software/">
                    white label casino software
                  </a>{" "}
                  solutions for businesses and help them build their branding
                  awareness in the online casino space. Our customized and
                  ready-to-launch casino solutions lets you run your online
                  casino seamlessly on varied devices.
                </p>
                <ul className="item_outer_block d-flex justify-content-center w-100 flex-wrap">
                  <li className="white_lebel_casino_li">
                    <a
                      href="<?=  $baseurl ?>blackjack-game-development/"
                      className="product_page_link"
                    ></a>
                    <div className="pro_item">
                      <a
                        href="<?=  $baseurl ?>blackjack-game-development/"
                        className="product_page_link"
                      ></a>
                      <div className="pro_inner">
                        <a
                          href="<?=  $baseurl ?>blackjack-game-development/"
                          className="product_page_link"
                        >
                          <div className="overlay_item" />
                          <div className="ofr_title">
                            <p>Black Jack</p>
                          </div>
                          <img
                            alt="Black Jack"
                            src="/assets/images/offer-four.png"
                          />
                        </a>
                        <div className="game_icons">
                          <a
                            href="<?=  $baseurl ?>blackjack-game-development/"
                            className="product_page_link"
                          />
                          <a className="anim_one">
                            <img
                              alt="Black Jack"
                              src="/assets/images/offer_iconFour.png"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <a
                      href="<?=  $baseurl ?>baccarat-game-development/"
                      className="product_page_link"
                    ></a>
                    <div className="pro_item">
                      <a
                        href="<?=  $baseurl ?>baccarat-game-development/"
                        className="product_page_link"
                      ></a>
                      <div className="pro_inner">
                        <a
                          href="<?=  $baseurl ?>baccarat-game-development/"
                          className="product_page_link"
                        >
                          <div className="overlay_item" />
                          <div className="ofr_title">
                            <p>Baccarat</p>
                          </div>
                          <img
                            alt="Baccarat"
                            src="/assets/images/c_bg_one.png"
                          />
                        </a>
                        <div className="game_icons">
                          <a
                            href="<?=  $baseurl ?>baccarat-game-development/"
                            className="product_page_link"
                          />
                          <a className="anim_two">
                            <img
                              alt="Baccarat"
                              src="/assets/images/c_icon_one.png"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <a
                      href="<?=  $baseurl ?>roulette-game-development/"
                      className="product_page_link"
                    ></a>
                    <div className="pro_item">
                      <a
                        href="<?=  $baseurl ?>roulette-game-development/"
                        className="product_page_link"
                      ></a>
                      <div className="pro_inner">
                        <a
                          href="<?=  $baseurl ?>roulette-game-development/"
                          className="product_page_link"
                        >
                          <div className="overlay_item" />
                          <div className="ofr_title">
                            <p>Roulette</p>
                          </div>
                          <img
                            alt="Roulette"
                            src="/assets/images/offer_two.png"
                          />
                        </a>
                        <div className="game_icons">
                          <a
                            href="<?=  $baseurl ?>roulette-game-development/"
                            className="product_page_link"
                          />
                          <a className="anim_three">
                            <img
                              alt="Roulette"
                              src="/assets/images/offer_iconTwo.png"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <a
                      href="<?=  $baseurl ?>slot-game-development/"
                      className="product_page_link"
                    ></a>
                    <div className="pro_item">
                      <a
                        href="<?=  $baseurl ?>slot-game-development/"
                        className="product_page_link"
                      ></a>
                      <div className="pro_inner">
                        <a
                          href="<?=  $baseurl ?>slot-game-development/"
                          className="product_page_link"
                        >
                          <div className="overlay_item" />
                          <div className="ofr_title">
                            <p>slot game</p>
                          </div>
                          <img
                            alt="slot game"
                            src="/assets/images/offer_three.png"
                          />
                        </a>
                        <div className="game_icons">
                          <a
                            href="<?=  $baseurl ?>slot-game-development/"
                            className="product_page_link"
                          />
                          <a className="anim_one">
                            <img
                              alt="slot game"
                              src="/assets/images/c_icon_five.png"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <a
                      href="<?=  $baseurl ?>andar-bahar-game-development/"
                      className="product_page_link"
                    ></a>
                    <div className="pro_item">
                      <a
                        href="<?=  $baseurl ?>andar-bahar-game-development/"
                        className="product_page_link"
                      ></a>
                      <div className="pro_inner">
                        <a
                          href="<?=  $baseurl ?>andar-bahar-game-development/"
                          className="product_page_link"
                        >
                          <div className="overlay_item" />
                          <div className="ofr_title">
                            <p>andar bahar</p>
                          </div>
                          <img
                            alt="andar bahar"
                            src="/assets/images/offer_five.png"
                          />
                        </a>
                        <div className="game_icons">
                          <a
                            href="<?=  $baseurl ?>andar-bahar-game-development/"
                            className="product_page_link"
                          />
                          <a className="anim_two">
                            <img
                              alt="andar bahar"
                              src="/assets/images/c_icon_three.png"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <a
                      href="<?=  $baseurl ?>triple-chance-game-development/"
                      className="product_page_link"
                    ></a>
                    <div className="pro_item">
                      <a
                        href="<?=  $baseurl ?>triple-chance-game-development/"
                        className="product_page_link"
                      ></a>
                      <div className="pro_inner">
                        <a
                          href="<?=  $baseurl ?>triple-chance-game-development/"
                          className="product_page_link"
                        >
                          <div className="overlay_item" />
                          <div className="ofr_title">
                            <p>triple chance</p>
                          </div>
                          <img
                            alt="triple chance"
                            src="/assets/images/offer_five.png"
                          />
                        </a>
                        <div className="game_icons">
                          <a
                            href="<?=  $baseurl ?>triple-chance-game-development/"
                            className="product_page_link"
                          />
                          <a className="anim_three">
                            <img
                              alt="triple chance"
                              src="/assets/images/c_icon_six.png"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <a
                      href="<?=  $baseurl ?>bingo-software/"
                      className="product_page_link"
                    ></a>
                    <div className="pro_item">
                      <a
                        href="<?=  $baseurl ?>bingo-software/"
                        className="product_page_link"
                      ></a>
                      <div className="pro_inner">
                        <a
                          href="<?=  $baseurl ?>bingo-software/"
                          className="product_page_link"
                        >
                          <div className="overlay_item" />
                          <div className="ofr_title">
                            <p>bingo game</p>
                          </div>
                          <img
                            alt="bingo game"
                            src="/assets/images/offer_five.png"
                          />
                        </a>
                        <div className="game_icons">
                          <a
                            href="<?=  $baseurl ?>bingo-software/"
                            className="product_page_link"
                          />
                          <a className="anim_one">
                            <img
                              alt="bingo game"
                              src="/assets/images/offer_iconTwo.png"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <a
                      href="<?=  $baseurl ?>keno-game-development/"
                      className="product_page_link"
                    ></a>
                    <div className="pro_item">
                      <a
                        href="<?=  $baseurl ?>keno-game-development/"
                        className="product_page_link"
                      ></a>
                      <div className="pro_inner">
                        <a
                          href="<?=  $baseurl ?>keno-game-development/"
                          className="product_page_link"
                        >
                          <div className="overlay_item" />
                          <div className="ofr_title">
                            <p>keno game</p>
                          </div>
                          <img
                            alt="keno game"
                            src="/assets/images/offer_five.png"
                          />
                        </a>
                        <div className="game_icons">
                          <a
                            href="<?=  $baseurl ?>keno-game-development/"
                            className="product_page_link"
                          />
                          <a className="anim_two">
                            <img
                              alt="keno game"
                              src="/assets/images/c_icon_five.png"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade text-center"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="tb_title position-relative">
                  {" "}
                  <img
                    alt="live dealer icon"
                    src="/assets/images/live_small_icon.png"
                    style={{ width: 30, paddingBottom: 8 }}
                  />{" "}
                  Live Dealer
                </div>
                <p className="nav_content">
                  For live dealers, we offer while label solutions that are
                  built using our advanced gaming technology and are in a
                  ready-to-launch state. Also, our{" "}
                  <a href="<?=  $baseurl ?>live-casino-software/">
                    live dealer
                  </a>{" "}
                  while label solutions are offered with complete customizations
                  as per your choice requirements.
                </p>
                <ul className="item_outer_block d-flex justify-content-center w-100 flex-wrap">
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>AMAYA LOGO</p>
                      <img
                        alt="AMAYA LOGO"
                        src="/assets/images/live_logo_1.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>ARISTOCRAT LOGO</p>
                      <img
                        alt="ARISTOCRAT LOGO"
                        src="/assets/images/live_logo_2.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>BALLY LOGO</p>
                      <img
                        alt="BALLY LOGO"
                        src="/assets/images/live_logo_3.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>BARCREST LOGO</p>
                      <img
                        alt="BARCREST LOGO"
                        src="/assets/images/live_logo_4.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>EVOLUTION LOGO</p>
                      <img
                        alt="EVOLUTION LOGO"
                        src="/assets/images/live_logo_5.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>MARKER LOGO</p>
                      <img
                        alt="MARKER LOGO"
                        src="/assets/images/live_logo_6.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>MICROGAMING LOGO</p>
                      <img
                        alt="MICROGAMING LOGO"
                        src="/assets/images/live_logo_7.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>NETENT LOGO</p>
                      <img
                        alt="NETENT LOGO"
                        src="/assets/images/live_logo_8.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>NEXTGEN LOGO</p>
                      <img
                        alt="NEXTGEN LOGO"
                        src="/assets/images/live_logo_9.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>PLAYTECH LOGO</p>
                      <img
                        alt="PLAYTECH LOGO"
                        src="/assets/images/live_logo_10.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>BETSOFT LOGO</p>
                      <img
                        alt="BETSOFT LOGO"
                        src="/assets/images/live_logo_11.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>AMAYA LOGO</p>
                      <img
                        alt="AMAYA LOGO"
                        src="/assets/images/live_logo_1.png"
                      />
                    </div>
                  </li>
                </ul>
              </div>
              <div
                className="tab-pane fade text-center"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className="tb_title position-relative">
                  {" "}
                  <img
                    alt="sportsbook software icon"
                    src="/assets/images/sportsbook_live_icon.png"
                    style={{ width: 30, paddingBottom: 8 }}
                  />{" "}
                  SportsBook
                </div>
                <p className="nav_content">
                  For sportsbook business operators, Mobzway offers online white
                  label{" "}
                  <a href="<?=  $baseurl ?>casino-software/">casino software</a>{" "}
                  in the read-to-use form for the dedicated mobile, web and
                  desktop devices. As per the requirement, our qualified
                  developers also do rightful customizations.
                </p>
                <ul className="item_outer_block d-flex justify-content-center w-100 flex-wrap">
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>SPORT 1</p>
                      <img
                        alt="SPORT 1"
                        src="/assets/images/sportsbook_logo_1.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>SPORT 2</p>
                      <img
                        alt="SPORT 2"
                        src="/assets/images/sportsbook_logo_2.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>SPORT 3</p>
                      <img
                        alt="SPORT 3"
                        src="/assets/images/sportsbook_logo_3.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>SPORT 4</p>
                      <img
                        alt="SPORT 4"
                        src="/assets/images/sportsbook_logo_4.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>SPORT 5</p>
                      <img
                        alt="SPORT 5"
                        src="/assets/images/sportsbook_logo_5.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>SPORT 6</p>
                      <img
                        alt="SPORT 6"
                        src="/assets/images/sportsbook_logo_6.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>SPORT 7</p>
                      <img
                        alt="SPORT 7"
                        src="/assets/images/sportsbook_logo_7.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>SPORT 8</p>
                      <img
                        alt="SPORT 8"
                        src="/assets/images/sportsbook_logo_8.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>SPORT 9</p>
                      <img
                        alt="SPORT 9"
                        src="/assets/images/sportsbook_logo_9.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>SPORT 10</p>
                      <img
                        alt="SPORT 10"
                        src="/assets/images/sportsbook_logo_10.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>SPORT 11</p>
                      <img
                        alt="SPORT 11"
                        src="/assets/images/sportsbook_logo_11.png"
                      />
                    </div>
                  </li>
                  <li className="white_lebel_casino_li">
                    <div className="pro_item">
                      <p>SPORT 12</p>
                      <img
                        alt="SPORT 12"
                        src="/assets/images/sportsbook_logo_12.png"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
            <span className="black">OF iGAMING SOFTWARE DEVELOPED BY US</span>
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
                  alt="Tournaments"
                  src="/assets/images/whitecasino01.png"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-6">
              <h3>Tournaments</h3>
            </div>
            <div className="col-md-12">
              <p>
                Using our igaming software solution, you can launch your own
                igaming tournaments to engage the players.{" "}
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
                iGaming softwares that we develop have advanced security systems
                that act as a shield and prevent any kind of frauds.
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
                igaming software/apps/websites in multiple languages.
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
                Mobzway’s igaming software solutions offer distinct and most
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
                  src="/assets/images/baccarat09.png"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-6">
              <h3>Rewards &amp; Loyalty</h3>
            </div>
            <div className="col-md-12">
              <p>
                Our rewards and loyalty feature allows igaming businesses to
                launch their dedicated rewards and loyalty campaigns and
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
                  src="/assets/images/baccarat10.png"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-6">
              <h3>Anti Fraud System</h3>
            </div>
            <div className="col-md-12">
              <p>
                To restrict any kind of frauds in the games, our igaming
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
                  src="/assets/images/baccarat11.png"
                />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-6">
              <h3>Responsible Gaming</h3>
            </div>
            <div className="col-md-12">
              <p>
                Our igaming solutions strictly ensure user privacy and data
                safety so that customers can enjoy the games worry-free.
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
                Our igaming solutions are hosted on the world’s most secured
                hosting platforms to keep the hackers away.
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
            <span className="black">IGAMING SOFTWARE SOLUTIONS</span>
          </h2>
        </div>
      </div>
      <div className="row row1">
        <div className="col-md-6 col1">
          <img
            alt="World Class Security"
            src="/assets/images/igaming_sol_1.png"
            className="wow bounceInLeft my-image"
            data-wow-duration="2s"
          />
        </div>
        <div className="col-md-6 col1 wow bounceInUp" data-wow-duration="2s">
          <p className="para-1">
            In today’s arena of online entertainment, the most renowned industry
            is the gaming industry. The gaming industry has been flourishing
            since the late 21st century, just because of pocket gadgets its
            proximity that has been extended to users even to that of remote
            areas. Furthermore, from the gaming industry, emerges a subdivision
            of gaming genre termed as Gaming. Games emerging from Gaming genre
            are entertaining as well as capable to fetch a return from gameplay
            as well as iGaming Software Development. Team of game scientist
            collect data from all possible sources and modulate it into shaping
            catchy and outstanding Gaming games that climb the leaderboard with
            ease and within a very short span.
            <br />
            <br />
            With the increase in the Gaming sector, it’s become tough to hunt
            down a qualified and experienced iGaming Software Provider. The
            market of iGaming houses various developers but only a few of them
            possess the desired skill set that is mandatory to develop a rigid
            and robust Gaming game. With just a few modifications in code and
            graphics changes the genre of game to be developed for optimum
            profit-making.{" "}
            <span className="moretext1">
              Poker game, Casino game,{" "}
              <a href="<?=  $baseurl ?>roulette-game-development/">
                Roulette game
              </a>
              , Blackjack game, Bingo game, Keno game, and Slot game are one of
              the most developed games that are rocking markets of the country
              in the Gaming industry. Mobzway monitors payment portals like
              oxygen wallet, Visa, PayPal, etc.and make sure that all possible
              sources of payment are covered under these payment portals like
              online banking, VISA, Master Card, RuPay, Credit / Debit Cards,
              etc. with 24 x 7 customer support for young entrepreneurs.
              <br />
              <br />
              Mobzway Technologies encompass talented iGaming Software Providers
              that are dedicated toward development phenomenon with zeal and
              keeps application bug free throughout the development procedure,
              favoring stable application. The more stable application would be,
              happier and satisfied game players it would fetch, incorporating
              more and more profits in the hat of investors. Our iGaming
              software provider favors game development over cutting-edge
              technology to distribute the game loads evenly and dynamically.
              With the increase in the audience, the developer keeps updated
              application to get going via multi Quality Analysis Procedures
              such as, Audio – Visual Output testing, monitoring gameplay
              statistics, Core thread optimization, establishing safe and secure
              data to promise end-user refreshing entertainment and game
              entrepreneurs a high-end return. Our team abides by game
              entrepreneurs to transform their business ideas into gaming ideas.
              Mobzway technologies are always there to extend helping hand to
              Game Entrepreneurs.
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
          Have a question regarding igaming software or implementation or
          starting your online gaming business quickly? Get in touch with us and
          we will answer all your queries.
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
            <span className="yellow">Our</span>{" "}
            <span className="black"> IGAMING Software Platforms</span>
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
                    {" "}
                    Get igaming software that is compatible with Mac and Windows
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
                    Windows. Our mobile apps are responsive and can adapt to
                    varied mobile and tablet screen sizes.
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
                    Take your igaming business on the web with our cross-browser
                    and cross-platform compatible igaming softwares. Connect
                    with the web-savvy igaming software lovers right away!
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
            <span className="black">IGAMING SOFTWARE DEVELOPER</span>
            {/*2*/}
          </h2>
        </div>
      </div>
      <div className="row row1">
        <div className="col-md-6 col1 wow bounceInUp" data-wow-duration="2s">
          <p className="hire-para">
            Need a perfect iGaming software solution that comes equipped with
            all the bells and whistles your players and you would expect? It’s
            time to hire iGaming software provider Mobzway and expand your
            business in the iGaming domain. With brilliant minds who know how to
            build the best iGaming solutions that bring business and keep the
            players engaged, we are a trusted iGaming software provider company
            in India, USA &amp; UK.
            <br />
            <br />
            At our gaming studio, we build flexible and customized iGaming
            solutions using advanced gaming technology and also provide business
            consultation to the clients to commence their iGaming business in
            the most successful way. Our highly qualified iGaming developers
            build softwares for desktop (Windows &amp; Mac) and mobile devices
            (native apps for iOS, Android &amp; Windows) and create feature-rich
            iGaming portals that are cross-compatible with all the popular
            browsers. <br />
            <br />
            If you hire iGaming software provider Mobzway, you get benefited
            with services such as end to end design and development of games at
            the committed timelines, access to backend to easily manage the day
            to day business tasks and analyze the growth, and multi-payment
            gateway to allow players to bet conveniently. Added to this, we also
            offer Odds API integration and 3rd party integrations to host
            multiple games. <br />
            <br />
            To target audiences from multiple regions, we also provide gaming
            interfaces in multiple languages. Also, as iGaming Software Provider
            Company our focus is to ensure complete safety and security of the
            players and the business. Hence, our dedicated developers
            incorporate the platform with robust security systems. <br />
            <br />
            For the existing businesses, we offer a choice to hire a dedicated
            iGaming developer to upgrade their existing games and provide
            additional software choices to launch new games. Our experienced
            developers provide a detailed consultation to the client and build
            the best iGaming software solution as per the client’s requirement.
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
            alt="igaming software"
            src="/assets/images/igaming_hire_1.png"
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
                WE DESIGN &amp; DEVELOP BEST IGAMING SOFTWARE?
              </span>
              {/*2*/}
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="how wow bounceInUp" data-wow-duration="2s">
                <h5>
                  1.<span> Pre-Production</span>
                </h5>
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
                <h5>
                  2.<span> Production</span>
                </h5>
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
                <h5>
                  3.<span> Post-Production</span>
                </h5>
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
            alt="igaming software"
            src="/assets/images/Igaming_design.png"
            className="m-left"
          />
        </div>
      </div>
    </div>
  </section>
  {/* our users */}
  <section className="our_users">
    <div className="container">
      {/* <div class="heading_title text-center">
              <h1 class="text-white"><span>OUR</span> USERS ALL OVER WORLD</h1>
          </div> */}
      <div className="col-md-12 text-center">
        <div
          className=""
          data-aos="fade-right"
          data-aos-duration={1500}
          data-aos-once="true"
        >
          <h2 className="sub_title">
            <span className="black_bg_head_yellow">OUR</span>{" "}
            <span className="black_bg_head_white">USERS ALL OVER WORLD</span>
            {/*2*/}
          </h2>
        </div>
      </div>
      <div className="row row1">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-4 col1 text-center">
              <p>50+</p>
              <h3>CUSTOMERS</h3>
            </div>
            <div className="col-md-4 col1 text-center">
              <p>600k+</p>
              <h3>USERS</h3>
            </div>
            <div className="col-md-4 col1 text-center border-0">
              <p>20+</p>
              <h3>COUNTRIES</h3>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  </section>
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
                alt="White Label Poker Software Solution"
                src="/assets/images/choose1.png"
              />
            </div>
            <div className="col-md-6">
              <h4 className="arc">Architecture</h4>
              <p>
                Experience the best of architecture with our igaming software
                that is built using advanced gaming technology.
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
                Our igaming software solution comes with robust security systems
                so that there are zero chances of frauds.
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
            alt="White Label Poker Platform"
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
                    CHOOSE MOBZWAY AS YOUR igaming SOFTWARE DEVELOPMENT COMPANY?
                  </span>
                  {/*2*/}
                </h2>
              </div>
            </div>
            <p>
              If you’re looking for the best igaming software, there are several
              reasons to onboard Mobzway as your igaming solution partner.
              Explore a whole new world of online poker with our dedicated
              igaming solutions.
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
                igaming solutions that we provide can run seamlessly on mobile,
                desktop and web browsers.
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
                Our team brings the best of technology such as HTML 5, C++,
                Python, 3D, etc. to make our white label games much advanced
                than competition.
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
  {/*?php include 'footer.php' ?*/}
</>

  )
}
