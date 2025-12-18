"use client";
import React from 'react'

export default function LiveChat() {
    const openChat = () => {
    if (typeof window !== "undefined" && window.zohoReady) {
        window.$zoho.salesiq.floatwindow.visible("show");
    } else {
        console.log("Zoho not ready yet");
    }
};

    return (
        <>

            <div key="1" className="dropdown dropdown_chat_option d-block d-md-none">
                <button
                    aria-expanded="false"
                    className="btn dropdown-toggle"
                    data-toggle="dropdown"
                    type="button">
                    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
                    </svg>
                </button>
                <div className="dropdown-menu">
                    <p className="d-block d-md-none">How would you like to contact us?</p>
                    <a
                        className="dropdown-item"
                        href="#"
                        id="chat-button"
                        onClick={(e) => {
                            e.preventDefault(); // default anchor behavior stop
                            openChat();
                        }}
                    >
                        <svg
                            style={{
                                fill: "#000",
                            }}
                            viewBox="0 0 576 512"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M284 224.8a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 284 224.8zm-110.5 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 173.6 224.8zm220.9 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 394.5 224.8zm153.8-55.3c-15.5-24.2-37.3-45.6-64.7-63.6-52.9-34.8-122.4-54-195.7-54a406 406 0 0 0 -72 6.4 238.5 238.5 0 0 0 -49.5-36.6C99.7-11.7 40.9 .7 11.1 11.4A14.3 14.3 0 0 0 5.6 34.8C26.5 56.5 61.2 99.3 52.7 138.3c-33.1 33.9-51.1 74.8-51.1 117.3 0 43.4 18 84.2 51.1 118.1 8.5 39-26.2 81.8-47.1 103.5a14.3 14.3 0 0 0 5.6 23.3c29.7 10.7 88.5 23.1 155.3-10.2a238.7 238.7 0 0 0 49.5-36.6A406 406 0 0 0 288 460.1c73.3 0 142.8-19.2 195.7-54 27.4-18 49.1-39.4 64.7-63.6 17.3-26.9 26.1-55.9 26.1-86.1C574.4 225.4 565.6 196.4 548.3 169.5zM285 409.9a345.7 345.7 0 0 1 -89.4-11.5l-20.1 19.4a184.4 184.4 0 0 1 -37.1 27.6 145.8 145.8 0 0 1 -52.5 14.9c1-1.8 1.9-3.6 2.8-5.4q30.3-55.7 16.3-100.1c-33-26-52.8-59.2-52.8-95.4 0-83.1 104.3-150.5 232.8-150.5s232.9 67.4 232.9 150.5C517.9 342.5 413.6 409.9 285 409.9z" />
                        </svg>{" "}
                        Live Chat
                    </a>
                    <a
                        className="dropdown-item"
                        href="https://api.whatsapp.com/send?phone=919116005595"
                        target="_blank">
                        <i
                            className="fab fa-whatsapp"
                            style={{
                                color: "#57bb63",
                            }}
                        />{" "}
                        Whatsapp
                    </a>
                    <a
                        className="dropdown-item"
                        href="https://telegram.me/mobzway_tech"
                        target="_blank">
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
                    <a
                        className="dropdown-item"
                        href="https://join.skype.com/invite/e5LexJ66xcn0"
                        target="_blank">
                        <i
                            className="fab fa-skype"
                            style={{
                                color: "#00aff0",
                            }}
                        />{" "}
                        Skype
                    </a>
                    <a className="dropdown-item" href="tel:+91-7878-044-044">
                        <i
                            className="fas fa-phone-alt"
                            style={{
                                color: "#0066cc",
                            }}
                        />
                        Phone
                    </a>
                    <a className="dropdown-item d-block d-md-none" href="javascript:void(0);">
                        <i
                            className="fa fa-angle-left"
                            style={{
                                marginRight: "15px",
                            }}
                        />{" "}
                        Cancel
                    </a>
                </div>
            </div>

            {/* Desktop view Chat */}
            <div className="dropdown dropdown_chat_option dropdown_chat_option_hover d-none d-md-block">
                <button
                    aria-expanded="false"
                    className="btn dropdown-toggle dropdown-toggle-hover"
                    data-toggle="dropdown"
                    type="button"
                >
                    <svg
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
                    </svg>
                </button>
                <div className="dropdown-menu">
                    <p className="d-block d-md-none">
                        How would you like to contact us?
                    </p>
                    <a
                        className="dropdown-item"
                        href="#"
                        id="chat-button"
                        onclick="$zoho.salesiq.floatwindow.visible('show')"
                    >
                        <svg
                            style={{
                                fill: '#000'
                            }}
                            viewBox="0 0 576 512"
                            onClick={(e) => {
                                e.preventDefault(); // default anchor behavior stop
                                openChat();
                            }}
                        >
                            <path d="M284 224.8a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 284 224.8zm-110.5 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 173.6 224.8zm220.9 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 394.5 224.8zm153.8-55.3c-15.5-24.2-37.3-45.6-64.7-63.6-52.9-34.8-122.4-54-195.7-54a406 406 0 0 0 -72 6.4 238.5 238.5 0 0 0 -49.5-36.6C99.7-11.7 40.9 .7 11.1 11.4A14.3 14.3 0 0 0 5.6 34.8C26.5 56.5 61.2 99.3 52.7 138.3c-33.1 33.9-51.1 74.8-51.1 117.3 0 43.4 18 84.2 51.1 118.1 8.5 39-26.2 81.8-47.1 103.5a14.3 14.3 0 0 0 5.6 23.3c29.7 10.7 88.5 23.1 155.3-10.2a238.7 238.7 0 0 0 49.5-36.6A406 406 0 0 0 288 460.1c73.3 0 142.8-19.2 195.7-54 27.4-18 49.1-39.4 64.7-63.6 17.3-26.9 26.1-55.9 26.1-86.1C574.4 225.4 565.6 196.4 548.3 169.5zM285 409.9a345.7 345.7 0 0 1 -89.4-11.5l-20.1 19.4a184.4 184.4 0 0 1 -37.1 27.6 145.8 145.8 0 0 1 -52.5 14.9c1-1.8 1.9-3.6 2.8-5.4q30.3-55.7 16.3-100.1c-33-26-52.8-59.2-52.8-95.4 0-83.1 104.3-150.5 232.8-150.5s232.9 67.4 232.9 150.5C517.9 342.5 413.6 409.9 285 409.9z" />
                        </svg>
                        {' '}Live Chat
                    </a>
                    <a
                        className="dropdown-item"
                        href="https://api.whatsapp.com/send?phone=919116005595"
                        target="_blank"
                    >
                        <i
                            className="fab fa-whatsapp"
                            style={{
                                color: '#57bb63'
                            }}
                        />
                        {' '}Whatsapp
                    </a>
                    <a
                        className="dropdown-item"
                        href="https://telegram.me/mobzway_tech"
                        target="_blank"
                    >
                        <svg

                            style={{
                                fill: '#0088cc',
                                width: '20px'
                            }}
                            viewBox="0 0 496 512"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="                M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9                134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4                1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5                68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9                9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6                83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                        </svg>
                        Telegram
                    </a>
                    <a
                        className="dropdown-item"
                        href="https://join.skype.com/invite/e5LexJ66xcn0"
                        target="_blank"
                    >
                        <i
                            className="fab fa-skype"
                            style={{
                                color: '#00aff0'
                            }}
                        />
                        {' '}Skype
                    </a>
                    <a
                        className="dropdown-item"
                        href="tel:+91-7878-044-044"
                    >
                        <i
                            className="fas fa-phone-alt"
                            style={{
                                color: '#0066cc'
                            }}
                        />
                        Phone
                    </a>
                    <a
                        className="dropdown-item d-block d-md-none"
                        href="javascript:void(0);"
                    >
                        <i
                            className="fa fa-angle-left"
                            style={{
                                marginRight: '15px'
                            }}
                        />
                        {' '}Cancel
                    </a>
                </div>
            </div>
        </>
    )
}
