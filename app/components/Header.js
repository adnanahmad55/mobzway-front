"use client";
import React, { useEffect, useState } from 'react'
import Typewriter from './Typewriter'
// import AOS from 'aos';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import WOW from "wowjs";
import { menuData } from "./menuData";
import { useLang } from './LanguageProvider';
import { languages } from '../lib/i18n';


export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
const ASIA_CODES = ['sg', 'pk', 'am', 'in', 'th', 'vn', 'id', 'my'];
if (ASIA_CODES.includes(country)) {
        country = 'asia'; // Forcefully 'asia' set kar diya
    }
    //const country = pathname.split("/")[1] || "default";

    const menu = menuData[country] || menuData.default;

    const { lang, setLang } = useLang();

    function changeLang(e) {
        console.log(e, 'eeeee');
        
        // const value = e.target.value;
        document.cookie = `lang=${e}; path=/`;
        setLang(e);
        setOpen(false);
    }


    // if (
    //     pathname === "/in" ||
    //     pathname === "/us" ||
    //     pathname === "/uk" ||
    //     pathname === "/eu" ||
    //     pathname === "/bd" ||
    //     pathname === "/af"
    // ) {
    //     return null;
    // }

    // useEffect(() => {
    //     AOS.init({
    //         duration: 800,
    //         once: false,
    //     })
    // }, [])
    // useEffect(() => {
    //     new WOW.WOW().init();
    // }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {

            // AOS
            import("aos").then((AOS) => {
                AOS.default.init({
                    duration: 800,
                    once: false,
                });
            });

            // WOW
            import("wowjs").then((WOW) => {
                new WOW.WOW().init();
            });

        }
    }, []);



    const handleMenuToggle = () => {
        document.querySelector(".responsive-nav span")?.classList.toggle("one");
        document.querySelector(".left_nav")?.classList.toggle("left_nav_blks");
        document.body.classList.toggle("scroll-stop");
    };

    return (
        <header id="header">
            <div className="container" style={{ maxWidth: 1250 }}>
                <div className="top_header d-flex justify-content-between">
                    <div className="top_contact w-100">
                        <div className="top_left">
                            <ul className="d-flex justify-content-end">
                                <li className="t_wrapper">
                                    <div className="t_wrapper d-flex">
                                        <a
                                            className="whatsappHb"
                                            href="https://api.whatsapp.com/send?phone=919116005595"
                                        >
                                            <span className="pr-1">
                                                <i className="fab fa-whatsapp" />
                                            </span>
                                            +91-9116005595
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="t_wrapper d-flex">
                                        <a className="telephoneHb" href="tel:+91-7878-044-044">
                                            <span className="pr-1">
                                                <i className="fas fa-phone-alt" />
                                            </span>
                                            +91-7878-044-044
                                        </a>
                                    </div>
                                </li>
                                <li className="responsive_call_sec">
                                    <div className="t_wrapper d-flex call_number">
                                        <a href="tel:+91-7878-044-044">
                                            <span className="pr-1">
                                                <i className="fas fa-phone-alt" />
                                            </span>
                                            7878 044 044
                                        </a>
                                    </div>
                                    <div className="t_wrapper d-flex">
                                        <a href="tel:+91-7878-044-044">
                                            <span className="pr-1" />
                                            CALL US NOW !
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <div className="t_wrapper d-flex">
                                        <a href="mailto:sales@mobzway.com">
                                            <span className="pr-1">
                                                <i className="fas fa-envelope" />
                                            </span>
                                            sales@mobzway.com
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="menus_lnk" className="d-flex justify-content-between">
                    <div className="brand_wrapper align-self-center">
                        <Link href="/" className="brand">
                            <img
                                src="/assets/images/logo.png"
                                width={1600}
                                height={900}
                                alt="Mobzway Logo"
                            />
                        </Link>
                    </div>
                    <div className="d-flex d-lg-none align-items-center">
                        <a
                            href="/our-games/"
                            className="responsive-nav mobileNavbar responsive-nav-demo skill-games-contact-none-mb"
                            style={{
                                background: "#fcd10a",
                                marginRight: 8,
                                width: "90px",
                                overflow: "hidden"
                            }}
                        >
                            {/* <span
                                className="typewrite"
                                data-period={4000}
                                data-type='["60+ Games", "Try Demo"]'
                            >
                                <span className="wrap" />
                            </span> */}
                            <Typewriter words={["60+ Games", "Try Demo"]} period={4000} />

                        </a>
                        <a
                            href="javascript:void(0)"
                            data-toggle="modal"
                            data-target="#chatQoute"
                            className="responsive-nav responsive-nav-demo skill-games-contact-mb"
                            style={{
                                display: "none",
                                background: "#fcd10a !important",
                                marginRight: 8,
                                width: "90px !important",
                                overflow: "hidden"
                            }}
                        >
                            {/* <span
                                className="typewrite"
                                data-period={4000}
                                data-type='["60+ Games", "Try Demo"]'
                            >
                                <span className="wrap" />
                            </span> */}
                            <Typewriter words={["60+ Games", "Try Demo"]} period={4000} />
                        </a>
                        {/* <button class="responsive-nav responsive-nav-demo" style="background:#fcd10a !important;margin-right: 8px;width: 90px !important;" data-toggle="modal" data-target="#chatQoute">
                      try demo
                  </button> */}
                        <button
                            className="responsive-nav"
                            onClick={handleMenuToggle}
                            style={{ fontSize: 0, background: "transparent !important" }}
                        >
                            Menu
                            <span className="line trun" />
                            <span className="line ops" />
                            <span className="line trback" />
                        </button>
                    </div>
                    <div className="left_nav mt-3">
                        <ul id="menu-header-menu" className="d-flex desktop_menu">

                            {menu.map((item, i) => (
                                <li key={i} className={item.children ? "has_child" : ""}>
                                    {item.path ? (
                                        <Link href={`/${country}${item.path}`}>{item.label}</Link>
                                    ) : (
                                        <a href="#">{item.label}</a>
                                    )}

                                    {item.children && (
                                        <ul className="sub-menu">
                                            {item.children.map((child, j) => (
                                                <li key={j} className={child.children ? "has_child" : ""}>
                                                    {child.path ? (
                                                        <Link href={`/${country}${child.path}`}>{child.label}</Link>
                                                    ) : (
                                                        <a href="#">{child.label}</a>
                                                    )}

                                                    {child.children && (
                                                        <ul className="sub-menu">
                                                            {child.children.map((sub, k) => (
                                                                <li key={k}>
                                                                    <Link href={`/${country}${sub.path}`}>{sub.label}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}

                            <li id="menu-item-7296" className=" border-0">
                                <Link
                                    href="https://www.mobzway.com/blog/"
                                    className=""
                                >
                                    {/* <span
                                        className="typewrite"
                                        data-period={4000}
                                        data-type='["60+ Games", "Try Demo"]'
                                    >
                                        <span className="wrap" />
                                    </span> */}
                                    Blog
                                </Link>
                                </li>

                            <li id="menu-item-7296" className=" border-0 mr-4">
                                <Link
                                    href="/our-games"
                                    className="contact_btn skill-games-contact-none"
                                >
                                    {/* <span
                                        className="typewrite"
                                        data-period={4000}
                                        data-type='["60+ Games", "Try Demo"]'
                                    >
                                        <span className="wrap" />
                                    </span> */}
                                    <Typewriter words={["60+ Games", "Try Demo"]} period={4000} />
                                </Link>
                                <a
                                    href="javascript:void(0)"
                                    data-toggle="modal"
                                    data-target="#chatQoute"
                                    className="contact_btn skill-games-contact"
                                    style={{ display: "none" }}
                                >
                                    {/* <span
                                        className="typewrite"
                                        data-period={4000}
                                        data-type='["60+ Games", "Try Demo"]'
                                    >
                                        <span className="wrap" />
                                    </span> */}
                                    <Typewriter words={["60+ Games", "Try Demo"]} period={4000} />
                                </a>
                            </li>

                            {/* <select value={lang} onChange={changeLang}
                            style={{background:'transparent', border: '0', outline:'none'}}>
                                {languages.map((l) => (
                                    <option key={l} value={l}>
                                        <img src={`/assets/images/${l.toUpperCase()}.png`} />
                                    </option>
                                ))}
                            </select> */}
                            {/* {country} */}

                          {country === 'bd' &&  <div className="dropdown d-flex align-items-center">
                                <button
                                    className="border-0 p-0"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ textDecoration: "none" }}
                                    onClick={() => setOpen(true)}
                                >
                                    <img
                                        src={`/assets/images/${lang.toUpperCase()}.png`}
                                        alt={lang}
                                        width="20"
                                        className="me-2"
                                        style={{width:' 22px'}}
                                    />
                                    {/* {lang.toUpperCase()} */}
                                </button>

                                {open && <div className="dropdown-menu show dropdown-menu-end p-0 overflow-hidden bg-dark"
                                style={{left:'-30px', width:'90px', minWidth:'90px', borderRadius:'2px'}}>
                                    {languages.map((l) => (
                                        <div key={l} className='m-0'>
                                            <button
                                                className="dropdown-item px-2 d-flex align-items-center bg-dark"
                                                onClick={() => changeLang(l)}
                                                style={{color:'#fff'}}
                                            >
                                                <img
                                                    src={`/assets/images/${l.toUpperCase()}.png`}
                                                    alt={l}
                                                    width="20"
                                                    className="mr-2"
                                                    style={{width:' 25px'}}
                                                />
                                                {l.toUpperCase()}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                }
                            </div>}


                            {/* <li id="menu-item-7296"
                          class="contact_btn_list_wrapper menu-item menu-item-type-custom menu-item-object-custom d-block d-md-none mt-3">
                          <a href="tel:+91-7878-044-044" class="contact_btn"><i class="fas fa-phone-alt"></i> 7878 044 044 CALL US NOW !</a>
                      </li> */}
                        </ul>
                        <ul id="menu-header-menu" className="d-flex mobile_menu">
                            {/* <li id="menu-item-75" className="menu-item">
                                <a href="javascript:void(0)">Poker</a>
                                <ul className="sub-menu">
                                    <li id="menu-item-76" className="menu-item">
                                        <Link href="/poker-software/">Poker Software</Link>
                                    </li>
                                    <li id="menu-item-77" className="menu-item">
                                        <Link href="/poker-game-development/">
                                            Poker Game Development
                                        </Link>
                                    </li>
                                    <li id="menu-item-78" className="menu-item">
                                        <Link href="/texas-holdem-poker/">
                                            Texas Hold'em Poker
                                        </Link>
                                    </li>
                                    <li id="menu-item-79" className="menu-item">
                                        <Link href="/omaha-poker-game-development/">
                                            Omaha Poker Game Development
                                        </Link>
                                    </li>
                                    <li id="menu-item-79" className="menu-item">
                                        <Link href="/ofc-poker-game-development/">
                                            OFC Poker Game Development
                                        </Link>
                                    </li>
                                    <li id="menu-item-79" className="menu-item">
                                        <Link href="/seven-stud-poker/">Seven Stud Poker</Link>
                                    </li>
                                </ul>
                            </li>
                            <li id="" className="menu-item">
                                <a href="javascript:void(0)">Rummy</a>
                                <ul className="sub-menu">
                                    <li id="menu-item-76" className="menu-item">
                                        <Link href="/rummy-software/">Rummy Software</Link>
                                    </li>
                                    <li id="menu-item-77" className="menu-item">
                                        <Link href="/rummy-game-development/">
                                            Rummy Game Development
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li id="" className="menu-item">
                                <a href="javascript:void(0)">Teen Patti</a>
                                <ul className="sub-menu">
                                    <li id="menu-item-76" className="menu-item">
                                        <Link href="/teen-patti-software/">
                                            {" "}
                                            Teen Patti Software
                                        </Link>
                                    </li>
                                    <li id="menu-item-77" className="menu-item">
                                        <Link href="/teen-patti-game-development/">
                                            Teen Patti Game Development
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li id="" className="menu-item">
                                <a href="javascript:void(0)">Casino Software</a>
                                <ul className="sub-menu">
                                    <li id="menu-item-76" className="menu-item">
                                        <Link href="/casino-software/">Casino Platform</Link>
                                    </li>
                                    <li id="menu-item-77" className="menu-item">
                                        <Link href="/casino-game-development/">
                                            Casino Game Development
                                        </Link>
                                    </li>
                                    <li id="menu-item-77" className="menu-item">
                                        <Link href="/blackjack-game-development/">
                                            BlackJack Game Development
                                        </Link>
                                    </li>
                                    <li id="menu-item-77" className="menu-item">
                                        <Link href="/baccarat-game-development/">
                                            Baccarat Game Development
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li id="" className="menu-item">
                                <Link href="/ludo-game-development/">
                                    Ludo Game Development
                                </Link>
                            </li>
                            <li id="" className="menu-item">
                                <Link href="/live-casino-software/">
                                    Live Casino Solution
                                </Link>
                            </li>
                            <li id="" className="menu-item">
                                <Link href="/pool-game-development/">
                                    Pool Game Development
                                </Link>
                            </li>
                            <li id="" className="menu-item">
                                <Link href="/card-game-development/">
                                    Card Game Development
                                </Link>
                            </li>
                            <li id="" className="menu-item">
                                <a href="javascript:void(0)">White Label Solution</a>
                                <ul className="sub-menu">
                                    <li id="menu-item-76" className="menu-item">
                                        <Link href="/white-label-casino-software/">
                                            White Label Casino Software
                                        </Link>
                                    </li>
                                    <li id="menu-item-77" className="menu-item">
                                        <Link href="/white-label-poker-software/">
                                            White Label Poker Software
                                        </Link>
                                    </li>
                                    <li id="menu-item-77" className="menu-item">
                                        <Link href="/igaming-software-provider/">
                                            iGaming Software Provider
                                        </Link>
                                    </li>
                                </ul>
                            </li> */}

                            {menu.map((item, i) => (
                                <li key={i} className={item.children ? "has_child" : ""}>
                                    {item.path ? (
                                        <Link href={`/${country}${item.path}`}>{item.label}</Link>
                                    ) : (
                                        <a href="#">{item.label}</a>
                                    )}

                                    {item.children && (
                                        <ul className="sub-menu">
                                            {item.children.map((child, j) => (
                                                <li key={j} className={child.children ? "has_child" : ""}>
                                                    {child.path ? (
                                                        <Link href={`/${country}${child.path}`}>{child.label}</Link>
                                                    ) : (
                                                        <a href="#">{child.label}</a>
                                                    )}

                                                    {child.children && (
                                                        <ul className="sub-menu">
                                                            {child.children.map((sub, k) => (
                                                                <li key={k}>
                                                                    <Link href={`/${country}${sub.path}`}>{sub.label}</Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}

                            <li id="menu-item-7296" className=" border-0">
                                <Link
                                    href="/our-games/"
                                    className="contact_btn skill-games-contact-none"
                                >
                                    {/* <span
                                        className="typewrite"
                                        data-period={4000}
                                        data-type='["60+ Games", "Try Demo"]'
                                    >
                                        <span className="wrap" />
                                    </span> */}
                                    <Typewriter words={["60+ Games", "Try Demo"]} period={4000} />
                                </Link>
                                <a
                                    href="javascript:void(0)"
                                    data-toggle="modal"
                                    data-target="#chatQoute"
                                    className="contact_btn skill-games-contact"
                                    style={{ display: "none" }}
                                >
                                    {/* <span
                                        className="typewrite"
                                        data-period={4000}
                                        data-type='["60+ Games", "Try Demo"]'
                                    >
                                        <span className="wrap" />
                                    </span> */}
                                    <Typewriter words={["60+ Games", "Try Demo"]} period={4000} />
                                </a>
                            </li>
                            {/* <li id="menu-item-7296"
                          class="contact_btn_list_wrapper menu-item menu-item-type-custom menu-item-object-custom d-block d-md-none mt-3">
                          <a href="tel:+91-7878-044-044" class="contact_btn"><i class="fas fa-phone-alt"></i> 7878 044 044 CALL US NOW !</a>
                      </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </header>

    )
}
