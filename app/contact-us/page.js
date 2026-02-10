import React from 'react'

export const metadata = {
    title: "Contact Us/ Reach Us - Mobzway Technologies LLP",
    description: "Would you like to set up a poker & casino business, but aren't sure how to start? Looking for our reliable products & solutions? Ask us with our Game Experts!",
    keywords: "write for us, contribute for us, become a contributor, guest post writing",
    alternates: { canonical: "https://www.mobzway.com/contact-us/" },
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    openGraph: {
        title: "Contact Us/ Reach Us - Mobzway Technologies LLP",
        description: "Would you like to set up a poker & casino business, but aren't sure how to start? Looking for our reliable products & solutions? Ask us with our Game Experts!",
        url: "https://www.mobzway.com/contact-us/",
        siteName: "Mobzway Technologies",
        images: [
            {
                url: "https://www.mobzway.com//assets/images/talk_to_sales_team.png",
                width: 815,
                height: 821,
                alt: "contact_us",
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
        title: "Contact Us/ Reach Us - Mobzway Technologies LLP",
        description: "Would you like to set up a poker & casino business, but aren't sure how to start? Looking for our reliable products & solutions? Ask us with our Game Experts!",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com//assets/images/talk_to_sales_team.png"],
    },
};

export default function ContactUs() {
    return (
        <>
            {/*?php include 'header.php' ?*/}
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n\n.contact_enquiry_section address {\n    font-size: 20px !important;\n    font-weight: 500 !important;\n    padding-top: 25px !important;\n}\n\n"
                }}
            />
            <section className="contact_get_in_touch">
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
                            <h1 className="sub_title">
                                <span className="black_bg_head_yellow">CONTACT</span>{" "}
                                <span className="black_bg_head_white">US</span>
                            </h1>
                        </div>
                    </div>
                    <div className="sub_head text-center">
                        <h5 className="text-white">We are expert in beating the clock</h5>
                    </div>
                    <div className="row row1">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-4 col-md-5">
                            <div className="col1">
                                <img
                                    alt="Sales Team"
                                    src="/assets/images/talk_to_sales_team.png"
                                    style={{ width: 150 }}
                                />
                                <h3>Talk To Sales Team</h3>
                                <p>
                                    Need assistance from one of our sales experts to inquire about the
                                    quotes and best solutions for your business? Connect with us now!
                                </p>
                                <div className="contactt">
                                    <a href="tel:+91-7878-044-044">
                                        <i className="fas fa-phone-alt" style={{ display: "flex" }}>
                                            <span>+91-7878-044-044</span>
                                        </i>
                                    </a>
                                    <br />
                                    <a href="mailto:Sales@mobzway.com">
                                        <i className="far fa-envelope">
                                            <span>Sales@mobzway.com</span>
                                        </i>
                                    </a>
                                    <br />
                                    <a href="skype:sales.mobzway?chat">
                                        <i className="fab fa-skype">
                                            <span>sales.mobzway</span>
                                        </i>
                                    </a>
                                </div>
                                <div className="btn_outer">
                                    <a
                                        data-toggle="modal"
                                        data-target="#requestQoute"
                                        className="contact_btn"
                                    >
                                        SCHEDULE A DEMO
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-2"></div>
                        <div className="col-lg-4 col-md-5">
                            <div className="col1">
                                <img
                                    alt="Contact With HR"
                                    src="/assets/images/connect_with_hr.png"
                                    style={{ width: 150 }}
                                />
                                <h3>Connect With HR</h3>
                                <p>
                                    Want to work with our brilliant team that loves building games?
                                    Connect with our HR now to know the ongoing job opportunities.
                                </p>
                                <div className="contactt">
                                    <a href="tel:+91-911-600-5587">
                                        <i className="fas fa-phone-alt" style={{ display: "flex" }}>
                                            <span>+91-911-600-5587</span>
                                        </i>
                                    </a>
                                    <br />
                                    <a href="mailto:hr@mobzway.com">
                                        <i className="far fa-envelope">
                                            <span>hr@mobzway.com</span>
                                        </i>
                                    </a>
                                    <br />
                                </div>
                                <div className="btn_outer">
                                    <a href="<?=  $baseurl ?>careers" className="contact_btn">
                                        JOB OPENINGS
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </section>
            {/* address */}
            {/* enquiry section */}
            <section className="contact_enquiry_section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="col1">
                                <h2>WHAT'S NEWS?</h2>
                                <p>
                                    Sign up and get fresh and regular mobzway thinking direct to your
                                    inbox.
                                </p>
                                <form>
                                    <input
                                        type="email"
                                        name=""
                                        className="email_subs"
                                        placeholder="Enter Email ID"
                                    />
                                    <div className="btn_outer">
                                        <a href="#" className="contact_btn mt-4">
                                            SUBSCRIBE
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="col1">
                                <img
                                    alt="Head Office"
                                    src="/assets/images/addre.jpg"
                                />
                                <div className="row">
                                    <div className="col-md-4 text-center">
                                        <img
                                            alt="Location"
                                            src="/assets/images/location.png"
                                            style={{ width: 75, paddingTop: 40 }}
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <address>
                                            G-4, Okay Plus Spaces, Malviya Nagar Industrial Area, Jaipur
                                            (Raj), India, PIN-302017
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="col1">
                                <h2>WANT TO JOIN US?</h2>
                                <p>
                                    Are you keen to making a meaningful impact? Interested in joining
                                    the mobzway team?
                                </p>
                                <div style={{ minHeight: 30 }} />
                                <div className="btn_outer mt-4">
                                    <a href="<?=  $baseurl ?>careers/" className="contact_btn mt-4">
                                        SEE OUR JOBS
                                    </a>
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
            {/*?php include 'footer.php' ?*/}
        </>

    )
}
