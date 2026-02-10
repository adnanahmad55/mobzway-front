import React from 'react'

export const metadata = {
    title: "Our Specialization | Mobzway Technologies LLP",
    description: "Mobzway Technologies have wide range of our specialization in mobile and PC game development, game design, game art and app development.",
    keywords: "our specialization",
    alternates: { canonical: "https://www.mobzway.com/our-specialization/" },
    robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    openGraph: {
        title: "Our Specialization | Mobzway Technologies LLP",
        description: "Mobzway Technologies have wide range of our specialization in mobile and PC game development, game design, game art and app development.",
        url: "https://www.mobzway.com/our-specialization/",
        siteName: "Mobzway Technologies",
        images: [
            {
                url: "https://www.mobzway.com//assets/images/specialization.jpg",
                width: 815,
                height: 821,
                alt: "our_specialization",
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
        title: "Our Specialization | Mobzway Technologies LLP",
        description: "Mobzway Technologies have wide range of our specialization in mobile and PC game development, game design, game art and app development.",
        site: "@mobzway",
        creator: "@mobzway",
        images: ["https://www.mobzway.com//assets/images/specialization.jpg"],
    },
};

export default function OurSpecialization() {
    return (
        <>
            {/*?php include 'header.php' ?*/}
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n.same_content_sec{\n    padding-bottom: 50px;\n}\n.same_content_sec{\n    font-size: 17px;\n  color: #535353;\n  font-weight: 500;\n}\n.same_content_sec .list li{\n    list-style: disc;\n    margin: 15px 0;\n    margin-left: 20px;\n    font-size: 17px;\n  color: #535353;\n  font-weight: 500;\n}\n.same_content_sec .policy_list_sec{\n    padding-top: 25px;\n}\n.banner {\n  height: 500px;\n}\n\n/*=======  Responsive css Media Query =======*/\n@media(max-width: 767px){\n    .banner {\n        height: 300px;\n    }\n}\n\n"
                }}
            />
            {/* Banner */}
            <section
                alt="our specialization"
                className="banner pokers position-relative banner-spec"
                style={{
                    backgroundImage: 'url("/assets/images/specialization.jpg")'
                }}
            >
                <div className="overlay" />
                <div className="wel_come_container">
                    <h1 className="welcome_text career_banner_text spec-text">
                        Our Specialization
                    </h1>
                    <p className="sml_text ">
                        Our highly skilled game developers create games that leave a
                        long-lasting impact on the players. This is because we infuse the games
                        with advanced 2D or 3D graphics, multiple features, secure hostings and
                        code them with languages like Unity3D, Java, Javascript and HTML 5.
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
            </section>
            {/* same_content_sec */}
            <section
                className="quality_sec same_content_sec"
                style={{
                    backgroundImage: 'url("/assets/images/comman_bg.png")'
                }}
            >
                <div className="container">
                    {" "}
                    <div className="row">
                        <div className="col-md-12">
                            <div
                                data-aos="fade-right"
                                data-aos-duration={1500}
                                data-aos-once="true"
                            >
                                <h2 className="sub_title">
                                    <span className="yellow">How</span>{" "}
                                    <span className="black"> we are different from the crowd</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12 ">
                            <div className="list">
                                <ul>
                                    <li>Most experienced Team for 2D &amp; 3D Games.</li>
                                    <li>Poker &amp; Casino Game Expertise.</li>
                                    <li>Experience with Single &amp; Multi-Player Games.</li>
                                    <li>Most Creative Game Art Team.</li>
                                    <li>Stringent IP Protection Policies.</li>
                                    <li>Highly Skilled Game Architects.</li>
                                    <li>Skilled in Unity3D, Java, JavaScript and HTML5.</li>
                                    <li>Expert Game Quality Assurance.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*-------------Blogs------------------*/}
            {/*?php include 'footer.php' ?*/}
        </>

    )
}
