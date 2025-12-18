import React from 'react'

export const metadata = {
    title: "Terms and Conditions - Mobzway Technologies",
    description: "Explore Mobzway’s Terms and Conditions for important details on service use, user obligations, legal policies, and guidelines for our gaming solutions.",
    keywords: "Terms and Conditions",
    alternates: { canonical: "https://www.mobzway.com/terms-conditions/" },
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    openGraph: {
        title: "Terms and Conditions - Mobzway Technologies",
        description: "Explore Mobzway’s Terms and Conditions for important details on service use, user obligations, legal policies, and guidelines for our gaming solutions.",
        url: "https://www.mobzway.com/terms-conditions/",
        siteName: "Mobzway Technologies",
        images: [
            {
                url: "https://www.mobzway.com//assets/images/banner02portfolio.png",
                width: 815,
                height: 821,
                alt: "terms_and_conditions",
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
        title: "Terms and Conditions - Mobzway Technologies",
        description: "Explore Mobzway’s Terms and Conditions for important details on service use, user obligations, legal policies, and guidelines for our gaming solutions.",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com//assets/images/banner02portfolio.png"],
    },
};

export default function TermsConditions() {
    return (
        <>
            {/*?php include 'header.php'; ?*/}
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n\n.same_content_sec{\n\tpadding-bottom: 50px;\n}\n.same_content_sec{\n\tfont-size: 17px;\n    color: #535353;\n    font-weight: 500;\n}\n.same_content_sec .list li{\n\tlist-style: disc;\n\tmargin: 15px 0;\n\tmargin-left: 20px;\n\tfont-size: 17px;\n    color: #535353;\n    font-weight: 500;\n}\n\n.banner {\n    height: 500px !important;\n}\n\np.para_content {\n    padding-top: 50px;\n}\n\n/*=======  Responsive css Media Query =======*/\n\n@media(max-width: 768px){\n\t.banner {\n\t    height: 300px !important;\n\t}\n}\n.para_content{\n  box-shadow: 0px 0px 10px 0px #666;\n  padding: 35px;\n  border-radius: 15px;\n}\n\n"
                }}
            />
            {/* Banner */}
            <section
                alt="Terms & Conditions"
                className="banner pokers position-relative"
                style={{
                    backgroundImage:
                        'url("/assets/images/terms_conditions.jpg")'
                }}
            >
                <div className="overlay" />
                <div className="wel_come_container thank_you_welcome_container">
                    <h1 className="welcome_text career_banner_text">Terms and Conditions</h1>
                </div>
            </section>
            {/* same_content_sec */}
            <section
                className="same_content_sec"
                style={{
                    backgroundImage: 'url("/assets/images/comman_bg.png")'
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title text-center">
                                    <span className="yellow"> Rules</span>{" "}
                                    <span className="black">&amp; Regulations</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12 ">
                            <div className="">
                                <p className="para_content">
                                    Primarily Mobzway's gaming softwares is configured for virtual
                                    chips/play money and delivered to the CLIENT for entertainment
                                    purpose only. The CLIENT is committed to operating it for the same
                                    purpose. In such scenarios, these softwares can't be used for
                                    gambling purposes by CLIENT directly or indirectly involving real
                                    money. If CLIENT commits a breach of this term, then Mobzway will
                                    terminate CLIENT's service with immediate effect.
                                    <br />
                                    <br />
                                    Skill-based gaming products offered by Mobzway can be operated by
                                    CLIENT in INDIA with real money except in the states and union
                                    territories where it is prohibited. CLIENT can operate Non-skill
                                    based gaming products offered by Mobzway with real money only
                                    outside of INDIA, and CLIENT should not allow players/users from
                                    INDIA. If CLIENT commits a breach of this term, then Mobzway will
                                    terminate the service with immediate effect.
                                    <br />
                                    <br />
                                    Further, for both inside &amp; outside of INDIA, the CLIENT
                                    carries the responsibility to have studied and understood the laws
                                    and regulatory environment for operations of the games and
                                    gambling of the country, where the CLIENT will launch games.
                                    CLIENTs should not operate Mobzway's gaming products in countries
                                    where gambling is not permitted and against the law and regulatory
                                    environment of the country. The CLIENT should only use the games
                                    in the countries where these games are permitted, and CLIENT
                                    adheres with the law and the regulatory environment and CLIENT
                                    seek licenses required in the respective countries. Suppose
                                    Mobzway ever identifies that the CLIENT uses the software for
                                    gambling purposes without obtaining the necessary license by the
                                    CLIENT. In that case, Mobzway will terminate the service with
                                    immediate effect.
                                    <br />
                                    <br />
                                    By using this Website/Application or Platform, it is deemed that
                                    You have consented to receive telephone calls, SMSes and emails
                                    from Us at any time We deem fit. Such communications shall send to
                                    You on the telephone number and email ID provided by You to use
                                    this Website/Application or Platform, which are subject to Our
                                    Privacy Policy. These communications include but are not limited
                                    to contacting You through information received from Third Parties.
                                    Such communications by Us is for purposes that, among other
                                    things, include clarification calls, marketing calls and
                                    promotional calls. If you wish to stop receiving notifications
                                    from Us about marketing and promotional calls/concerning any
                                    communication received from Us, You may email Us at{" "}
                                    <b>info@mobzway.com</b>. The information provided by You shall be
                                    deemed to be confidential. It shall not disclose to any Third
                                    Party unless the same is required to be mandatorily disclosed to
                                    relevant government authorities under the applicable laws. If we
                                    are required to make any such mandatory disclosure, We will notify
                                    You about the same.
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
            {/*?php include 'footer.php'; ?*/}
        </>

    )
}
