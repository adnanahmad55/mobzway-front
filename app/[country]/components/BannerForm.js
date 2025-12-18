"use client";
import React, { useEffect, useState } from 'react'

export default function BannerForm() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({
        dial_code: "+91",
        code: "IN",
    });

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [loading2, setLoading2] = useState(false);
    const [activeItem2, setActiveItem2] = useState('mobile');

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

    const handleSubmit2 = async () => {
        if (!name.trim()) return alert("Name cannot be empty");
        if (!mobile.trim()) return alert("Mobile cannot be empty");

        const Source_URL = window.location.href;
        const lead_source = Source_URL.split("//")[1]?.split(".")[0]; // domain extract

        const finalMobile = `${selectedCountry.dial_code}${mobile}`;

        const postData = {
            fname: name,
            mob_number: finalMobile,
            Source_URL,
            lead_source,
            contact_type: activeItem2
        };

        try {
            setLoading2(true);

            const res = await axios.post(
                "https://crm-api.mobzway.com:2083/create-lead",
                postData
            );

            console.log("Response:", res.data);

            // reset
            setName("");
            setMobile("");
            setLoading2(false);

            window.location.href = "https://mobzway.com/thank-you/";

        } catch (err) {
            console.log(err);
            setLoading2(false);
            alert("Something went wrong");
        }
    };

    return (
        <div className="w-100 d-flex hero-block-filed hero-block-filed-inner">
            <input
                type="text"
                id="freeConName"
                className="hero_name_input"
                placeholder="Name"
                name=""
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <div className="hero-form-filed">
                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >

                        {activeItem2 === "Whatsapp" ? (
                            <>
                                <i className="fab fa-whatsapp" style={{ color: "#57bb63" }} /> Whatsapp
                            </>
                        ) : activeItem2 === "Skype" ? (
                            <>
                                <i className="fab fa-skype" style={{ color: "#00aff0" }} /> Skype
                            </>
                        ) : activeItem2 === "Telegram" ? (
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
                        ) : (
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z" />
                                </svg>{" "}
                                Phone
                            </>
                        )}


                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="javascript:void(0);"
                            onClick={() => { setActiveItem2('mobile'); }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z" />
                            </svg>{" "}
                            Phone
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);"
                            onClick={() => { setActiveItem2('Email'); }}>
                            <i
                                className="fa fa-envelope"
                                style={{ color: "#32aaf7", fontSize: 20 }}
                            />{" "}
                            Email
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);"
                            onClick={() => { setActiveItem2('Telegram'); }}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 496 512"
                                style={{ fill: "#0088cc", width: 20 }}
                            >
                                <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                            </svg>{" "}
                            Telegram
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);"
                            onClick={() => { setActiveItem2('Skype'); }}>
                            <i className="fab fa-skype" style={{ color: "#00aff0" }} /> Skype
                        </a>
                        <a className="dropdown-item" href="javascript:void(0);"
                            onClick={() => { setActiveItem2('Whatsapp'); }}>
                            <i className="fab fa-whatsapp" style={{ color: "#57bb63" }} />{" "}
                            Whatsapp
                        </a>
                    </div>
                </div>
                {/* <input type="text" value="+91" class="country_code_flied" name=""> */}
                {activeItem2 === 'mobile' && <div className="dropdown country_code_dropdown country_code_dropdown_banner_block w-100  hero-form-filed country_code_flied">
                    <button
                        className="btn btn-secondary country_code_flied_active"
                        type="button"
                        id="dropdownMenuButtonBanner"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <img id="selectedFlag_hero" className="country-flag" alt="Flag"
                            src={`https://flagcdn.com/w320/${selectedCountry.code.toLowerCase()}.png`} />{" "}
                        <span
                            id="selectedCode_hero"
                            className="selectedCode_chat selectedCode_hero_chat"
                        >
                            {selectedCountry.dial_code}
                        </span>
                    </button>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButtonBanner"
                        id="countryCodeDropdown"
                    >
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
                    <div className="input_country_code_cta" />
                </div>}
                <input
                    type="text"
                    id="freecon_num"
                    className="hero_numb_input"
                    style={{ paddingLeft: activeItem2 === 'mobile' ? '0' : '10px' }}
                    placeholder={
                        activeItem2 === 'mobile' ? 'Phone Number' :
                            activeItem2 === 'Telegram' ? 'Telegram Account' :
                                activeItem2 === 'Email' ? 'Email ID' :
                                    activeItem2 === 'Skype' ? 'Skype Account' :
                                        activeItem2 === 'Whatsapp' ? 'Whatsapp Account' : ""
                    }
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                />
                <input
                    type="hidden"
                    id="hidden_hero_id"
                    className="hidden_chat_input"
                    name=""
                    defaultValue="mobile"
                />
            </div>
            <button
                className="contact_btn contact_btn_hero"
                type="button"
            // onclick="freeConsultation()"
            >
                <p className="m-0 spinner-submit-btn" style={{ display: "none" }}
                    onClick={handleSubmit2} disabled={loading2}>
                    <span className="" />
                </p>
                {loading2 ? "Submitting..." : "Free consultation"}
            </button>
        </div>

    )
}
