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
Mobzway Technologies specializes in gaming software designed mostly for entertainment, technology, and business solution needs. The Client agrees to make use of the software in conformity with all relevant laws and regulations governing the countries of operation.
Mobzway does not operate, manage, nor control any of the gaming, betting, and gambling business activities carried out by the Client.

                                    <br />
                                    <br />
The Client is solely responsible for:
Legal operation of the gaming platforms in their target locations
Clients should not use Mobzway software in countries or regions where gaming or betting is considered illegal or restricted by local laws.
Additionally, Mobzway does not offer legal licensing, legal approvals, or legal advisory services. All licensing, legal certification, and legal compliance fall within the Client's responsibility.
                                    <br />
                                    <br />
Mobzway does not provide legal licensing, regulatory approvals, or legal advisory services. The Client must handle all licensing requirements and certification obligations together with regulatory compliance duties.
Mobzway Technologies bears no responsibility for any legal or regulatory issues, compliance problems, or operational difficulties that the Client encounters across different jurisdictions.
Mobzway will not take responsibility for any damages which either directly or indirectly create special or incidental results that follow from using its software products and platforms and services.
The Client accepts to receive various communication methods which include emails and calls and messages when they use Mobzway websites and applications and platforms.
Service updates
Account information
Marketing or promotional communication
Clients may opt out of marketing communications by contacting at{" "}
                                    <b>info@mobzway.com</b>
                                    <br />
                                    <br />

All client information is treated as confidential and handled according to applicable data protection laws. Information may only be disclosed if required by law or regulatory authorities.
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
