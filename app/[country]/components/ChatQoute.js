"use client";

import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function ChatQoute() {

    const [form1, setForm1] = useState({
        fname1: "",
        lname1: "",
        email1: "",
        mob_number1: "",
        product1: "",
        contact_type1: "mobile",
    });
    const [loading1, setLoading1] = useState(false);

    const [countries, setCountries] = useState([]);
    const [activeItem1, setActiveItem1] = useState('mobile');
    const [selectedCountry, setSelectedCountry] = useState({
        dial_code: "+91",
        code: "IN",
    });

    useEffect(() => {
        // Fetch country codes
        fetch("/assets/data/CountryCodes.json")
            .then((res) => res.json())
            .then((data) => {
                setCountries(data);
                // Set default country (India)
                const defaultCountry = data.find((c) => c.dial_code === "+91");
                if (defaultCountry) setSelectedCountry(defaultCountry);
            })
            .catch((err) => console.error("Error fetching countries:", err));
    }, []);


    const handleChange1 = (key, value) => {
        setForm1(prev => ({ ...prev, [key]: value }));
    };

    const handleSubmit1 = async () => {
        // const { fname1, lname1, email1, mob_number1, product1, contact_type1 } = form1;

        if (!form1.fname1) return alert("First Name required");
        if (!form1.lname1) return alert("Last Name required");
        if (!form1.product1) return alert("Select a Product");
        if (!form1.email1) return alert("Email required");
        if (!form1.mob_number1) return alert("Mobile required");

        let numberWithCode = activeItem1 === "mobile"
            ? selectedCountry.dial_code + form1.mob_number1
            : form1.mob_number1;

        const body = {
            fname: form1.fname1,
            lname: form1.lname1,
            email: form1.email1,
            mob_number: numberWithCode,
            product: form1.product1,
            contact_type: activeItem1,
            Source_URL: window.location.href,
            lead_source: extractDomain(window.location.href)
        };

        try {
            setLoading1(true);

            const res = await axios.post(
                "https://crm-api.mobzway.com:2083/create-lead",
                body
            );

            console.log(res.data);
            setLoading1(false);
            alert("Form submitted successfully!");
            window.location.href = "/thank-you";

        } catch (err) {
            console.log(err);
            setLoading1(false);
            alert("Error submitting form.");
        }
    };


    return (
        <div
            aria-hidden="true"
            aria-labelledby=""
            className="modal fade"
            id="chatQoute"
            role="dialog"
            tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div
                        className="modal-header flex-wrap text-center justify-content-center"
                        style={{
                            backgroundColor: "#202020",
                            borderTop: "2px solid #ffc321",
                        }}>
                        <h3 className="modal-title text-white w-100" id="">
                            <span className="yellows">Contact</span> us
                        </h3>
                        <p className="pup_cotent">
                            Our team is ready to assist you with any questions or concerns.
                        </p>
                        <button
                            aria-label="Close"
                            className="close position-absolute"
                            data-dismiss="modal"
                            type="button">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body formAll_flied">
                        <form className="w-100" id="chatForm">
                            <div className="position-relative row m-0">
                                <div
                                    className="col-6 mb-3 pl-0"
                                    style={{
                                        paddingRight: "3px",
                                    }}>
                                    <div className="position-relative w-100">
                                        <input
                                            className="chatform_flied_input mb-0 chatform_flied_textinput"
                                            id="firstNameChat"
                                            name=""
                                            placeholder="First name"
                                            style={{
                                                paddingLeft: "1rem",
                                            }}
                                            type="text"
                                            value={form1.fname1}
                                            onChange={(e) => handleChange1("fname1", e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div
                                    className="col-6 mb-3 pr-0"
                                    style={{
                                        paddingLeft: "3px",
                                    }}>
                                    <div className="position-relative w-100">
                                        <input
                                            className="chatform_flied_input mb-0 chatform_flied_textinput"
                                            id="lastNameChat"
                                            name=""
                                            placeholder="Last name"
                                            style={{
                                                paddingLeft: "1rem",
                                            }}
                                            type="text"
                                            value={form1.lname1}
                                            onChange={(e) => handleChange1("lname1", e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="dropdown dropdown-subject">
                                    <button
                                        aria-expanded="false"
                                        className="btn btn-secondary dropdown-toggle"
                                        data-toggle="dropdown"
                                        id="chooseProduct"
                                        type="button">
                                        {form1.product1 || "Choose Product"}
                                    </button>
                                    <div className="dropdown-menu">
                                        {["Rummy", "Poker", "Ludo", "Custom Game Development", "Sports Book"].map(item => (
                                            <span key={item} className="dropdown-item"
                                                onClick={() => handleChange1("product1", item)}>
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative mb-3">
                                <div className="position-relative w-100">
                                    <span className="position-absolute chatform_flied_label left-0 h-100 d-flex align-items-center">
                                        <i className="fas fa-envelope" />
                                    </span>
                                    <input
                                        className="chatform_flied_input mb-0 chatform_flied_textinput"
                                        id="emailChat"
                                        name=""
                                        placeholder="Your email"
                                        type="email"
                                        value={form1.email1}
                                        onChange={(e) => handleChange1("email1", e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="hero-form-filed hero-form-filed-modal w-100 mb-0 hero-form-filed-border">
                                <div
                                    aria-labelledby="dropdownMenuButton"
                                    className="dropdown-menu dropdown-menu-btn-text d-flex position-static w-100 border">
                                    <a
                                        className={`dropdown-item ${activeItem1 === 'mobile' ? 'active-item' : ''}`}
                                        href="javascript:void(0);"
                                        onClick={() => { setActiveItem1('mobile'); }}>
                                        <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z" />
                                        </svg>{" "}
                                        Phone
                                    </a>
                                    <a className={`dropdown-item ${activeItem1 === 'Telegram' ? 'active-item' : ''}`}
                                        href="javascript:void(0);"
                                        onClick={() => { setActiveItem1('Telegram'); }}>
                                        <svg
                                            style={{
                                                fill: "#0088cc",
                                                width: "20px",
                                            }}
                                            viewBox="0 0 496 512"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                                        </svg>{" "}
                                        Telegram
                                    </a>
                                    <a className={`dropdown-item ${activeItem1 === 'Skype' ? 'active-item' : ''}`}
                                        href="javascript:void(0);"
                                        onClick={() => { setActiveItem1('Skype'); }}>
                                        <i
                                            className="fab fa-skype"
                                            style={{
                                                color: "#00aff0",
                                            }}
                                        />{" "}
                                        Skype
                                    </a>
                                    <a className={`dropdown-item ${activeItem1 === 'Whatsapp' ? 'active-item' : ''}`}
                                        href="javascript:void(0);"
                                        onClick={() => { setActiveItem1('Whatsapp'); }}>
                                        <i
                                            className="fab fa-whatsapp"
                                            style={{
                                                color: "#57bb63",
                                            }}
                                        />{" "}
                                        Whatsapp
                                    </a>
                                </div>
                            </div>
                            <div className="w-100 d-flex hero-block-filed hero-block-filed-border-dev mb-3">
                                <div className="w-100 flex-column">
                                    <div className="d-flex country_code_dropdown_block position-relative">
                                        <div className="dropdown country_code_dropdown w-100  hero-form-filed">
                                            {activeItem1 === 'mobile' && <button
                                                aria-expanded="false"
                                                aria-haspopup="true"
                                                className="btn btn-secondary dropdown-toggle country_code_flied country_code_flied_active"
                                                data-toggle="dropdown"
                                                id="dropdownMenuButton_chat"
                                                type="button">
                                                <img
                                                    alt="Flag"
                                                    className="country-flag"
                                                    id="selectedFlag_chat"
                                                    src={`https://flagcdn.com/w320/${selectedCountry.code.toLowerCase()}.png`}
                                                />{" "}
                                                <span className="selectedCode_chat" id="selectedCode_chat">
                                                    {selectedCountry.dial_code}
                                                </span>
                                            </button>}
                                            <div
                                                aria-labelledby="dropdownMenuButton_chat"
                                                className="dropdown-menu"
                                                id="countryCodeDropdown_chat">
                                                {countries?.map((country) => (
                                                    <a
                                                        key={country.code}
                                                        className="dropdown-item"
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setSelectedCountry(country);
                                                        }}
                                                    >
                                                        <img
                                                            src={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
                                                            alt={country.code}
                                                            className="country-flag"
                                                        />
                                                        <span data-code={country.dial_code}>{country.dial_code}</span>
                                                    </a>
                                                ))}
                                            </div>
                                            <input
                                                className="hero_numb_input mb-0"
                                                id="mob_number_chat"
                                                name=""
                                                placeholder={
                                                    activeItem1 === 'mobile' ? 'Phone Number' :
                                                        activeItem1 === 'Telegram' ? 'Telegram Account' :
                                                            activeItem1 === 'Email' ? 'Email ID' :
                                                                activeItem1 === 'Skype' ? 'Skype Account' :
                                                                    activeItem1 === 'Whatsapp' ? 'Whatsapp Account' : ""
                                                }
                                                style={{
                                                    paddingLeft: "0",
                                                }}
                                                type="text"
                                                value={form1.mob_number1}
                                                onChange={(e) => handleChange1("mob_number1", e.target.value)}
                                            />
                                            <input
                                                className="hidden_chat_input m-0"
                                                defaultValue="mobile"
                                                id="hidden_chat_id"
                                                name=""
                                                type="hidden"
                                            />
                                            <div className="input_icon_option">
                                                {activeItem1 === "Whatsapp" ? (
                                                    <>
                                                        <i className="fab fa-whatsapp" style={{ color: "#57bb63" }} /> Whatsapp
                                                    </>
                                                ) : activeItem1 === "Skype" ? (
                                                    <>
                                                        <i className="fab fa-skype" style={{ color: "#00aff0" }} /> Skype
                                                    </>
                                                ) : activeItem1 === "Telegram" ? (
                                                    <>
                                                        <svg
                                                            style={{ fill: "#0088cc", width: "20px" }}
                                                            viewBox="0 0 496 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                                                        </svg>{" "}
                                                        Telegram
                                                    </>
                                                ) : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100 text-center">
                                <button
                                    className="contact_btn contact_btn_next border-0"
                                    onClick={handleSubmit1}
                                    type="button"
                                    disabled={loading1}>
                                    <p
                                        className="m-0 spinner-submit-btn"
                                        style={{
                                            display: "none",
                                        }}>
                                        <span className="" />
                                    </p>
                                    {loading1 ? "Sending..." : "Try Demo"}

                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
