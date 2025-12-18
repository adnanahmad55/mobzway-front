"use client";
import "../../public/assets/css/stylebook.css";

import React, { useEffect } from 'react'

// export const metadata = {
//     title: "Work Culture | Opportunity for Growth - Mobzway Technologies",
//     description: "Mobzway have best work environment, a team of open minded and innovative peoples. Work with Mobzway to make your career growth endless.",
//     keywords: "work culture, Opportunity for Innovation, our team",
//     alternates: { canonical: "https://www.mobzway.com/work-culture/" },
//     robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
//     openGraph: {
//         title: "Work Culture | Opportunity for Innovation - Mobzway Technologies",
//         description: "Mobzway have best work environment, a team of open minded and innovative peoples. Work with Mobzway to make your career growth endless.",
//         url: "https://www.mobzway.com/work-culture/",
//         siteName: "Mobzway Technologies",
//         images: [
//             {
//                 url: "https://www.mobzway.com//assets/images/Work-Culture-Banner-Image.jpg",
//                 width: 815,
//                 height: 821,
//                 alt: "work_culture",
//                 type: "image/jpg",
//             },
//         ],
//         locale: "en_US",
//         type: "website",
//         articlePublisher: "https://www.facebook.com/mobzwaygamedevelopment/",
//         updatedTime: "2022-03-22T16:00:38+05:30",
//     },
//     twitter: {
//         card: "summary_large_image",
//         title: "Work Culture | Opportunity for Innovation - Mobzway Technologies",
//         description: "Mobzway have best work environment, a team of open minded and innovative peoples. Work with Mobzway to make your career growth endless.",
//         site: "@mobzway",
//         creator: "@mobzway",
//         images: ["https://www.mobzway.com//assets/images/Work-Culture-Banner-Image.jpg"],
//     },
// };

