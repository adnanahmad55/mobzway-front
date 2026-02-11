

import Link from 'next/link';
import Script from 'next/script';
import React from 'react'
import ClientScript from './ClientScript';


export const metadata = {
    title: "Our Games | Mobzway Technologies LLP",
    description:
        "Discover Mobzway’s complete portfolio of online games—Poker, Rummy, Teen Patti, Casino, Ludo, Slot Games and more—designed for high performance and scalability.",
    alternates: {
        canonical: "https://www.mobzway.com/our-games/",
    },
};

export default function OurGames() {


    return (
        <>

            <style>{`
        .desktopversion .imgminheight {
    margin-top: 10px;
    min-height: 150px;
}

.desktopversion .imgminheight img {
    width: 140px;
}

.skill-games-items {
    border: 1px solid #fcd10a;
}

.skill-games-items *,
.skill-games-items {
    transition: all .4s linear;
}

.skill-games-items:hover {
    background: #fcd10a !important;
}

.skill-games-items:hover img {
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);
}

.rng_game_item {
    box-shadow: 0 .5rem 1rem #00000026;
    border-radius: 19px;
    cursor: pointer;
}

.rng_game_item img {
    border-radius: 19px;
}

.rng-game-text {
    padding: 15px;
    font-size: 18px !important;
    font-weight: 600;
}

.rng-game-icon::after {
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    position: absolute;
    visibility: hidden;
    border-radius: 17px;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all .5s ease 0s;
}

.header-shrink {
    box-shadow: 0 0 10px #000;
    background-color: #202020;
}

.rng_games_block .col-lg-4.mb-4 {
    margin-bottom: 30px !important;
}

.game_info,
.try_demo_link {
    background: rgb(0, 0, 0);
    border: 1px solid;
    border-color: #000;
    font-size: 14px;
    border-radius: 25px;
    color: #fff;
    padding: 5px 8px;
    min-width: 85px;
    text-align: center;
    transition: all .4s linear;
    opacity: 0;
}

.rng_game_item .game_info,
.rng-game-icon:hover .try_demo_link {
    opacity: 1;
}

.game_info:hover {
    background: transparent;
    color: #000;
}

.try_demo_link {
    background: #fcd10a;
    border-color: #fcd10a !important;
    color: #000 !important;
    box-shadow: 0 0px 10px #000;
}


.try_demo_link {
    position: absolute;
    right: 15px;
    top: 15px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 10px;
}

.try_demo_link svg {
    fill: #000;
    width: 7px;
    margin-left: 3px;
    margin-top: 2px;
}

.try_demo_link:hover svg {
    fill: #000;
}

.skill-games-contact {
    display: block !important;
}

.skill-games-contact-none {
    display: none !important;
}

@media (max-width: 767px) {

    .skill-games-contact-none-mb,
    .skill-games-contact {
        display: none !important;
    }

    .skill-games-contact-mb {
        display: block !important;
    }

}
      `}</style>


            {/*?php include 'header.php' ?*/}
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '\n.desktopversion .imgminheight {\n    margin-top: 10px;\n    min-height: 150px;\n}\n\n.desktopversion .imgminheight img {\n    width: 140px;\n}\n\n.skill-games-items {\n    border: 1px solid #fcd10a;\n}\n\n.skill-games-items *,\n.skill-games-items {\n    transition: all .4s linear;\n}\n\n.skill-games-items:hover {\n    background: #fcd10a !important;\n}\n\n.skill-games-items:hover img {\n    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15);\n}\n\n.rng_game_item {\n    box-shadow: 0 .5rem 1rem #00000026;\n    border-radius: 19px;\n    cursor: pointer;\n}\n\n.rng_game_item img {\n    border-radius: 19px;\n}\n\n.rng-game-text {\n    padding: 15px;\n    font-size: 18px !important;\n    font-weight: 600;\n}\n\n.rng-game-icon::after {\n    content: "";\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, .3);\n    position: absolute;\n    visibility: hidden;\n    border-radius: 17px;\n    top: 0;\n    left: 0;\n    opacity: 0;\n    transition: all .5s ease 0s;\n}\n\n/* .rng_game_item:hover .rng-game-icon::after {\n  visibility: visible;\n  opacity: 1;\n} */\n.header-shrink {\n    box-shadow: 0 0 10px #000;\n    background-color: #202020;\n}\n\n.rng_games_block .col-lg-4.mb-4 {\n    margin-bottom: 30px !important;\n}\n\n.game_info,\n.try_demo_link {\n    background: rgb(0, 0, 0);\n    border: 1px solid;\n    border-color: #000;\n    font-size: 14px;\n    border-radius: 25px;\n    color: #fff;\n    padding: 5px 8px;\n    min-width: 85px;\n    text-align: center;\n    transition: all .4s linear;\n    opacity: 0;\n}\n\n.rng_game_item .game_info,\n.rng-game-icon:hover .try_demo_link {\n    opacity: 1;\n}\n\n.game_info:hover {\n    background: transparent;\n    color: #000;\n}\n\n.try_demo_link {\n    background: #fcd10a;\n    border-color: #fcd10a !important;\n    color: #000 !important;\n    box-shadow: 0 0px 10px #000;\n}\n\n\n.try_demo_link {\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    text-transform: uppercase;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 4px 10px;\n}\n\n.try_demo_link svg {\n    fill: #000;\n    width: 7px;\n    margin-left: 3px;\n    margin-top: 2px;\n}\n\n.try_demo_link:hover svg {\n    fill: #000;\n}\n\n.skill-games-contact {\n    display: block !important;\n}\n\n.skill-games-contact-none {\n    display: none !important;\n}\n\n@media (max-width: 767px) {\n\n    .skill-games-contact-none-mb,\n    .skill-games-contact {\n        display: none !important;\n    }\n\n    .skill-games-contact-mb {\n        display: block !important;\n    }\n\n}\n'
                }}
            />
            {/* Skills Games */}

            <ClientScript />

            <section
                className="pb-5 pt-5 mt-5"
                style={{
                    backgroundImage: 'url("/assets/images/comman_bg.png")'
                }}
            >
                <div className="container">
                    {/* <div class="row">
      <div class="col-md-12 text-center">
          <div class="sub_title_outer" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
              <h2 class="sub_title"><span class="yellow">Poker</span> <span class="black">& Skill Games</span></h2>
          </div>
      </div>
      <div class="col-md-12 col1 wow" data-wow-duration="1s">
          <p class="hire-para col-md-12 para-plateform text-center pb-4"> Responsive HTML5, optimized for mobile use. Advanced P2P games. </p>
      </div>
      <div class="col-lg-4 col-md-4 mt-4">
          <div class="w-100 bg-white rounded shadow p-4 skill-games-items">
              <img class="w-100 rounded" src="<?=  $baseurl ?>/assets/images/skill-games/poker-gameplay.webp" />
              <h2 class="title_pltfm text-left p-0 pt-3">Poker</h2>
          </div>
      </div>
      <div class="col-lg-4 col-md-4 mt-4">
          <div class="w-100 bg-white rounded shadow p-4 skill-games-items">
              <img class="w-100 rounded" src="<?=  $baseurl ?>/assets/images/skill-games/rummy-gameplay.webp" />
              <h2 class="title_pltfm text-left p-0 pt-3">Rummy</h2>
          </div>
      </div>
      <div class="col-lg-4 col-md-4 mt-4">
          <div class="w-100 bg-white rounded shadow p-4 skill-games-items">
              <img class="w-100 rounded" src="<?=  $baseurl ?>/assets/images/skill-games/ludo-gameplay.webp" />
              <h2 class="title_pltfm text-left p-0 pt-3">Ludo</h2>
          </div>
      </div>
      <div class="col-lg-4 col-md-4 mt-4">
          <div class="w-100 bg-white rounded shadow p-4 skill-games-items">
              <img class="w-100 rounded" src="<?=  $baseurl ?>/assets/images/skill-games/snake-ladder.webp" />
              <h2 class="title_pltfm text-left p-0 pt-3">Snake n Ladder</h2>
          </div>
      </div>
      <div class="col-lg-4 col-md-4 mt-4">
          <div class="w-100 bg-white rounded shadow p-4 skill-games-items">
              <img class="w-100 rounded" src="<?=  $baseurl ?>/assets/images/skill-games/call-break-gameplay.webp" />
              <h2 class="title_pltfm text-left p-0 pt-3">Call Break</h2>
          </div>
      </div>
      <div class="col-lg-4 col-md-4 mt-4">
          <div class="w-100 bg-white rounded shadow p-4 skill-games-items">
              <img class="w-100 rounded" src="<?=  $baseurl ?>/assets/images/skill-games/tambola_gameplay.webp" />
              <h2 class="title_pltfm text-left p-0 pt-3">Tambola</h2>
          </div>
      </div>
      
  </div> */}
                    {/* Skill Games */}
                    <div className="row rng_games_block">
                        <div className="col-md-12 text-center">
                            <div
                                className="sub_title_outer"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">Skill</span>{" "}
                                    <span className="black">Games</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12 col1 wow mb-4" data-wow-duration="1s">
                            <p className="hire-para col-md-12 para-plateform text-center pb-4">
                                {" "}
                                Responsive HTML5, optimized for mobile use. Advanced P2P games.{" "}
                            </p>
                        </div>
                        <div
                            className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block"
                            data-url="https://mobzway.com/thank-you/#poker-game"
                        >
                            <div className="w-100 bg-white overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                        id="poker_game_form"
                                        className="try_demo_link"
                                    >
                                        <span>
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <img
                                        className="w-100"
                                        src="/assets/images/skill-games/poker-gameplay.webp"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    />
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Poker{" "}
                                    <Link href="/poker-software/" className="game_info">
                                        Game Info
                                    </Link>
                                </h3>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block"
                            data-url="https://mobzway.com/thank-you/#rummy-game"
                        >
                            <div className="w-100 bg-white overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                        className="try_demo_link"
                                    >
                                        <span>
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <img
                                        className="w-100"
                                        src="/assets/images/skill-games/rummy-gameplay.webp"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    />
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Rummy{" "}
                                    <Link href="/rummy-software/" className="game_info">
                                        Game Info
                                    </Link>
                                </h3>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block"
                            data-url="https://mobzway.com/thank-you/#ludo-game"
                        >
                            <div className="w-100 bg-white overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        className="try_demo_link"
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span>
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                    </a>
                                    <img
                                        className="w-100"
                                        src="/assets/images/skill-games/ludo-gameplay.webp"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    />
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Ludo{" "}
                                    <a
                                        href="<?=  $baseurl ?>ludo-game-development/"
                                        className="game_info"
                                    >
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 bg-white overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/snake-ladder.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Snake n Ladder{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 bg-white overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/call-break-gameplay.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Call Break{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 bg-white overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/tambola_gameplay.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Tambola{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* RNG Games */}
            <section className="pb-5">
                <div className="container">
                    <h2 className="sub_title pb-4" style={{ textAlign: "center" }}>
                        <span className="yellow">RNG</span> <span className="black">Games</span>
                    </h2>
                    <div className="row rng_games_block">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/teen-patti.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Teen Patti{" "}
                                    <a
                                        href="<?=  $baseurl ?>teen-patti-software/"
                                        className="game_info"
                                    >
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/dragon-tiger.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Dragon Tiger{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/baccarat.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Baccarat{" "}
                                    <a
                                        href="<?=  $baseurl ?>baccarat-game-development/"
                                        className="game_info"
                                    >
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/black-jack.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Black Jack{" "}
                                    <a
                                        href="<?=  $baseurl ?>blackjack-game-development/"
                                        className="game_info"
                                    >
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/AmericanRoulette.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    American Roulette{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/european-roulette.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    European Roulette{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/color-prediction.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Color Prediction{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/crash.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Crash{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/wingo.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Wingo{" "}
                                    <Link href="/bingo-software/" className="game_info">
                                        Game Info
                                    </Link>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/crazy-win.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Crazy Win{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/jhandi-munda.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Jhandi Munda{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/single-chance.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Single Chance{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/fortune-wheel.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Fortune Wheel{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/car-roulette.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Car Roulette{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/mines.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Mines{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/andar-bahar.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Andar Bahar{" "}
                                    <a
                                        href="<?=  $baseurl ?>andar-bahar-game-development/"
                                        className="game_info"
                                    >
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/7up-down.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    7 Up Down{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/captain-wheel.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Captain Wheel{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/lucky-war.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Lucky War{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/32cards.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    32 Cards{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/amar-akbar-anthony.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Amar Akbar Anthony{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6 col-12 mb-4 skill_btn_block">
                            <div className="w-100 overflow-hidden position-relative rng_game_item">
                                <div className="rng-game-icon w-100 position-relative">
                                    <a
                                        href="javascript:void(0);"
                                        data-toggle="modal"
                                        data-target="#chatQoute"
                                    >
                                        <span className="try_demo_link">
                                            Try Demo{" "}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                                            </svg>
                                        </span>
                                        <img
                                            className="w-100"
                                            src="/assets/images/skill-games/rnggame/cowboy-beauty.webp"
                                        />
                                    </a>
                                </div>
                                <h3 className="rng-game-text d-flex align-items-center justify-content-between">
                                    Cowboy Beauty{" "}
                                    <a href="#" className="game_info">
                                        Game Info
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Start your business journey with Mobzway */}
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
                            id="ludogamedevTrydemo"
                            className="contact_btn"
                            data-toggle="modal"
                            data-target="#requestQoute"
                        >
                            Try Demo
                        </a>
                    </div>
                </div>
            </section>
            {/*?php include 'footer.php' ?*/}
        </>

    )
}
