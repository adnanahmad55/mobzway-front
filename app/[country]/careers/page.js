import React from 'react'

export const metadata = {
    title: "Careers | Current Job Openings in Jaipur - Mobzway Tech.",
    description: "A job at Mobzway is a career made for you, with opportunities, benefits and a work culture that provides endless growth. At Mobzway you can shape your own path.",
    keywords: "Careers, Current Job Openings, Jobs in Jaipur",
    alternates: { canonical: "https://www.mobzway.com/careers/" },
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    openGraph: {
        title: "Careers | Current Job Openings in Jaipur - Mobzway Technologies",
        description: "A job at Mobzway is a career made for you, with opportunities, benefits and a work culture that provides endless growth. At Mobzway you can shape your own path.",
        url: "https://www.mobzway.com/careers/",
        siteName: "Mobzway Technologies",
        images: [
            {
                url: "https://www.mobzway.com//assets/images/career_banner.png",
                width: 815,
                height: 821,
                alt: "careers",
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
        title: "Careers | Current Job Openings in Jaipur - Mobzway Technologies",
        description: "A job at Mobzway is a career made for you, with opportunities, benefits and a work culture that provides endless growth. At Mobzway you can shape your own path.",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com//assets/images/career_banner.png"],
    },
};

export default function careers() {
    return (
        <>
            {/*?php include 'header.php' ?*/}
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n    \n    #apply_now_form form .blubtn{\n        margin-left: 0px !important;\n    }\n    #apply_now_form form .TD-twocol{\n        margin-bottom: 10px !important;\n    }\n    #apply_now_form .modal-body{\n        padding: 10px !important\n    }\n    @media(max-width:480px){\n        #apply_now_form .modal-body > div{\n            display: block !important;\n        }\n    }\n    .current-openings-list{\n    border-radius: 10px;\n    border: 1px solid rgba(0,0,0,.2);\n    color: rgba(0,0,0,.7);\n    font-size: 14px;\n    font-weight: 500;\n    margin-top: 25px;\n}\n .role {\n    font-size: 25px;\n    font-weight: 700;\n    line-height: 100px;\n    }\n     .exxperience {\n    font-size: 17px;\n    font-weight: 700;\n    line-height: 100px;\n    }\n     .knowmore {\n    font-size: 17px;\n    font-weight: 700;\n    margin-top: 33px;\n    }\n    .btn-primary{\n    \tbackground: #fcd10a !important;\n    color: #333 !important;\n    border: none !important;\n    font-weight: 800 !important;\n    }\n    @media (max-width: 992px){\n    .role {\n    text-align: center;\n    line-height: 0px;\n    line-height: 100px;\n}\n    .exxperience {\n    text-align: center;\n    line-height: 0px;\n    }\n    .knowme{\n    \tmargin-left: 100px;\n    }\n    }\n"
                }}
            />
            {/* Banner */}
            <section
                alt="Job Openings"
                className="banner pokers position-relative banner-car"
                style={{
                    backgroundImage: 'url("/assets/images/career_banner.png")'
                }}
            >
                <div className="overlay" />
                <div className="wel_come_container">
                    <h1 className="welcome_text career_banner_text car-text">
                        Career in Gaming Industry
                    </h1>
                    <p className="sml_text">
                        Many different components are involved in the game development industry.
                        Game designers, producers, graphic artists, programmers all contribute
                        to the development of final gaming product. If you are obsessed with the
                        world of gaming, here is the chance to pursue a career in this field.
                        The gaming industry is highly lucrative and offers huge prospects. The
                        industry is growing at a fast pace and this is the right time to enter
                        into the gaming industry and make a career in it.
                    </p>
                    <div className="btn_outer">
                        <a href="#on_opportunities" className="contact_btn">
                            Job Openings
                        </a>
                    </div>
                    <div className="share_cv_mail">
                        <span>Mail Your CV : </span>
                        <a className="" href="mailto:hr@mobzway.com">
                            {" "}
                            hr@mobzway.com
                        </a>
                    </div>
                </div>
            </section>
            {/* Poker software */}
            <section
                className="product_offer"
                style={{
                    backgroundImage: 'url("/assets/images/comman_bg.png")'
                }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">Why</span>{" "}
                                    <span className="black">
                                        Should You Consider Mobzway <br />
                                        for A Prosperous Career?
                                    </span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <div className="recruitment_content text-justify">
                                <p>
                                    A job in our organization will provide you ample amount of
                                    opportunities and every day you will get the chance to acquire new
                                    skills and upgrade existing ones. Mobzway has highly dynamic work
                                    culture where knowledge is shared freely and you will learn the
                                    ways to overcome the challenges in the designing and development
                                    of best in class games for global clients. Our company has made a
                                    contribution in taking the Indian gaming industry to the next
                                    level of success. We are looking for talented individuals who not
                                    only take the responsibility of their own work but for the success
                                    of the entire team at large and has ability to work as a part of
                                    multidisciplinary team. We are looking for people who would like
                                    to be a part of our group and contribute to our goal of developing
                                    exciting and innovative gaming products. We provide a platform for
                                    boundless achievements to all our employees and with the talent
                                    and passion that you have there is no limit to what we can achieve
                                    working as a team.
                                </p>
                            </div>
                            <div id="on_opportunities"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="opportunities_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">Current </span>{" "}
                                    <span className="black"> Openings</span>
                                </h2>
                                <p className="heading-para p_b_15">
                                    Multiple Opportunities are Knocking at Your Door!
                                </p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 current-openings-list">
                                    <div className="col-md-6 role  float-left">
                                        <p>Node JS Developer</p>
                                    </div>
                                    <div className="col-md-4 exxperience float-left">
                                        <p>0.6 - 4 Years</p>
                                    </div>
                                    <div className="col-md-2 knowmore float-left">
                                        <a
                                            href="https://careers.mobzway.com/jobs/Careers/453693000019682014/Node-JS-Developer?source=CareerSite"
                                            target="_blank"
                                        >
                                            <button className="btn btn-primary knowme mb-4">
                                                View Details
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-12 current-openings-list">
                                    <div className="col-md-6 role  float-left">
                                        <p>Node JS Intern</p>
                                    </div>
                                    <div className="col-md-4 exxperience float-left">
                                        <p>Fresher</p>
                                    </div>
                                    <div className="col-md-2 knowmore float-left">
                                        <a
                                            href="https://careers.mobzway.com/jobs/Careers/453693000019656011/Unity-Intern?source=CareerSite"
                                            target="_blank"
                                        >
                                            <button className="btn btn-primary knowme mb-4">
                                                View Details
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-12 current-openings-list">
                                    <div className="col-md-6 role  float-left">
                                        <p>Quality Analyst</p>
                                    </div>
                                    <div className="col-md-4 exxperience float-left">
                                        <p>0-3 Years</p>
                                    </div>
                                    <div className="col-md-2 knowmore float-left">
                                        <a
                                            href="https://careers.mobzway.com/jobs/Careers/453693000023132091/Quality-Analyst?source=CareerSite"
                                            target="_blank"
                                        >
                                            <button className="btn btn-primary knowme mb-4">
                                                View Details
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-12 current-openings-list">
                                    <div className="col-md-6 role  float-left">
                                        <p>Unity Intern</p>
                                    </div>
                                    <div className="col-md-4 exxperience float-left">
                                        <p>Intern</p>
                                    </div>
                                    <div className="col-md-2 knowmore float-left">
                                        <a
                                            href="https://careers.mobzway.com/jobs/Careers/453693000019656011/Unity-Intern?source=CareerSite"
                                            target="_blank"
                                        >
                                            <button className="btn btn-primary knowme mb-4">
                                                View Details
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-12 current-openings-list">
                                    <div className="col-md-6 role  float-left">
                                        <p>Quality Analyst (Manual) Intern</p>
                                    </div>
                                    <div className="col-md-4 exxperience float-left">
                                        <p>0 - 1 Year</p>
                                    </div>
                                    <div className="col-md-2 knowmore float-left">
                                        <a
                                            href="https://careers.mobzway.com/jobs/Careers/453693000014719337/Quality-Tester-Manual-Intern?source=CareerSite"
                                            target="_blank"
                                        >
                                            <button className="btn btn-primary knowme mb-4">
                                                View Details
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-12 current-openings-list">
                                    <div className="col-md-6 role  float-left">
                                        <p>Wordpress Developer</p>
                                    </div>
                                    <div className="col-md-4 exxperience float-left">
                                        <p>1 - 3 Years</p>
                                    </div>
                                    <div className="col-md-2 knowmore float-left">
                                        <a
                                            href="https://careers.mobzway.com/jobs/Careers/453693000017022130/Wordpress-Developer?source=CareerSite"
                                            target="_blank"
                                        >
                                            <button className="btn btn-primary knowme mb-4">
                                                View Details
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-12 current-openings-list">
                                    <div className="col-md-6 role  float-left">
                                        <p>Wordpress Developer(Freelancer)</p>
                                    </div>
                                    <div className="col-md-4 exxperience float-left">
                                        <p>2 - 5 Years</p>
                                    </div>
                                    <div className="col-md-2 knowmore float-left">
                                        <a
                                            href="https://careers.mobzway.com/jobs/Careers/453693000014719135/Wordpress-Developer-Freelancer-?source=CareerSite"
                                            target="_blank"
                                        >
                                            <button className="btn btn-primary knowme mb-4">
                                                View Details
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-12 current-openings-list">
                                    <div className="col-md-6 role  float-left">
                                        <p>Software Intern</p>
                                    </div>
                                    <div className="col-md-4 exxperience float-left">
                                        <p>Fresher</p>
                                    </div>
                                    <div className="col-md-2 knowmore float-left">
                                        <a
                                            href="https://careers.mobzway.com/jobs/Careers/453693000014172014/Software-Intern?source=CareerSite"
                                            target="_blank"
                                        >
                                            <button className="btn btn-primary knowme mb-4">
                                                View Details
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-12 current-openings-list">
                                    <div className="col-md-6 role  float-left">
                                        <p>Content Writer</p>
                                    </div>
                                    <div className="col-md-4 exxperience float-left">
                                        <p>0 - 1 Year</p>
                                    </div>
                                    <div className="col-md-2 knowmore float-left">
                                        <a
                                            href="https://careers.mobzway.com/jobs/Careers/453693000008535015/Content-Writer-Intern-?source=CareerSite"
                                            target="_blank"
                                        >
                                            <button className="btn btn-primary knowme mb-4">
                                                View Details
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-12 current-openings-list">
                                    <div className="col-md-6 role  float-left">
                                        <p>Sales Executive</p>
                                    </div>
                                    <div className="col-md-4 exxperience float-left">
                                        <p>0-2 Year</p>
                                    </div>
                                    <div className="col-md-2 knowmore float-left">
                                        <a
                                            href="https://careers.mobzway.com/jobs/Careers/453693000014102029/Sales-Executive-Intern?source=CareerSite"
                                            target="_blank"
                                        >
                                            <button className="btn btn-primary knowme mb-4">
                                                View Details
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-12 current-openings-list">
                                    <div className="col-md-6 role  float-left">
                                        <p>Business Analyst (Pre Sales)</p>
                                    </div>
                                    <div className="col-md-4 exxperience float-left">
                                        <p>0-1 Year</p>
                                    </div>
                                    <div className="col-md-2 knowmore float-left">
                                        <a
                                            href="https://careers.mobzway.com/jobs/Careers/453693000013465015/Business-analyst-Pre-Sales?source=CareerSite"
                                            target="_blank"
                                        >
                                            <button className="btn btn-primary knowme mb-4">
                                                View Details
                                            </button>
                                        </a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 current-openings-list">
                                        <div className="col-md-6 role  float-left">
                                            <p>Web Designer</p>
                                        </div>
                                        <div className="col-md-4 exxperience float-left">
                                            <p>1-3 Year</p>
                                        </div>
                                        <div className="col-md-2 knowmore float-left">
                                            <a
                                                href="https://careers.mobzway.com/jobs/Careers/453693000017022156/Web-Designer?source=CareerSite"
                                                target="_blank"
                                            >
                                                <button className="btn btn-primary knowme mb-4">
                                                    View Details
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 current-openings-list">
                                            <div className="col-md-6 role  float-left">
                                                <p>Unity Developer</p>
                                            </div>
                                            <div className="col-md-4 exxperience float-left">
                                                <p>0 -3 Years</p>
                                            </div>
                                            <div className="col-md-2 knowmore float-left">
                                                <a
                                                    href="https://careers.mobzway.com/jobs/Careers/453693000019655241/Unity-Developer?source=CareerSite"
                                                    target="_blank"
                                                >
                                                    <button className="btn btn-primary knowme mb-4">
                                                        View Details
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 current-openings-list">
                                                <div className="col-md-6 role  float-left">
                                                    <p>Digital Marketing Executive</p>
                                                </div>
                                                <div className="col-md-4 exxperience float-left">
                                                    <p>0-1 Year</p>
                                                </div>
                                                <div className="col-md-2 knowmore float-left">
                                                    <a
                                                        href="https://careers.mobzway.com/jobs/Careers/453693000013470030/Digital-Marketing-Executive?source=CareerSite"
                                                        target="_blank"
                                                    >
                                                        <button className="btn btn-primary knowme mb-4">
                                                            View Details
                                                        </button>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 current-openings-list">
                                                    <div className="col-md-6 role  float-left">
                                                        <p>Phaser Developer</p>
                                                    </div>
                                                    <div className="col-md-4 exxperience float-left">
                                                        <p>1-3 Years</p>
                                                    </div>
                                                    <div className="col-md-2 knowmore float-left">
                                                        <a
                                                            href="https://careers.mobzway.com/jobs/Careers/453693000012699001/Phaser-Developer?source=CareerSite"
                                                            target="_blank"
                                                        >
                                                            <button className="btn btn-primary knowme mb-4">
                                                                View Details
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 current-openings-list">
                                                    <div className="col-md-6 role  float-left">
                                                        <p>Customer Support Executive</p>
                                                    </div>
                                                    <div className="col-md-4 exxperience float-left">
                                                        <p>0-1 Years</p>
                                                    </div>
                                                    <div className="col-md-2 knowmore float-left">
                                                        <a
                                                            href="https://careers.mobzway.com/jobs/Careers/453693000002189021/Customer-Support-Executive?source=CareerSite"
                                                            target="_blank"
                                                        >
                                                            <button className="btn btn-primary knowme mb-4">
                                                                View Details
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 current-openings-list">
                                                    <div className="col-md-6 role  float-left">
                                                        <p>PHP Developer</p>
                                                    </div>
                                                    <div className="col-md-4 exxperience float-left">
                                                        <p>1-3 Years</p>
                                                    </div>
                                                    <div className="col-md-2 knowmore float-left">
                                                        <a
                                                            href="https://careers.mobzway.com/jobs/Careers/453693000000347025/Php-Developer?source=CareerSite"
                                                            target="_blank"
                                                        >
                                                            <button className="btn btn-primary knowme mb-4">
                                                                View Details
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 current-openings-list">
                                                    <div className="col-md-6 role  float-left">
                                                        <p>Java Developer</p>
                                                    </div>
                                                    <div className="col-md-4 exxperience float-left">
                                                        <p>1-3 Years</p>
                                                    </div>
                                                    <div className="col-md-2 knowmore float-left">
                                                        <a
                                                            href="https://careers.mobzway.com/jobs/Careers/453693000000347001/Java-Developer?source=CareerSite"
                                                            target="_blank"
                                                        >
                                                            <button className="btn btn-primary knowme mb-4">
                                                                View Details
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 current-openings-list">
                                                    <div className="col-md-6 role  float-left">
                                                        <p>Linux &amp; AWS</p>
                                                    </div>
                                                    <div className="col-md-4 exxperience float-left">
                                                        <p> 1 Years </p>
                                                    </div>
                                                    <div className="col-md-2 knowmore float-left">
                                                        <a
                                                            href="https://careers.mobzway.com/jobs/Careers/453693000017022092/AWS-and-Linux?source=CareerSite"
                                                            target="_blank"
                                                        >
                                                            <button className="btn btn-primary knowme mb-4">
                                                                View Details
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 current-openings-list">
                                                    <div className="col-md-6 role  float-left">
                                                        <p>Frontend Developer</p>
                                                    </div>
                                                    <div className="col-md-4 exxperience float-left">
                                                        <p>1-3 Years</p>
                                                    </div>
                                                    <div className="col-md-2 knowmore float-left">
                                                        <a
                                                            href="https://careers.mobzway.com/jobs/Careers/453693000000337078/Frontend-Developer?source=CareerSite"
                                                            target="_blank"
                                                        >
                                                            <button className="btn btn-primary knowme mb-4">
                                                                View Details
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 current-openings-list">
                                                    <div className="col-md-6 role  float-left">
                                                        <p>Business Analyst - Post sales</p>
                                                    </div>
                                                    <div className="col-md-4 exxperience float-left">
                                                        <p>0-1 Years</p>
                                                    </div>
                                                    <div className="col-md-2 knowmore float-left">
                                                        <a
                                                            href="https://careers.mobzway.com/jobs/Careers/453693000000347079/Business-Analyst---Post-Sales?source=CareerSite"
                                                            target="_blank"
                                                        >
                                                            <button className="btn btn-primary knowme mb-4">
                                                                View Details
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 current-openings-list">
                                                    <div className="col-md-6 role  float-left">
                                                        <p>Software Developer (Frehers)</p>
                                                    </div>
                                                    <div className="col-md-4 exxperience float-left">
                                                        <p>1-3 Years</p>
                                                    </div>
                                                    <div className="col-md-2 knowmore float-left">
                                                        <a
                                                            href="https://careers.mobzway.com/jobs/Careers/453693000000347140/Software-Developers-Fresher?source=CareerSite"
                                                            target="_blank"
                                                        >
                                                            <button className="btn btn-primary knowme mb-4">
                                                                View Details
                                                            </button>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section></section>
            <br />
            <section className="apply_sec">
                <div className="container">
                    <div className="apply_content_sec">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="apply_img">
                                    <img
                                        alt="Contact Mobzway"
                                        src="/assets/images/apply_img.png"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6  col-md-6">
                                <div className="send_mail_hr_sec yellow_btm_border p_b_15 m_b_15">
                                    <p>
                                        To apply, please send an email to{" "}
                                        <b style={{ color: "#fcd10a" }}>hr@mobzway.com</b> telling us
                                        about yourself and your past development experience.
                                    </p>
                                </div>
                                <div className="yellow_btm_border p_b_15 m_b_15">
                                    <h5>Nothing to your liking</h5>
                                    <p>
                                        We are always looking for exceptional people and our needs are
                                        always changing. If you don't see a position that is relevant to
                                        your expertise, do come back in the future or follow us on
                                        social media to get{" "}
                                    </p>
                                </div>
                                <div className="hr_department p_b_15">
                                    <div className="m_b_15">
                                        <h5>HR Department</h5>
                                        <a href="tel:+91-911-600-5587" className="">
                                            (+91-911-600-5587)
                                        </a>
                                    </div>
                                    <div className="m_b_15">
                                        <h5>Email Us</h5>
                                        <p>
                                            <span>We Will Get Back to You within 24 hours</span>{" "}
                                        </p>
                                        <a href="mailto:hr@mobzway.com" className="">
                                            hr@mobzway.com
                                        </a>
                                    </div>
                                    <div className="m_b_15">
                                        <h5>Skype Us</h5>
                                        <p>
                                            <span>Get Connected over Skype</span>
                                        </p>
                                        <a href="skype:sales.mobzway?chat" className="">
                                            sales.mobzway
                                        </a>
                                        <p>
                                            <span>Have a Quick Discussion With Game Experts</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ask question section */}
            <section
                className="how_we_canhelp"
                style={{
                    backgroundImage: 'url("/assets/images/free_asked_bg.png")'
                }}
            >
                <div className="overlay_help" />
                <div className="container">
                    <div className="row justify-content-center">
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
                                    href="https://careers.mobzway.com/jobs/Careers"
                                    target="_blank"
                                    className="contact_btn"
                                >
                                    Join Our Team
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
