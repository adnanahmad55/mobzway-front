"use client";
import React, { useState } from 'react'
import LiveChat from './LiveChat';
import ChatQoute from './ChatQoute';
import RequestQoute from './RequestQoute';
import Link from 'next/link';


export default function Footer() {
    const [showMore, setShowMore] = useState(false);

    return (
        <>
            <footer
                style={{
                    backgroundColor: "#0f100f",
                }}>
                <div className="container">
                    <div className="row pdbm">
                        <div className="col-xl-2 col-lg-2 col-md-6">
                            <div className="foot_info">
                                <div className="widget widget_text">
                                    <div className="widget-content">
                                        <div className="textwidget">
                                            <div className="footer_title">Company</div>
                                            <ul className="foot_navs">
                                                <li>
                                                    <a href="https://www.mobzway.com/blog/">Blog</a>
                                                </li>
                                                <li>
                                                    <Link href="/careers/">Careers</Link>
                                                </li>
                                                <li>
                                                    <Link href="/about-us/">About Us</Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact-us/">Contact Us</Link>
                                                </li>
                                                <li>
                                                    <Link href="/portfolio/">Portfolio</Link>
                                                </li>
                                                <li>
                                                    <Link href="/company-brochure/">Brochure</Link>
                                                </li>
                                                <li>
                                                    <Link href="/work-culture/">Work Culture</Link>
                                                </li>
                                                <li>
                                                    <Link href="/write-for-us/">Write for Us</Link>
                                                </li>
                                                <li>
                                                    <Link href="/our-specialization/">
                                                        Our Specialization
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/awards-and-recognition/">
                                                        Awards & Recognition
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-6">
                            <div className="foot_info manps">
                                <div className="widget widget_text">
                                    <div className="widget-content">
                                        <div className="textwidget">
                                            <div className="footer_title">Solutions</div>
                                            <ul className="foot_navs">
                                                <li
                                                    style={{
                                                        listStyleType: "none",
                                                    }}>
                                                    <ul className="foot_navs">
                                                        <li>
                                                            <Link href="/poker-software/">
                                                                Poker Software
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/casino-software/">
                                                                Casino Software
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/rummy-software/">
                                                                Rummy Software
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/teen-patti-software/">
                                                                Teen Patti Software
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/live-casino-software/">
                                                                Live Casino Software
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/white-label-casino-software/">
                                                                White Label Casino
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/white-label-poker-software/">
                                                                White Label Poker
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/igaming-software-provider/">
                                                                iGaming Software
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3">
                            <div className="foot_info manpser">
                                <div className="widget widget_text">
                                    <div className="widget-content">
                                        <div className="textwidget">
                                            <div className="footer_title">Service</div>
                                            <ul className="foot_navs">
                                                <li>
                                                    <Link href="/poker-game-development/">
                                                        Poker Game Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/rummy-game-development/">
                                                        Rummy Game Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/teen-patti-game-development/">
                                                        Teen Patti Game Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/pool-game-development/">
                                                        Pool Game Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/card-game-development/">
                                                        Card Game Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/ludo-game-development/">
                                                        Ludo Game Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blackjack-game-development/">
                                                        BlackJack Game Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/baccarat-game-development/">
                                                        Baccarat Game Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/roulette-game-development/">
                                                        {" "}
                                                        Roulette Game Development
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-2 col-md-3">
                            <div className="foot_info manpser">
                                <div className="widget widget_text">
                                    <div className="widget-content">
                                        <div className="textwidget">
                                            <div className="footer_title">More</div>
                                            <ul className="foot_navs">
                                                <li>
                                                    <Link href="/texas-holdem-poker/">
                                                        Texas Holdem Poker
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/seven-stud-poker/">
                                                        Seven Stud Poker
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/omaha-poker-game-development/">
                                                        Omaha Poker Game
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/andar-bahar-game-development/">
                                                        Andar Bahar Game
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/triple-chance-game-development/">
                                                        Triple Chance Game
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/slot-game-development/">
                                                        Slot Game Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/bingo-software/">
                                                        Bingo Software Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/keno-game-development/">
                                                        Keno Game Development
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/ofc-poker-game-development/">
                                                        OFC Poker Game Development
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mnsprg col-xl-2 col-lg-3 col-md-6">
                            <div className="widget widget_text">
                                <div className="widget-content">
                                    <div className="textwidget">
                                        <div className="footer_title">Get In Touch</div>
                                        <div className="get_in_touch">
                                            <ul className="foot_navs">
                                                <li>
                                                    <a className="telefooter" href="tel:+91 – (7878)-044-044">
                                                        <i className="fas fa-phone-alt pr-2" />
                                                        +91 – 7878044044
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="tel:+91 – (911)-600-5587">
                                                        <i className="fas fa-phone-alt pr-2" />
                                                        +91 – 9116005587(HR)
                                                    </a>
                                                </li>
                                                <li
                                                    style={{
                                                        color: "#fff !important",
                                                        display: "inline-block !important",
                                                        fontSize: "16px !important",
                                                        fontWeight: "500 !important",
                                                        transition: "ease .4s !important",
                                                    }}>
                                                    <i className="fab fa-skype pr-2" style={{}} />
                                                    sales.mobzway
                                                </li>
                                                <li>
                                                    <a href="mailto:sales@mobzway.com">
                                                        <i className="far fa-envelope pr-2" />
                                                        sales@mobzway.com
                                                    </a>
                                                </li>
                                                <li className="d-flex add">
                                                    <i className="fas fa-map-marker-alt pr-2" />
                                                    <br />
                                                    <address>
                                                        G-4, Okay Plus Spaces,
                                                        <br />
                                                        Malviya Nagar Industrial
                                                        <br />
                                                        Area Jaipur, (Raj) India
                                                        <br />
                                                        302017
                                                    </address>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dmca-badge"
                                                        href="//www.dmca.com/Protection/Status.aspx?ID=12720dd7-bc14-47a2-9623-c0ffd79c248f"
                                                        title="DMCA.com Protection Status">
                                                        <img
                                                            alt="DMCA.com Protection Status"
                                                            className="img-lazy"
                                                            src="/assets/images/dmca.png"
                                                            height="900"
                                                            width="1600"
                                                        />
                                                    </a>{" "}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <ul className="foot_navs">
                                <li>
                                    <a>
                                        <strong>LEGAL DISCLAIMER: </strong>
                                        Mobzway Technologies does NOT provide real money gaming services
                                        in India.
                                        {/* <span id="dots">...</span> */}
                                        {!showMore && <span id="dots">...</span>}
                                        {showMore && (
                                            <span
                                                id="more"
                                                style={{
                                                    display: `${showMore ? 'block' : 'none'}`,
                                                }}>
                                                Access to such services is restricted by law under the IT Act,
                                                2000 and the Promotion & Regulation of Online Gaming Bill, 2025.
                                                We build games solely for fun and entertainment purposes for the
                                                Indian market.
                                                <br />
                                                <br />
                                                We do not provide any development, maintenance, and support
                                                services for illegal gaming and iGaming sectors, which are not
                                                approved/authorized by the Government of India. This rule
                                                completely applies for individuals/businesses established
                                                outside of India and want to offer their services in India as
                                                well.
                                                <br />
                                                <br />
                                                Our website does not offer/provide illegal or legal advice for
                                                any gaming/gambling/iGaming activities. We provide information
                                                solely for educational purposes without breaking any law.
                                                <br />
                                                <br />
                                                We advise individuals/businesses to comply with all the legal
                                                and regulatory laws and requirements before creating or starting
                                                any type of website/app or software from Mobzway Technologies.
                                                <br />
                                                <br />
                                                Obtaining an entire ownership and necessary permissions,
                                                clearances, and license is solely the responsibility of the
                                                client to run their business. Mobzway Technologies in any
                                                condition or criteria doesn’t provide any legal/illegal license
                                                or permission(s).
                                                <br />
                                                <br />
                                                Mobzway does not hold any responsibility for any compliance
                                                issue that clients may face with their requirements. Mobzway is
                                                not liable for any special, incidental, indirect, or
                                                consequential loss/damage.
                                            </span>
                                        )}
                                        <button
                                            id="readMoreBtn"
                                            onClick={() => setShowMore(!showMore)}
                                            style={{
                                                background: "none",
                                                border: "none",
                                                color: "#007bff",
                                                cursor: "pointer",
                                            }}>
                                            {showMore ? "Read less" : "Read more"}

                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row bdertp">
                        <div className="col-md-7">
                            <div className="copy_right">
                                <p>
                                    © 2015 - 2021 By{" "}
                                    <Link
                                        className="text-white"
                                        href="/"
                                        style={{
                                            fontSize: "20px",
                                        }}>
                                        Mobzway Technologies.
                                    </Link>{" "}
                                    All Rights Reserved. |{" "}
                                    <Link
                                        href="/quality-policy/"
                                        style={{
                                            color: "white",
                                            fontSize: "20px",
                                        }}>
                                        Privacy Policy
                                    </Link>{" "}
                                    |
                                    <Link
                                        href="/terms-conditions/"
                                        style={{
                                            color: "white",
                                            fontSize: "20px",
                                        }}>
                                        Terms & Conditions
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <ul className="social d-flex">
                                <li>
                                    <a
                                        aria-label="linkedin"
                                        href="https://www.linkedin.com/company/mobzway-technologies-llp"
                                        rel="noopener"
                                        target="_blank">
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        aria-label="insta"
                                        href="https://www.instagram.com/mobzway/"
                                        rel="noopener"
                                        target="_blank">
                                        <svg
                                            style={{
                                                fill: "#fff",
                                                marginTop: "-6px",
                                                width: "22px",
                                            }}
                                            viewBox="0 0 640 640"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        aria-label="facebook"
                                        href="https://www.facebook.com/mobzwaygamedevelopment/"
                                        rel="noopener"
                                        target="_blank">
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        aria-label="twitter"
                                        href="https://twitter.com/mobzway"
                                        rel="noopener"
                                        target="_blank">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        aria-label="pinterest"
                                        href="https://www.pinterest.com/Mobzwaytech/"
                                        rel="noopener"
                                        target="_blank">
                                        <i className="fab fa-pinterest-p" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        aria-label="youtube"
                                        href="https://www.youtube.com/channel/UCatvs_nBmQfnCWYQM-4ZZ1A"
                                        rel="noopener"
                                        target="_blank">
                                        <i className="fab fa-youtube" />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        aria-label="vk"
                                        href="https://vk.com/mobzway"
                                        rel="noopener"
                                        target="_blank">
                                        <i className="fab fa-vk" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div
                    className="icon_fixed fixiconmb position-fixed end-0 zcwf_lblLeft crmWebToEntityForm"
                    id="crmWebToEntityForm"
                    style={{
                        display: "none !important",
                        right: "0",
                        zIndex: "99999",
                    }}>
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    <meta content="text/html;charset=UTF-8" httpEquiv="content-type" />
                    <form
                        acceptCharset="UTF-8"
                        action="https://crm.zoho.com/crm/WebToLeadForm"
                        method="POST"
                        name="WebToLeads1742164000112535261"
                        onsubmit='javascript:document.charset="UTF-8"; return checkMandatory1742164000112535261()'
                        style={{
                            display: "flex",
                            overflow: "hidden",
                            position: "relative",
                        }}
                        target="_blank">
                        <input
                            defaultValue="89a4c4e1cd2b8d798a13869a512e0430f10d4e54011dc2ab6ecb48142704f733"
                            name="xnQsjsdp"
                            style={{
                                display: "none",
                            }}
                            type="text"
                        />
                        <input defaultValue="" id="zc_gad" name="zc_gad" type="hidden" />
                        <input
                            defaultValue="c6e4fdd49e7ece532078ecf1f399f64df85f86535b75d19069e9f7263f4004b1"
                            name="xmIwtLD"
                            style={{
                                display: "none",
                            }}
                            type="text"
                        />
                        <input
                            defaultValue="TGVhZHM="
                            name="actionType"
                            style={{
                                display: "none",
                            }}
                            type="text"
                        />
                        <input
                            defaultValue="https://api.whatsapp.com/send?phone=919116005595"
                            name="returnURL"
                            style={{
                                display: "none",
                            }}
                            type="text"
                        />
                        <input
                            id="ldeskuid"
                            name="ldeskuid"
                            style={{
                                display: "none",
                            }}
                            type="text"
                        />
                        <input
                            id="LDTuvid"
                            name="LDTuvid"
                            style={{
                                display: "none",
                            }}
                            type="text"
                        />
                        <div
                            className="zcwf_row"
                            style={{
                                position: "absolute",
                                zIndex: "-1",
                            }}>
                            <div className="zcwf_col_fld">
                                <input id="Mobile" maxLength="30" name="Mobile" type="hidden" />
                                <div className="zcwf_col_help" />
                            </div>
                        </div>
                        <div className="whatsappNumber position-relative">
                            <span className="whatsappNumber-closebtn m-0 p-0">×</span>
                            <i className="fab fa-whatsapp whatsappfixclose position-absolute" />
                            <input
                                id="whatsapp-number-field"
                                maxLength="14"
                                name="Last Name"
                                // onkeyup="getVal()"
                                placeholder="Whatsapp Number"
                                type="text"
                            />
                            <div className="zcwf_col_help" />
                            <input
                                className="whatsaapsubmit formsubmit zcwf_button"
                                id="formsubmiWhat"
                                title="Submit"
                                type="submit"
                                value="Submit"
                            />
                        </div>
                         <i className="fab fa-whatsapp whatsapp_fixed" /> 
                        <div
                            className="zcwf_row wfrm_fld_dpNn"
                            style={{
                                position: "absolute",
                                visibility: "hidden",
                                zIndex: "-1",
                            }}>
                            <div
                                className="zcwf_col_lab"
                                style={{
                                    fontFamily: "Arial",
                                    fontSize: "12px",
                                }}>
                                <label htmlFor="Lead_Source">Query Source</label>
                            </div>
                            <div className="zcwf_col_fld">
                                <select
                                    className="zcwf_col_fld_slt"
                                    id="Lead_Source"
                                    name="Lead Source">
                                    <option selected defaultValue="mobzway.com">
                                        WhatsApp
                                    </option>
                                </select>
                                <div className="zcwf_col_help" />
                            </div>
                        </div>
                    </form>
                    <a
                        aria-label="Tel"
                        className="float call__btm_btn"
                        href="tel:+91-7878-044-044"
                        rel="noopener"
                        target="_blank">
                        <i className="fas fa-phone-alt call_btn_fixed" />
                    </a>
                </div> */}
            </footer>

            <LiveChat />

            <ChatQoute />

            <RequestQoute />

        </>
    )
}
