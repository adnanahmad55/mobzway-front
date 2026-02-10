import React from 'react'

export const metadata = {
  title: "Company Brochure & Profile Details - Mobzway Technologies",
  description: "Mobzway company brochure, presentation and service details which will give a better idea about expertise, experience, and delivery process.",
  keywords: "company brochure, our expertise",
  alternates: { canonical: "https://www.mobzway.com/company-brochure/" },
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
  openGraph: {
    title: "Company Brochure & Profile Details - Mobzway Technologies LLP",
    description: "Mobzway company brochure, presentation and service details which will give a better idea about expertise, experience, and delivery process.",
    url: "https://www.mobzway.com/company-brochure/",
    siteName: "Mobzway Technologies",
    images: [
      {
        url: "https://www.mobzway.com//assets/images/brochure_banner.jpg",
        width: 815,
        height: 821,
        alt: "company_brochure",
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
    title: "Company Brochure & Profile Details - Mobzway Technologies LLP",
    description: "Mobzway company brochure, presentation and service details which will give a better idea about expertise, experience, and delivery process.",
    site: "@mobzway",
    creator: "@mobzway",
    images: ["https://www.mobzway.com//assets/images/brochure_banner.jpg"],
  },
};

export default function CompanyBrochure() {
  return (
    <>
  {/*?php include 'header.php' ?*/}
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n.same_content_sec{\n\tpadding-bottom: 50px;\n}\n.same_content_sec{\n\tfont-size: 17px;\n  color: #535353;\n  font-weight: 500;\n}\n.same_content_sec .list li{\n\tlist-style: disc;\n\tmargin: 15px 0;\n\tmargin-left: 20px;\n\tfont-size: 17px;\n  color: #535353;\n  font-weight: 500;\n}\n.same_content_sec .policy_list_sec{\n\tpadding-top: 25px;\n}\n.banner {\n  height: 100%;\n}\n\n/*=======  Responsive css Media Query =======*/\n@media(max-width: 767px){\n\t.banner {\n\t    height: 300px;\n\t}\n}\n"
    }}
  />
  {/* Banner */}
  <section
    className="banner pokers position-relative banner-bro"
    style={{
      backgroundImage:
        'url("/assets/images/brochure_banner.jpg")',
      height: 500
    }}
  >
    <div className="overlay" />
    <div className="wel_come_container">
      <h1 className="welcome_text career_banner_text  bro-text">Brochure</h1>
      <p className="sml_text ">
        Get complete details about the games best suited for your business along
        with their pricing, development, project process and more. Inquire for
        pricing and other details now.
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
    className="same_content_sec"
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
              <span className="yellow">Company</span>{" "}
              <span className="black"> Brochure</span>
            </h2>
          </div>
        </div>
        <div className="col-md-12 ">
          <div className="">
            <p className="para_content">
              What’s special about Mobzway? Why would anyone choose us? There
              are number of factors that keep us apart from the crowd and
              incline the customers to choose us ahead of any other company.
              Positive points that make us proud include determination to
              provide the best, skilled professionals, passionate team members,
              our transparency with the clients, compelling prices and last but
              not the least our expertise in app development, game development
              and software testing. We also hold a special tag of the{" "}
              <a href="<?=  $baseurl ?>poker-game-development/" target="blank/">
                poker game development expert
              </a>{" "}
              in the country providing a refined solution for the games and apps
              development. We have a team of wide variety of technology
              individuals and Start up Entrepreneurs.
            </p>
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