export default function WorkCulture() {

    function nextPage() {
            document.querySelector(".scene-book")?.classList.remove("scene-book-center", "bookqqq");

            let active = document.querySelector(".activeslide-book");
            if (!active) return;

            active.classList.remove("activeslide-book");
            active.classList.add("flippedslide-book");

            let next = active.nextElementSibling;
            if (next && next.classList.contains("page-book")) {
                next.classList.add("activeslide-book");
            }

            if (document.querySelector(".page-book.flippedslide-book:last-of-type")) {
                document.querySelector(".scene-book")?.classList.add("scene-book-center", "bookqqq");
            }
        }

         function prevPage() {
            document.querySelector(".scene-book")?.classList.remove("scene-book-center", "bookqqq");

            let flipped = document.querySelectorAll(".flippedslide-book");
            if (flipped.length === 0) return;

            let last = flipped[flipped.length - 1];
            last.classList.remove("flippedslide-book");
            last.classList.add("activeslide-book");

            if (document.querySelector(".page-book.activeslide-book:first-of-type")) {
                document.querySelector(".scene-book")?.classList.add("scene-book-center");
            }
        }

    useEffect(() => {
        const bookslide = document.querySelector(".bookslide");

        if (!bookslide) return;

        

       

        // Click Events
        bookslide.addEventListener("click", (e) => {
            if (e.target.closest(".activeslide-book")) nextPage();
            if (e.target.closest(".flippedslide-book")) prevPage();
        });

        // Swipe Handler (Mobile ke liye)
        let startX = 0;
        bookslide.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX));

        bookslide.addEventListener("touchend", (e) => {
            let endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) nextPage();      // Swipe Left
            if (endX - startX > 50) prevPage();      // Swipe Right
        });
    }, []);

    return (
        <>
            {/*?php include 'header.php' ?*/}
            <link
                rel="stylesheet"
                type="text/css"
                href="<?=  $baseurl ?>/assets/css/stylebook.css"
            />
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    @media (min-width:992px) {\n        .wel_come_container {\n  margin-top: 60px;\n}\n.team-image {\n  height: 480px;\n  overflow-y: scroll;\n}\n.team-image::-webkit-scrollbar {\n    display: none;\n}\n\n/* Hide scrollbar for IE, Edge and Firefox */\n.team-image {\n  -ms-overflow-style: none;  /* IE and Edge */\n  scrollbar-width: none;  /* Firefox */\n}\n.team-image .col-md-3.mb-4 {\n  padding: 3px;\n  margin-bottom: 0 !important;\n}\n    }\n    .downArrow.contact_btn {\n  font-size: 22px;\n  padding: 10px 35px;\n}\n.downArrow.contact_btn::before {\n  background: #000;\n}\n.downArrow.contact_btn:hover {\n  color: #fff !important;\n}\n\n"
                }}
            />
            {/* Banner */}
            <div className="workculture-Section">
                <section
                    alt="Work culture"
                    className="banner pokers position-relative banner-work"
                    style={{
                        backgroundImage:
                            'url("/assets/images/Work-Culture-Banner-Image-1.png")'
                    }}
                >
                    <div className="overlay" style={{ background: "rgba(0, 0, 0, 0.4)" }} />
                    <div className="wel_come_container">
                        <h1 className="welcome_text career_banner_text work-text">
                            work culture
                        </h1>
                        <p className="sml_text ">
                            At Mobzway, we believe in a pleasant work culture that shares a true
                            bonding among the teammates. Throughout the hierarchies, we have a
                            workforce that combines fun and dedication perfectly and brings alive
                            an atmosphere where people would actually love to work.
                        </p>
                    </div>
                </section>
                {/* Join Us Section */}
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
                                        <span className="yellow">Why Join </span>
                                        <span className="black">Us?</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="tabos_outer">
                                    <nav>
                                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <a
                                                className="nav-item nav-link active"
                                                id="nav-home-tab"
                                                data-toggle="tab"
                                                href="#nav-home"
                                                role="tab"
                                                aria-controls="nav-home"
                                                aria-selected="true"
                                            >
                                                VISION
                                            </a>
                                            <a
                                                className="nav-item nav-link"
                                                id="nav-profile-tab"
                                                data-toggle="tab"
                                                href="#nav-profile"
                                                role="tab"
                                                aria-controls="nav-profile"
                                                aria-selected="false"
                                            >
                                                VALUES
                                            </a>
                                            <a
                                                className="nav-item nav-link prac"
                                                id="nav-contact-tab"
                                                data-toggle="tab"
                                                href="#nav-contact"
                                                role="tab"
                                                aria-controls="nav-contact"
                                                aria-selected="false"
                                            >
                                                PRACTICE
                                            </a>
                                            <a
                                                className="nav-item nav-link"
                                                id="nav-profile-tab"
                                                data-toggle="tab"
                                                href="#nav-profileOne"
                                                role="tab"
                                                aria-controls="nav-profile"
                                                aria-selected="false"
                                            >
                                                PEOPLE
                                            </a>
                                            <a
                                                className="nav-item nav-link"
                                                id="nav-contact-tab"
                                                data-toggle="tab"
                                                href="#nav-contactTwo"
                                                role="tab"
                                                aria-controls="nav-contact"
                                                aria-selected="false"
                                            >
                                                PLACE
                                            </a>
                                        </div>
                                    </nav>
                                    <div
                                        className="tab-content"
                                        id="nav-tabContent"
                                        style={{
                                            background: "#fff",
                                            boxShadow:
                                                "0 2px 2px rgb(0 0 0 / 10%), 0 4px 4px rgb(0 0 0 / 10%), 0 6px 6px rgb(0 0 0 / 10%), 0 8px 8px rgb(0 0 0 / 10%)"
                                        }}
                                    >
                                        <div
                                            className="tab-pane fade show active text-center"
                                            id="nav-home"
                                            role="tabpanel"
                                            aria-labelledby="nav-home-tab"
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p className="nav_content">
                                                        Our vision is to exponentially grow together with our
                                                        clientele in the game development domain by utilizing
                                                        our most innovative and cutting-edge technology and
                                                        expertise. We look forward to bringing newer
                                                        technologies in the gaming space that keeps on making a
                                                        striking impact on the end consumers, the players. By
                                                        working with a talented workforce, we aim to cater to
                                                        the needs of budding entrepreneurs and ventures in the
                                                        gaming industry. At Mobzway, we want to create abundant
                                                        business opportunities for our clients as we know that
                                                        it also leads to our individual progress.
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <ul className="item_outer_block d-flex justify-content-center w-100 flex-wrap">
                                                        <li>
                                                            <center>
                                                                <img
                                                                    className="vis"
                                                                    alt="Vision"
                                                                    src="/assets/images/join_img.jpg"
                                                                />
                                                            </center>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade text-center"
                                            id="nav-profile"
                                            role="tabpanel"
                                            aria-labelledby="nav-contact-tab"
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p className="nav_content">
                                                        To progress along with our fellow teammates and achieve
                                                        the business goals together, we ensure that values at
                                                        Mobzway are abided and stand as a key base. We believe
                                                        that to deliver excellent customer service, foster
                                                        innovation and build great teams, our values become our
                                                        core strength. Our values are indeed our company’s DNA.
                                                        At Mobzway, we preach integrity, boldness, honesty,
                                                        trustworthiness, accountability, learning, leadership,
                                                        teamwork, innovation, quality, balance, employee
                                                        development, fun and most importantly customer
                                                        experience. We believe that if these values lie in our
                                                        DNA, we approach right and do things in the most
                                                        productive and efficient manner.
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <ul className="item_outer_block d-flex justify-content-center w-100 flex-wrap">
                                                        <li>
                                                            <img
                                                                className="vis"
                                                                alt="Values"
                                                                src="/assets/images/work_culture_value.jpg"
                                                            />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade text-center"
                                            id="nav-contact"
                                            role="tabpanel"
                                            aria-labelledby="nav-profile-tab"
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p className="nav_content">
                                                        For the fellow teammates who look forward to shining in
                                                        the game development industry, we provide abundant
                                                        opportunities to help them improve their skills and be
                                                        more efficient. We believe that an employee that has
                                                        great potential and looks forward to proving himself
                                                        should be given the right opportunities to practice and
                                                        improve his skills. And hence, we think that when such
                                                        potential teammates work with our game development
                                                        veterans, they get great exposure and learning
                                                        opportunities. Also, our environment is such that
                                                        numerous learning opportunities are created for our
                                                        staff, which aids in their individual growth.
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <ul className="item_outer_block d-flex justify-content-center w-100 flex-wrap">
                                                        <li>
                                                            <img
                                                                className="vis"
                                                                alt="Practice"
                                                                src="/assets/images/work_culture_practice.jpg"
                                                            />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade text-center"
                                            id="nav-profileOne"
                                            role="tabpanel"
                                            aria-labelledby="nav-profile-tab"
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p className="nav_content">
                                                        When you have brilliant minds around you, the pleasure
                                                        of working in an organization is doubled. Mobzway gives
                                                        you an opportunity to work with some exceptional
                                                        personalities in the game development domain so that you
                                                        can learn, earn and grow as an individual. You get to
                                                        work with highly skilled and experienced developers,
                                                        designers and the rest of the creative teams and learn
                                                        from them the art of building the high quality and
                                                        engaging games. So, if you’re geared up for an exposure
                                                        to working with likeminded people in the gaming
                                                        industry, Mobzway is the perfect place for you.
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <ul className="item_outer_block d-flex justify-content-center w-100 flex-wrap">
                                                        <li>
                                                            <img
                                                                className="vis"
                                                                alt="People"
                                                                src="/assets/images/work_culture_people.jpg"
                                                            />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="tab-pane fade text-center"
                                            id="nav-contactTwo"
                                            role="tabpanel"
                                            aria-labelledby="nav-contact-tab"
                                        >
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <p className="nav_content">
                                                        We understand that to work comfortably, you need a
                                                        really caring and comfortable environment. Therefore, at
                                                        Mobzway, we have made things so comfy for you that you
                                                        feel like being at home always. Our work premises offer
                                                        the utter convenience to the employees so that they can
                                                        bring more creativity and innovation while building
                                                        games. For our whole workforce, we have highly
                                                        productive spaces so that chaos is never born and
                                                        productivity always exists. So, if you’ve right talent
                                                        and want to work for a company that is more like a home
                                                        to you, all you need is Mobzway!
                                                    </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <ul className="item_outer_block d-flex justify-content-center w-100 flex-wrap">
                                                        <li>
                                                            <img
                                                                className="vis"
                                                                alt="Place"
                                                                src="/assets/images/work_culture_place.jpg"
                                                            />
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*diwali*/}
                {/* <section class="Blogs">
  <div class="container-fliud">
<div class="row">
         <div class="col-md-12 col-sm-12 text-center">
              <div class="sub_title_outer diw-hed" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
 <h2 class="sub_title diw"><span class="yellow">#DiwaliLife</span> <span class="black">AtMobzway</span></h2>
              </div>
          </div>
				
			<div class="slick-wrapper"style="margin:auto;">
  <div id="slick1">
  
		<div class="slide-item lft1"><h3><img alt="Team 1" src="/assets/images/001.jpg"></h3></div>
  		<div class="slide-item lft"><h3><img alt="Team 1" src="/assets/images/002.jpg"></h3></div>
						<div class="slide-item lft3"><h3><img alt="Team 1" src="/assets/images/003.jpg"></h3></div>
								<div class="slide-item lft4"><h3><img alt="Team 1" src="/assets/images/004.jpg"></h3></div>
										<div class="slide-item lft5"><h3><img alt="Team 1" src="/assets/images/005.jpg"></h3></div>
												<div class="slide-item lft6"><h3><img alt="Team 1" src="/assets/images/006.jpg"></h3></div>
														<div class="slide-item lft7"><h3><img alt="Team 1" src="/assets/images/007.jpg"></h3></div>
																<div class="slide-item lft8 "><h3><img alt="Team 1" src="/assets/images/008.jpg"></h3></div>

	</div>
</div>	
				

  </div>          
  </div>
    </section> */}
                {/*  office work gallery */}
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div
                                    className="sub_title_outer"
                                    style={{ paddingBottom: 0 }}
                                    data-aos="fade-right"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <h2
                                        className="sub_title"
                                        style={{ display: "flex", justifyContent: "center" }}
                                    >
                                        <span className="yellow">MOB</span>{" "}
                                        <span className="black">ZINE</span>
                                    </h2>
                                    <div className="sub_head text-center">
                                        <a href="#mobZine" className="downArrow contact_btn">
                                            Click here
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="scene-book scene-book-center"
                            style={{ marginTop: 20, marginBottom: 0 }}
                        >
                            <div className="bookslide" id="mobZine">
                                <div className="page-book activeslide-book">
                                    <div className="front-book">
                                        <img src="/assets/images/mobzine-1.avif" />
                                    </div>
                                    <div className="back-book">
                                        <img src="/assets/images/mobzine-2.avif" />
                                    </div>
                                </div>
                                <div className="page-book">
                                    <div className="front-book">
                                        <img src="/assets/images/mobzine-3.avif" />
                                    </div>
                                    <div className="back-book">
                                        <img src="/assets/images/mobzine-4.avif" />
                                    </div>
                                </div>
                                <div className="page-book">
                                    <div className="front-book">
                                        <img src="/assets/images/mobzine-5.avif" />
                                    </div>
                                    <div className="back-book">
                                        <img src="/assets/images/mobzine-6.avif" />
                                    </div>
                                </div>
                                <div className="page-book">
                                    <div className="front-book">
                                        <img src="/assets/images/mobzine-7.avif" />
                                    </div>
                                    <div className="back-book">
                                        <img src="/assets/images/mobzine-8.avif" />
                                    </div>
                                </div>
                                <div className="page-book">
                                    <div className="front-book">
                                        <img src="/assets/images/mobzine-9.avif" />
                                    </div>
                                    <div className="back-book">
                                        <img src="/assets/images/mobzine-10.avif" />
                                    </div>
                                </div>
                                <div className="page-book">
                                    <div className="front-book">
                                        <img src="/assets/images/mobzine-11.avif" />
                                    </div>
                                    <div className="back-book">
                                        <img src="/assets/images/mobzine-12.avif" />
                                    </div>
                                </div>
                                <div className="page-book">
                                    <div className="front-book">
                                        <img src="/assets/images/mobzine-13.avif" />
                                    </div>
                                    <div className="back-book">
                                        <img src="/assets/images/mobzine-14.avif" />
                                    </div>
                                </div>
                                <div className="page-book">
                                    <div className="front-book">
                                        <img src="/assets/images/mobzine-15.avif" />
                                    </div>
                                    <div className="back-book">
                                        <img src="/assets/images/mobzine-16.avif" />
                                    </div>
                                </div>
                                <div className="page-book">
                                    <div className="front-book">
                                        <img src="/assets/images/mobzine-17.avif" />
                                    </div>
                                    <div className="back-book">
                                        <img src="/assets/images/mobzine-18.avif" />
                                    </div>
                                </div>
                            </div>
                            <button className="slide-btn slide-btn-prev" onClick={prevPage} />
                            <button className="slide-btn" onClick={nextPage} />
                        </div>
                    </div>
                </section>
                <section className="Blogs">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div
                                    className="sub_title_outer"
                                    data-aos="fade-right"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <h2 className="sub_title">
                                        <span className="yellow">Life </span>{" "}
                                        <span className="black">@ Mobzway</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="row text-center align-items-center team-image">
                                {/* <div class="col-md-3 mb-4"><img alt="Team 1" src="/assets/images/009.png"></div> */}
                                <div className="col-md-3 mb-4">
                                    <img alt="Team 1" src="/assets/images/0010.png" />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img alt="Team 1" src="/assets/images/0011.png" />
                                </div>
                                {/* <div class="col-md-3 mb-4"><img alt="Team 1" src="/assets/images/0012.png"></div> */}
                                <div className="col-md-3 mb-4">
                                    <img alt="Team 1" src="/assets/images/0013.png" />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img alt="Team 1" src="/assets/images/0014.png" />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-01.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-02.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-03.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-04.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-05.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-06.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-07.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-08.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-09.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-010.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-011.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-012.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-013.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-014.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-015.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-016.png"
                                    />
                                </div>
                                {/* <div class="col-md-3 mb-4"><img alt="Team 1" src="/assets/images/team-017.png"></div> */}
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-018.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-019.png"
                                    />
                                </div>
                                {/* <div class="col-md-3 mb-4"><img alt="Team 1" src="/assets/images/team-020.png"></div>
    <div class="col-md-3 mb-4"><img alt="Team 1" src="/assets/images/team-021.png"></div>
    <div class="col-md-3 mb-4"><img alt="Team 1" src="/assets/images/team-022.png"></div>
    <div class="col-md-3 mb-4"><img alt="Team 1" src="/assets/images/team-023.png"></div> */}
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-024.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-025.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-026.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-027.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-028.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-029.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-030.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-031.png"
                                    />
                                </div>
                                {/* <div class="col-md-3 mb-4"><img alt="Team 1" src="/assets/images/team-032.png"></div>
    <div class="col-md-3 mb-4"><img alt="Team 1" src="/assets/images/team-033.png"></div> */}
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-034.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-035.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-036.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-037.png"
                                    />
                                </div>
                                {/* <div class="col-md-3 mb-4"><img alt="Team 1" src="/assets/images/team-038.png"></div>
    <div class="col-md-3 mb-4"><img alt="Team 1" src="/assets/images/team-039.png"></div> */}
                                {/* <div class="col-md-3 mb-4"><img alt="Team 1" src="/assets/images/team-040.png"></div>
    <div class="col-md-3 mb-4"><img alt="Team 1" src="/assets/images/team-041.png"></div> */}
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-042.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-043.png"
                                    />
                                </div>
                                {/* <div class="col-md-3 mb-4"><img alt="Team 1" src="/assets/images/team-044.png"></div> */}
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-045.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-046.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-047.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-048.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-049.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-050.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-051.png"
                                    />
                                </div>
                                {/* <div class="col-md-3 mb-4"><img alt="Team 1" src="/assets/images/team-052.png"></div>
    <div class="col-md-3 mb-4"><img alt="Team 1" src="/assets/images/team-053.png"></div>
    <div class="col-md-3 mb-4"><img alt="Team 1" src="/assets/images/team-054.png"></div> */}
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-055.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-056.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-057.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-058.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/team-059.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/work-culture-gallery-img10.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/work-culture-gallery-img7.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/work-culture-gallery-img6.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/work-culture-gallery-img3.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/work-culture-gallery-img1.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/work-culture-gallery-img9.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/work-culture-gallery-img8.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/work-culture-gallery-img2.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/work-culture-gallery-img5.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img
                                        alt="Team 1"
                                        src="/assets/images/work-culture-gallery-img4.png"
                                    />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img alt="Team 1" src="/assets/images/001.jpg" />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img alt="Team 1" src="/assets/images/002.jpg" />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img alt="Team 1" src="/assets/images/003.jpg" />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img alt="Team 1" src="/assets/images/004.jpg" />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img alt="Team 1" src="/assets/images/005.jpg" />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img alt="Team 1" src="/assets/images/006.jpg" />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img alt="Team 1" src="/assets/images/007.jpg" />
                                </div>
                                <div className="col-md-3 mb-4">
                                    <img alt="Team 1" src="/assets/images/008.jpg" />
                                </div>
                            </div>
                            <div className="row justify-content-center w-100 mt-4 team-viewmore">
                                <div className="text-center">
                                    <a
                                        href="https://www.instagram.com/lifeatmobzway/"
                                        className="contact_btn"
                                        target="_blank"
                                    >
                                        View More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section class="Blogs">
  <div class="container-fluid">
      <div class="row">
          <div class="col-md-12 text-center">
              <div class="sub_title_outer" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
 <h2 class="sub_title"><span class="yellow">Life </span> <span class="black">@ Mobzway</span></h2>
              </div>
          </div>
				<div class="col-md-12 text-center">
