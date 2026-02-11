import React from 'react'

export const metadata = {
    title: "Awards and Recognition - Mobzway Technologies LLP",
    description: "Mobzway attracts and retains top talent for our clients and we proud to be publicly recognized as a great place to work around the globe.",
    keywords: "Awards and Recognition",
    alternates: { canonical: "https://www.mobzway.com/awards-and-recognition/" },
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    openGraph: {
        title: "Awards and Recognition - Mobzway Technologies LLP",
        description: "Mobzway attracts and retains top talent for our clients and we proud to be publicly recognized as a great place to work around the globe.",
        url: "https://www.mobzway.com/awards-and-recognition/",
        siteName: "Mobzway Technologies",
        images: [
            {
                url: "https://www.mobzway.com//assets/images/Awards-Banner.png",
                width: 815,
                height: 821,
                alt: "awards_and_recognition",
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
        title: "Awards and Recognition - Mobzway Technologies LLP",
        description: "Mobzway attracts and retains top talent for our clients and we proud to be publicly recognized as a great place to work around the globe.",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com//assets/images/Awards-Banner.png"],
    },
};

export default function AwardsAndRecognition() {
    return (
        <>
            {/*?php include 'header.php' ?*/}
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n.banner {\n    height: 500px !important;\n}\n\n.award_sec .col1 {\n    border: 3px solid #fcd10a;\n    border-radius: 10px;\n    background-color: #000000;\n    margin-top: 35px;\n    overflow: hidden;\n}\n\n.award_sec .col1 a {\n    width: 100%;\n}\n\n.award_sec .col1 img {\n    width: 100%;\n}\n\n.advantage_sec .fea_imgbox img {\n    width: 70px;\n}\n\n@media(max-width: 767px) {\n    .advantage_sec .title_pltfm {\n        font-size: 16px;\n    }\n}\n\n@media screen and (max-width: 575px) {\n\n    .banner {\n        height: 400px !important;\n    }\n}\n"
                }}
            />
            {/* Banner */}
            <section
                alt="Awards & Recognition"
                className="banner pokers position-relative banner-awards"
                style={{
                    backgroundImage: 'url("/assets/images/Awards-Banner.png")'
                }}
            >
                <div className="overlay" />
                <div className="wel_come_container">
                    <h1 className="welcome_text awards-text">Award &amp; Recognition</h1>
                    <p className="sml_text">
                        When you’ll look at our glory, you’ll find us rejoicing at numerous
                        accolades and recognitions for many of our notable works. If you wish to
                        become a part of our brilliant team, check out for the vacancies and
                        work with our seasoned game development experts.
                    </p>
                    <div className="btn_outer">
                        <a
                            data-toggle="modal"
                            data-target="#requestQoute"
                            className="contact_btn"
                        >
                            Request a Quote
                        </a>
                    </div>
                </div>
                {/* <div class="banner_bottom_info" style="background-color: rgba(15, 16, 15, 0.8);">
      <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-11">
              <div class="bottom_header">
                  <div class="bottom_text">
                    If you are planning to start an Online Poker Room, Casino and Sportsbookhave the need to improve your existing online gaming business, then you have landed at the right place !
                  </div>
              </div>
            </div>
        </div>
      </div>
      </div> */}
            </section>
            {/* Awars & Recognition sec */}
            <section className="product_offer award_sec">
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
                                    <span className="yellow">Our Achievements</span>{" "}
                                    <span className="black"> &amp; Awards</span>
                                    {/*2*/}
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <a
                                    href="https://www.topdevelopers.co/profile/mobzway-technologies"
                                    target="blank"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        alt="Top Developers"
                                        src="/assets/images/award-recog-one.png"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <a
                                    href="https://clutch.co/profile/mobzway-technologies-llp"
                                    target="blank"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        alt="Clutch"
                                        src="/assets/images/award-recog-two.png"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <a
                                    href="https://www.g2.com/products/mobzway-technologies-llp/reviews"
                                    target="blank"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        alt="G2"
                                        src="/assets/images/award-recog-three.png"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <a
                                    href="https://www.goodfirms.co/company/mobzway-technologies"
                                    target="blank"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        alt="Goodfirms"
                                        src="/assets/images/award-recog-four.png"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <a
                                    href="https://www.appfutura.com/developers/mobzway-"
                                    target="blank"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        alt="Appfutura"
                                        src="/assets/images/award-recog-five.png"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <a
                                    href="https://www.trustpilot.com/review/mobzway.com"
                                    target="blank"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        alt="Trustpilot"
                                        src="/assets/images/award-recog-six.png"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <a
                                    href="https://aeroleads.com/company/mobzway-technologies-llp-email-format"
                                    target="blank"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        alt="Aeroleads"
                                        src="/assets/images/award-recog-seven.png"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <a
                                    href="https://www.bark.com/en/company/mobzway-technologies-llp/8qg40/"
                                    target="blank"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        alt="Bark"
                                        src="/assets/images/award-recog-eight.png"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <a
                                    href="https://extract.co/mobzwaytechnologies"
                                    target="blank"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        alt="Extract"
                                        src="/assets/images/award-recog-nine.png"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <a
                                    href="https://www.owler.com/company/mobzway"
                                    target="blank"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        alt="Owler"
                                        src="/assets/images/award-recog-ten.png"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <a
                                    href="https://www.softwaresuggest.com/services/mobzway-technologies-llp"
                                    target="blank"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        alt="SoftwareSuggest"
                                        src="/assets/images/award-recog-eleven.png"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <a
                                    href="https://www.crunchbase.com/organization/mobzway-technologies"
                                    target="blank"
                                    rel="nofollow noopener"
                                >
                                    <img
                                        alt="Crunchbase"
                                        src="/assets/images/award-recog-twelve.png"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <img
                                    alt="DesignRush"
                                    src="/assets/images/award-recog-thirteen.png"
                                />
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <img
                                    alt="Capterra"
                                    src="/assets/images/award-recog-fourteen.png"
                                />
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <img
                                    alt="Crowdreviews"
                                    src="/assets/images/award-recog-fifteen.png"
                                />
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <a href="https://appdevelopmentcompanies.co/local-agencies/in/app-developers/jaipur"></a>
                                <a href="https://appdevelopmentcompanies.co/local-agencies/in/app-developers/jaipur">
                                    <img
                                        alt="App Development Companies"
                                        src="/assets/images/award-recog-sixteen.png"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <img
                                    alt="Mobile App Daily"
                                    src="/assets/images/award-recog-eighteen.png"
                                />
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <div className="col1">
                                <a href="https://appdevelopmentcompanies.co/local-agencies/in/app-developers/jaipur">
                                    <img
                                        alt="TopMobileAppDevelopers"
                                        src="/assets/images/award-recog-nineteen.png"
                                    />
                                </a>
                            </div>
                        </div>
                        {/* <div class="col-md-2 col-sm-6 col-6">
              <div class="col1">
                  <img alt="TopSoftwareDevelopers" src="/assets/images/award-recog-twenty.png">
              </div>
          </div>
           <div class="col-md-2 col-sm-6 col-6">
              <div class="col1">
                  <img alt="TopWebDevelopers" src="/assets/images/award-recog-twentyone.png">
              </div>
          </div> */}
                    </div>
                </div>
            </section>
            {/* advantage sec */}
            <section
                className="product_offer advantage_sec gaming_platformAdd"
                style={{
                    backgroundImage: 'url("/assets/images/comman_bg.png")'
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
                                <h3 className="sub_title">
                                    <span className="yellow">the </span>{" "}
                                    <span className="black"> Mobzway ADVANTAGE</span>
                                </h3>
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
                                    <span
                                        className="fea_imgbox real_cash aos-init aos-animate"
                                        data-aos="zoom-in"
                                        data-aos-duration={1500}
                                        data-aos-once="true"
                                    >
                                        <img
                                            alt="Industry Specific Expertise"
                                            src="/assets/images/advantage_one.png"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Industry Specific Expertise</div>
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
                                    <span
                                        className="fea_imgbox real_cash aos-init aos-animate"
                                        data-aos="zoom-in"
                                        data-aos-duration={1500}
                                        data-aos-once="true"
                                    >
                                        <img
                                            alt="40+ Integrated Games"
                                            src="/assets/images/advantage_two.png"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">40+ Integrated Games</div>
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
                                    <span
                                        className="fea_imgbox real_cash aos-init aos-animate"
                                        data-aos="zoom-in"
                                        data-aos-duration={1500}
                                        data-aos-once="true"
                                    >
                                        <img
                                            alt="Top-Notch Security"
                                            src="/assets/images/advantage_three.png"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Top-Notch Security</div>
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
                                    <span
                                        className="fea_imgbox real_cash aos-init aos-animate"
                                        data-aos="zoom-in"
                                        data-aos-duration={1500}
                                        data-aos-once="true"
                                    >
                                        <img
                                            alt="Flexibility & Scalability"
                                            src="/assets/images/advantage_four.png"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Flexibility &amp; Scalability</div>
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
                                    <span
                                        className="fea_imgbox real_cash aos-init aos-animate"
                                        data-aos="zoom-in"
                                        data-aos-duration={1500}
                                        data-aos-once="true"
                                    >
                                        <img
                                            alt="Real Money & Virtual Currency Support"
                                            src="/assets/images/advantage_five.png"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">
                                    Real Money &amp; Virtual Currency Support
                                </div>
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
                                    <span
                                        className="fea_imgbox real_cash aos-init aos-animate"
                                        data-aos="zoom-in"
                                        data-aos-duration={1500}
                                        data-aos-once="true"
                                    >
                                        <img
                                            alt="Integrated Payment System"
                                            src="/assets/images/advantage_six.png"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">Integrated Payment System </div>
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
                                    <span
                                        className="fea_imgbox real_cash aos-init aos-animate"
                                        data-aos="zoom-in"
                                        data-aos-duration={1500}
                                        data-aos-once="true"
                                    >
                                        <img
                                            alt="24 X 7 Product Monitoring"
                                            src="/assets/images/advantage_seven.png"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">24 X 7 Product Monitoring</div>
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
                                    <span
                                        className="fea_imgbox real_cash aos-init aos-animate"
                                        data-aos="zoom-in"
                                        data-aos-duration={1500}
                                        data-aos-once="true"
                                    >
                                        <img
                                            alt="World Class Hosting Infrastructure"
                                            src="/assets/images/advantage_eight.png"
                                        />
                                    </span>
                                </div>
                                <div className="title_pltfm">
                                    World Class Hosting Infrastructure
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------How We Can Help------------------*/}
            <section
                className="how_we_canhelp"
                style={{
                    backgroundImage: 'url("/assets/images/help_banner.png")'
                }}
            >
                <div className="overlay_help" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 text-center">
                            <div
                                className=""
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">Get </span>{" "}
                                    <span className="black"> in touch, ask us anything</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-8 text-center">
                            <div className="help_cotnent text-center">
                                Are you seeking advice on starting your gaming business or want to
                                get a gaming solution developed? Speak to us right away! Our experts
                                will answer all your questions.
                            </div>
                            <div className="btn_outer">
                                <a
                                    className="contact_btn"
                                    data-toggle="modal"
                                    data-target="#requestQoute"
                                >
                                    Let's Talk
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
