import React from 'react'


export const metadata = {
    title: "About Us - Mobzway Technologies LLP",
    description: "We offer all sorts of the readymade, fully customized and on-demand solutions for poker, casino, rummy, 3 patti and ludo games.",
    keywords: "About Us, About Mobzway",
    alternates: { canonical: "https://www.mobzway.com/about-us/" },
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    openGraph: {
        title: "About Us - Mobzway Technologies LLP",
        description: "We offer all sorts of the readymade, fully customized and on-demand solutions for poker, casino, rummy, 3 patti and ludo games.",
        url: "https://www.mobzway.com/about-us/",
        siteName: "Mobzway Technologies",
        images: [
            {
                url: "https://www.mobzway.com//assets/images/about_banner.jpg",
                width: 815,
                height: 821,
                alt: "about_us",
                type: "image/jpg",
            },
        ],
        locale: "en_US",
        type: "website",
        articlePublisher: "https://www.facebook.com/mobzwaygamedevelopment/",
        updatedTime: "2022-03-22T16:00:38+05:30",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us - Mobzway Technologies LLP",
        description: "We offer all sorts of the readymade, fully customized and on-demand solutions for poker, casino, rummy, 3 patti and ludo games.",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com//assets/images/about_banner.jpg"],
    },
};

export default function AboutUs() {
    return (
        <>
            {/*?php include 'header.php'?*/}
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        '\n    .banner{\n    height: 500px !important;\n  }\n  .wel_come_container{\n    width: 100% !important;\n    left: 0px !important;\n  }\n.about_us_sec{padding: 50px 0px;position: relative;z-index: 0;}\n.about_us_sec{background-size: cover;background-repeat: no-repeat;background-position: top center;}\n.about_us_sec .row1 p{\n    padding: 0px 20px 20px 20px;\n    font-size: 18px;\n    font-weight: 500;\n    color: #0d0e0e;\n    line-height: 30px;\n}\n.fea_imgbox h2{\n    font-size: 40px;\n    font-weight: bold;\n    color: #fcd10a;\n}\n.fea_imgbox p{\n    font-size: 20px;\n    font-weight: 400;\n    color: #fff;\n    margin-top: 5px;\n}\n\n.date_option{\n    width: 60px;\n    height: 60px;\n    line-height: 60px;\n    background-color: #fcd10a;\n    border-radius: 100%;\n    text-align: center;\n    position: absolute;\n    right: -30px;\n    top: 50%;\n    transform: translatey(-50%);\n    z-index: 2;\n}\n\n.date_option.left{\n    left: -30px;\n}\n.date_option img{\n    max-width: 100%;\n    width: auto;\n    margin-top: 15px;\n}\n.circle_outer {\n    margin: 10px auto;\n}\n.about_us_product_sec{\n    padding-bottom: 50px;position: relative;z-index: 0;}\n}\n.about_us_product_sec .black{color:#fff;}\n.about_us_product_sec .yellow{animation:yellow_black_w 8s infinite  ease;}\n.about_us_product_sec .black{animation:black_yellow_wh 8s infinite  ease;}\n.about_us_product_sec .overlay_help{\n    background-color: rgba(0, 0, 0, 0.94);\n}\n.about_us_product_sec .product-sec{\n    text-align: center;\n    margin: 30px 0;\n    position: relative;\n}\n\n.about_us_product_sec{\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n}\n.about_us_product_sec .product-img img{\n    width: auto;\n\n}\n.about_us_product_sec .product-sec h4{\n    text-align: center;\n    color: #fff;\n    font-size: 30px;\n    font-weight: 600;\n    margin-top: 10px;\n}\n.about_us_product_sec .product-sec::after{\n    content: "";\n    display: block;\n    width: 3px;\n    height: 100%;\n    top: 0px;\n    right: 0px;\n    position: absolute;\n    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), #575757, rgba(0, 0, 0, 0.5));\n}\n.about_us_product_sec .product-sec.last-child::after{\n    display: none;\n}\n.enviourment-sec .fea_imgbox img {\n    width: 100px;\n}\n\n.mt-5{\n    width: 500px; \n    border-radius: 15px;\n}\n.mt-1{\nwidth: 500px; \nborder-radius: 15px;\n}\n\n@media(max-width:767px){\n    .about_us_sec .row1 p {\n        padding: 0px 20px 10px 20px;\n        line-height: 25px;\n        font-size: 16px;\n    }\n    .about_us_product_sec .product-sec h4 {\n        font-size: 20px;\n    }\n    .fea_imgbox h2 {\n        font-size: 30px;\n    }\n    .fea_imgbox p {\n        font-size: 14px;\n    }\n    .milestone_wrapper::after{\n        display: none;\n    }\n    .date_option {\n        display: none;\n    }\n    \n\n}\n\n@media screen and (max-width: 575px){\n    \n    .banner {\n      height: 400px !important;\n    }\n}\n@media screen and (max-width: 768px){\n.mt-5{\n    width: 360px; \n    border-radius: 15px;\n}\n.mt-1{\nwidth: 360px; \nborder-radius: 15px;\n}\n}\n@media screen and (max-width: 375px){\n.mt-5 {\n    width: 175px;\n    border-radius: 15px;\n}\n.mt-1{\nwidth: 175px; \nborder-radius: 15px;\n}\n.about_us_sec .row1 p {\n    padding: 0px 0px 0px 0px;\n    line-height: 25px;\n    font-size: 16px;\n}\n}\n'
                }}
            />
            {/* Banner */}
            <section
                alt="About us"
                className="banner pokers position-relative"
                style={{
                    backgroundImage: 'url("/assets/images/about_banner.jpg")'
                }}
            >
                <div className="overlay" />
                <div className="wel_come_container">
                    <h1 className="welcome_text career_banner_text text-center">
                        ABOUT MOBZWAY
                    </h1>
                </div>
            </section>
            {/* About Us Section */}
            <section
                className="about_us_sec"
                style={{
                    backgroundImage: 'url("/assets/images/short_banner.jpg")'
                }}
            >
                <div className="container">
                    <div className="row row1">
                        <p>
                            Mobzway Technologies is an Indian game development company that
                            specializes in building multiplayer games such as Poker, Rummy, Teen
                            Patti, ludo, and casino games like Blackjack, Baccarat, Roulette,
                            Slots, Dragon Tiger to mention a few.
                        </p>
                        <p>
                            The Jaipur - headquartered game creator focuses on bringing the best
                            of iGaming solutions for Android, iOS, and Windows platforms. The
                            company also specializes in developing native mobile as well as HTML 5
                            based applications that are responsive to various browsers and
                            platforms.
                        </p>
                        <p>
                            With a client base spread over 15 countries across the globe, Mobzway
                            has been able to successfully deliver numerous iGaming products to
                            budding entrepreneurs and large-scale gaming ventures.
                        </p>
                        <p>
                            The company optimally utilizes the technology with the help of its
                            seasoned workforce to set world-class standards in the iGaming
                            business. By incorporating the best of domain expertise, technology,
                            creativity, and client-centric approach to our working culture,
                            Mobzway is proud and happy to have helped multiple clients establish
                            their iGaming brands.
                        </p>
                        <p>
                            In the era of social media where buzzes are spread at a lightning-fast
                            speed and business leap in no time, Mobzway ensures that high-quality
                            social media compatible solutions can also be created to help our
                            clients grow on these channels and influence the iGaming lovers as
                            well as potential millennials.
                        </p>
                        <p>
                            Backed by a team of visionary entrepreneurs, thought leaders, and most
                            importantly, passionate and talented game developers, Mobzway has been
                            able to live up to the commitments of delivering the rightful products
                            to the clientele.
                        </p>
                    </div>
                </div>
            </section>
            <section
                className="about_us_sec"
                style={{
                    backgroundImage: 'url("/assets/images/short_banner.jpg")'
                }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <div
                                className="aos-init aos-animate"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">OUR </span>{" "}
                                    <span className="black">VISION</span>
                                    {/*2*/}
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-3 col-md-6 col-sm-6 col-12 align-self-center">
                            <div className="product-sec">
                                <div className="product-img ">
                                    <img
                                        className="mt-5"
                                        alt="Reliable"
                                        src="/assets/images/ourvision.png"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-md-6">
          <div class="eng_img_content">
              <img class="mt-5" style="width: 500px; border-radius: 15px;" alt="Reliable" src="/assets/images/ourvision.png">
          </div>
      </div> */}
                        <div className="col-md-3 col-md-6 col-sm-6 col-12">
                            <div className="product-sec last-child manual_pads">
                                <div className="row1">
                                    <p>
                                        To be a global first choice Game Developing Company by
                                        developing Poker, Rummy, Ludo, TeenPatti &amp; Casino Games and
                                        set them in motion to bring real digital entertainment and
                                        enthusiasm. We focus on boosting our client's business
                                        performance by delivering the most elegant gaming solutions and
                                        customer support. Our commitment is focused on developing
                                        premium software using our technological expertise and skills.
                                    </p>
                                    <p>
                                        We value your time and dreams, and we engage the best of our
                                        resources. Customers &amp; their successful gaming business
                                        always the value that accelerates our growth. We have our
                                        standards as a specific deal to serve as an example.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <div
                                className="aos-init aos-animate"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">OUR </span>{" "}
                                    <span className="black">MISSION</span>
                                    {/*2*/}
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-3 col-md-6 col-sm-6 col-12">
                            <div className="product-sec last-child manual_pads">
                                <div className="row1">
                                    <p>
                                        To provide distinct games enriched with functionality and
                                        quality for a smart and advanced gaming experience at no time.
                                        We aspire to come up with innovative ideas and creativity with
                                        the most updated technology to provide 100% gaming uptime.
                                    </p>
                                    <p>
                                        Our team understands your requirement and analyze it and enclose
                                        the best creativity in them to make the deliverable perfect
                                        beyond one’s expectation. We have a bunch of dynamic and
                                        passionate team who makes the customers success possible and
                                        work on the “together we grow” concept.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-md-6 col-sm-6 col-12 align-self-center">
                            <div className="product-sec">
                                <div className="product-img">
                                    <img
                                        className="mt-1"
                                        alt="Reliable"
                                        src="/assets/images/ourmission.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*product of about us sec  */}
            <section
                className="about_us_product_sec"
                style={{
                    backgroundImage: 'url("/assets/images/help_banner.png")'
                }}
            >
                <div className="overlay_help" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <div
                                className="aos-init aos-animate"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">Create </span>{" "}
                                    <span className="black">THE BEST PRODUCT THAT IS</span>
                                    {/*2*/}
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-3 col-md-6 col-sm-6 col-6">
                            <div className="product-sec">
                                <div className="product-img">
                                    <img
                                        alt="Reliable"
                                        src="/assets/images/protect.png"
                                    />
                                </div>
                                <h4>RELIABLE</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-md-6 col-sm-6 col-6">
                            <div className="product-sec last-child">
                                <div className="product-img">
                                    <img
                                        alt="Lightweight"
                                        src="/assets/images/leaf.png"
                                    />
                                </div>
                                <h4>LIGHTWEIGHT</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-md-6 col-sm-6 col-6">
                            <div className="product-sec">
                                <div className="product-img">
                                    <img
                                        alt="Easy to Use"
                                        src="/assets/images/finger.png"
                                    />
                                </div>
                                <h4>EASY TO USE</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-md-6 col-sm-6 col-6">
                            <div className="product-sec last-child">
                                <div className="product-img">
                                    <img
                                        alt="Diversity"
                                        src="/assets/images/watch.png"
                                    />
                                </div>
                                <h4>DIVERSITY</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* environment */}
            <section
                className="about_us_sec"
                style={{
                    backgroundImage: 'url("/assets/images/short_banner.jpg")',
                    padding: "0px 0px 50px 0px"
                }}
            >
                <div className="container">
                    <div
                        className="aos-init aos-animate text-center"
                        data-aos="fade-right"
                        data-aos-duration={1500}
                        data-aos-once="true"
                    >
                        <h2 className="sub_title">
                            <span className="yellow">Create </span>{" "}
                            <span className="black"> THE BEST WORK ENVIRONMENT BASED ONS</span>
                        </h2>
                    </div>
                    <div className="enviourment-sec gaming_platformAdd">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                <div
                                    className="circle_one_outer aos-init aos-animate"
                                    data-aos="fade-right"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <div className="circle_outer position-relative aftes">
                                        <div className="fea_imgbox">
                                            <img
                                                alt="Honesty"
                                                src="/assets/images/honesty.png"
                                            />
                                        </div>
                                    </div>
                                    <div className="title_pltfm">HONESTY</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                <div
                                    className="circle_one_outer aos-init aos-animate"
                                    data-aos="fade-right"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <div className="circle_outer position-relative aftes">
                                        <div className="fea_imgbox">
                                            <img
                                                alt="Trust"
                                                src="/assets/images/trust.png"
                                            />
                                        </div>
                                    </div>
                                    <div className="title_pltfm">TRUST</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                <div
                                    className="circle_one_outer aos-init aos-animate"
                                    data-aos="fade-right"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <div className="circle_outer position-relative aftes">
                                        <div className="fea_imgbox">
                                            <img
                                                alt="Sustainable Growth"
                                                src="/assets/images/growth.png"
                                            />
                                        </div>
                                    </div>
                                    <div className="title_pltfm">SUSTAINABLE GROWTH</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                                <div
                                    className="circle_one_outer aos-init aos-animate"
                                    data-aos="fade-right"
                                    data-aos-duration={1500}
                                    data-aos-once="true"
                                >
                                    <div className="circle_outer position-relative aftes">
                                        <div className="fea_imgbox">
                                            <img
                                                alt="Diversity"
                                                src="/assets/images/diversity.png"
                                            />
                                        </div>
                                    </div>
                                    <div className="title_pltfm">DIVERSITY</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Speak to expirt */}
            <section
                className="how_we_canhelp"
                style={{ backgroundImage: 'url("images/free_asked_bg.png")' }}
            >
                <div className="overlay_help" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <div
                                className="aos-init aos-animate"
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">speak </span>{" "}
                                    <span className="black"> to an expert</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-8 text-center">
                            <div className="help_cotnent text-center">
                                Ready to deliver trust with Mobzway? We're here every step of the
                                way.
                            </div>
                            <div className="btn_outer">
                                <a
                                    data-toggle="modal"
                                    data-target="#requestQoute"
                                    className="contact_btn"
                                >
                                    request a quote
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------Blogs------------------*/}
            <section className="Blogs">
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
                                    <span className="yellow">Featured</span>{" "}
                                    <span className="black">Blog posts</span>
                                    {/*2*/}
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="carousel_container">
                                <div className="blog owl-carousel owl-theme">
                                    {/*?php foreach($someposts as $somepost): ?*/}
                                    <div className="pro_item">
                                        <div className="pro_inner">
                                            <div className="overlay_item" />
                                            <img src="<?php echo $somepost->post_image; ?>" alt="" />
                                        </div>
                                        <div className="title_pltfm">
                                            {/*?php echo $somepost-*/}post_title;?&gt;
                                        </div>
                                        {/* <div class="blog_info">
                              <ul class="d-flex">
                                  <li><?php echo  $somepost->display_name;?></li>
                                  <li>
                                      <?php echo  $somepost->post_modified;?>
                                  </li>
                                 
                          </div> */}
                                        <p className="content">
                                            {/*?php $content = $somepost-*/}post_content; echo
                                            mb_strimwidth($content, 0, 200, '...');?&gt;
                                        </p>
                                        <div className="btn_outer">
                                            <a
                                                href="<?php echo $somepost-> guid;?>"
                                                className="contact_btn"
                                            >
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                    {/*?php endforeach;?*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*?php include 'footer.php' ?*/}
        </>

    )
}