<div class="owl-carousel owl-theme">
    <div class="item"><img alt="Team 1" src="/assets/images/work-culture-gallery-img10.png"></div>
    <div class="item"><img alt="Team 1" src="/assets/images/work-culture-gallery-img7.png"></div>
    <div class="item"><img alt="Team 1" src="/assets/images/work-culture-gallery-img6.png"></div>
    <div class="item"><img alt="Team 1" src="/assets/images/work-culture-gallery-img3.png"></div>
    <div class="item"><img alt="Team 1" src="/assets/images/work-culture-gallery-img1.png"></div>
    <div class="item"><img alt="Team 1" src="/assets/images/work-culture-gallery-img9.png"></div>
    <div class="item"><img alt="Team 1" src="/assets/images/work-culture-gallery-img8.png"></div>
    <div class="item"><img alt="Team 1" src="/assets/images/work-culture-gallery-img2.png"></div>
    <div class="item"><img alt="Team 1" src="/assets/images/work-culture-gallery-img5.png"></div>
	<div class="item"><img alt="Team 1" src="/assets/images/work-culture-gallery-img4.png"></div>
    <div class="item"><img alt="Team 1" src="/assets/images/001.jpg"></div>
    <div class="item"><img alt="Team 1" src="/assets/images/002.jpg"></div>
    <div class="item"><img alt="Team 1" src="/assets/images/003.jpg"></div>
    <div class="item"><img alt="Team 1" src="/assets/images/004.jpg"></div>
    <div class="item"><img alt="Team 1" src="/assets/images/005.jpg"></div>
    <div class="item"><img alt="Team 1" src="/assets/images/006.jpg"></div>
    <div class="item"><img alt="Team 1" src="/assets/images/007.jpg"></div>
    <div class="item"><img alt="Team 1" src="/assets/images/008.jpg"></div>

</div>

</div>
</div>
</div>
</section> */}
                {/* Get in touch */}
                <section
                    className="how_we_canhelp"
                    style={{
                        backgroundImage:
                            'url("/assets/images/free_asked_bg.png")'
                    }}
                >
                    <div className="overlay_help" />
                    <div className="container">
                        <div className="row justify-content-center">
                            {/* <div class="col-md-12 text-center">
              <div class="aos-init aos-animate" data-aos="fade-right" data-aos-duration="1500" data-aos-once="true">
                  <h2 class="sub_title"><span class="yellow">get </span> <span class="black"> in touch</span></h2>
              </div>
          </div> */}
                            <div className="col-md-8 text-center">
                                <div
                                    className="help_cotnent text-center"
                                    style={{ paddingBottom: 30, paddingTop: 50, fontSize: 24 }}
                                >
                                    Searching for a company to utilize your best of talent in the game
                                    development domain? Join Mobzway!
                                </div>
                                <div className="btn_outer">
                                    <a
                                        href="<?=  $baseurl ?>careers/"
                                        className="contact_btn"
                                        style={{ borderRadius: 25 }}
                                    >
                                        Join Our Team
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/*?php include 'footer.php' ?*/}
        </>

    )
}
